import { Component, Method, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-dialog-fail',
  styleUrl: 'app-dialog-fail.css',
  // shadow: true,
})
export class AppDialogFail {
  failModal: HTMLIonModalElement;
  @Prop() titleTxt: string;
  @Method() async open() {
    return this.failModal.present();
  }
  render() {
    return (
      <ion-modal ref={e => (this.failModal = e)}>
        <ion-header>
          <ion-toolbar>
            <ion-title>{this.titleTxt}</ion-title>
            <ion-buttons slot="end">
              <ion-button onClick={() => this.failModal.dismiss()}>Schliessen</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <slot></slot>
        </ion-content>
      </ion-modal>
    );
  }
}
