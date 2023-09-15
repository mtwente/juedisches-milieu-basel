import { Animation, createAnimation } from '@ionic/core';
import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import routerProvider from '../../global/router-provider';
import { state } from '../../global/store';

@Component({
  tag: 'page-q1',
  styleUrl: 'page-q1.css',
  // shadow: true,
})
export class PageQ1 {
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
        <app-header headerTitle="Teil 1"></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            <h1>Teil 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non, ratione officia dolorem pariatur suscipit accusantium autem voluptates dolores alias voluptate
              amet. Recusandae maxime fugit error accusamus dolor quam sequi.
            </p>

            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Sst6hx7WznY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullScreen
            ></iframe>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non, ratione officia dolorem pariatur suscipit accusantium autem voluptates dolores alias voluptate
              amet. Recusandae maxime fugit error accusamus dolor quam sequi.
            </p>
            <iframe
              width="100%"
              height="315"
              src="https://www.srf.ch/play/embed?urn=urn:srf:video:00f8e25c-099a-4dcf-b6aa-49495936c76c&subdivisions=false"
              allowfullScreen
              allow="geolocation *; autoplay; encrypted-media"
            ></iframe>
            <p>Was ist richtig?</p>
            <ion-button color="primary" onClick={_ => this.right()} ref={e => this.createSuccessAnimation(e)}>
              Antwort A
            </ion-button>
            <ion-button color="primary" onClick={_ => this.failModal.present()}>
              Antwort B
            </ion-button>

            <ion-modal ref={e => (this.failModal = e)}>
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
    }, 4000);
  }

  async dismiss() {
    await routerProvider.ionRouterElement.push('/puzzle', 'back');
    state.q1 = true;
  }
  wrong() {}
}
