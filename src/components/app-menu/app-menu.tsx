import { Component, h } from '@stencil/core';
import { checkmarkCircleOutline, extensionPuzzleOutline, informationCircleOutline, refreshOutline } from 'ionicons/icons';
import { animationBuilderFadePages } from '../../global/page-animation';
import routerProvider from '../../global/router-provider';
import { reset, state } from '../../global/store';

interface AppPage {
  url: string;
  key: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Spielanleitung',
    key: 'start',
    url: '/puzzle/start',
  },
  {
    title: 'Teil 1',
    key: 'q1',
    url: '/puzzle/q1',
  },
  {
    title: 'Teil 2',
    key: 'q2',
    url: '/puzzle/q2',
  },
  {
    title: 'Teil 3',
    key: 'q3',
    url: '/puzzle/q3',
  },
  {
    title: 'Teil 4',
    key: 'q4',
    url: '/puzzle/q4',
  },
  {
    title: 'Teil 5',
    key: 'q5',
    url: '/puzzle/q5',
  },
  {
    title: 'Teil 6',
    key: 'q6',
    url: '/puzzle/q6',
  },
  {
    title: 'Teil 7',
    key: 'q7',
    url: '/puzzle/q7',
  },
];

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
  // shadow: true,
})
export class AppMenu {
  resetModal: HTMLIonModalElement;
  render() {
    return (
      <ion-menu contentId="main-menu" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>Inhalt</ion-list-header>
            <ion-note>Eine Geschichte – 7 Teile</ion-note>

            {appPages.map((appPage, index) => {
              return (
                <ion-menu-toggle key={index} autoHide={false}>
                  <ion-item class={location.pathname === appPage.url ? 'selected' : ''} href={appPage.url} routerDirection="forward" lines="none" detail={false}>
                    <ion-icon color="primary" aria-hidden="true" slot="start" icon={state[appPage.key] ? checkmarkCircleOutline : extensionPuzzleOutline} />
                    <ion-label>{appPage.title}</ion-label>
                  </ion-item>
                </ion-menu-toggle>
              );
            })}
          </ion-list>

          <ion-list id="labels-list">
            {/* <ion-list-header>Impressum</ion-list-header> */}
            <ion-note>Rund um diese App</ion-note>
            <ion-menu-toggle autoHide={false}>
              <ion-item lines="none" href={'/about-us'}>
                <ion-icon color="primary" aria-hidden="true" slot="start" icon={informationCircleOutline} />
                <ion-label>Über uns</ion-label>
              </ion-item>
            </ion-menu-toggle>
            <ion-item lines="none" button detail={false} onClick={() => this.resetModal.present()}>
              <ion-icon color="primary" aria-hidden="true" slot="start" icon={refreshOutline} />
              <ion-label>Zurücksetzen ...</ion-label>
            </ion-item>

            <ion-modal
              ref={e => {
                this.resetModal = e;
              }}
            >
              <ion-header>
                <ion-toolbar>
                  <ion-buttons slot="start">
                    <ion-button
                      onClick={() => {
                        this.resetModal.dismiss();
                      }}
                    >
                      Abbrechen
                    </ion-button>
                  </ion-buttons>
                  <ion-title>Zurücksetzen?</ion-title>
                  <ion-buttons slot="end">
                    <ion-button
                      onClick={async () => {
                        await this.resetModal.dismiss();
                        setTimeout(() => {
                          reset(), 250;
                        });
                        routerProvider.ionRouterElement.push('/intro', 'forward', animationBuilderFadePages);
                      }}
                      strong={true}
                    >
                      Ja
                    </ion-button>
                  </ion-buttons>
                </ion-toolbar>
              </ion-header>
              <ion-content class="ion-padding">
                <p> Wollen sie die App zurücksetzen?</p>
                <p>Der Spielstand wird gelöscht und Sie können das Puzzle nochmals von Anfang an spielen.</p>
              </ion-content>
            </ion-modal>
          </ion-list>
        </ion-content>
      </ion-menu>
    );
  }
}
