import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'page-about-us',
  styleUrl: 'page-about-us.css',
  shadow: true,
})
export class PageAboutUs {
  render() {
    return (
      <Fragment>
        <app-header headerTitle="Über uns"></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            <h1>Über uns</h1>
          </app-content>
        </ion-content>
        <app-footer></app-footer>
      </Fragment>
    );
  }
}
