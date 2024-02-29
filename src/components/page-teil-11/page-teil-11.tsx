import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';
import { openOutline } from 'ionicons/icons';
const nr = 11;
@Component({
  tag: 'page-teil-11',
  styleUrl: 'page-teil-11.css',
})
export class PageTeil11 {
  failModal: HTMLAppDialogFailElement;
  successModal: HTMLAppDialogSuccessElement;
  render() {
    return (
      <Fragment>
        <app-header headerTitle={titles[nr]}></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
             <h1 class="ion-hide-md-down">{titles[nr]}</h1>
            <p class="lead">
              Bâleph – Ein Streifzug durch Basels jüdische Geschichte.
              <br /> 13 Stationen in der Basler Innenstadt.
            </p>
            <p>
              Der Stadtrundgang Bâleph macht die jüdische Geschichte von Basel lebendig und virtuell sichtbar. Über den Link unten gelangst Du auf den Rundgang, der dich zu 13
              Stationen in der Stadt Basel führt – von der Gerbergasse hinauf zur Pfalz, vom Rhein über den Petersplatz zur Synagoge, über den Heuberg hinunter zum Barfüsserplatz.
            </p>
            <ion-card class="max-width-sm">
              <img
                alt="Bâleph - Ein Streifzug durch Basels jüdische Geschichte"
                src="https://media.izi.travel/53167cc8-64bd-48d3-a651-8629dfcfab53/a9bef305-819c-4c5b-89bc-ab0119671d44_800x600.jpg"
              />
              <ion-card-header>
                <ion-card-title>Bâleph</ion-card-title>
                <ion-card-subtitle>IZI.TRAVEL</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>Ein Streifzug durch Basels jüdische Geschichte</ion-card-content>
              <ion-button href="https://izi.travel/de/942d-baleph-ein-streifzug-durch-basels-judische-geschichte/de" fill="clear" target="_blank">
                Webseite öffnen
                <ion-icon slot="end" icon={openOutline}></ion-icon>
              </ion-button>
            </ion-card>
            <p>
              An den 13 Stationen werden Ereignisse und Personen beschrieben, die Einblicke in die Geschichte des jüdischen Basels ermöglichen. Der Rundgang kann rein virtuell
              begangen und gehört werden: Die Erzählung der 13 Stationen dauert rund 60 Minuten, der Rundgang in der Stadt etwa eineinhalb bis zwei Stunden.
            </p>
            <p>
              Die Historikerin Isabel Schlerkmann und die Archäologin Sabina Lutz haben den Rundgang «Bâleph – Ein Streifzug durch Basels jüdische Geschichte» 2014 konzipiert und
              umgesetzt.
            </p>
            <h2>Rätsel</h2>
            <p> Wie heisst die 1961 gegründete jüdische Primarschule? <br /> Die Antwort findest Du in der 8. Station des Rundgangs.</p>
            <p>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Arthur Cohn
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Moise Nordmann
              </ion-button>
              <ion-button color="primary" onClick={_ => this.successModal.open()}>
                Leo Adler
              </ion-button>
            </p>
          </app-content>
        </ion-content>
        <app-dialog-fail ref={e => (this.failModal = e)} titleTxt={'Leider falsch'}>
          <p>Die richtige Antwort ist «Leo Adler»</p>
        </app-dialog-fail>
        <app-dialog-success nr={nr} ref={e => (this.successModal = e)}>
          <ion-img src={getAssetPath('../../assets/hurray.gif')}></ion-img>
          <div class="ion-padding">Du hast Kapitel «{titles[nr]}» erfolgreich abgeschlossen&nbsp;!!</div>
        </app-dialog-success>
      </Fragment>
    );
  }
}
