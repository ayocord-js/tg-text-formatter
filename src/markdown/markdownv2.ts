import {
  TelegramMarkdownV2Bold,
  TelegramMarkdownV2BoldCursive,
  TelegramMarkdownV2Code,
  TelegramMarkdownV2CrossedOut,
  TelegramMarkdownV2Cursive,
  TelegramMarkdownV2Link,
  TelegramMarkdownV2Monospace,
  TelegramMarkdownV2Spoiler,
  TelegramMarkdownV2Underline,
} from './types';

/**
 * This class using markdown v2
 */
export class TelegramMarkdownV2 {
  /**
   *
   * Returns bold text format
   */
  static bold<S extends string = string>(text: S): TelegramMarkdownV2Bold<S> {
    return `*${text}*`;
  }

  /**
   * Returns ***bold cursive*** text format
   * */
  static boldCursive<S extends string = string>(text: S): TelegramMarkdownV2BoldCursive<S> {
    return `*_${text}_*`;
  }

  /**
   *  Returns *cursive* text format
   */
  static cursive<S extends string = string>(text: S): TelegramMarkdownV2Cursive<S> {
    return `_${text}_`;
  }

  /**
   * Returns __text__ text format
   *  */
  static underline<S extends string = string>(text: S): TelegramMarkdownV2Underline<S> {
    return `__${text}__`;
  }

  /**
   * Returns ~~crossed out~~ text format
   * */
  static crossedOut<S extends string = string>(text: S): TelegramMarkdownV2CrossedOut<S> {
    return `~${text}~`;
  }

  /**
   *
   * Returns `monospace` text format
   */
  static monospace<S extends string = string>(text: S): TelegramMarkdownV2Monospace<S> {
    return `\`${text}\``;
  }

  /**
   * Returns code text format
   * */
  static code<S extends string = string, L extends string = string>(
    text: S,
    lang: L
  ): TelegramMarkdownV2Code<L, S> {
    return `\`\`\`${lang}\n${text}\`\`\``;
  }

  /**
   * Returns spoiler text format
   */
  static spoiler<S extends string = string>(text: S): TelegramMarkdownV2Spoiler<S> {
    return `||${text}||`;
  }

  /**
   * Returns link text format
   */
  static link<S extends string = string, L extends string = string>(
    text: S,
    link: L
  ): TelegramMarkdownV2Link<S, L> {
    return `[${text}](${link})`;
  }
}

export const { bold, cursive, crossedOut, monospace, spoiler, boldCursive } = TelegramMarkdownV2;
