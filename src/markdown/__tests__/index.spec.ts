import { TelegramMarkdown } from '..';

describe('TelegramMarkdown', () => {
  it('should return bold text', () => {
    expect(TelegramMarkdown.bold('idk')).toBe('*idk*');
  });

  it('should return code text without lang', () => {
    expect(TelegramMarkdown.code('idk')).toBe('```\nidk```');
    expect(TelegramMarkdown.code('meow')).toBe('```\nmeow```');
    expect(TelegramMarkdown.code('woow!')).toBe('```\nwoow!```');
  });

  it('should return boldCursive text', () => {
    expect(TelegramMarkdown.boldCursive('idk')).toBe('*_idk_*');
  });

  it('should return code with lang', () => {
    expect(TelegramMarkdown.code('idk', 'ts')).toBe('```ts\nidk```');
  });

  it('should return cursive text', () => {
    expect(TelegramMarkdown.cursive('idk')).toBe('_idk_');
  });

  it('should return spoiler', () => {
    expect(TelegramMarkdown.spoiler('idk')).toBe('||idk||');
  });

  it('should return crossed out text', () => {
    expect(TelegramMarkdown.crossedOut('idk')).toBe('~idk~');
  });

  it('should return monospace text', () => {
    expect(TelegramMarkdown.monospace('idk')).toBe('`idk`');
  });
});
