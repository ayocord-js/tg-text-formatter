import { TelegramMentionParsers } from '../mentions';

describe('TelegramMentionParser', () => {
  it('should returns all mentions from string', () => {
    expect(TelegramMentionParsers.isMention('@Stickers')).toBe(true);
    expect(TelegramMentionParsers.isMention('@@Stickers')).toBe(false);
  });

  it('should returns array of mentions', () => {
    expect(TelegramMentionParsers.mentions('@Stickers @akakuke', true)).toStrictEqual([
      '@Stickers',
      '@akakuke',
    ]);
    expect(TelegramMentionParsers.mentions('@Stickers @@akakuke', true)).toStrictEqual([
      '@Stickers',
    ]);
    expect(TelegramMentionParsers.mentions('Stickers akakuke', true)).toStrictEqual([]);
    expect(TelegramMentionParsers.mentions('@Stickers @@akakuke', false)).toStrictEqual([
      'Stickers',
    ]);
  });

  it('should returns boolean of link mention', () => {
    expect(TelegramMentionParsers.isLinkMention('https://t.me/Akakuke')).toBe(true);
    expect(TelegramMentionParsers.isLinkMention('https://tt.me/Akakuke')).toBe(false);
  });
});
