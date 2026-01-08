"use client";

import { Globe } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import type { Language } from "@/config/languages";
import { cn } from "@/lib/utils";

type LanguageSwitchProps = {
	currentLocale: Language;
};

export function LanguageSwitch({ currentLocale }: LanguageSwitchProps) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const switchLanguage = () => {
		const newLocale = currentLocale === "cs" ? "en" : "cs";
		const params = new URLSearchParams(searchParams.toString());
		const newPathname = `/${newLocale}?${params.toString()}`;
		router.push(newPathname);
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		switchLanguage();
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			className={cn(
				"p-2 rounded-lg transition-all duration-200 w-8 h-8 flex items-center justify-center",
				"hover:scale-110 hover:bg-muted",
			)}
			aria-label={`Switch to ${currentLocale === "cs" ? "English" : "Czech"}`}
		>
			<Globe className="h-4 w-4 transition-transform duration-200" />
		</button>
	);
}
