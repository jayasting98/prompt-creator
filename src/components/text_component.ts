import {Component} from '../prompts/prompt';

/**
 * This contains text.
 * The text is left as-is; it is not formatted further.
 */
export class TextComponent implements Component {
  constructor(protected text: string) {}

  getContent(): string {
    const content = this.text;
    return content;
  }
}
