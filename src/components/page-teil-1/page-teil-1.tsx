import { Animation } from '@ionic/core';
import { Component, Fragment, h } from '@stencil/core';
import routerProvider from '../../global/router-provider';
import { state } from '../../global/store';
import { titles } from '../../global/titles';
import { Build } from '@stencil/core';

const nr = 1;
@Component({
  tag: 'page-teil-1',
  styleUrl: 'page-teil-1.css',
  // shadow: true,
})
export class PageTeil1 {
  failModal: HTMLIonModalElement;
  successModal: HTMLIonModalElement;
  successAnimation: Animation;
  render() {
    let theme = 'purple';
    if (Build.isBrowser && typeof window['__theme'] === 'string') {
      theme = window['__theme'];
    }

    const colorUnlocked = theme === 'light' ? 'violettes' : 'weisses';
    return (
      <Fragment>
        <app-header headerTitle={titles[nr]}></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            <h1 class="ion-hide-md-down">{titles[nr]}</h1>
            <p class={'lead'}>Dieses digitale Puzzle gibt in zwölf Teilen einen Einblick in die Geschichte des jüdischen Basels von 1850 bis 1914.</p>
            <p>So funktioniert es:</p>
            <p>
              <ul>
                <li>Klicke auf ein {colorUnlocked} (=freigeschaltetes) Puzzleteil.</li>
                <li>Schau dir die Inhalte an und löse das Rätsel.</li>
                <li>Bei richtiger Antwort dreht sich das Puzzleteil um und ein nächstes schaltet sich frei.</li>
                <li>
                  Am Ende winkt als Belohnung ein <br /> <strong>Gratiseintritt in ein Museum</strong>! <br /> Lass dich überraschen…
                </li>
              </ul>
            </p>
            <p>
              Puzzeln stärkt unser Wohlbefinden. Es regt beide Gehirnhälften an und wirkt sich positiv auf Konzentration und Kurzzeitgedächtnis aus. Also: Leg los. Tauche in das
              Puzzle ein und eigne dir Wissen zur Geschichte des jüdischen Basels an.
            </p>
            <p>
              <ion-button color="primary" onClick={_ => this.dismiss()}>
                OK, los geht's!
              </ion-button>
            </p>
          </app-content>
        </ion-content>
        <app-footer></app-footer>
      </Fragment>
    );
  }
  async dismiss() {
    await routerProvider.ionRouterElement.push('/puzzle', 'back');
    state.t1 = 'done';
  }
}
