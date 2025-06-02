import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';
import { queryTabs } from '../app-dialog-success/queryTabs';

const nr = 10;
@Component({
  tag: 'page-teil-10',
  styleUrl: 'page-teil-10.css',
})
export class PageTeil10 {
  failModal: HTMLAppDialogFailElement;
  successModal: HTMLAppDialogSuccessElement;
  render() {
    return (
      <Fragment>
        <app-header headerTitle={titles[nr]}></app-header>
        <ion-content id="main-menu">
          <div class={'ion-padding'}>
            <h1 class="ion-hide-md-down">{titles[nr]}</h1>
            <p class={'lead'}>Ostjüdische Einwanderung und die Zentren der Wohnorte um 1910</p>

            <p>
              Ein erstes Zentrum jüdischen Lebens hatte sich in der Altstadt rund um den Unteren Heuberg gebildet, wo seit 1850 eine kleine Synagoge in Betrieb war. Mit dem Bau der
              grossen Synagoge 1868 an der Leimenstrasse entstand ein neuer Ort, der für viele Menschen zum neuen Lebensmittelpunkt wurde.{' '}
            </p>
            <p>
              Um die Jahrhundertwende kamen viele osteuropäische Juden, die vor Pogromen geflüchtet waren, nach Basel. Für sie war die Stadt häufig eine Zwischenstation auf dem Weg
              nach Westen. Mehrere Tausend Ostjuden passierten ab 1906 Basel, wo sie sich oft einen oder mehrere Tage aufhielten. Einige osteuropäische Jüdinnen und Juden liessen
              sich in Basel nieder. 1910 lebten rund 450 Juden russischer und polnisch-russischer Herkunft im Kanton, was rund einem Fünftel der jüdischen Bevölkerung entsprach.
              Viele wohnten aufgrund der günstigen Mieten in Kleinbasel und eröffneten an der Florastrasse einen Gebetraum. Die osteuropäischen Juden unterschieden sich nicht nur
              kulturell, sondern auch mit ihren Berufen – überdurchschnittlich viele waren Handwerker – von den bereits ansässigen Juden. Deshalb stiessen sie bei vielen auf
              Skepsis.
            </p>
            <p>
              Der jüdische Frauenverein veröffentlichte um 1910 eine Liste mit jüdischen Handwerkerinnen und Handwerker. Die Lokalisierung der Wohnorte dieser Schuh- und
              Uhrenmacher, Näherinnen, Schneiderinnen, Coiffeusen und Papier- und Ölhändler macht Zentren jüdischen Lebens sichtbar. Die Wohnorte ballten sich in der Altstadt und
              im Hegenheimerquartier. Vereinzelte Handwerkerinnen und Handwerker wohnten im Kleinbasel.{' '}
            </p>
            <p>
              Die jüdische Buchhandlung Goldschmidt, 1902 vom gebürtigen Litauer Pessach Meir Goldschmidt am Heuberg eröffnet, befand sich ebenso in der Grossbasler Altstadt wie
              die beiden koscheren Hotels und Restaurants von Mathilde Braunschweig-Ebstein (Hotel Kahn-Braunschweig) und Liselotte Simon-Wunderlin (Hotel Simon). Hier trafen sich
              die jüdischen Vereine zu Versammlungen und Sitzungen.{' '}
            </p>
          </div>
          <app-video class={'unrestricted-width'} style={{ maxWidth: '1000px', margin: '0 auto', padding: '1rem' }}>
            <geov-yasgui
              queryTabs={queryTabs}
              style={{ background: '#fff', height: '400px' }}
              plugins={new Set(['mapCircles'])}
              defaultPlugin="mapCircles"
              collapse={true}
              hideYasqueToggle={true}
              pluginConfig={{
                mapCircles: {
                  disableScrollZoom: true,
                  displayMapNavigationControls: true,
                  maxZoom: 25,
                  radiusMin: 4,
                  radiusMax: 25,
                },
              }}
            ></geov-yasgui>
            <div class={'restricted-width'} slot="caption">
              Karte basierend auf{' '}
              <a href="https://www.geovistory.org/project/1719422" target="_blank" rel="noopener noreferrer">
                «Jüdische & katholische Zentren Basels»
              </a>
              , umgesetzt mit Geovistory.
            </div>
          </app-video>
          <div class="ion-padding-start ion-padding-end ion-padding-bottom">
            <p>
              Die dunkelblauen Punkte auf der Karte zeigen die Wohnorte der Gründungsmitglieder des israelitischen Männervereins Dowor Tow (1857). Die hellblauen Punkte zeigen die
              Wohnorte von jüdischen Handwerkerinnen und Handwerker um 1910 anhand einer Liste, die der jüdische Frauenverein erstellt hatte. Im Vergleich zeigt sich, dass sich um
              1910 Wohnorte zusätzlich zur Altstadt auch im Hegenheimerquartier ballten. Nur vereinzelt lebten Personen hingegen in Kleinbasel.
            </p>
            <h2>Rätsel</h2>
            <p>Maurice Goldstein wohnte um 1910 am Bläsiringweg 15 in Kleinbasel. Welchen Beruf übte er aus?</p>
            <p>
              <ion-button color="primary" onClick={_ => this.successModal.open()}>
                Gummischuhhändler
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Uhrenmacher
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Herrenschneider
              </ion-button>
            </p>

            <app-literatur
              items={[
                <Fragment>
                  Gerber, Brigitta: «Nicht aber für den Fall einer etwaigen Verheiratung mit einem Nichtberechtigten»! – Arbeits- und Niederlassungsbewilligungen mit Vorbehalten,
                  in: Verein Frauenstadtrundgang Basel (Hg.): Geschichten aus der Empore: auf den Spuren jüdischer Frauen in Basel, Basel 1999, S. 79-95.
                </Fragment>,
                <Fragment>Haumann, Heiko (Hg.): Acht Jahrhunderte Juden in Basel, Basel 2005.</Fragment>,
                <Fragment>
                  Kury, Patrick: Ostjudenmigration nach Basel, 1890-1930 : «Man akzeptierte uns nicht, man tolerierte uns!» Lizenziatsarbeit, Universität Basel, Basel 1994.
                </Fragment>,
                <Fragment>
                  Kury, Patrick: «Fremd und rückständig»: Ostjuden in Basel um 1900, in: Haumann, Heiko (Hg.): Der Erste Zionistenkongress von 1897 – Ursachen, Bedeutung,
                  Aktualität, Basel 1997, S. 197-201.
                </Fragment>,
              ]}
            ></app-literatur>
          </div>
        </ion-content>
        <app-dialog-fail ref={e => (this.failModal = e)} titleTxt={'Leider falsch'}>
          <p>Die richtige Antwort ist «Gummischuhhändler»</p>
        </app-dialog-fail>
        <app-dialog-success nr={nr} ref={e => (this.successModal = e)}>
          <ion-img src={getAssetPath('../../assets/hurray.gif')}></ion-img>
          <div class="ion-padding">Du hast Kapitel «{titles[nr]}» erfolgreich abgeschlossen&nbsp;!!</div>
        </app-dialog-success>
      </Fragment>
    );
  }
}
