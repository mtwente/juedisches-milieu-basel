import { Component, Fragment, h } from '@stencil/core';
@Component({
  tag: 'page-gratification',
  styleUrl: 'page-gratification.css',
})
export class PageGratification {
  failModal: HTMLAppDialogFailElement;
  successModal: HTMLAppDialogSuccessElement;
  render() {
    return (
      <Fragment>
        <app-header headerTitle="Auflösung"></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            <h1>Herzlichen Glückwunsch!</h1>
            <p>Du hast das Puzzle gelöst. </p>
            <p>
              Du gewinnst einen Gratiseintritt in das{' '}
              <a href="https://www.juedisches-museum.ch" target="_blank" rel="noopener noreferrer">
                Jüdische Museum der Schweiz
              </a>{' '}
              in Basel. Das Museum wurde 1966 als erstes jüdisches Museum im deutschsprachigen Raum eröffnet. Mit folgendem Code erhältst Du kostenlosen Eintritt ins Museum:
            </p>
            <div class="coupon-wrapper">
              <div class="coupon">
                <div>Gratis Eintritt</div>
                <div>
                  Jüdisches Museum Schweiz <span>Kornhausgasse 8, Basel</span>
                </div>
                <div>
                  <div>CODEWORT</div>
                  <pre>«SchalomBasel2024»</pre>
                </div>
                <div>
                  <span>Gültig bis</span> <span>31. Dezember 2024</span>
                </div>
              </div>
            </div>
            <h2>Zum Auflösungsbild</h2>
            <app-img src="../../assets/puzzle.jpg">
              Das abgebildete Gemälde «Jom Kippur in der Synagoge von St. Gallen», 1912, von Otto Wyler ist in der Ausstellung des Jüdischen Museums der Schweiz zu sehen (Signatur
              JMS 1969).
            </app-img>
            <p>
              Jom Kippur ist ein Versöhnungsfest, das zehn Tage nach dem Beginn des jüdischen Kalenderjahres gefeiert wird. An diesem Tag fasten religiöse Jüdinnen und Juden. Sie
              denken an das vergangene und an das kommende Jahr und versöhnen sich mit Gott und mit ihren Mitmenschen. Die Gemeinde versammelt sich in der Synagoge zum
              Gottesdienst.
            </p>
            <p>
              Der Feiertag endet mit dem Tönen eines Schofars, eines Widderhorns. Die Israelitische Gemeinde Basel feierte 2023 Jom Kippur mit einem gemeinsamen «Anbeissen» nach
              dem Fastentag.
            </p>
            <p>Vielen Dank für Deine Teilnahme am Spiel und herzlichen Glückwunsch noch einmal zu Deinem Erfolg!</p>
          </app-content>
        </ion-content>
      </Fragment>
    );
  }
}
