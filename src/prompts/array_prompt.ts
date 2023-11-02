import {Component} from './prompt';
import {SequentialPrompt} from './sequential_prompt';

/**
 * This is a prompt which consists of an array of components.
 */
export class ArrayPrompt implements SequentialPrompt<Component> {
  protected components: Component[];

  constructor() {
    this.components = [];
  }

  getContent(): string {
    let content = '';
    for (const component of this.components) {
      content += component.getContent();
    }
    return content;
  }

  addComponent(component: Component): void {
    this.components.push(component);
  }

  [Symbol.iterator](): Iterator<Component> {
    const iterator = this.components[Symbol.iterator]();
    return iterator;
  }
}
