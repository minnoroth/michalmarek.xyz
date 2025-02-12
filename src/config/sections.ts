export const CARD_SECTIONS = ['about', 'tech', 'soft'] as const;
export type CardSection = typeof CARD_SECTIONS[number];

export const getNextSection = (current: CardSection, direction: 'next' | 'prev'): CardSection => {
    const currentIndex = CARD_SECTIONS.indexOf(current);
    if (direction === 'next') {
        return CARD_SECTIONS[(currentIndex + 1) % CARD_SECTIONS.length];
    }
    return CARD_SECTIONS[(currentIndex - 1 + CARD_SECTIONS.length) % CARD_SECTIONS.length];
}; 