import {Component, Prompt} from './prompt';

/**
 * This contains components.
 */
export interface ComponentCollection<T extends Component> {
  /**
   * Includes a component into the collection.
   * @param component The component to be included.
   */
  addComponent(component: T): void;
}

/**
 * This is a component that contains other components.
 */
export interface SuperComponent<T extends Component>
  extends Component,
    ComponentCollection<T> {}

/**
 * This is a prompt that contains other components.
 */
export interface SuperPrompt<T extends Component>
  extends Prompt,
    SuperComponent<T> {}
