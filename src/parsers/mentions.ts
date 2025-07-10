import { BaseParser } from './abstractions';

export class TelegramMentionParsers extends BaseParser {
  static getMethods() {
    return {
      isMention: this.isMention.bind(this),
      mentions: this.mentions.bind(this),
      isLinkMention: this.isLinkMention.bind(this),
    };
  }
  static isMention(content: string) {
    return this.is(content, /(?<!@)@([^\s@]+)/);
  }

  static mentions(content: string, mentions?: boolean) {
    return this.parse(content, /(?<!@)@([^\s@]+)/g, mentions);
  }

  static isLinkMention(content: string) {
    return this.is(content, /https:\/\/t.me\/*?/g);
  }
}

export const { isMention, mentions, isLinkMention } = TelegramMentionParsers.getMethods();
