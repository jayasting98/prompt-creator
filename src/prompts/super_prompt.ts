import {Component, Prompt} from './prompt';

/**
 * This contains components.
 */
export interface ComponentCollection<T extends Component, U = T>
  extends Iterable<U> {
  /**
   * Obtains the number of components in the collection.
   */
  getSize(): number;
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
