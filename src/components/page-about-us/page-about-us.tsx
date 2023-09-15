import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-about-us',
  styleUrl: 'page-about-us.css',
  shadow: true,
})
export class PageAboutUs {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
