import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyComponent {
  @Prop() intent: string = 'primary';

  render() {
    return (
      <button class={this.intent}>
        <slot>Default Slot Content</slot>
      </button>
    );
  }
}
