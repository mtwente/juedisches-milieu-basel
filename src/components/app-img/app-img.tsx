import { Component, Host, Prop, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'app-img',
  styleUrl: 'app-img.css',
  shadow: true,
})
export class AppImg {
  @Prop() src: string;
  render() {
    return (
      <Host>
        <figure >
          <ion-img src={getAssetPath(this.src)}></ion-img>
          <figcaption>
            <slot></slot>
          </figcaption>
        </figure>
      </Host>
    );
  }
}
