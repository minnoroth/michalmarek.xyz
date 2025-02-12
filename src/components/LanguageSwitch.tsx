'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Language } from '@/config/languages';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

type LanguageSwitchProps = {
    currentLocale: Language;
};

export function LanguageSwitch({ currentLocale }: LanguageSwitchProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const switchLanguage = () => {
        const newLocale = currentLocale === 'cs' ? 'en' : 'cs';
        const params = new URLSearchParams(searchParams.toString());
        const newPathname = `/${newLocale}?${params.toString()}`;
        router.push(newPathname);
    };

    return (
        <button
            onClick={switchLanguage}
            className={cn(
                "p-2 rounded-lg transition-all duration-200 w-8 h-8 flex items-center justify-center",
                "hover:scale-110 hover:bg-muted"
            )}
            aria-label={`Switch to ${currentLocale === 'cs' ? 'English' : 'Czech'}`}
        >
            <Globe className="h-4 w-4 transition-transform duration-200" />
        </button>
    );
} 