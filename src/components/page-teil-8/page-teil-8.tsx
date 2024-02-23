import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';

const nr = 8;
@Component({
  tag: 'page-teil-8',
  styleUrl: 'page-teil-8.css',
  // shadow: true,
})
export class PageTeil8 {
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
              «In Basel habe ich den Judenstaat gegründet» <br />
              Basel als Gastgeber der Zionistenkongresse
            </p>
            <p>
              Eigentlich sollte der erste Zionistenkongress gar nicht in Basel sondern in München stattfinden. Weil sich die jüdische Gemeinde der bayrischen Hauptstadt aber
              skeptisch zeigte, musste ein anderer Ort gesucht werden. Vom 29. bis 31. August 1897 trafen sich 200 Personen aus ganz Europa zum ersten Zionistenkongress in Basel.
              Die Basler Regierung hatte bei der Organisation mitgeholfen, in dem sie die Burgvogtei in Kleinbasel und den Musiksaal im Stadtcasino für Veranstaltungen zur
              Verfügung gestellt hatte. Auch die Bevölkerung reagierte überwiegend mit Sympathie. Der Zionismus, die Schaffung «einer gesicherten Heimstätte für das jüdische Volk
              in Palästina», die Theodor Herzl am ersten Kongress proklamiert hatte, stiess insbesondere in den pietistischen Kreisen der ‹Freunde Israels› auf Unterstützung. Am
              Schluss des ersten Kongresses 1897 dankte Theodor Herzl der «gastlichen Stadt» Basel, «die uns mit solchem Wohlwollen empfangen hat». Einige Tage nach dem Kongress
              schrieb er in sein Tagebuch: «In Basel habe ich den Judenstaat gegründet. Wenn ich das heute laut sagte, würde mir ein universelles Gelächter antworten. In fünf
              Jahren, jedenfalls in fünfzig, wird es Jeder einsehen».
            </p>
            <p>
              Die Basler Juden beeindruckte die Idee der Auswanderung nach Palästina hingegen wenig. Sie fühlten sich hier zuhause und spürten wenig Drang, die Heimat zu verlassen.
              1901 sandte die Basler Regierung erstmals ein offizielles Begrüssungsschreiben und empfing eine Delegation mit Herzl an der Spitze. Der freisinnige
              Regierungspräsident Heinrich David äusserte, der Zionismus sei «etwas Erhabenes», und er freute sich, «dass diese grosse, schöne Idee in Basel ein Heim gefunden hat».
              Die Kongresse dürften dazu beigetragen haben, dass sich die jüdische und die nicht-jüdische Bevölkerung von Basel näherkamen.
            </p>
            <p>
              Bis 1911 fanden sieben von zehn Zionistenkongressen in Basel statt. Danach verlor Basel als Austragungsort an Bedeutung. Ein zehntes und letztes Mal begrüsste Basel
              1946 Gäste des Kongresses.
            </p>

            <app-video>
              <iframe
                width="100%"
                height="100%"
                style={{ 'aspect-ratio': '16/9' }}
                src="https://www.youtube.com/embed/Sst6hx7WznY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullScreen
              ></iframe>
              <span slot="caption">
                Vom 29. bis 31. August 2022 jährte sich der Erste Zionistenkongress in Basel zum 125. Mal. Dort legte der Initiator Theodor Herzl den Grundstein für die Gründung
                Israels. Anlässlich des Jubiläums die Universität Basel mit Prof. Dr. Erik Petry die Spuren, die Herzl in Basel hinterlassen hat.
              </span>
            </app-video>

            <h2>In welchem Hotel übernachtete Theodor Herzl während des ersten Zionistenkongresses in Basel?</h2>
            <p>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Hotel Jura
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Hotel Bellevue
              </ion-button>
              <ion-button color="primary" onClick={_ => this.successModal.open()}>
                Hotel Drei Könige
              </ion-button>
            </p>

            <app-literatur
              items={[
                <Fragment>
                  Guth Biasini, Nadia: Basel und der Zionistenkongress, in Haumann, Heiko (Hg.): Der Erste Zionistenkongress von 1897 – Ursachen, Bedeutung, Aktualität, Basel 1997,
                  S. 131-140.
                </Fragment>,
                <Fragment>Haumann, Heiko (Hg.): Der Erste Zionistenkongress von 1897 – Ursachen, Bedeutung, Aktualität, Basel 1997.</Fragment>,
                <Fragment>
                  Heiko Haumann: Juden in Basel und Umgebung – Zur Geschichte einer Minderheit. Darstellung und Quellen für den Gebrauch an Schulen. Herausgegeben von den
                  Regierungsräten der Kantone Basel-Stadt und Basel-Landschaft. Basel 1999.
                </Fragment>,
              ]}
            ></app-literatur>
            <app-dialog-fail ref={e => (this.failModal = e)} titleTxt={'Leider falsch'}>
              <p>Die richtige Antwort ist «Hotel Drei Könige».</p>
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
