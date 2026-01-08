"use client";

import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Language } from "@/config/languages";
import type { CardSection } from "@/config/sections";
import type { Dictionary } from "@/dictionaries/types";
import { cn } from "@/lib/utils";
import { LanguageSwitch } from "./LanguageSwitch";
import { CardInfo } from "./sections/CardInfo";
import { TechSkills } from "./sections/TechSkills";
import { ThemeSwitch } from "./ThemeSwitch";

// Fixed card dimensions based on real business card ratio (85.6mm × 54mm)
// Width: 480px, Height: 480 / 1.585 ≈ 303px
const CARD_WIDTH = 480;
const CARD_HEIGHT = 303;

export function BusinessCard({
	dictionary,
	locale,
	initialSection,
}: {
	dictionary: Dictionary;
	locale: Language;
	initialSection: CardSection;
}) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [currentSection, setCurrentSection] =
		useState<CardSection>(initialSection);

	// Sync flip state with current section
	const isFlipped = currentSection === "tech";

	useEffect(() => {
		// Update current section when URL changes
		const sectionParam = searchParams.get("section") as CardSection;
		if (sectionParam && (sectionParam === "about" || sectionParam === "tech")) {
			setCurrentSection(sectionParam);
		}
	}, [searchParams]);

	const updateSection = (section: CardSection) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("section", section);
		router.push(`/${locale}?${params.toString()}`);
		setCurrentSection(section);
	};

	const handleFlip = () => {
		// When flipping to back, show tech skills
		updateSection("tech");
	};

	const handleFlipBack = () => {
		// When flipping back, show about section
		updateSection("about");
	};

	return (
		<div
			className="card-3d-wrapper mx-auto"
			style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
		>
			<div
				className={cn("card-3d w-full h-full relative", isFlipped && "flipped")}
			>
				{/* Front of the card - About section */}
				<div
					className={cn(
						"card-face card-front absolute inset-0",
						"bg-card text-card-foreground",
						"rounded-sm border border-border/30",
						"paper-texture paper-edge",
					)}
					style={{
						boxShadow: "var(--card-shadow)",
					}}
				>
					{/* Language switch */}
					<div className="absolute top-3 right-12 z-10">
						<LanguageSwitch currentLocale={locale} />
					</div>

					{/* Theme switch */}
					<div className="absolute top-3 right-3 z-10">
						<ThemeSwitch />
					</div>

					{/* Flip button */}
					<button
						type="button"
						onClick={handleFlip}
						className={cn(
							"absolute bottom-3 right-3 z-10",
							"p-2 rounded transition-all duration-200",
							"hover:bg-muted hover:scale-110",
							"text-muted-foreground hover:text-foreground",
						)}
						aria-label="Flip card"
					>
						<RotateCcw className="h-4 w-4" />
					</button>

					{/* Content area - Always About section on front */}
					<div className="h-full p-6 pr-16 flex flex-col justify-center overflow-hidden">
						<AnimatePresence mode="wait">
							<motion.div
								key="about"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{
									duration: 0.25,
									ease: "easeOut",
								}}
							>
								<CardInfo dictionary={dictionary} />
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				{/* Back of the card - Tech Skills section */}
				<div
					className={cn(
						"card-face card-back absolute inset-0",
						"bg-card text-card-foreground",
						"rounded-sm border border-border/30",
						"paper-texture paper-edge",
					)}
					style={{
						boxShadow: "var(--card-shadow)",
					}}
				>
					{/* Language switch */}
					<div className="absolute top-3 right-12 z-10">
						<LanguageSwitch currentLocale={locale} />
					</div>

					{/* Theme switch */}
					<div className="absolute top-3 right-3 z-10">
						<ThemeSwitch />
					</div>

					{/* Flip back button */}
					<button
						type="button"
						onClick={handleFlipBack}
						className={cn(
							"absolute bottom-3 right-3 z-10",
							"p-2 rounded transition-all duration-200",
							"hover:bg-muted hover:scale-110",
							"text-muted-foreground hover:text-foreground",
						)}
						aria-label="Flip back"
					>
						<RotateCcw className="h-4 w-4" />
					</button>

					{/* Content area - Tech Skills */}
					<div className="h-full p-6 pr-16 flex flex-col justify-center overflow-hidden">
						<AnimatePresence mode="wait">
							<motion.div
								key="tech"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{
									duration: 0.25,
									ease: "easeOut",
								}}
							>
								<TechSkills dictionary={dictionary} />
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
}
