import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';
const nr = 5;
@Component({
  tag: 'page-teil-5',
  styleUrl: 'page-teil-5.css',
})
export class PageTeil5 {
  failModal: HTMLAppDialogFailElement;
  successModal: HTMLAppDialogSuccessElement;
  render() {
    return (
      <Fragment>
        <app-header headerTitle={titles[nr]}></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
            <h1 class="ion-hide-md-down">{titles[nr]}</h1>
            <p class={'lead'}>Die Synagoge an der Leimenstrasse</p>
            <p>
              Die Mitglieder der dritten jüdischen Gemeinde, die sich ab etwa 1805 gebildet hatte, trafen sich für mehrere Jahrzehnte in Privatwohnungen zum Gebet. 1850 nahm die
              erste Synagoge am Unteren Heuberg den Betrieb auf. Die kleine Synagoge befand sich in einer umgebauten Liegenschaft. 16 Jahre später nahm Hermann Gauss die Planung
              einer «richtigen» Synagoge in Angriff. Der deutsche Architekt war 1858 als Angestellter des technischen Büros der Schweizerischen Centralbahn nach Basel gekommen und
              hatte sich zwei Jahre später selbständig gemacht. Gauss liess sich bei der Planung des Kuppelbaus vom orientalischen Stil der Synagogen von Dresden und Stuttgart
              inspirieren.{' '}
            </p>
            <app-img src="../../assets/teil-5/synagoge-1.png">
              Die von Architekt Hermann Gauss gebaute Synagoge an der Leimenstrasse war mit seinem Kuppelbau ein architektonischer Farbtupfer in der Stadt. Die Aufnahme entstand
              zwischen 1868 und 1880.
              <br />
              Quelle: Staatsarchiv Basel-Stadt, SMM Inv.2016.1.17.3
            </app-img>
            <p>
              Bei der Eröffnung der Synagoge an der Ecke Leimenstrasse/Eulerstrasse am 9. September 1868 war der Vorsteher des Basler Justizdepartements und spätere freisinnige
              Bundesrat Ernst Brenner Ehrengast. Zwei Jahrzehnte später beschlossen die Mitglieder der Israelitischen Gemeinde Basel eine Vergrösserung der Synagoge als Reaktion
              auf das Anwachsen der jüdischen Gemeinde. Die Kapazität wurde von 300 auf 700 Plätze erhöht. Architekt Paul Reber hatte die am 15. September 1892 eröffnete erweiterte
              Synagoge um eine zweite Kuppel und einen Langbau ergänzt.{' '}
            </p>

            <app-img src="../../assets/teil-5/der-israelit.png">Kurze Nachricht in der Zeitschrift «Der Israelit» vom 30. September 1868.</app-img>

            <p>
              Paul Reber (1835-1908) war nicht nur Architekt, sondern auch Politiker. Er sass mehrere Jahrzehnte im Grossen Rat und im Bürgerrat. Politisch liess er sich nicht klar
              verorten, er pendelte zwischen einer freisinnigen und einer liberal-konservativen Haltung. Wenige Jahre bevor er die Synagoge umbaute, hatte er in unmittelbarer
              Nachbarschaft die katholische Marienkirche in neuromanischem Stil gebaut. Reber hatte sich mit zahlreichen Kirchenbauten in der ganzen Schweiz einen Namen gemacht. In
              erster Linie baute Reber zwar protestantische Kirchen, die ‹National-Zeitung› schrieb in einem Nachruf am 31. Oktober 1908 aber: «Er diente mit seinem schönen Können
              den Protestanten, Katholiken und Israeliten». Die Wahl von Paul Reber als Architekt des Synagogenumbaus war ein Zeichen der israeltischen Gemeinde an das
              protestantische Basel, dass man sich als Teil der Stadt verstand.
            </p>
            <app-img src="../../assets/teil-5/synagoge-2.png">
              Die 1892 von Architekt Paul Reber erweiterte Synagoge wurde mit einer zweiten Kuppel und einem Langbau ergänzt. Die Aufnahme entstand im Zeitraum nach der Eröffnung
              bis 1911.
              <br />
              Quelle: StaBS NEG A 608
            </app-img>
            <h2>Rätsel</h2>

            <p>Die Konsuln welcher Staaten nahmen 1868 an der Einweihung der Synagoge teil?</p>
            <p>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Deutschland und England
              </ion-button>
              <ion-button color="primary" onClick={_ => this.successModal.open()}>
                Nordamerika und Frankreich
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Italien und Österreich
              </ion-button>
            </p>
            <app-literatur
              items={[
                <Fragment>Guth-Dreyfus Katja: 175 Jahre Israelitische Gemeinde Basel. Basler Stadtbuch 1980. S. 153-162.</Fragment>,
                <Fragment>Guth, Nadia: Synagoge und Juden in Basel. Basel 1988.</Fragment>,
                <Fragment>Haumann, Heiko (Hg.): Acht Jahrhunderte Juden in Basel, Basel 2005.</Fragment>,
              ]}
            ></app-literatur>
          </app-content>
        </ion-content>
        <app-dialog-fail ref={e => (this.failModal = e)} titleTxt={'Leider falsch'}>
          <p>Die richtige Antwort ist «Nordamerika und Frankreich»</p>
        </app-dialog-fail>
        <app-dialog-success nr={nr} ref={e => (this.successModal = e)}>
          <ion-img src={getAssetPath('../../assets/hurray.gif')}></ion-img>
          <div class="ion-padding">Du hast Kapitel «{titles[nr]}» erfolgreich abgeschlossen&nbsp;!!</div>
        </app-dialog-success>
      </Fragment>
    );
  }
}
