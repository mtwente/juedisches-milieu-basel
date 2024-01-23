import { Component, Fragment, Prop, h } from '@stencil/core';
import { helpCircleOutline } from 'ionicons/icons';

@Component({
  tag: 'app-footnote',
  styleUrl: 'app-footnote.css',
  shadow: true,
})
export class AppFootnote {
  el: HTMLIonPopoverElement;
  @Prop() text: string;
  render() {
    return (
      <Fragment>
        <ion-icon onClick={e => this.el.present(e)} icon={helpCircleOutline}></ion-icon>
        <ion-popover ref={el => (this.el = el)} trigger="top-center" side="top" alignment="center">
          <ion-content class="ion-padding">{this.text}</ion-content>
        </ion-popover>
      </Fragment>
    );
  }
}
