import {beforeEach, describe, expect, test} from '@jest/globals';
import {Component} from '../prompts/prompt';
import {TextComponent} from './text_component';
import {XmlElementComponent} from './xml_element_component';

describe('XmlElementComponent', () => {
  let component: XmlElementComponent;

  beforeEach(() => {
    const tag = 'tag';
    component = new XmlElementComponent(tag);
  });

  describe('getContent', () => {
    test('with no sub-components; the content is an empty XML element', () => {
      const expectedContent = '<tag></tag>\n';
      expect(component.getContent()).toEqual(expectedContent);
    });

    test('with one sub-component; the content is an XML element with the sub-component content as the element content', () => {
      const subComponentContent = 'This is a component.';
      const subComponent = new TextComponent(subComponentContent);
      component.addComponent(subComponent);
      const expectedContent = '<tag>\nThis is a component.\n</tag>\n';
      expect(component.getContent()).toEqual(expectedContent);
    });

    test('with more than one sub-component; the content is an XML element with the sub-component contents as the element content', () => {
      const subComponent1Content = 'This is a component.';
      const subComponent1 = new TextComponent(subComponent1Content);
      component.addComponent(subComponent1);
      const subComponent2Tag = 'sub_tag';
      const subComponent2 = new XmlElementComponent(subComponent2Tag);
      const subComponent3Content = 'This is another component.';
      const subComponent3 = new TextComponent(subComponent3Content);
      subComponent2.addComponent(subComponent3);
      component.addComponent(subComponent2);
      const expectedContent =
        '<tag>\nThis is a component.<sub_tag>\nThis is another component.\n</sub_tag>\n\n</tag>\n';
      expect(component.getContent()).toEqual(expectedContent);
    });
  });

  describe('getSize', () => {
    test('with no sub-components; the size is 0', () => {
      const expectedSize = 0;
      expect(component.getSize()).toEqual(expectedSize);
    });

    test('with one sub-component; the size is 1', () => {
      const subComponentContent = 'This is a component.';
      const subComponent = new TextComponent(subComponentContent);
      component.addComponent(subComponent);
      const expectedSize = 1;
      expect(component.getSize()).toEqual(expectedSize);
    });

    test('with more than one sub-component; the size is exactly the number of sub-components', () => {
      const subComponent1Content = 'This is a component.';
      const subComponent1 = new TextComponent(subComponent1Content);
      component.addComponent(subComponent1);
      const subComponent2Content = 'This is another component.';
      const subComponent2 = new TextComponent(subComponent2Content);
      component.addComponent(subComponent2);
      const expectedSize = 2;
      expect(component.getSize()).toEqual(expectedSize);
    });
  });

  describe('[Symbol.iterator]', () => {
    function assertEqualComponents(
      component: XmlElementComponent,
      expectedSubComponents: Component[]
    ) {
      let i = 0;
      for (const subComponent of component) {
        const expectedComponent = expectedSubComponents[i];
        expect(subComponent).toBe(expectedComponent);
        i++;
      }
      expect(i).toEqual(expectedSubComponents.length);
    }

    test('with no sub-components; the component iterates zero times', () => {
      const expectedSubComponents: Component[] = [];
      assertEqualComponents(component, expectedSubComponents);
    });

    test('with one sub-component; the component iterates over only the sub-component', () => {
      const subComponentContent = 'This is a component.';
      const subComponent = new TextComponent(subComponentContent);
      component.addComponent(subComponent);
      const expectedSubComponents: Component[] = [subComponent];
      assertEqualComponents(component, expectedSubComponents);
    });

    test('with more than one sub-component; the component iterates over all and only the sub-components', () => {
      const subComponent1Content = 'This is a component.';
      const subComponent1 = new TextComponent(subComponent1Content);
      component.addComponent(subComponent1);
      const subComponent2Content = 'This is another component.';
      const subComponent2 = new TextComponent(subComponent2Content);
      component.addComponent(subComponent2);
      const expectedSubComponents: Component[] = [subComponent1, subComponent2];
      assertEqualComponents(component, expectedSubComponents);
    });
  });
});
