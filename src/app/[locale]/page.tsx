import { Language, isValidLanguage } from '@/config/languages';
import { getDictionary } from '@/dictionaries';
import { BusinessCard } from '@/components/BusinessCard';
import { notFound } from 'next/navigation';
import { CardSection, CARD_SECTIONS } from '@/config/sections';

type Props = {
  params: {
    locale: Language;
  };
  searchParams: {
    section?: CardSection;
  };
};

export default function Home({ params: { locale }, searchParams }: Props) {
  if (!isValidLanguage(locale)) {
    return notFound();
  }

  const dictionary = getDictionary(locale);
  const initialSection = CARD_SECTIONS.includes(searchParams.section as CardSection) 
    ? searchParams.section as CardSection 
    : 'about';

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <section className="container mx-auto px-4 py-16">
        <BusinessCard 
          dictionary={dictionary} 
          locale={locale} 
          initialSection={initialSection}
        />
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: 'cs' }, { locale: 'en' }];
}
