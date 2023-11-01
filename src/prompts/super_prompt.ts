import {Component, Prompt} from './prompt';

/**
 * This contains components.
 */
export interface ComponentCollection {
  /**
   * Includes a component into the collection.
   * @param component The component to be included.
   */
  addComponent(component: Component): void;
}

/**
 * This is a component that contains other components.
 */
export interface SuperComponent extends Component, ComponentCollection {}

/**
 * This is a prompt that contains other components.
 */
export interface SuperPrompt extends Prompt, SuperComponent {}
