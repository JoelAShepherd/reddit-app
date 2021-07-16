import { Parser, HtmlRenderer } from 'commonmark'    

export const parseMD = mdText => {
    const reader = new Parser();
    const writer = new HtmlRenderer();
    const parsed = reader.parse(mdText);
    const result = writer.render(parsed);
    return result
}