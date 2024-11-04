import { BaseParser } from "./abstractions";

export class TelegramMarkdownParser extends BaseParser {
    static getMethods() {
        return {
            isBold: this.isBold.bind(this),
            parseBold: this.parseBold.bind(this),
            isCursive: this.isCursive.bind(this),
            parseCursive: this.parseCursive.bind(this),
            isMonospace: this.isMonospace.bind(this),
            parseMonospace: this.parseMonospace.bind(this),
            isCode: this.isCode.bind(this),
            parseCode: this.parseCode.bind(this),
            isSpoiler: this.isSpoiler.bind(this),
            parseSpoiler: this.parseSpoiler.bind(this),
            isLink: this.isLink.bind(this),
            parseLink: this.parseLink.bind(this),
        };
    }

    // Bold
    static isBold(text: string): boolean {
        return this.is(text, /\*(.*?)\*/);
    }

    static parseBold(text: string, markdown = false): string[] {
        return this.parse(text, /\*(.*?)\*/g, markdown);
    }

    // Cursive
    static isCursive(text: string): boolean {
        return this.is(text, /\_(.*?)\_/);
    }

    static isUnderline(text: string) {
        return this.is(text, /\_\_(.*?)\_\_/);
    }
    static parseUnderline(text: string, markdown = false) {
        return this.parse(text, /\_\_(.*?)\_\_/, markdown);
    }

    static parseCursive(text: string, markdown = false): string[] {
        return this.parse(text, /\_(.*?)\_/g, markdown);
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
}

export const {
    isBold,
    parseBold,
    isCursive,
    isMonospace,
    parseMonospace,
    isCode,
    parseCode,
    isSpoiler,
    parseSpoiler,
    isLink,
    parseLink,
} = TelegramMarkdownParser.getMethods();
