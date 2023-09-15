import { Component, h } from '@stencil/core';
import routerProvider from '../../global/router-provider';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true,
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false} ref={e => (routerProvider.ionRouterElement = e)}>
          <ion-route-redirect from="/" to="/intro"></ion-route-redirect>
          <ion-route url="/intro" component="page-intro"></ion-route>
          <ion-route url="/puzzle" component="page-puzzle"></ion-route>
          <ion-route url="/puzzle/q1" component="page-q1"></ion-route>
          <ion-route url="/puzzle/q2" component="page-q2"></ion-route>
        </ion-router>

        <ion-router-outlet></ion-router-outlet>

        {/* <ion-nav></ion-nav> */}
      </ion-app>
    );
  }
}
