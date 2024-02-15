import { Animation } from '@ionic/core';
import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';

const nr = 3;
@Component({
  tag: 'page-teil-3',
  styleUrl: 'page-teil-3.css',
  // shadow: true,
})
export class PageTeil3 {
  failModal: HTMLAppDialogFailElement;
  successModal: HTMLAppDialogSuccessElement;
  successAnimation: Animation;
  render() {
    return (
      <Fragment>
        <app-header headerTitle={titles[nr]}></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            <h1>Migration</h1>
            <p class="lead">
              On parle français <br />
              Jüdische Einwanderung im 19. Jahrhundert
            </p>
            <p>
              Weil Jüdinnen und Juden sich erst seit 1866 frei in der Schweiz niederlassen durften, dauerte es relativ lange, bis sich in Basel eine dritte jüdische Gemeinde
              etablieren konnte. Zwischen 1847 und 1849 erhielten alle in Basel geborenen Söhne aus jüdischen Familien das Niederlassungsrecht
              <app-footnote text={'Haumann 1999, S. 22.'}></app-footnote>. Die neuen Basler Juden kamen bis 1866 ausschliesslich aus dem Elsass
              <app-footnote text="Guth-Dreyfus 1980, S. 154."></app-footnote>. Viele waren vor antisemitischen Angriffen geflohen. Andere sahen in Basel bessere berufliche Chancen.
              Auch Salomon Schwob-Dreyfus, der erste offizielle jüdische Basler Bürger, stammte ursprünglich aus Hégenheim<app-footnote text="Haumann 2005, S. 74."></app-footnote>{' '}
              . Mit ihm wurden insgesamt acht jüdische Familien 1872 ins Basler Bürgerrecht aufgenommen.{' '}
            </p>
            <p>
              Es fällt auf, dass in Basel in den drei Jahren nach dem Deutsch-Französischen Krieg ab 1871 viele Menschen aus dem Elsass das Bürgerrecht erhielten
              <app-footnote text="Pfister 1976, S. 470."></app-footnote>. Viele zugezogene Juden hatten immer noch Familienangehörige in den Elsässer Dörfern. Mit Sorge blickten
              sie nach Norden, als Deutschland und Frankreich sich 1870 bekriegten. Tausende Flüchtende suchten in Basel Schutz. Viele darunter waren jüdische Französinnen und
              Franzosen. Die jüdischen Vereine kümmerten sich um deren Verpflegung und Unterkunft und kamen finanziell an den Anschalg. Die meisten der Geflohenen blieben nicht
              dauerhaft in Basel und kehrten in ihre Gemeinde zurück. Dennoch: In den nächsten rund 40 Jahren verfünffachte sich die jüdische Bevölkerung in Basel von rund 500
              Personen 1870 auf über 2400 Personen 1910. Zwar kamen mit der rechtlichen Gleichstellung vermehrt auch Juden aus dem süddeutschen Raum, dem Baselbiet und aus Endingen
              und Lengnau in die Stadt. Die Beziehungen zum Elsass, insbesondere zur Gemeinde Hégenheim blieben aber identitätsstiftend für die jüdische Gemeinde.
            </p>
            <h2>Wo befindet sich das elsässische Dorf Hégenheim: A, B oder C?</h2>
            <p>
              <ion-img src={getAssetPath('../../assets/teil-3/karte.jpg')}></ion-img>
            </p>
            <p>Quelle: Siegfriedkarte von 1864</p>
            <p>
              <ion-button color="primary" onClick={_ => this.successModal.open()}>
                Antwort A
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Antwort B
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Antwort C
              </ion-button>
            </p>
            <p>Literatur:</p>
            <p>
              <ul>
                <li>Guth-Dreyfus, Katia: 175 Jahre Israelitische Gemeinde Basel, in: Basler Stadtbuch 1980, S. 153-162.</li>
                <li>
                  Haumann, Heiko: Juden in Basel und Umgebung – Zur Geschichte einer Minderheit. Darstellung und Quellen für den Gebrauch an Schulen, Herausgegeben von den
                  Regierungsräten der Kantone Basel-Stadt und Basel-Landschaft, Basel 1999.
                </li>
                <li>Haumann, Heiko (Hg.): Acht Jahrhunderte Juden in Basel, Basel 2005.</li>
                <li>Pfister, Willy: Die Einbürgerung der Ausländer in der Stadt Basel im 19. Jahrhundert, Basel 1976.</li>
              </ul>
            </p>
            <app-dialog-fail ref={e => (this.failModal = e)} titleTxt={'Leider falsch'}>
              <p>Die richtige Antwort ist A</p>
            </app-dialog-fail>
            <app-dialog-success nr={nr} ref={e => (this.successModal = e)}>
              <ion-img src={getAssetPath('../../assets/hurray.gif')}></ion-img>
              <div class="ion-padding">Du hast Kapitel {nr} erfolgreich abgeschlossen&nbsp;!!</div>
            </app-dialog-success>
          </app-content>
        </ion-content>
        <app-footer></app-footer>
      </Fragment>
    );
  }
}
