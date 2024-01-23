import { Animation, createAnimation } from '@ionic/core';
import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import routerProvider from '../../global/router-provider';
import { state } from '../../global/store';

@Component({
  tag: 'page-teil-2',
  styleUrl: 'page-teil-2.css',
  // shadow: true,
})
export class PageTeil2 {
  failModal: HTMLIonModalElement;
  successModal: HTMLIonModalElement;
  successAnimation: Animation;
  createSuccessAnimation(el: Element) {
    this.successAnimation = createAnimation()
      .addElement(el)
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.9, transform: 'scale(100)', opacity: 0 },
        { offset: 1, transform: 'scale(1)', opacity: 1 },
      ]);
  }
  render() {
    return (
      <Fragment>
        <app-header headerTitle="Teil 2"></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            <h1>Teil 2</h1>

            <p>Was ist richtig?</p>
            <ion-button color="primary" onClick={_ => this.right()} ref={e => this.createSuccessAnimation(e)}>
              Antwort A
            </ion-button>
            <ion-button color="primary" id="open-modal">
              Antwort B
            </ion-button>

            <ion-modal trigger="open-modal" ref={e => (this.failModal = e)}>
              <ion-header>
                <ion-toolbar>
                  <ion-title>Leider falsch</ion-title>
                  <ion-buttons slot="end">
                    <ion-button onClick={() => this.failModal.dismiss()}>Close</ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                <p>Die richtige Antwort ist A</p>
              </ion-content>
            </ion-modal>

            <ion-modal ref={e => (this.successModal = e)}>
              <ion-header>
                <ion-toolbar>
                  <ion-title>Richtig!</ion-title>
                </ion-toolbar>
              </ion-header>
              <ion-img src={getAssetPath('../../assets/hurray.gif')}></ion-img>
              <div class="ion-padding">Du hast Kapitel 1 erfolgreich abgeschlossen !!</div>
            </ion-modal>
          </app-content>
        </ion-content>
        <app-footer></app-footer>
      </Fragment>
    );
  }
  async right() {
    await this.successModal.present();
    this.successModal.onDidDismiss().then(() => this.dismiss());
    setTimeout(async () => {
      await this.successModal.dismiss();
      await this.dismiss();
    }, 2500);
  }

  async dismiss() {
    await routerProvider.ionRouterElement.push('/puzzle', 'back');
    state.t2 = true;
  }
  wrong() {}
}
