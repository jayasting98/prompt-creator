import {beforeEach, describe, expect, test} from '@jest/globals';
import {ArrayPrompt} from './array_prompt';
import {Component} from './prompt';

describe('ArrayPrompt', () => {
  class TextComponent implements Component {
    constructor(private content: string) {}

    getContent(): string {
      return this.content;
    }
  }

  let prompt: ArrayPrompt;

  beforeEach(() => {
    prompt = new ArrayPrompt();
  });

  describe('getContent', () => {
    test('with no components; the prompt content is empty', () => {
      const expectedContent = '';
      expect(prompt.getContent()).toEqual(expectedContent);
    });

    test('with one component; the prompt content is the component content', () => {
      const componentContent = 'This is a component.';
      const component = new TextComponent(componentContent);
      prompt.addComponent(component);
      const expectedContent = componentContent;
      expect(prompt.getContent()).toEqual(expectedContent);
    });

    test('with more than one component; the prompt content is a sequence of the component contents', () => {
      const component1Content = 'This is a component.';
      const component1 = new TextComponent(component1Content);
      prompt.addComponent(component1);
      const component2Content = 'This is another component.';
      const component2 = new TextComponent(component2Content);
      prompt.addComponent(component2);
      const expectedContent = component1Content + component2Content;
      expect(prompt.getContent()).toEqual(expectedContent);
    });
  });

  describe('[Symbol.iterator]', () => {
    function assertEqualComponents(
      prompt: ArrayPrompt,
      expectedComponents: Component[]
    ) {
      let i = 0;
      for (const component of prompt) {
        const expectedComponent = expectedComponents[i];
        expect(component).toBe(expectedComponent);
        i++;
      }
      expect(i).toEqual(expectedComponents.length);
    }

    test('with no components; the prompt iterates zero times', () => {
      const expectedComponents: Component[] = [];
      assertEqualComponents(prompt, expectedComponents);
    });

    test('with one component; the prompt iterates over only the component', () => {
      const componentContent = 'This is a component.';
      const component = new TextComponent(componentContent);
      prompt.addComponent(component);
      const expectedComponents: Component[] = [component];
      assertEqualComponents(prompt, expectedComponents);
    });

    test('with more than one component; the prompt iterates over all and only the components', () => {
      const component1Content = 'This is a component.';
      const component1 = new TextComponent(component1Content);
      prompt.addComponent(component1);
      const component2Content = 'This is another component.';
      const component2 = new TextComponent(component2Content);
      prompt.addComponent(component2);
      const expectedComponents: Component[] = [component1, component2];
      assertEqualComponents(prompt, expectedComponents);
    });
  });
});
