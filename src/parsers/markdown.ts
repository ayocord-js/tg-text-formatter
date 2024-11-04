import { BaseParser } from "./abstractions";

export class TelegramMarkdownParser extends BaseParser {
    static getMethods() {
        return {
            isBold: this.isBold.bind(this),
            parseBold: this.parseBold.bind(this),
            isCursive: this.isCursive.bind(this),
            parseCursive: this.parseCursive.bind(this),
            isBoldCursive: this.isBoldCursive.bind(this),
            parseBoldCursive: this.parseBoldCursive.bind(this),
            isMonospace: this.isMonospace.bind(this),
            parseMonospace: this.parseMonospace.bind(this),
            isCode: this.isCode.bind(this),
            parseCode: this.parseCode.bind(this),
            isSpoiler: this.isSpoiler.bind(this),
            parseSpoiler: this.parseSpoiler.bind(this),
            isLink: this.isLink.bind(this),
            parseLink: this.parseLink.bind(this),
            isMarkdown: this.isMarkdown.bind(this),
        };
    }

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
        return this.is(text, /\[.*?\]\(.*?\)/g);
    }

    static parseLink(text: string) {
        return this.is(text, /\[.*?\]\(.*?\)/g);
    }

    static isMarkdown(text: string): boolean {
        const regex =
            /\*\*(.*?)\*\*|__(.*?)__|\*\*\_\_(.*?)\_\_\*\*|\`(.*?)\`|\`\`\`(.*?)\`\`\`|\|\|(.*?)\|\||\[.*?\]\(.*?\)/;
        return this.is(text, regex);
    }
}

export const {
    isBold,
    parseBold,
    isCursive,
    parseCursive,
    isBoldCursive,
    parseBoldCursive,
    isMonospace,
    parseMonospace,
    isCode,
    parseCode,
    isSpoiler,
    parseSpoiler,
    isLink,
    parseLink,
    isMarkdown
} = TelegramMarkdownParser.getMethods();
