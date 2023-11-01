import {describe, expect, test} from '@jest/globals';
import {TextComponent} from './text_component';

describe('TextComponent', () => {
  test('with empty text; the content is empty', () => {
    const componentContent = '';
    const component = new TextComponent(componentContent);
    const expectedContent = '';
    expect(component.getContent()).toEqual(expectedContent);
  });

  test('with non-empty text; the content is the exact same text', () => {
    const componentContent = ' \t\n \t This is a component.\t\n \t \n';
    const component = new TextComponent(componentContent);
    const expectedContent = ' \t\n \t This is a component.\t\n \t \n';
    expect(component.getContent()).toEqual(expectedContent);
  });
});
