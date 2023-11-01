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
 * The prompt may possibly comprise some components.
 */
export interface Prompt {
  /**
   * Obtains the string represented by the prompt.
   */
  getContent(): string;
}

/**
 * This brings components together.
 * The compnents are brought together possibly for creating a prompt.
 */
export interface ComponentIntegrator {
  /**
   * Includes a component into the combination of components.
   * @param component The component to be included.
   */
  addComponent(component: Component);
}

/**
 * This builds a prompt.
 * The prompt may be built from some components.
 */
export interface PromptAssembler {
  /**
   * Builds the prompt.
   */
  assemble(): Prompt;
}

/**
 * This creates a prompt from some components.
 */
export interface PromptCreator extends PromptAssembler, ComponentIntegrator {}
