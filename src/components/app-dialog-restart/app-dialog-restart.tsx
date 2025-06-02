import { Component, Host, Method, h } from '@stencil/core';
import { animationBuilderFadePages } from '../../global/page-animation';
import routerProvider from '../../global/router-provider';
import { reset } from '../../global/store';

@Component({
  tag: 'app-dialog-restart',
  styleUrl: 'app-dialog-restart.css',
  shadow: true,
})
export class AppDialogRestart {
  confirmRestartModal: HTMLIonModalElement;
  @Method() async open() {
    await this.confirmRestartModal.present();
  }

  render() {
    return (
      <Host>
        <ion-modal ref={e => (this.confirmRestartModal = e)}>
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button onClick={() => this.confirmRestartModal.dismiss()}>Nein</ion-button>
              </ion-buttons>
              <ion-title>Von vorne beginnen?</ion-title>
              <ion-buttons slot="end">
                <ion-button onClick={() => this.restart()}>Ja</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">Der Spielstand wird gelöscht und das Puzzle beginnt erneut.</ion-content>
        </ion-modal>
      </Host>
    );
  }

  private async restart() {
    await this.confirmRestartModal.dismiss();
    reset();
    await routerProvider.ionRouterElement.push('/intro', 'forward', animationBuilderFadePages);
  }
}
