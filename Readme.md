[![TypeScript](https://img.shields.io/badge/TypeScript-2e78b2?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
# Tg Text Formatter

Hello! Welcome to the **tg-text-formatter** package for Telegram text markdown. This library provides convenient methods for formatting text without the hassle of manual markdown syntax.

## Installation

You can easily install this package via npm or yarn:

```bash
npm i tg-text-formatter
```

```bash
yarn add tg-text-formatter
```

## Tests of this Library

<img src="./tests.png">

## Ways to Use

There are two ways to use this library:

1. Using classes
2. Using methods

# TelegramMarkdown

## Using Class

```ts
import { TelegramMarkdown } from "tg-text-formatter";

console.log(TelegramMarkdown.bold("idk")); // **idk**
console.log(TelegramMarkdown.cursive("idk")); // __idk__
console.log(TelegramMarkdown.boldCursive("idk")); // **__idk__**
console.log(TelegramMarkdown.crossedOut("idk")); // ~~idk~~
console.log(TelegramMarkdown.monospace("idk")); // `idk`

/**
 * Code with language
 */
console.log(TelegramMarkdown.code("console.log(`idk`)", "ts")); // ```ts\nidk```

/**
 * Code without language
 */
console.log(TelegramMarkdown.code("console.log(`idk`)")); // ```\nidk```
console.log(TelegramMarkdown.spoiler("idk")); // ||idk||
```

## Using Methods

```ts
import {
    bold,
    cursive,
    boldCursive,
    crossedOut,
    monospace,
    code,
    spoiler,
} from "tg-text-formatter";

console.log(bold("idk")); // **idk**
console.log(cursive("idk")); // __idk__
console.log(boldCursive("idk")); // **__idk__**
console.log(crossedOut("idk")); // ~~idk~~
console.log(monospace("idk")); // `idk`

/**
 * Code with language
 */
console.log(code("console.log(`idk`)", "ts")); // ```ts\nidk```

/**
 * Code without language
 */
console.log(code("console.log(`idk`)")); // ```\nidk```
console.log(spoiler("idk")); // ||idk||
```

# TelegramMentionParsers

The **TelegramMentionParsers** class provides methods for detecting and parsing Telegram mentions within text.

## Using TelegramMentionParsers

```ts
import { TelegramMentionParsers } from "tg-text-formatter";

console.log(TelegramMentionParsers.isMention("@Stickers")); // true
console.log(TelegramMentionParsers.isMention("@@Stickers")); // false
console.log(TelegramMentionParsers.mentions("@Stickers @akakuke", true)); // ["@Stickers", "@akakuke"]
console.log(TelegramMentionParsers.mentions("@Stickers @@akakuke", true)); // ["@Stickers"]
console.log(TelegramMentionParsers.mentions("Stickers akakuke", true)); // []
console.log(TelegramMentionParsers.isLinkMention("Check this link: https://t.me/username")); // true
```

## Methods in TelegramMentionParsers

- `isMention(content: string): boolean` - Checks if the content contains a valid mention.
- `mentions(content: string, mentions?: boolean): string[]` - Extracts mentions from the content. If `mentions` is true, it returns the mentions with the "@" symbol; otherwise, it returns without the "@".
- `isLinkMention(content: string): boolean` - Checks if the content contains a valid Telegram link.

# TelegramMarkdownParser

The **TelegramMarkdownParser** class provides methods for detecting and parsing various markdown styles in Telegram text.

## Methods in TelegramMarkdownParser

- `isBold(text: string): boolean` - Checks if the text is bold.
- `parseBold(text: string, markdown = false): string[]` - Parses bold text. Returns the formatted text if `markdown` is true, otherwise returns the plain text.
- `isCursive(text: string): boolean` - Checks if the text is cursive.
- `parseCursive(text: string, markdown = false): string[]` - Parses cursive text.
- `isBoldCursive(text: string): boolean` - Checks if the text is both bold and cursive.
- `parseBoldCursive(text: string, markdown = false): string[]` - Parses text that is both bold and cursive.
- `isMonospace(text: string): boolean` - Checks if the text is monospace.
- `parseMonospace(text: string, markdown = false): string[]` - Parses monospace text.
- `isCode(text: string): boolean` - Checks if the text is a code block.
- `parseCode(text: string, markdown = false): string[]` - Parses code blocks.
- `isSpoiler(text: string): boolean` - Checks if the text is a spoiler.
- `parseSpoiler(text: string, markdown = false): string[]` - Parses spoilers.
- `isLink(text: string): boolean` - Checks if the text contains a markdown link.
- `parseLink(text: string): boolean` - Parses markdown links.
- `isMarkdown(text: string): boolean` - Checks if the text contains any markdown

Now you can easily format your Telegram messages and manage mentions with this comprehensive library!
