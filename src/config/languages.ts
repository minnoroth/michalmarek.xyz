export const LANGUAGES = ['cs', 'en'] as const;

export type Language = typeof LANGUAGES[number];

export const DEFAULT_LANGUAGE: Language = 'cs';

export const isValidLanguage = (language: string): language is Language => {
    return LANGUAGES.includes(language as Language);
}