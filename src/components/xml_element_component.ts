import {SequentialComponent} from '../prompts/sequential_prompt';
import {TextComponent} from './text_component';

/**
 * This represents an XML element.
 */
export class XmlElementComponent
  implements SequentialComponent<XmlElementComponent | TextComponent>
{
  protected components: (XmlElementComponent | TextComponent)[];
  protected size: number;

  constructor(protected tag: string) {
    this.components = [];
    this.size = 0;
  }

  addComponent(component: XmlElementComponent | TextComponent): void {
    this.components.push(component);
    this.size++;
  }

  getContent(): string {
    let elementContent = '';
    for (const component of this.components) {
      elementContent += component.getContent();
    }
    let content: string;
    if (elementContent.length < 1) {
      content = `<${this.tag}></${this.tag}>\n`;
    } else {
      content = `<${this.tag}>\n${elementContent}\n</${this.tag}>\n`;
    }
    return content;
  }

  getSize(): number {
    return this.size;
  }

  [Symbol.iterator](): Iterator<XmlElementComponent | TextComponent> {
    const iterator = this.components[Symbol.iterator]();
    return iterator;
  }
}
