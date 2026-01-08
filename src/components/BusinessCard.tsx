"use client";

import { Undo2 } from "lucide-react";
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
	const [isIntroAnimating, setIsIntroAnimating] = useState(false);

	// Sync flip state with current section
	const isFlipped = currentSection === "tech";

	useEffect(() => {
		// Update current section when URL changes
		const sectionParam = searchParams.get("section") as CardSection;
		if (sectionParam && (sectionParam === "about" || sectionParam === "tech")) {
			setCurrentSection(sectionParam);
		}
	}, [searchParams]);

	useEffect(() => {
		if (initialSection !== "about") {
			setIsIntroAnimating(false);
			return;
		}

		let shouldAnimate = true;
		try {
			const storageKey = "cardIntroPlayed";
			if (sessionStorage.getItem(storageKey) === "true") {
				shouldAnimate = false;
			} else {
				sessionStorage.setItem(storageKey, "true");
			}
		} catch {
			shouldAnimate = true;
		}

		if (!shouldAnimate) {
			setIsIntroAnimating(false);
			return;
		}

		setIsIntroAnimating(true);

		const timer = window.setTimeout(() => {
			setIsIntroAnimating(false);
		}, 1000);

		return () => window.clearTimeout(timer);
	}, [initialSection]);

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

	const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (isIntroAnimating) {
			return;
		}

		const target = event.target as HTMLElement;
		if (target.closest("button, a, [data-no-flip]")) {
			return;
		}

		if (isFlipped) {
			handleFlipBack();
		} else {
			handleFlip();
		}
	};

	return (
		<div
			className="card-3d-wrapper mx-auto"
			style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
		>
			<div
				className={cn(
					"card-3d w-full h-full relative cursor-pointer group",
					isIntroAnimating && "card-intro",
					isFlipped && "flipped",
				)}
				onClick={handleCardClick}
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

					{/* Flip hint */}
					<div
						className={cn(
							"absolute bottom-3 right-3 z-10 pointer-events-none",
							"p-2 text-muted-foreground/70",
							"group-hover:animate-pulse",
						)}
						aria-hidden="true"
					>
						<Undo2 className="h-4 w-4" />
					</div>

					{/* Content area - Always About section on front */}
					<div className="h-full p-6 pr-16 flex flex-col justify-center overflow-hidden">
						<div>
							<CardInfo dictionary={dictionary} />
						</div>
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

					{/* Flip hint */}
					<div
						className={cn(
							"absolute bottom-3 right-3 z-10 pointer-events-none",
							"p-2 text-muted-foreground/70",
							"group-hover:animate-pulse",
						)}
						aria-hidden="true"
					>
						<Undo2 className="h-4 w-4 rotate-180" />
					</div>

					{/* Content area - Tech Skills */}
					<div className="h-full p-6 pr-16 flex flex-col justify-center overflow-hidden">
						<div>
							<TechSkills dictionary={dictionary} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
