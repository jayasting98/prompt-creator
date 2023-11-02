import {describe, expect, test} from '@jest/globals';
import {ParagraphComponent} from './paragraph_component';

describe('ParagraphComponent', () => {
  test('with an empty paragraph; the content has only one newline', () => {
    const componentContent = '';
    const component = new ParagraphComponent(componentContent);
    const expectedContent = '\n';
    expect(component.getContent()).toEqual(expectedContent);
  });

  test('with white spaces; the content has only one newline', () => {
    const componentContent = ' \n \t\n \t';
    const component = new ParagraphComponent(componentContent);
    const expectedContent = '\n';
    expect(component.getContent()).toEqual(expectedContent);
  });

  test('with text, and surrounding white spaces; the content is the text with no surrounding white spaces followed by only one newline', () => {
    const componentContent = ' \t\n \t This is a component.\t\n \t \n';
    const component = new ParagraphComponent(componentContent);
    const expectedContent = 'This is a component.\n';
    expect(component.getContent()).toEqual(expectedContent);
  });
});
