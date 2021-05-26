export interface Country {
    code: string;
    emoji: string;
    emojiU: string;
    name: string;
    capital: string;
    currency: string;
}

export interface Continent {
    name: string;
    code: string;
    countries: Array<Country>;
}