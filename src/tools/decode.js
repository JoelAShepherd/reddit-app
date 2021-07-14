import { decodeHTML5 } from "entities";

export const decode = (input) => {
    let text = decodeHTML5(input)
    return text
}