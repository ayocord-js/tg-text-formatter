export class TelegramMarkdownParser {
    /**
     * Check if string has bold markdown or not
     */
    static isBold(text: string): boolean {
        const regex = /\*\*(.*?)\*\*/;
        return regex.test(text);
    }
    
    /**
     * @param markdown if enabled will return ["**string**"] else ["string"]
     */
    static parseBold(text: string, markdown?: boolean) {
        const regex = /\*\*(.*?)\*\*/;
        return text.matchAll(regex)
    }

    static isCursive(text: string) {}
    static parseCursive(text: string) {}

    static isBoldCursive(text: string) {}
    static parseBoldCursive(text: string) {}

    static isMonospace(text: string) {}
    static parseMonospace(text: string) {}

    static isCode(text: string) {}
    static parseCode(text: string) {}

    static isSpoiler(text: string) {}
    static parseSpoiler(text: string) {}
}

export const {
    isBold,
    parseBold,
    isCursive,
    parseCursive,
    isBoldCursive,
    parseBoldCursive,
    isCode,
    parseCode,
    isMonospace,
    parseMonospace,
    isSpoiler,
    parseSpoiler,
} = TelegramMarkdownParser;
