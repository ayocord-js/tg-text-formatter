/**
 * This class using markdown v2
 */
export class TelegramMarkdown {
    /**
     *
     * Returns bold text format
     */
    static bold(text: string): string {
        return `**${text}**`;
    }

    /**
     * Returns ***bold cursive*** text format
     * */
    static boldCursive(text: string): string {
        return `**__${text}__**`;
    }

    /**
     *  Returns *cursive* text format
     */
    static cursive(text: string): string {
        return `__${text}__`;
    }

    /**
     * Returns ~~crossed out~~ text format
     * */
    static crossedOut(text: string): string {
        return `~~${text}~~`;
    }

    /**
     *
     * Returns `monospace` text format
     */
    static monospace(text: string): string {
        return `\`${text}\``;
    }

    /**
     * Returns code text format
     * */
    static code(text: string, lang?: string): string {
        return `\`\`\`${lang || ""}\n${text}\`\`\``;
    }

    /**
     * Returns spoiler text format
     */
    static spoiler(text: string) {
        return `||${text}||`;
    }

    /**
     * Returns link text format
     */
    static link(text: string, link: string) {
        return `[${text}](${link})`;
    }
}

export const { bold, cursive, crossedOut, monospace, spoiler, boldCursive } =
    TelegramMarkdown;
