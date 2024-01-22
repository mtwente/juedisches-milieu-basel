import { Animation } from '@ionic/core';
import { Component, Fragment, h } from '@stencil/core';
import routerProvider from '../../global/router-provider';
import { state } from '../../global/store';

@Component({
  tag: 'page-start',
  styleUrl: 'page-start.css',
  // shadow: true,
})
export class PageStart {
  failModal: HTMLIonModalElement;
  successModal: HTMLIonModalElement;
  successAnimation: Animation;
  render() {
    return (
      <Fragment>
        <app-header headerTitle="Spielanleitung"></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            <h1>Spielanleitung</h1>
            <p class={'lead'}>Dieses digitale Puzzle gibt in zwölf Teilen einen Einblick in die Geschichte des jüdischen Milieus in Basel von 1850 bis 1914.</p>
            <p>So funktioniert es:</p>
            <p>
              <ul>
                <li>Bei jedem Puzzleteil finden Sie Wissenwertes zur Geschichte des jüdischen Milieus in Basel.</li>
                <li>
                  Hinter jedem Puzzleteil befindet sich eine Frage oder ein Rätsel. Haben Sie die Aufgabe richtig gelöst, dreht sich das Puzzleteil um und ergänzt ein Gesamtbild.
                </li>
                <li>Klicken Sie darauf das nächste Puzzleteil an: Lesen Sie die Texte, schauen Sie die Filmbeiträge und sehen Sie sich die Bilder an.</li>
                <li>Sie müssen die Rätsel nicht der Reihe nach lösen, sondern können frei auswählen.</li>
                <li>Wenn Sie alle Aufgaben gelöst haben, werden die Puzzleteile zu einem grossen Bild freigeschaltet. Das Puzzle ist vollständig.</li>
                <li>Holen Sie sich ihre Belohnung ab!</li>
              </ul>
            </p>
            <p>
              Puzzlen stärkt unser Wohlbefinden. Es regt beide Gehirnhälften und wirkt sich positiv auf die Konzentration und das Kurzzeitgedächtnis aus. Deshalb: Legen Sie los.
              Tauchen Sie in das Puzzle ein und eignen Sie sich Wissen zum jüdischen Milieu in Basel an.
            </p>
            <ion-button color="primary" onClick={_ => this.dismiss()}>
              OK, los geht's!
            </ion-button>
          </app-content>
        </ion-content>
        <app-footer></app-footer>
      </Fragment>
    );
  }
  async dismiss() {
    await routerProvider.ionRouterElement.push('/puzzle', 'back');
    state.start = true;
  }
}
