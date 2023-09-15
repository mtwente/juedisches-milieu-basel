import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-content',
  styleUrl: 'app-content.css',
  // shadow: true,
})
export class AppContent {
  render() {
    return (
      <Host>
        <div class="app-content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
