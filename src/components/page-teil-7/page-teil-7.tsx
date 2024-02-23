import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';
const nr = 7;
@Component({
  tag: 'page-teil-7',
  styleUrl: 'page-teil-7.css',
})
export class PageTeil7 {
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
              Lehrstück erfolgreicher politischer Arbeit:
              <br />
              Die Basler Juden erhalten einen eigenen Friedhof
            </p>
            <p>
              Rud hundert Jahre lang bestattete die jüdische Gemeinde von Basel ihre Toten im benachbarten Hégenheim im Elsass. Dort ist seit 1673 ein jüdischer Friedhof in
              Betrieb. Der Wunsch nach einem eigenen Friedhof auf Basler Boden verstärkte sich, als sich die Zusammensetzung der jüdischen Gemeinde durch Zuwanderung veränderte und
              nicht mehr ausschliesslich elsässisch-geprägt war. Ausserdem vergrösserte sich der bürokratische und finanzielle Aufwand für eine Bestattung im Ausland.{' '}
            </p>
            <app-img src="../../assets/teil-7/friedhof-1.jpg">
              Auf dem jüdischen Friedhof in Hégenheim wurden bis 1903 auch Basler Jüdinnen und Juden begraben.
              <br /> Bild zvg
            </app-img>
            <p>
              Bis 1903 der eigene Friedhof an der heutigen Theodor Herzl-Strasse in Betrieb genommen werden konnte, war ein langer Weg politischer Arbeit nötig. Zwei Petitionen an
              den Regierungsrat wurden 1878 und 1888 mit der Begründung abgelehnt, dass die öffentlichen Friedhöfe auch den Juden zur Verfügung stünden und für das Bestattungswesen
              in Basel die Gesundheitsbehörden zuständig seien. Eine Benutzung der öffentlichen Friedhöfe war den Juden aber aus religiösen Gründen nicht möglich. Das Verbot, ein
              Grab zu öffnen und damit die Ruhe der Toten zu stören, ist ein zentraler Aspekt der jüdischen Glaubenslehre. Gräber auf öffentlichen Friedhöfen hingegen konnten nach
              einigen Jahren aufgehoben werden.
            </p>
            <app-img style={{maxWidth:'450px'}} src="../../assets/teil-7/friedhof-2.jpg">
              Grossrat Nathan Höchstetter-Levi starb 1909 und erhielt als einer der ersten einen Grabstein auf dem neuen jüdischen Friedhof in Basel.
              <br /> Bild zvg
            </app-img>
            <p>
              Die jüdische Gemeinde hatte aus den abgelehnten Petitionen ihre Lehren gezogen. 1901 startete ein Initiativkomitee mit Präsident Salomon Bloch-Roos einen neuen
              Anlauf. Das Komitee engagierte mit dem Rechtsanwalt und Politiker Emil Göttisheim einen Berater, der bei der Ausarbeitung einer neuen Petition mithalf. Im Vorfeld
              wurden umfangreiche rechtliche Abklärungen getroffen, mögliche Standorte des Friedhofs evaluiert und zahlreiche Gespräche mit dem zuständigen Sanitätsdepartement und
              weiteren Personen geführt. Das sorgfältige Vorgehen zahlte sich aus. Die Regierung arbeitete einen Ratschlag aus, in dem sie die Genehmigung einer Ausnahmebewilligung
              für einen eigenen Friedhof befürwortete. Als sich im Grossen Rat eine kritische Haltung insbesondere bei den Freisinnigen abzeichnete, verschickte das
              Initiativkomitee ein Schreiben an alle Grossräte und organisierte eine Informationsveranstaltung für die freisinnige Grossräte. Referent Emil Göttisheim, selber
              freisinniger Grossrat, konnte die Anwesenden überzeugen.
            </p>
            <p>
              In der Grossratssitzung vom 10. April 1902 war das Geschäft deshalb schnell behandelt und wurde ohne grosse Diskussion angenommen. Die Grossräte gewichteten die
              Religionsfreiheit höher als die strikte Einhaltung des Gesetzes, das dem Staat die alleinige Hoheit über das Bestattungswesen vorschrieb.
            </p>
            <p>
              Die Basler Chronik vermerkt den Tod von Nathan Höchstetter:{' '}
              <a
                href="https://www.baslerstadtbuch.ch/chronik/1909/06/07/es-stirbt-nathan-hoechstetter-levy-der-eine-reihe-von-jahren-die-sozialdemokratische-partei-im.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                hier.
              </a>
            </p>
            <h2>Für welche Partei sass Nathan Höchstetter mehrere Jahre im Grossen Rat?</h2>
            <p>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Freisinnig-Demokratische Partei
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Liberale Partei
              </ion-button>
              <ion-button color="primary" onClick={_ => this.successModal.open()}>
                Sozialdemokratische Partei
              </ion-button>
            </p>
            <app-literatur
              items={[
                <Fragment>Bloch-Roos, Salomon: Wie die israelitische Gemeinde in Basel zu einem eigenen Friedhof gekommen ist. Eine Berichterstattung. Basel 1902.</Fragment>,
                <Fragment>
                  Draeger, Urs: Die Israelitische Gemeinde Basel 1880-1933: soziale Struktur, Organisation und Konflikte einer Einheitsgemeinde. Lizentiatsarbeit, Universität
                  Freiburg/Schweiz, Freiburg 2001.
                </Fragment>,
              ]}
            ></app-literatur>
          </app-content>
        </ion-content>
        <app-dialog-fail ref={e => (this.failModal = e)} titleTxt={'Leider falsch'}>
          <p>Die richtige Antwort ist «Sozialdemokratische Partei»</p>
        </app-dialog-fail>
        <app-dialog-success nr={nr} ref={e => (this.successModal = e)}>
          <ion-img src={getAssetPath('../../assets/hurray.gif')}></ion-img>
          <div class="ion-padding">Du hast Kapitel «{titles[nr]}» erfolgreich abgeschlossen&nbsp;!!</div>
        </app-dialog-success>
      </Fragment>
    );
  }
}
