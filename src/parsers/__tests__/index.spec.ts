import { TelegramMarkdownParser } from "..";

describe("TelegramMarkdownParser", () => {
    it("should return boolean of strings", () => {
        expect(TelegramMarkdownParser.isBold("**idk**")).toBe(true);
        expect(TelegramMarkdownParser.isBold("idk")).toBe(false);
        expect(TelegramMarkdownParser.isBold("**idk** idk idk")).toBe(true);
    });
});
