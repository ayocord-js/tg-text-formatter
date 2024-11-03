export class TelegramMarkdown {

    static bold(text: string): string {
        return `**${text}**`;
    }

    static cursive(text: string): string {
        return `__${text}__`;
    }

    static crossedOut(text: string): string {
        return `~~${text}~~`;
    }

    static monospace(text: string): string {
        return `\`${text}\``;
    }

    static code(text: string, lang?: string): string {
        return `\`\`\`${lang || ""}\n${text}\`\`\``
    }

    static spoiler(text: string) {
        return `||${text}||`
    }

    static silent(text: string) {
        return this.spoiler(text)
    }
}

export const { bold, cursive, crossedOut, monospace, spoiler, silent } = TelegramMarkdown;
