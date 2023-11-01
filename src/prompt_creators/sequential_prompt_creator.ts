import {Component, Prompt, PromptCreator} from './prompt_creator';

/**
 * This creates a prompt based on a sequence of components.
 */
export class SequentialPromptCreator implements PromptCreator {
  protected components: Component[];

  constructor() {
    this.components = [];
  }

  addComponent(component: Component) {
    this.components.push(component);
  }

  assemble(): Prompt {
    let content = '';
    for (const component of this.components) {
      content += component.getContent();
    }
    const prompt = new SequentialPromptCreator.TextPrompt(content);
    return prompt;
  }

  private static TextPrompt = class implements Prompt {
    constructor(private content: string) {}

    getContent(): string {
      return this.content;
    }
  };
}
