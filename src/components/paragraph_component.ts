import {Component} from '../prompt_creators/prompt_creator';

export class ParagraphComponent implements Component {
  constructor(protected paragraph: string) {}

  getContent(): string {
    const content = `${this.paragraph.trim()}\n`;
    return content;
  }
}
