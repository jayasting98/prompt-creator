import {Component} from './prompt';
import {ComponentCollection, SuperComponent, SuperPrompt} from './super_prompt';

/**
 * This is a collection of components in sequential order.
 */
export interface ComponentSequence
  extends ComponentCollection,
    Iterable<Component> {}

/**
 * This is a component containing components in sequential order.
 */
export interface SequentialComponent
  extends SuperComponent,
    ComponentSequence {}

/**
 * This is a prompt containing components in sequential order.
 */
export interface SequentialPrompt extends SuperPrompt, SequentialComponent {}
