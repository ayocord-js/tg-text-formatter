import { TelegramMarkdownParser } from "..";

describe("TelegramMarkdownParser", () => {
    // Tests for Bold
    it("should return boolean for bold strings", () => {
        expect(TelegramMarkdownParser.isBold("**idk**")).toBe(true);
        expect(TelegramMarkdownParser.isBold("idk")).toBe(false);
        expect(TelegramMarkdownParser.isBold("**idk** idk idk")).toBe(true);
    });

    it("should return array of bold strings", () => {
        expect(TelegramMarkdownParser.parseBold("idk")).toStrictEqual([]);
        expect(TelegramMarkdownParser.parseBold("idk **idk** idk")).toStrictEqual(["idk"]);
        expect(TelegramMarkdownParser.parseBold("idk **idk** idk", true)).toStrictEqual(["**idk**"]);
    });

    // Tests for Cursive
    it("should return boolean for cursive strings", () => {
        expect(TelegramMarkdownParser.isCursive("__idk__")).toBe(true);
        expect(TelegramMarkdownParser.isCursive("idk")).toBe(false);
        expect(TelegramMarkdownParser.isCursive("__idk__ idk idk")).toBe(true);
    });

    it("should return array of cursive strings", () => {
        expect(TelegramMarkdownParser.parseCursive("idk")).toStrictEqual([]);
        expect(TelegramMarkdownParser.parseCursive("idk __idk__ idk")).toStrictEqual(["idk"]);
        expect(TelegramMarkdownParser.parseCursive("idk __idk__ idk", true)).toStrictEqual(["__idk__"]);
    });

    // Tests for Bold and Cursive
    it("should return boolean for bold cursive strings", () => {
        expect(TelegramMarkdownParser.isBoldCursive("**__idk__**")).toBe(true);
        expect(TelegramMarkdownParser.isBoldCursive("idk")).toBe(false);
        expect(TelegramMarkdownParser.isBoldCursive("**__idk__** idk idk")).toBe(true);
    });

    it("should return array of bold cursive strings", () => {
        expect(TelegramMarkdownParser.parseBoldCursive("idk")).toStrictEqual([]);
        expect(TelegramMarkdownParser.parseBoldCursive("idk **__idk__** idk")).toStrictEqual(["idk"]);
        expect(TelegramMarkdownParser.parseBoldCursive("idk **__idk__** idk", true)).toStrictEqual(["**__idk__**"]);
    });

    // Tests for Monospace
    it("should return boolean for monospace strings", () => {
        expect(TelegramMarkdownParser.isMonospace("`idk`")).toBe(true);
        expect(TelegramMarkdownParser.isMonospace("idk")).toBe(false);
        expect(TelegramMarkdownParser.isMonospace("`idk` idk idk")).toBe(true);
    });

    it("should return array of monospace strings", () => {
        expect(TelegramMarkdownParser.parseMonospace("idk")).toStrictEqual([]);
        expect(TelegramMarkdownParser.parseMonospace("idk `idk` idk")).toStrictEqual(["idk"]);
        expect(TelegramMarkdownParser.parseMonospace("idk `idk` idk", true)).toStrictEqual(["`idk`"]);
    });

    // Tests for Code
    it("should return boolean for code strings", () => {
        expect(TelegramMarkdownParser.isCode("```idk```")).toBe(true);
        expect(TelegramMarkdownParser.isCode("idk")).toBe(false);
        expect(TelegramMarkdownParser.isCode("```idk``` idk idk")).toBe(true);
    });

    it("should return array of code strings", () => {
        expect(TelegramMarkdownParser.parseCode("idk")).toStrictEqual([]);
        expect(TelegramMarkdownParser.parseCode("idk ```idk``` idk")).toStrictEqual(["idk"]);
        expect(TelegramMarkdownParser.parseCode("idk ```idk``` idk", true)).toStrictEqual(["```idk```"]);
    });

    // Tests for Spoiler
    it("should return boolean for spoiler strings", () => {
        expect(TelegramMarkdownParser.isSpoiler("||idk||")).toBe(true);
        expect(TelegramMarkdownParser.isSpoiler("idk")).toBe(false);
        expect(TelegramMarkdownParser.isSpoiler("||idk|| idk idk")).toBe(true);
    });

    it("should return array of spoiler strings", () => {
        expect(TelegramMarkdownParser.parseSpoiler("idk")).toStrictEqual([]);
        expect(TelegramMarkdownParser.parseSpoiler("idk ||idk|| idk")).toStrictEqual(["idk"]);
        expect(TelegramMarkdownParser.parseSpoiler("idk ||idk|| idk", true)).toStrictEqual(["||idk||"]);
    });
});
