export type TelegramMarkdownV2Bold<S extends string = string> = `*${S}*`;
export type TelegramMarkdownV2BoldCursive<S extends string = string> = `*_${S}_*`;
export type TelegramMarkdownV2Cursive<S extends string = string> = `_${S}_`;
export type TelegramMarkdownV2Underline<S extends string = string> = `__${S}__`;
export type TelegramMarkdownV2CrossedOut<S extends string = string> = `~${S}~`;
export type TelegramMarkdownV2Monospace<S extends string = string> = `\`${S}\``;
export type TelegramMarkdownV2Code<
  L extends string = string,
  S extends string = string,
> = `\`\`\`${L}\n${S}\`\`\``;
export type TelegramMarkdownV2Spoiler<S extends string = string> = `||${S}||`;
export type TelegramMarkdownV2Link<
  S extends string = string,
  L extends string = string,
> = `[${S}](${L})`;
