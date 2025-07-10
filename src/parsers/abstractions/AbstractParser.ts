export class BaseParser {
  /**
   * Generic method to check if string contains a specific markdown format
   */
  protected static is(text: string, regex: RegExp): boolean {
    return regex.test(text);
  }

  /**
   * Generic method to parse a specific markdown format
   * @param text - The input text to parse
   * @param regex - Regular expression to match markdown format
   * @param markdown - If true, returns markdown syntax; if false, returns only content
   */
  protected static parse(text: string, regex: RegExp, flag = false): string[] {
    const matches = [...text.matchAll(regex)];
    return flag ? matches.map((s) => s[0]) : matches.filter((s) => s[1].length).map((s) => s[1]);
  }
}
