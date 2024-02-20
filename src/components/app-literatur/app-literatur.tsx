import { Component, Host, Prop, VNode, h } from '@stencil/core';

@Component({
  tag: 'app-literatur',
  styleUrl: 'app-literatur.css',
  shadow: true,
})
export class AppLiteratur {
  @Prop() items: VNode[];

  render() {
    return (
      <Host>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Literatur</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              {this.items.map(i => (
                <ion-item lines="full">
                  <ion-label class="ion-text-wrap">{i}</ion-label>
                </ion-item>
              ))}
              <slot></slot>
            </ion-list>
          </ion-card-content>
        </ion-card>
      </Host>
    );
  }
}
