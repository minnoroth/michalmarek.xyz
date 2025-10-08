"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Code, Heart, type LucideIcon, User } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { Language } from "@/config/languages";
import type { CardSection } from "@/config/sections";
import type { Dictionary } from "@/dictionaries/types";
import { cn } from "@/lib/utils";
import { LanguageSwitch } from "./LanguageSwitch";
import { CardInfo } from "./sections/CardInfo";
import { SoftSkills } from "./sections/SoftSkills";
import { TechSkills } from "./sections/TechSkills";
import { ThemeSwitch } from "./ThemeSwitch";

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

	const updateSection = (section: CardSection) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("section", section);
		router.push(`/${locale}?${params.toString()}`);
		setCurrentSection(section);
	};

	const renderSection = () => {
		switch (currentSection) {
			case "about":
				return <CardInfo dictionary={dictionary} />;
			case "tech":
				return <TechSkills dictionary={dictionary} />;
			case "soft":
				return <SoftSkills dictionary={dictionary} />;
			default:
				return <CardInfo dictionary={dictionary} />;
		}
	};

	const NavButton = ({
		section,
		icon: Icon,
	}: {
		section: CardSection;
		icon: LucideIcon;
	}) => (
		<button
			type="button"
			onClick={() => updateSection(section)}
			className={cn(
				"p-2 rounded-lg transition-all duration-200 w-8 h-8 flex items-center justify-center",
				"hover:scale-110",
				currentSection === section
					? "bg-primary text-primary-foreground shadow-lg"
					: "hover:bg-muted",
			)}
			aria-label={section}
		>
			<Icon className="h-4 w-4 transition-transform duration-200" />
		</button>
	);

	return (
		<Card className="w-full max-w-md mx-auto relative">
			<div className="absolute bottom-4 left-4 md:left-auto md:bottom-auto md:top-2 md:right-12">
				<LanguageSwitch currentLocale={locale} />
			</div>

			<div className="absolute bottom-4 right-4 md:bottom-auto md:top-2">
				<ThemeSwitch />
			</div>

			<CardContent className="p-6 pb-16 md:pb-6 md:pr-16">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentSection}
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: -20 }}
						transition={{
							duration: 0.3,
							ease: "easeOut",
						}}
					>
						{renderSection()}
					</motion.div>
				</AnimatePresence>
			</CardContent>

			<div className="absolute flex md:flex-col gap-2 bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-4">
				<motion.div
					className="flex md:flex-col gap-2"
					initial={false}
					animate={{ opacity: 1 }}
					transition={{ staggerChildren: 0.1 }}
				>
					<NavButton section="about" icon={User} />
					<NavButton section="tech" icon={Code} />
					<NavButton section="soft" icon={Heart} />
				</motion.div>
			</div>
		</Card>
	);
}
