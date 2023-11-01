import {beforeEach, describe, expect, test} from '@jest/globals';
import {Component} from './prompt_creator';
import {SequentialPromptCreator} from './sequential_prompt_creator';

describe('SequentialPromptCreator', () => {
  class TextComponent implements Component {
    constructor(private content: string) {}

    getContent(): string {
      return this.content;
    }
  }

  let promptCreator: SequentialPromptCreator;

  beforeEach(() => {
    promptCreator = new SequentialPromptCreator();
  });

  test('with no components; the prompt is created with empty content', () => {
    const prompt = promptCreator.assemble();
    const expectedContent = '';
    expect(prompt.getContent()).toEqual(expectedContent);
  });

  test('with one component; the prompt is created with the content of the component', () => {
    const componentContent = 'This is a component.';
    const component = new TextComponent(componentContent);
    promptCreator.addComponent(component);
    const prompt = promptCreator.assemble();
    const expectedContent = componentContent;
    expect(prompt.getContent()).toEqual(expectedContent);
  });

  test('with more than one component; the prompt is created with the contents of the components in sequence', () => {
    const component1Content = 'This is a component.';
    const component1 = new TextComponent(component1Content);
    promptCreator.addComponent(component1);
    const component2Content = 'This is another component.';
    const component2 = new TextComponent(component2Content);
    promptCreator.addComponent(component2);
    const prompt = promptCreator.assemble();
    const expectedContent = component1Content + component2Content;
    expect(prompt.getContent()).toEqual(expectedContent);
  });
});
