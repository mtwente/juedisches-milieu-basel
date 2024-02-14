import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import routerProvider from '../../global/router-provider';
import { reset, state } from '../../global/store';
import { titles } from '../../global/titles';
import { animationBuilderFadePages } from '../../global/page-animation';

interface PuzzleElDef {
  nr: number;
  label: string;
  txt1: { x: number; y: number; width: number; height: number };
  txt2: { x: number; y: number; width: number; height: number };
  path: { d: string };
}

@Component({
  tag: 'page-puzzle',
  styleUrl: 'page-puzzle.css',
  // shadow: true,
})
export class PagePuzzle {
  row1: PuzzleElDef[] = [
    {
      nr: 3,
      label: titles[3],
      txt1: { x: 12.325, y: 126.579, width: 475.875, height: 162.484 },
      txt2: { x: 12.325, y: 289.063, width: 475.875, height: 162.484 },
      path: {
        d: 'M0.261,433.401l0,-288.677l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339Z',
      },
    },
    {
      nr: 8,
      label: titles[8],
      txt1: { x: 512.328, y: 126.579, width: 475.875, height: 162.484 },
      txt2: { x: 512.328, y: 289.063, width: 475.875, height: 162.484 },
      path: {
        d: 'M500.264,433.401l0,-288.677l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339Z',
      },
    },
    {
      nr: 12,
      label: titles[12],
      txt1: { x: 1012.33, y: 126.579, width: 475.875, height: 162.484 },
      txt2: { x: 1012.33, y: 289.063, width: 475.875, height: 162.484 },
      path: {
        d: 'M1000.27,144.724l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
      },
    },
    {
      nr: 6,
      label: titles[6],
      txt1: { x: 1512.33, y: 126.579, width: 475.875, height: 162.484 },
      txt2: { x: 1512.33, y: 289.063, width: 475.875, height: 162.484 },
      path: {
        d: 'M1500.27,144.724l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
      },
    },
  ];
  row2: PuzzleElDef[] = [
    {
      nr: 9,
      label: titles[9],
      txt1: { x: 262.327, y: 559.594, width: 475.875, height: 162.484 },
      txt2: { x: 262.327, y: 722.078, width: 475.875, height: 162.484 },
      path: {
        d: 'M500.264,433.401l250.002,144.339l-0,288.677l-250.002,144.338l-250.001,-144.338l-0,-288.677l250.001,-144.339Z',
      },
    },
    {
      nr: 1,
      label: titles[1],
      txt1: { x: 762.33, y: 559.594, width: 475.875, height: 162.484 },
      txt2: { x: 762.33, y: 722.078, width: 475.875, height: 162.484 },
      path: {
        d: 'M1000.27,433.401l250.002,144.339l-0,288.677l-250.002,144.338l-250.001,-144.338l-0,-288.677l250.001,-144.339Z',
      },
    },
    {
      nr: 10,
      label: titles[10],
      txt1: { x: 1262.33, y: 559.594, width: 475.875, height: 162.484 },
      txt2: { x: 1262.33, y: 722.078, width: 475.875, height: 162.484 },
      path: {
        d: 'M1500.27,433.401l250.002,144.339l-0,288.677l-250.002,144.338l-250.001,-144.338l-0,-288.677l250.001,-144.339Z',
      },
    },
  ];
  row3: PuzzleElDef[] = [
    {
      nr: 11,
      label: titles[11],
      txt1: { x: 12.325, y: 992.609, width: 475.875, height: 162.484 },
      txt2: { x: 12.325, y: 1155.09, width: 475.875, height: 162.484 },
      path: {
        d: 'M0.261,1010.75l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
      },
    },
    {
      nr: 7,
      label: titles[7],
      txt1: { x: 512.328, y: 992.609, width: 475.875, height: 162.484 },
      txt2: { x: 512.328, y: 1155.09, width: 475.875, height: 162.484 },
      path: {
        d: 'M500.264,1010.75l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
      },
    },
    {
      nr: 4,
      label: titles[4],
      txt1: { x: 1012.33, y: 992.609, width: 475.875, height: 162.484 },
      txt2: { x: 1012.33, y: 1155.09, width: 475.875, height: 162.484 },
      path: {
        d: 'M1000.27,1299.43l0,-288.677l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339Z',
      },
    },

    {
      nr: 5,
      label: titles[5],
      txt1: { x: 1512.33, y: 992.609, width: 475.875, height: 162.484 },
      txt2: { x: 1512.33, y: 1155.09, width: 475.875, height: 162.484 },
      path: {
        d: 'M1500.27,1010.75l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
      },
    },
  ];
  row4: PuzzleElDef[] = [
    {
      nr: 2,
      label: titles[2],
      txt1: { x: 762.33, y: 1425.62, width: 475.875, height: 162.484 },
      txt2: { x: 762.33, y: 1588.11, width: 475.875, height: 162.484 },
      path: {
        d: 'M750.266,1732.45l-0,-288.677l250.001,-144.339l250.002,144.339l-0,288.677l-250.002,144.338l-250.001,-144.338Z',
      },
    },
  ];
  elements: PuzzleElDef[] = [...this.row1, ...this.row2, ...this.row3, ...this.row4];
  g: SVGElement;
  p: HTMLAppProgressMeterElement;
  confirmRestartModal: HTMLIonModalElement;
  componentDidLoad() {
    const svg = this.p.querySelector('svg');
    svg.setAttribute('width', '380');
    svg.setAttribute('y', '650px');
    svg.setAttribute('x', '1310px');
    this.g.appendChild(this.p.querySelector('svg'));
  }
  render() {
    const parts = [state.t1, state.t2, state.t3, state.t4, state.t5, state.t6, state.t7, state.t8, state.t9, state.t10, state.t11, state.t12];
    const resolved = parts.filter(t => t === 'done').length;
    const total = parts.length;
    return (
      <Fragment>
        <app-header headerTitle=""></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <app-progress-meter value={resolved} maxVal={total} style={{ display: 'none' }} ref={e => (this.p = e)}></app-progress-meter>
          <div class="container">
            <div class="svg-container hidden">
              <div>
                <svg
                  viewBox="0 0 2001 1877"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterLimit: '2' }}
                >
                  <defs>
                    <clipPath id="shape">
                      <path
                        stroke="1p solid blue"
                        fill="none"
                        d="M250.263,866.417c-0,-0 -0,-288.677 -0,-288.677l-250.002,-144.339l0,-288.677l250.002,-144.338l250.001,144.338l250.002,-144.338l250.001,144.338c0,0 250.002,-144.338 250.002,-144.338l250.001,144.338l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339c-0,-0 -0,288.677 -0,288.677l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l-250.001,144.339c-0,-0 -0,288.677 -0,288.677l-250.002,144.338l-250.001,-144.338l-0,-288.677l-250.002,-144.339c0,0 -250.001,144.339 -250.001,144.339l-250.002,-144.339l0,-288.677l250.002,-144.338Z"
                      />
                    </clipPath>
                  </defs>
                  <image height="100%" clip-path="url(#shape)" xlinkHref={getAssetPath('../../assets/puzzle.jpg')}></image>
                  <g>
                    {this.elements.map(e => (
                      <g class={`puzzle-piece ${state?.['t' + e.nr]}`}>
                        <path d={e.path.d} />
                        <path class="overlay" d={e.path.d} onClick={() => this.navigate(e)} />
                        {/* <text class="nr" x={e.txt1.x + e.txt1.width / 2} y={e.txt1.y + e.txt1.height / 1.5} dominant-baseline="middle" text-anchor="middle">
                          {e.nr}
                        </text> */}
                        <text class="label" x={e.txt2.x + e.txt2.width / 2} y={e.txt2.y + 14} dominant-baseline="middle" text-anchor="middle">
                          {e.label}
                        </text>
                      </g>
                    ))}
                    <g ref={e => (this.g = e)}></g>
                    <text class="title" x="495px" y="1480px" dominant-baseline="middle" text-anchor="middle">
                      Jüdisches
                    </text>
                    <text class="title" x="495px" y="1580px" dominant-baseline="middle" text-anchor="middle">
                      Milieu Basel
                    </text>
                    <text class="title" x="495px" y="1680px" dominant-baseline="middle" text-anchor="middle">
                      1850 bis 1914
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            <div class={`game-finished ${state.showBravo ? 'visible' : 'hidden'}`}>
              <div>
                <p>Bravo! </p>
                <p>
                  Sie haben das Puzzle <br /> erfolgreich gelöst!
                </p>{' '}
                <div class="restricted-width">
                  <ion-button color="primary" onClick={() => this.openGratification()}>
                    Belohnung Abolen
                  </ion-button>{' '}
                  <ion-button fill="clear" onClick={() => this.confirmRestartModal.present()}>
                    Von vorne beginnen
                  </ion-button>
                </div>
              </div>
            </div>
          </div>
          <ion-modal ref={e => (this.confirmRestartModal = e)}>
            <ion-header>
              <ion-toolbar>
                <ion-buttons slot="start">
                  <ion-button onClick={() => this.confirmRestartModal.dismiss()}>Nein</ion-button>
                </ion-buttons>
                <ion-title>Von vorne beginnen?</ion-title>
                <ion-buttons slot="end">
                  <ion-button onClick={() => this.restart()}>Ja</ion-button>
                </ion-buttons>
              </ion-toolbar>
            </ion-header>
            <ion-content class="ion-padding">Der Spielstand wird gelöscht und das Puzzle beginnt erneut.</ion-content>
          </ion-modal>
        </ion-content>
        <app-footer></app-footer>
      </Fragment>
    );
  }

  private async restart() {
    await this.confirmRestartModal.dismiss();
    await routerProvider.ionRouterElement.push('/intro', 'forward', animationBuilderFadePages);
    reset()
  }
  private async openGratification() {
    routerProvider.ionRouterElement.push('/belohnung');
  }
  private navigate(e: PuzzleElDef): void {
    if (state['t' + e.nr] !== 'locked') routerProvider.ionRouterElement.push('/puzzle/teil-' + e.nr, 'forward');
  }
}
