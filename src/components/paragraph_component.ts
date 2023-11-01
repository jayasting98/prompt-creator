import {Component} from '../prompts/prompt';

/**
 * This contains text that formatted to have a trailing newline.
 * Any leading and trailing white space is removed before adding the trailing newline.
 */
export class ParagraphComponent implements Component {
  constructor(protected paragraph: string) {}

  getContent(): string {
    const content = `${this.paragraph.trim()}\n`;
    return content;
  }
}
