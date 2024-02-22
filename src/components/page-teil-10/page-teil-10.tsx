import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import { titles } from '../../global/titles';
import { queryTabs } from '../app-dialog-success/queryTabs';

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
          <geov-yasgui
            queryTabs={queryTabs}
            style={{ background: '#fff', height: '400px' }}
            plugins={new Set(['mapCircles'])}
            defaultPlugin="mapCircles"
            collapse={true}
            hideYasqueToggle={true}
            pluginConfig={{
              mapCircles: {
                disableScrollZoom: true,
                displayMapNavigationControls: true,
                maxZoom: 25,
                radiusMin: 4,
                radiusMax: 25,
              },
            }}
          ></geov-yasgui>
          <div class="ion-padding">
            {/* <h1>{titles[nr]}</h1> */}
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
