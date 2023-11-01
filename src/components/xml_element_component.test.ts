import {beforeEach, describe, expect, test} from '@jest/globals';
import {TextComponent} from './text_component';
import {XmlElementComponent} from './xml_element_component';

describe('XmlElementComponent', () => {
  let component: XmlElementComponent;

  beforeEach(() => {
    const tag = 'tag';
    component = new XmlElementComponent(tag);
  });

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
