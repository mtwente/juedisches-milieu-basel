import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import routerProvider from '../../global/router-provider';
import { state } from '../../global/store';
import { titles } from '../../global/titles';

interface PuzzleElDef {
  locked: () => boolean;
  url: string;
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
  render() {
    const elements: PuzzleElDef[] = [
      {
        locked: () => state.t2to12locked,
        url: '',
        nr: 11,
        label: titles[11],
        txt1: { x: 12.325, y: 992.609, width: 475.875, height: 162.484 },
        txt2: { x: 12.325, y: 1155.09, width: 475.875, height: 162.484 },
        path: {
          d: 'M0.261,1010.75l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
        },
      },
      {
        locked: () => state.t2to12locked,
        url: '',
        nr: 2,
        label:titles[2],
        txt1: { x: 762.33, y: 1425.62, width: 475.875, height: 162.484 },
        txt2: { x: 762.33, y: 1588.11, width: 475.875, height: 162.484 },
        path: {
          d: 'M750.266,1732.45l-0,-288.677l250.001,-144.339l250.002,144.339l-0,288.677l-250.002,144.338l-250.001,-144.338Z',
        },
      },
      {
        locked: () => state.t2to12locked,
        url: '',
        nr: 3,
        label:titles[3],
        txt1: { x: 12.325, y: 126.579, width: 475.875, height: 162.484 },
        txt2: { x: 12.325, y: 289.063, width: 475.875, height: 162.484 },
        path: {
          d: 'M0.261,433.401l0,-288.677l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339Z',
        },
      },
      {
        locked: () => state.t2to12locked,
        url: '',
        nr: 4,
        label:titles[4],
        txt1: { x: 1012.33, y: 992.609, width: 475.875, height: 162.484 },
        txt2: { x: 1012.33, y: 1155.09, width: 475.875, height: 162.484 },
        path: {
          d: 'M1000.27,1299.43l0,-288.677l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339Z',
        },
      },
      {
        locked: () => state.t2to12locked,
        url: '',
        nr: 12,
        label: titles[12],
        txt1: { x: 1012.33, y: 126.579, width: 475.875, height: 162.484 },
        txt2: { x: 1012.33, y: 289.063, width: 475.875, height: 162.484 },
        path: {
          d: 'M1000.27,144.724l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
        },
      },
      {
        locked: () => state.t2to12locked,
        url: '',
        nr: 5,
        label:titles[5],
        txt1: { x: 1512.33, y: 992.609, width: 475.875, height: 162.484 },
        txt2: { x: 1512.33, y: 1155.09, width: 475.875, height: 162.484 },
        path: {
          d: 'M1500.27,1010.75l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
        },
      },
      {
        locked: () => state.t2to12locked,
        url: '',
        nr: 6,
        label:titles[6],
        txt1: { x: 1512.33, y: 126.579, width: 475.875, height: 162.484 },
        txt2: { x: 1512.33, y: 289.063, width: 475.875, height: 162.484 },
        path: {
          d: 'M1500.27,144.724l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
        },
      },
      {
        locked: () => state.t2to12locked,
        url: '',
        nr: 7,
        label:titles[7],
        txt1: { x: 512.328, y: 992.609, width: 475.875, height: 162.484 },
        txt2: { x: 512.328, y: 1155.09, width: 475.875, height: 162.484 },
        path: {
          d: 'M500.264,1010.75l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339l0,-288.677Z',
        },
      },
      {
        locked: () => state.t2to12locked,
        url: '',
        nr: 8,
        label:titles[8],
        txt1: { x: 512.328, y: 126.579, width: 475.875, height: 162.484 },
        txt2: { x: 512.328, y: 289.063, width: 475.875, height: 162.484 },
        path: {
          d: 'M500.264,433.401l0,-288.677l250.002,-144.338l250.001,144.338l0,288.677l-250.001,144.339l-250.002,-144.339Z',
        },
      },
      {
        locked: () => state.t2to12locked,
        url: '',
        nr: 9,
        label:titles[9],
        txt1: { x: 262.327, y: 559.594, width: 475.875, height: 162.484 },
        txt2: { x: 262.327, y: 722.078, width: 475.875, height: 162.484 },
        path: {
          d: 'M500.264,433.401l250.002,144.339l-0,288.677l-250.002,144.338l-250.001,-144.338l-0,-288.677l250.001,-144.339Z',
        },
      },
      {
        locked: () => state.t2to12locked,
        url: '',
        nr: 10,
        label: titles[10],
        txt1: { x: 1262.33, y: 559.594, width: 475.875, height: 162.484 },
        txt2: { x: 1262.33, y: 722.078, width: 475.875, height: 162.484 },
        path: {
          d: 'M1500.27,433.401l250.002,144.339l-0,288.677l-250.002,144.338l-250.001,-144.338l-0,-288.677l250.001,-144.339Z',
        },
      },
      {
        locked: () => false,
        url: '/puzzle/teil-1',
        nr: 1,
        label:titles[1],
        txt1: { x: 762.33, y: 559.594, width: 475.875, height: 162.484 },
        txt2: { x: 762.33, y: 722.078, width: 475.875, height: 162.484 },
        path: {
          d: 'M1000.27,433.401l250.002,144.339l-0,288.677l-250.002,144.338l-250.001,-144.338l-0,-288.677l250.001,-144.339Z',
        },
      },
    ];

    return (
      <Fragment>
        <app-header headerTitle=""></app-header>
        <ion-content class="ion-padding" id="main-menu">
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
                    {elements.map(e => (
                      <g class={`puzzle-piece ${e.locked() ? 'locked' : 'unlocked'} ${state?.['t' + e.nr] ? 'done' : ''}`}>
                        <path d={e.path.d} />
                        <path class="overlay" d={e.path.d} onClick={() => routerProvider.ionRouterElement.push('/puzzle/teil-' + e.nr, 'forward')} />
                        <text class="nr" x={e.txt1.x + e.txt1.width / 2} y={e.txt1.y + e.txt1.height / 1.5} dominant-baseline="middle" text-anchor="middle">
                          {e.nr}
                        </text>
                        <text class="label" x={e.txt2.x + e.txt2.width / 2} y={e.txt2.y + e.txt2.height / 2} dominant-baseline="middle" text-anchor="middle">
                          {e.label}
                        </text>
                      </g>
                    ))}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </ion-content>
        <app-footer></app-footer>
      </Fragment>
    );
  }
}
