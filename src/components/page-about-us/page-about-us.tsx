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
        <app-header headerTitle="Über diese App"></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            <h1>Über diese App</h1>
            <h2>Inhaltliche Umsetzung</h2>
            <p>
              <strong>Beni Pfister, lic. phil.</strong>
              <br />
              Historiker, Kurator, Mitautor Stadt Geschichte Basel, Mitbegründer der Fussballkulturbar didi:offensiv
              <br />
              Wissenschaftliche Recherche, Texte, Zusammenstellen Bildmaterial
            </p>

            <h2>Technische Umsetzung</h2>
            <p>
              <a href="https://kleiolab.ch/" target="_blank" rel="noreferrer">
                KleioLab GmbH
              </a>
            </p>
            <p>
              <strong>Jonas Schneider, M.A.</strong>
              <br />
              Historiker, Software Entwickler, Mitbegründer der KleioLab GmbH
              <br />
              Konzept, Design, Programmierung
            </p>

            <p>
              <strong>David Knecht, M.A.</strong>
              <br />
              Ökonom, Manager, Mitbegründer der KleioLab GmbH
              <br />
              Projektleitung
            </p>

            <h2>Auftrag und Finanzierung</h2>
            <p>
              <a href="https://stadtgeschichtebasel.ch/" target="_blank" rel="noreferrer">
                Stadt Geschichte Basel
              </a>
            </p>
            <p>
              <strong>Moritz Mähr, Dr. sc.</strong>
              <br />
              Leitung digital bei Stadt Geschichte Basel
              <br />
              Studierte Geschichte und Philosophie des Wissens, Informatik und Ökonomie in Zürich und Berlin.
            </p>

            <h2>Kooperation</h2>
            <p>
              <a href="https://www.juedisches-museum.ch/" target="_blank" rel="noreferrer">
                Jüdisches Museum Schweiz
              </a>
              <br />
            </p>
            <p>Bildmaterial und Belohung bei erfolgreich abgschlossenem Spiel.</p>

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
