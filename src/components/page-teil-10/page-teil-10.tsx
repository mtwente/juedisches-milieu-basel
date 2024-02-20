import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';
const nr = 10;
@Component({
  tag: 'page-teil-10',
  styleUrl: 'page-teil-10.css',
})
export class PageTeil10 {
  failModal: HTMLAppDialogFailElement;
  successModal: HTMLAppDialogSuccessElement;
  render() {
    return (
      <Fragment>
        <app-header headerTitle={titles[nr]}></app-header>
        <ion-content id="main-menu">
          <iframe width="100%" height="400px" src={getAssetPath('../../assets/teil-10/karte.html')} frameborder="0"></iframe>
          <div class="ion-padding">
            <h1>Titel</h1>
            <p>Was ist richtig?</p>
            <p>
              <ion-button color="primary" onClick={_ => this.successModal.open()}>
                Antwort A
              </ion-button>
              <ion-button color="primary" onClick={_ => this.failModal.open()}>
                Antwort B
              </ion-button>
            </p>
          </div>
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
