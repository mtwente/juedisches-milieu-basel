import { Component, Fragment, h } from '@stencil/core';
import { version, timestamp } from '../../buildinfo';
@Component({
  tag: 'page-about-us',
  styleUrl: 'page-about-us.css',
  shadow: false,
})
export class PageAboutUs {
  render() {
    return (
      <Fragment>
        <app-header headerTitle="Impressum"></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            <h1 class="ion-hide-md-down">Impressum</h1>
            <h2>Inhalte</h2>
            <p>
              <strong>Beni Pfister, lic. phil.</strong>
              <br />
              Historiker, Mitautor Band 6 von Stadt.Geschichte.Basel
              <br />
              Text- und Bildredaktion{' '}
            </p>

            <h2>App Design</h2>
            <p>
              <a href="https://kleiolab.ch/" target="_blank" rel="noreferrer">
                KleioLab GmbH
              </a>
            </p>
            <p>
              <strong>Jonas Schneider, M.A.</strong>
              <br />
              Historiker, Software Entwickler, Mitgründer KleioLab GmbH
              <br />
              Konzept, Design, Programmierung
            </p>

            <p>
              <strong>David Knecht, M.A.</strong>
              <br />
              Ökonom, Manager, Mitgründer KleioLab GmbH
              <br />
              Projektleitung
            </p>

            <h2>Auftraggeber</h2>
            <p>
              <a href="https://stadtgeschichtebasel.ch/" target="_blank" rel="noreferrer">
                Stadt.Geschichte.Basel
              </a>
            </p>
            <p>
              <strong>Moritz Mähr, Dr. sc.</strong>
              <br />
              Leitung digital bei Stadt.Geschichte.Basel
              <br />
              Studierte Geschichte und Philosophie des Wissens, Informatik und Ökonomie in Zürich und Berlin.
            </p>

            <h2>Dank</h2>
            <p>
              <a href="https://www.juedisches-museum.ch/" target="_blank" rel="noreferrer">
                Jüdisches Museum Schweiz
              </a>
              <br />
            </p>
            <p>Besten Dank dem Jüdischen Museum Schweiz für das Bildmaterial und die Belohnung bei erfolgreich abgeschlossenem Spiel in Form eines Gratiseintritts.</p>
            <p>
              <a href="https://www.geovistory.org/" target="_blank" rel="noreferrer">
                Geovistory
              </a>
              <br />
            </p>
            <p>Besten Dank dem Geovistory-Team fürs Bereitstellen der Infrastruktur zur Erstellung der Karte in «Zentren um 1910».</p>

            <p style={{ 'margin-top': '8rem' }}>
              <ion-note>App Version {version}</ion-note>
              <br />
              <ion-note>Erstellt am {timestamp}</ion-note>
            </p>
          </app-content>
        </ion-content>
      </Fragment>
    );
  }
}
