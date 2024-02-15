import { Component, h } from '@stencil/core';
import routerProvider from '../../global/router-provider';
import { appPages } from '../../global/appPages';
import { state } from '../../global/store';
import { NavigationHookResult } from '@ionic/core/dist/types/components/route/route-interface';

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
          {appPages.map(p => (
            <ion-route
              url={p.url}
              component={p.component}
              beforeEnter={() => {
                if (state[p.key] === 'locked') {
                  const redirect: NavigationHookResult = {
                    redirect: '/puzzle',
                  };
                  return redirect;
                }
                return true;
              }}
            ></ion-route>
          ))}
          <ion-route url="/about-us" component="page-about-us"></ion-route>
          <ion-route url="/belohnung" component="page-gratification"></ion-route>
        </ion-router>

        <ion-router-outlet></ion-router-outlet>

        <a style={{ display: 'none' }} href="/intro"></a>
        <a style={{ display: 'none' }} href="/puzzle"></a>
      </ion-app>
    );
  }
}
