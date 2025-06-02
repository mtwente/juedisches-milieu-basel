import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-video',
  styleUrl: 'app-video.css',
  shadow: true,
})
export class AppVideo {
  render() {
    return (
      <Host>
        <figure>
          <slot></slot>
          <figcaption>
            <slot name="caption"></slot>
          </figcaption>
        </figure>
      </Host>
    );
  }
}
