import { Animation } from '@ionic/core';
import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';

const nr = 4;
@Component({
  tag: 'page-teil-4',
  styleUrl: 'page-teil-4.css',
  // shadow: true,
})
export class PageTeil4 {
  failModal: HTMLAppDialogFailElement;
  successModal: HTMLAppDialogSuccessElement;
  successAnimation: Animation;
  render() {
    return (
      <Fragment>
        <app-header headerTitle={titles[nr]}></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            {/* <h1>{titles[nr]}</h1> */}
            <p class="lead">
              Zentren des jüdischen Lebens <br />
              Das Vereinswesen im jüdischen Milieu
            </p>
            <p>
              Die Jüdinnen und Juden organisierten sich als religiöse Minderheit in einem eigenen Milieu mit Vereinen und Institutionen. Das soziale und kulturelle Leben fand in
              religiösen, fürsorgerischen, politischen und Sportvereinen statt. Dabei war die religiöse Identität wichtiger als die Zugehörigkeit zu einer bestimmten Schicht.
            </p>
            <p>
              In der Altstadt entstand am Unteren Heuberg ein erstes Zentrum jüdischen Lebens. Ein Warenlager wurde 1850 in eine kleine Synagoge umfunktioniert. Gründungsmitglieder
              des <a href="https://www.geovistory.org/project/1719422/page/i1929590?p=1719422" target="_blank" rel="noopener noreferrer">Männervereins Dowor Tow</a> wohnten in unmittelbarer Umgebung, an der Hutgasse, am Spalenberg oder an der Schützenmattstrasse. Mit dem Bau der Synagoge 1868 an der
              Leimenstrasse verlagerte sich das Zentrum zunehmend in dieses Quartier und ins Hegenheimerquartier.
            </p>
            <app-img src={getAssetPath('../../assets/teil-4/bild1.png')}>
              Quelle: StaBS BILD Schn. 142 <br />
              Das Bild von Johann Jakob Schneider entstand 1879. Der Blick führt in den unteren Heuberg zur alten Synagoge vom Gemsberg her.
            </app-img>
            <app-img src={getAssetPath('../../assets/teil-4/bild2.png')}>Quelle: StaBS NEG 1224 (Aufnahme von 1895).</app-img>
            <p>
              Die Krankenpflege und die finanzielle Unterstützung von bedürftigen Mitgliedern und das Einhalten von Ritualen nach dem Tod bildeten die Kernaufgaben der jüdischen
              Frauen- und Männervereine. Einerseits ging es darum, die traditionelle Totenwache und Totenwaschung durchzuführen, andererseits Mitgliedern bei der Bestattung von
              Angehörigen unter die Arme zu greifen. Der Jüdische Frauenverein (1834), der Männerverein Dowor Tow (1857), der Verein Espérance für junge unverheiratete Männer
              (1866) und die Union israélite Chevroh Ez Chajim für junge unverheiratete Männer (1880) stellten sich diesen Aufgaben. Dem Frauenverein, dem ältesten jüdischen Verein
              in Basel, kam dabei eine spezielle Bedeutung zu, weil Frauen in den meisten Fällen den Haushalt führten und damit für die Einhaltung der religiösen Gesetze
              verantwortlich waren. Der Frauenverein engagierte sich auch in der Bildungsförderung und finanzierte um die
              Jahrhundertwende Ferienaufenthalte für arme jüdische Schulkinder.
            </p>
            <p>
              1903 fand am Zionistenkongress ein internationales jüdisches Schauturnen statt, das auch die Basler Juden inspirierte. Aufbauend auf ersten zaghaften Versuchen
              gründete sich 1914 der ‹Jüdische Turnverein Basel›. Trainiert wurde in der Turnhalle des Leonhardschulhauses.
            </p>

            <h2>Wie hiess der gesuchte Mann?</h2>
            <p>Im Haus zum Schwarzen Ritter direkt hinter dem Gemsbrunnen betrieb ein Gründungsmitglied des Männervereins Dowor Tow ein Lithografie-Geschäft.</p>
            <p>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Arthur Wolf
              </ion-button>
              <ion-button color="primary" onClick={_ => this.successModal.open()}>
                Georg Wolf
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Emil Lévy
              </ion-button>
            </p>
            <app-literatur
              items={[
                <Fragment>Wecker, Regina: Zwischen Ökonomie und Ideologie. Arbeit im Lebenszusammenhang von Frauen im Kanton Basel-Stadt 1870-1910, Zürich 1997.</Fragment>,
                <Fragment>Weill, Jeremy: 100 Jahre Jüdischer Turnverein Basel, Saarwellingen 2014.</Fragment>,
              ]}
            ></app-literatur>

            <app-dialog-fail ref={e => (this.failModal = e)} titleTxt={'Leider falsch'}>
              <p>Die richtige Antwort ist «Georg Wolf».</p>
            </app-dialog-fail>
            <app-dialog-success nr={nr} ref={e => (this.successModal = e)}>
              <ion-img src={getAssetPath('../../assets/hurray.gif')}></ion-img>
              <div class="ion-padding">Du hast Kapitel «{titles[nr]}» erfolgreich abgeschlossen&nbsp;!!</div>
            </app-dialog-success>
          </app-content>
        </ion-content>
        <app-footer></app-footer>
      </Fragment>
    );
  }
}
