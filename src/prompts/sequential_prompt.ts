import {Component} from './prompt';
import {ComponentCollection, SuperComponent, SuperPrompt} from './super_prompt';

/**
 * This is a collection of components in sequential order.
 */
export interface ComponentSequence<T extends Component>
  extends ComponentCollection<T> {
  /**
   * Includes a component into the collection.
   * The component is added to the end.
   * @param component The component to be included.
   */
  addComponent(component: T): void;
}

/**
 * This is a component containing components in sequential order.
 */
export interface SequentialComponent<T extends Component>
  extends SuperComponent<T>,
    ComponentSequence<T> {}

/**
 * This is a prompt containing components in sequential order.
 */
export interface SequentialPrompt<T extends Component>
  extends SuperPrompt<T>,
    SequentialComponent<T> {}
