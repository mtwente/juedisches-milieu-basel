import { Component, Fragment, h, Prop } from '@stencil/core';
@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  // shadow: true,
})
export class AppHeader {
  @Prop() headerTitle: string;
  render() {
    return (
      <Fragment>
        <app-menu></app-menu>
        <ion-header translucent={true}>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button text="Zurück" defaultHref={window.location.pathname === '/puzzle' ? undefined : '/puzzle'}></ion-back-button>
            </ion-buttons>
            <ion-title>{this.headerTitle}</ion-title>
            <ion-buttons slot="end">
              <ion-menu-button></ion-menu-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
      </Fragment>
    );
  }
}
