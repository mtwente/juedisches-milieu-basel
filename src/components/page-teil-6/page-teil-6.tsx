import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';
const nr = 6;
@Component({
  tag: 'page-teil-6',
  styleUrl: 'page-teil-6.css',
})
export class PageTeil6 {
  failModal: HTMLAppDialogFailElement;
  successModal: HTMLAppDialogSuccessElement;
  render() {
    return (
      <Fragment>
        <app-header headerTitle={titles[nr]}></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            {/* <h1>{titles[nr]}</h1> */}
            <p class={'lead'}>
              Konservativ, aber kein Elsässer <br />
              Arthur Cohn wird erster Rabbiner in Basel
            </p>

            <p>
              Die Wahl des ersten eigenen Rabbiners für die jüdische Gemeinde in Basel verlief kompliziert. 1883 trat der liberale Moise Nordmann, der als Rabbiner von Hégenheim
              aus auch für die Basler Juden zuständig war, zurück. Die jüdische Gemeinde in Basel wollte einen orthodox eingestellten Nachfolger, konnte sich aber lange auf keinen
              Kandidaten einigen. Obwohl sich die jüdische Gemeinde fast ausschliesslich aus Jüdinnen und Juden mit elsässischem Hintergrund zusammensetzte, fiel die Wahl
              schliesslich 1885 auf Arthur Cohn, der aus dem damals preussischen und heute polnischen Flatow stammte und in Berlin studiert hatte. Cohn hatte 1884 bei Theodor
              Mommsen, der 1902 für seine Arbeit zur Geschichte des antiken Roms den Literaturnobelpreis erhielt, promoviert und 1885 das Diplom des Rabbinerseminars in Berlin
              erhalten.
            </p>
            <app-img src="../../assets/teil-6/arthur-cohn.png">
              Das Porträt zeigt Rabbiner Arthur Cohn (1862-1926) ein Jahr vor seinem Tod. <br />
              Quelle: UBH Portr BS Cohn A 1862, 1
            </app-img>
            <p>
              Arthur Cohn war kein Elsässer, sorgte mit seiner konservativen Haltung aber dafür, dass liberale Reformbewegungen in der jüdischen Gemeinde in Basel nicht
              nachhaltigen erfolgreich blieben. Der Charakter der Basler Gemeinde war deshalb im Gegensatz zu vielen liberalen jüdischen Gemeinden in Deutschland orthodox geprägt.
              In Basel gründete Cohn Vereine und Institutionen, die sich dem Studium der jüdischen Religion widmeten. Während seiner Amtszeit weihte Cohn 1892 die vergrösserte
              Synagoge ein und eröffnete 1903 den neuen jüdischen Friedhof.
            </p>
            <p>
              Nach über vierzigjährigem Wirken verstarb Arthur Cohn 1926 im Amt. Auf ihn folgte Arthur Weil, der aus Frankreich stammte, sein Diplom aber am gleichen
              Rabbinerseminar wie sein Vorgänger erworben hatte.
            </p>
            <p>
              Rabbiner Arthur Cohn hat einen «berühmten»{' '}
              <a href="https://hls-dhs-dss.ch/de/articles/046832/2003-12-18/" target="_blank" rel="noopener noreferrer">
                Enkel
              </a>{' '}
              , der ein Jahr nach seinem Tod auf die Welt kam und den gleichen Namen trägt.{' '}
            </p>
            <h2>Mit welcher Tätigkeit stand Cohns Enkel in der Öffentlichkeit?</h2>
            <p>
              <ion-button color="primary" onClick={_ => this.successModal.open()}>
                Filmproduzent
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Modedesigner
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Luftfahrtpionier
              </ion-button>
            </p>
            <app-literatur
              items={[
                <Fragment>
                  Guth Biasini, Nadia: Arthur Cohn, der Rabbiner der Basler Gemeinde, in: Haumann, Heiko (Hg.): Der Erste Zionistenkongress von 1897 – Ursachen, Bedeutung,
                  Aktualität, Basel 1997, S. 168.
                </Fragment>,
                <Fragment>
                  Draeger, Urs: Die Israelitische Gemeinde Basel 1880-1933: soziale Struktur, Organisation und Konflikte einer Einheitsgemeinde. Lizentiatsarbeit, Universität
                  Freiburg/Schweiz, Freiburg 2001.
                </Fragment>,
              ]}
            ></app-literatur>
          </app-content>
        </ion-content>
        <app-dialog-fail ref={e => (this.failModal = e)} titleTxt={'Leider falsch'}>
          <p>Die richtige Antwort ist «Filmproduzent»</p>
        </app-dialog-fail>
        <app-dialog-success nr={nr} ref={e => (this.successModal = e)}>
          <ion-img src={getAssetPath('../../assets/hurray.gif')}></ion-img>
          <div class="ion-padding">Du hast Kapitel «{titles[nr]}» erfolgreich abgeschlossen&nbsp;!!</div>
        </app-dialog-success>
      </Fragment>
    );
  }
}
