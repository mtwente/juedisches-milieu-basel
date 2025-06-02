import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';
const nr = 2;
@Component({
  tag: 'page-teil-2',
  styleUrl: 'page-teil-2.css',
})
export class PageTeil2 {
  failModal: HTMLAppDialogFailElement;
  successModal: HTMLAppDialogSuccessElement;
  render() {
    return (
      <Fragment>
        <app-header headerTitle={titles[nr]}></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            <h1 class="ion-hide-md-down">Jüdisches Leben in Basel</h1>
            <p class={'lead'}>Drei jüdische Gemeinden in 800 Jahren</p>
            <p>
              In den letzten 800 Jahren gab es in Basel drei jüdische Gemeinden. Nach der Auslöschung der ersten Gemeinde durch ein Pogrom und dem schnellen Verschwinden einer
              zweiten im Mittelalter bildete sich zu Beginn des 19. Jahrhunderts eine dritte jüdische Gemeinde. Diese besteht bis heute.{' '}
            </p>
            <p>
              Die Mitglieder der ersten jüdischen Gemeinde wohnten zwischen Barfüsserplatz und Marktplatz. Viele arbeiteten im Geldwechsel- und Kreditgeschäft, dessen Ausübung den
              Christen verboten war. Ein Geschäftspartner war etwa Bischof Heinrich von Thun, der 1223 den Münsterschatz als Sicherheit für ein Darlehen gab, mit dem er wohl den
              Bau der Mittleren Brücke finanzieren konnte. Die Synagoge der ersten Gemeinde befand sich an der Gerbergasse, der Friedhof lag beim Kollegiengebäude der Universität
              Basel am Petersplatz. Als eine Pestwelle Europa erfasste, wurde die jüdische Bevölkerung zum Sündenbock gemacht. Auch Basel ging gewalttätig gegen die jüdischen
              Mitmenschen vor. Während der Fasnachtszeit, im Januar 1349, wurden alle Jüdinnen und Juden, die nicht geflohen waren, auf einer Insel im Rhein verbrannt.{' '}
            </p>
            <p>
              Ein halbes Jahrhundert später erhielt Basel eine zweite jüdische Gemeinde mit einer Synagoge an der Grünpfahlgasse. Bereits nach wenigen Jahren verschwand diese aber
              wieder. Eine offizielle Verfolgung oder Ausweisung war nicht der Grund. Vielmehr floh die jüdische Bevölkerung wohl aus der Stadt, weil sie sich nicht sicher fühlten
              und eine Verfolgung fürchteten. Denn Bruno von Rappoltstein, Herrscher von Ribeauvillé, hatte 1397 Jüdinnen und Juden unter Folter gezwungen, das Vergiften von
              Brunnen zu gestehen. Dabei war auch der Name eines Basler Juden genannt worden.{' '}
            </p>
            <app-video>
              <iframe
                width="100%"
                height="100%"
                style={{ 'aspect-ratio': '16/9' }}
                src="https://www.srf.ch/play/embed?urn=urn:srf:video:00f8e25c-099a-4dcf-b6aa-49495936c76c&subdivisions=false"
                allowFullScreen
                allow="geolocation *; autoplay; encrypted-media"
              ></iframe>
              <span slot="caption">«Schweiz Aktuell» des Schweizer Fernsehen vom 28. August 1997</span>
            </app-video>
            <p>
              Das Schweizer Fernsehen berichtete in der Sendung «Schweiz Aktuell» von 28. August 1997 über das Leben der Juden in Basel. Darin wird auch beschrieben, wo sich heute
              einzelne Grabsteine des Friedhofs der ersten jüdischen Gemeinde befinden.{' '}
            </p>
            <h2>Rätsel</h2>
            <p>In welchem Museum können die Grabsteine besichtigt werden?</p>
            <p>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Historisches Museum Basel
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Museum der Kulturen Basel
              </ion-button>
              <ion-button color="primary" onClick={_ => this.successModal.open()}>
                Jüdisches Museum der Schweiz
              </ion-button>
            </p>
            <app-literatur
              items={[
                <Fragment>
                  Haumann, Heiko: Juden in Basel und Umgebung – Zur Geschichte einer Minderheit. Darstellung und Quellen für den Gebrauch an Schulen, Herausgegeben von den
                  Regierungsräten der Kantone Basel-Stadt und Basel-Landschaft, Basel 1999.
                </Fragment>,
                <Fragment>Haumann, Heiko (Hg.): Acht Jahrhunderte Juden in Basel, Basel 2005.</Fragment>,
              ]}
            ></app-literatur>
          </app-content>
        </ion-content>
        <app-dialog-fail ref={e => (this.failModal = e)} titleTxt={'Leider falsch'}>
          <p>Die richtige Antwort ist «Jüdisches Museum der Schweiz»</p>
        </app-dialog-fail>
        <app-dialog-success nr={nr} ref={e => (this.successModal = e)}>
          <ion-img src={getAssetPath('../../assets/hurray.gif')}></ion-img>
          <div class="ion-padding">Du hast Kapitel «{titles[nr]}» erfolgreich abgeschlossen&nbsp;!!</div>
        </app-dialog-success>
      </Fragment>
    );
  }
}
