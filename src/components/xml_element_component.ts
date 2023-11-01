import {SuperComponent} from '../prompts/super_prompt';
import {TextComponent} from './text_component';

/**
 * This represents an XML element.
 */
export class XmlElementComponent
  implements SuperComponent<XmlElementComponent | TextComponent>
{
  protected components: (XmlElementComponent | TextComponent)[];

  constructor(protected tag: string) {
    this.components = [];
  }

  addComponent(component: XmlElementComponent | TextComponent): void {
    this.components.push(component);
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
}
