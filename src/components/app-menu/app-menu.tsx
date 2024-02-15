import { Component, h } from '@stencil/core';
import { checkmarkCircleOutline, extensionPuzzleOutline, informationCircleOutline, refreshOutline } from 'ionicons/icons';
import { appPages } from '../../global/appPages';
import { state } from '../../global/store';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
  // shadow: true,
})
export class AppMenu {
  confirmRestartModal: HTMLAppDialogRestartElement;

  render() {
    return (
      <ion-menu contentId="main-menu" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>Inhalt</ion-list-header>
            <ion-note>Eine Geschichte – 12 Teile</ion-note>

            {appPages.map((appPage, index) => {
              const t = state[appPage.key];
              const icon = t === 'done' ? checkmarkCircleOutline : extensionPuzzleOutline;
              return (
                <ion-menu-toggle key={index} autoHide={false}>
                  <ion-item
                    disabled={t === 'locked' || t === 'highlighted'}
                    class={location.pathname === appPage.url ? 'selected' : ''}
                    href={appPage.url}
                    routerDirection="forward"
                    lines="none"
                    detail={false}
                  >
                    <ion-icon color="primary" aria-hidden="true" slot="start" icon={icon} />
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
                <ion-label>Über diese App</ion-label>
              </ion-item>
            </ion-menu-toggle>
            <ion-item lines="none" button detail={false} onClick={() => this.confirmRestartModal.open()}>
              <ion-icon color="primary" aria-hidden="true" slot="start" icon={refreshOutline} />
              <ion-label>Neustart ...</ion-label>
            </ion-item>
            <app-dialog-restart ref={e => (this.confirmRestartModal = e)}></app-dialog-restart>

          </ion-list>
        </ion-content>
      </ion-menu>
    );
  }
}
