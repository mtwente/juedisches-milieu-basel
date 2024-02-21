import { Component, Host, Method, Prop, h } from '@stencil/core';
import routerProvider from '../../global/router-provider';
import { state } from '../../global/store';

@Component({
  tag: 'app-dialog-success',
  styleUrl: 'app-dialog-success.css',
  // shadow: true,
})
export class AppDialogSuccess {
  successModal: HTMLIonModalElement;
  @Prop() nr: number;
  @Method() async open() {
    await this.successModal.present();
    // const t = setTimeout(async () => {
    //   await this.successModal.dismiss();
    //   await this.dismiss();
    // }, 2500);
    // this.successModal.onDidDismiss().then(() => {
    //   clearTimeout(t);
    //   this.dismiss();
    // });
  }

  render() {
    return (
      <Host>
        <ion-modal ref={e => (this.successModal = e)}>
          <ion-header>
            <ion-toolbar>
              <ion-title>Richtig!</ion-title>
              <ion-buttons slot="end">
                <ion-button onClick={() => this.successModal.dismiss()}>Weiter</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding-top">
            <div style={{ 'max-width': '600px', 'margin': '0 auto auto auto' }}>
              <slot />
            </div>
          </ion-content>
        </ion-modal>
      </Host>
    );
  }

  async dismiss() {
    await routerProvider.ionRouterElement.push('/puzzle', 'back');
    state['t' + this.nr] = 'done';
  }
}
