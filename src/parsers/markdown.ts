import { BaseParser } from "./abstractions";

export class TelegramMarkdownParser extends BaseParser {
    // Bold
    static isBold(text: string): boolean {
        return this.is(text, /\*\*(.*?)\*\*/);
    }

    static parseBold(text: string, markdown = false): string[] {
        return this.parse(text, /\*\*(.*?)\*\*/g, markdown);
    }

    // Cursive
    static isCursive(text: string): boolean {
        return this.is(text, /__(.*?)__/);
    }

    static parseCursive(text: string, markdown = false): string[] {
        return this.parse(text, /__(.*?)__/g, markdown);
    }

    // Bold and Cursive
    static isBoldCursive(text: string): boolean {
        return this.is(text, /\*\*__(.*?)__\*\*/);
    }

    static parseBoldCursive(text: string, markdown = false): string[] {
        return this.parse(text, /\*\*\_\_(.*?)\_\_\*\*/g, markdown);
    }

    // Monospace
    static isMonospace(text: string): boolean {
        return this.is(text, /\`(.*?)\`/);
    }

    static parseMonospace(text: string, markdown = false): string[] {
        return this.parse(text, /\`(.*?)\`/g, markdown);
    }

    // Code block
    static isCode(text: string): boolean {
        return this.is(text, /\`\`\`(.*?)\`\`\`/g);
    }

    static parseCode(text: string, markdown = false): string[] {
        return this.parse(text, /\`\`\`(.*?)\`\`\`/g, markdown);
    }

    // Spoiler
    static isSpoiler(text: string): boolean {
        return this.is(text, /\|\|(.*?)\|\|/g);
    }

    static parseSpoiler(text: string, markdown = false): string[] {
        return this.parse(text, /\|\|(.*?)\|\|/g, markdown);
    }

    // Link
    static isLink(text: string) {
        return this.is(text, /\[.*?\]\(.*?\)/g)
    }

    static parseLink(text: string) {
        return this.is(text, /\[.*?\]\(.*?\)/g)
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
