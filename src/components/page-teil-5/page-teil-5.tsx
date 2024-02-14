import { Component, Fragment, getAssetPath, h } from '@stencil/core';
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
        <app-header headerTitle="Titel"></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-content>
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
          </app-content>
        </ion-content>
        <app-dialog-fail ref={e => (this.failModal = e)} titleTxt={'Leider falsch'}>
          <p>Die richtige Antwort ist A</p>
        </app-dialog-fail>
        <app-dialog-success nr={nr} ref={e => (this.successModal = e)}>
          <ion-img src={getAssetPath('../../assets/hurray.gif')}></ion-img>
          <div class="ion-padding">Du hast Kapitel {nr} erfolgreich abgeschlossen !!</div>
        </app-dialog-success>
      </Fragment>
    );
  }
}
