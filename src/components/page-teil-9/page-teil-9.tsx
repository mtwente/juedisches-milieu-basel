import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';
const nr = 9;
@Component({
  tag: 'page-teil-9',
  styleUrl: 'page-teil-9.css',
})
export class PageTeil9 {
  failModal: HTMLAppDialogFailElement;
  successModal: HTMLAppDialogSuccessElement;
  render() {
    return (
      <Fragment>
        <app-header headerTitle={titles[nr]}></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
             {/* <h1>{titles[nr]}</h1> */}
            <p class="lead">
              Der Trödler aus dem Elsass <br />
              Isaac Ségal (1831-1916) wandert von Hégenheim nach Basel ein
            </p>
            <p>
              Isaac Ségal kam am 27. April 1831 in Hégenheim zur Welt. Rund dreissig Jahre später zog er nach Basel und soll hier 1862 sein Geschäft für Antiquitäten gegründet
              haben. Offiziell gemeldet in der Stadt war Isaac Ségal aber erst seit dem 27. März 1867. Das Basler Adressbuch von 1868 listet Ségal als Trödler an der
              Schützenmattstrasse 10 auf. Er versorgte die Quartierbewohnerinnen und -bewohner mit Antiquitäten und Möbeln des alltäglichen Gebrauchs. Nach der Hochzeit mit Rebecca
              Guggenheim (1841-1906) zog das Ehepaar an den Spalenberg. Isaac Ségal unterstützte das 1874 in Hégenheim gegründete israelitische Alters- und Pflegeheim jahrelang
              finanziell.{' '}
            </p>
            <app-img style={{ 'max-width': '500px' }} src="../../../assets/teil-9/berthold-segal.jpg">
              Berthold Ségal kam 1873 auf die Welt und erhielt 1904 das Basler Bürgerrecht. Bild: Privatarchiv Antiquités Ségal&Selig.
            </app-img>
            <p>
              Sein 1873 geborener Sohn Berthold Ségal erhielt 1904 das Basler Bürgerrecht. Ségal Junior war Mitglied des israelitischen Männervereines Dowor Tow und vertrat diesen
              als Delegierter in der Armenkommission der Israelitischen Gemeinde Basel. Spätestens nach dem Tod von Isaac Ségal am 6. Oktober 1916 hatte Berthold Ségal das Geschäft
              übernommen. Er spezialisierte das Antiquariat, das sich inzwischen am Fischmarkt befand, auf wertvolle Antiquitäten. Unterstützung erhielt er von seiner Frau Betty,
              geborene Kaufmann. In den Jahren nach dem Ersten Weltkrieg betreute Ségal als Experte Auktionen von teilweise grossen Sammlungen, die aus wirtschaftlichen Gründen
              verkauft werden mussten.{' '}
            </p>
            <p>
              Das Antiquariat begann in den letzten Jahren des 19. Jahrhunderts enge Geschäftsbeziehungen zu Museen aufzunehmen. Das Historische Museum Basel etwa erwarb bei Ségal
              mehrfach Objekte für die eigene Sammlung. Ein erster Kauf – ein englisches Rahm- und Milchkännchen sowie ein Teller – ging 1896 über die Bühne.
            </p>
            <app-video>
              <iframe
                width="100%"
                height="100%"
                style={{ 'aspect-ratio': '16/9' }}
                src="https://www.srf.ch/play/embed?urn=urn:srf:video:e5f5d2ef-2f26-440d-80fd-1a28dea23d58&startTime=1692&subdivisions=false"
                allowFullScreen
                allow="geolocation *; autoplay; encrypted-media"
              ></iframe>
              <span slot="caption">«Sternstunde Religion» des Schweizer Fernsehen mit Ralph Weill vom 27. Februar 2005</span>
            </app-video>
            <p>
              In der Sendung «Sternstunde Religion» des Schweizer Fernsehen vom 27. Februar 2005 sprach der Soziologe Ralph Weill – anlässlich des 200-Jahr-Jubiläums der
              Israelitischen Gemeinde Basel (IGB) – über die 800-jährige jüdischen Geschichte von Basel. Ab Minute 28:00 erzählt Weill, dass die Region zwischen Jura, Vogesen und
              Schwarzwald früher eine einheitliche Kulturregion mit einer einheitlichen jüdischen Gemeinschaft gewesen sei. Diese teile sich nun in drei sehr verschiedene Gruppen
              auf: Eine elsässische, ausschliesslich französisch sprechende Gruppe mit vielen aus Nordafrika eingewanderten Juden, eine gemischte Gruppe in Basel mit einem
              elässisch-badischen und osteuropäischen Hintergrund. Auch in Südbaden gebe es wieder eine jüdische Bevölkerung.
            </p>
            <h2>Welche Herkunft haben diese südbadischen Juden?</h2>
            <p>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Ungarisch
              </ion-button>
              <ion-button color="primary" onClick={_ => this.successModal.open()}>
                Russisch
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Amerikanisch
              </ion-button>
            </p>
          </app-content>
        </ion-content>
        <app-dialog-fail ref={e => (this.failModal = e)} titleTxt={'Leider falsch'}>
          <p>Die richtige Antwort ist Russisch</p>
        </app-dialog-fail>
        <app-dialog-success nr={nr} ref={e => (this.successModal = e)}>
          <ion-img src={getAssetPath('../../assets/hurray.gif')}></ion-img>
          <div class="ion-padding">Du hast Kapitel «{titles[nr]}» erfolgreich abgeschlossen&nbsp;!!</div>
        </app-dialog-success>
      </Fragment>
    );
  }
}
