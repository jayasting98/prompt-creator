/**
 * This is a part of a prompt.
 */
export interface Component {
  /**
   * Obtains the string represented by the component.
   */
  getContent(): string;
}

/**
 * This is an entire prompt.
 */
export type Prompt = Component;
