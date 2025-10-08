"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<button
			type="button"
			onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
			className={cn(
				"p-2 rounded-lg transition-all duration-200 w-8 h-8 flex items-center justify-center",
				"hover:scale-110 hover:bg-muted",
			)}
			aria-label="Toggle theme"
		>
			{currentTheme === "dark" ? (
				<Sun className="h-4 w-4 transition-transform duration-200" />
			) : (
				<Moon className="h-4 w-4 transition-transform duration-200" />
			)}
		</button>
	);
}
