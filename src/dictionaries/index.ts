import type { Language } from "@/config/languages";
import cs from "./locales/cs.json";
import en from "./locales/en.json";

const dictionaries = {
	cs,
	en,
} as const;

export const getDictionary = (locale: Language) => {
	return dictionaries[locale];
};
