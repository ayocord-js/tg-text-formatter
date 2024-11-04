export class TelegramMarkdownParser {
    /**
     * Generic method to check if string contains a specific markdown format
     */
    private static hasMarkdown(text: string, regex: RegExp): boolean {
        return regex.test(text);
    }

    /**
     * Generic method to parse a specific markdown format
     * @param text - The input text to parse
     * @param regex - Regular expression to match markdown format
     * @param markdown - If true, returns markdown syntax; if false, returns only content
     */
    private static parseMarkdown(text: string, regex: RegExp, markdown = false): string[] {
        const matches = [...text.matchAll(regex)];
        return markdown ? matches.map((s) => s[0]) : matches.filter(s => s[1].length).map((s) => s[1]);
    }

    // Bold
    static isBold(text: string): boolean {
        return this.hasMarkdown(text, /\*\*(.*?)\*\*/);
    }

    static parseBold(text: string, markdown = false): string[] {
        return this.parseMarkdown(text, /\*\*(.*?)\*\*/g, markdown);
    }

    // Cursive
    static isCursive(text: string): boolean {
        return this.hasMarkdown(text, /__(.*?)__/);
    }

    static parseCursive(text: string, markdown = false): string[] {
        return this.parseMarkdown(text, /__(.*?)__/g, markdown);
    }

    // Bold and Cursive
    static isBoldCursive(text: string): boolean {
        return this.hasMarkdown(text, /\*\*__(.*?)__\*\*/);
    }

    static parseBoldCursive(text: string, markdown = false): string[] {
        return this.parseMarkdown(text, /\*\*\_\_(.*?)\_\_\*\*/g, markdown);
    }

    // Monospace
    static isMonospace(text: string): boolean {
        return this.hasMarkdown(text, /\`(.*?)\`/);
    }

    static parseMonospace(text: string, markdown = false): string[] {
        return this.parseMarkdown(text, /\`(.*?)\`/g, markdown);
    }

    // Code block
    static isCode(text: string): boolean {
        return this.hasMarkdown(text, /\`\`\`(.*?)\`\`\`/);
    }

    static parseCode(text: string, markdown = false): string[] {
        return this.parseMarkdown(text, /\`\`\`(.*?)\`\`\`/g, markdown);
    }

    // Spoiler
    static isSpoiler(text: string): boolean {
        return this.hasMarkdown(text, /\|\|(.*?)\|\|/);
    }

    static parseSpoiler(text: string, markdown = false): string[] {
        return this.parseMarkdown(text, /\|\|(.*?)\|\|/g, markdown);
    }
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
