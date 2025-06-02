import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';
const nr = 12;
@Component({
  tag: 'page-teil-12',
  styleUrl: 'page-teil-12.css',
})
export class PageTeil12 {
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
              Öffentlich-rechtlich anerkannt: <br />
              Die Entwicklung der jüdischen Bevölkerung bis heute
            </p>
            <p>
              Das Wachstum der jüdischen Bevölkerung in Basel ging auch im 20. Jahrhundert vorerst weiter. Von über 2400 Personen 1910 stieg die Zahl bis auf rund 3000 Menschen
              während des Zweiten Weltkriegs. Die jüdische Gemeinde in Basel kümmerte sich um zahlreiche jüdische Flüchtlinge, die ab 1933 aus dem nationalsozialistischen
              Deutschland nach Basel geflohen waren. In den Jahrzehnten nach Kriegsende verringerte sich die jüdische Bevölkerung in Basel hingegen kontinuierlich. Bis 1980 ging
              die Zahl auf etwa 2000 Jüdinnen und Juden zurück und halbierte sich bis 2020 auf 906 Personen. Gemäss Zahlen des Statistischen Amtes Basel-Stadt stieg die Anzahl 2021
              wieder leicht auf 961 Personen an.
            </p>
            <p>
              Eine Untersuchung der Wohnorte der Mitglieder der jüdischen Gemeinde zeigt auf, dass sich 1982 im Vergleich zu 1910 die Wohnorte etwas stärker in die Quartiere
              Gotthelf, Bachletten und St. Alban verschoben hatten. Vermehrt waren Jüdinnen und Juden zudem in die Vororte der Stadt gezogen, insbesondere in die Gemeinden
              Allschwil und Binningen. Der Autor Simon Stern stellte fest, dass zwar vermehrt Wohnorte in den äusseren Quartieren lagen, die meisten Jüdinnen und Juden aber
              weiterhin in der Umgebung des Zentrums um die Synagoge lebten.
            </p>
            <app-img src="../../assets/teil-12/karte.jpg">
              Die Karte (Stern, S. 123) zeigt die Wohnorte der Mitglieder der jüdischen Gemeinde Basel von 1910 und 1982 im Vergleich. Die Wohnorte verschoben sich vom Zentrum
              leicht in die äusseren Quartiere.
            </app-img>
            <p>
              Die Israelitische Gemeinde Basel (IGB) erhielt 1973 als erste jüdische Gemeinde der Schweiz die öffentlich-rechtliche Anerkennung. Damit wurde sie den christlichen
              Landeskirchen gleichgestellt. Die IGB deckt nur einen Teil der jüdischen Bevölkerung Basels ab, ist aber die mit Abstand grösste jüdische Gemeinde. 1927 hatte sich
              die orthodoxe Israelitische Religionsgemeinschaft (IRG) von der IGB abgespaltet und sich als privatrechtlicher Verein mit einer eigenen Synagoge an der Ahornstrasse
              konstituiert. 2004 gründeten liberale Juden den Verein Migwan. Das Spektrum innerhalb der jüdischen Bevölkerung umfasst heute mehrere Gemeinden und Gruppen mit
              liberaler, religiöser und orthodoxer Ausrichtung.
            </p>

            <h2>Stimmt folgende Aussage?</h2>
            <p>Die beiden Gemeinden Allschwil und Binningen befindet sich näher an den jüdischen Wohnorten in Basel als Bottmingen und Reinach.</p>
            <p>
              <ion-button color="primary" onClick={_ => this.successModal.open()}>
                Ja
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Nein
              </ion-button>
            </p>
            <app-literatur
              items={[
                <Fragment>Stern, Simon: Wohnplätze der Basler Juden 1910-1970, in: Regio Basiliensis 25/1984), Basel 1984. S. 119-127.</Fragment>,
                <Fragment>Statistisches Jahrbuch des Kantons Basel-Stadt 2023, S. 25.</Fragment>,
              ]}
            ></app-literatur>
          </app-content>
        </ion-content>
        <app-dialog-fail ref={e => (this.failModal = e)} titleTxt={'Leider falsch'}>
          <p>Die richtige Antwort ist A</p>
        </app-dialog-fail>
        <app-dialog-success nr={nr} ref={e => (this.successModal = e)}>
          <ion-img src={getAssetPath('../../assets/hurray.gif')}></ion-img>
          <div class="ion-padding">Du hast Kapitel «{titles[nr]}» erfolgreich abgeschlossen&nbsp;!!</div>
        </app-dialog-success>
      </Fragment>
    );
  }
}
