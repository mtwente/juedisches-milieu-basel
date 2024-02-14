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
        <app-header headerTitle="Belohnung"></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            <h1>Herzlichen Glückwunsch!</h1>

            <p>Als Belohnung für Ihre Leistungen erhalten Sie einen gratis Eintritt ins Jüdische Museum Schweiz! Präsentieren Sie einfach das folgende Codewort, wenn Sie das Museum besuchen:</p>
            <div class="coupon-wrapper">
              <div class="coupon">
                <div>Gratis Eintritt</div>
                <div>Jüdisches Museum Schweiz <span>Kornhausgasse 8, Basel</span></div>
                <div>
                  <div>CODEWORT</div>
                  <pre>«SchalomBasel2024»</pre>
                </div>
                <div>
                  <span>Gültig bis</span>{' '}
                  <span>31. Dezember 2024</span>
                </div>
                {/* <table>
                  <tr>
                    <td>Code</td>
                    <td>«SchalomBasel2024»</td>
                  </tr>
                  <tr>
                    <td>Gültig bis</td>
                    <td>31. Dezember 2024</td>
                  </tr>
                </table> */}
              </div>
            </div>
            <p>Das Jüdische Museumin Basel erwartet Sie mit faszinierenden Ausstellungen zur jüdischen Geschichte und Gegenwart. Setzen Sie die angefangene Reise fort!</p>

            <p>Vielen Dank für Ihre Teilnahme am Spiel und herzlichen Glückwunsch noch einmal zu Ihrem Erfolg!</p>
          </app-content>
        </ion-content>
      </Fragment>
    );
  }
}
