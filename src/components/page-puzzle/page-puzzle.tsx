import { Component, Fragment, getAssetPath, h } from '@stencil/core';
import routerProvider from '../../global/router-provider';
import { state } from '../../global/store';

@Component({
  tag: 'page-puzzle',
  styleUrl: 'page-puzzle.css',
  // shadow: true,
})
export class PagePuzzle {
  render() {
    return (
      <Fragment>
        <app-header headerTitle=""></app-header>
        <ion-content class="ion-padding" id="main-menu">
          <div class="container">
            <div class="svg-container hidden">
              <div>
                <svg
                  viewBox="0 0 678 653"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterLimit: '2' }}
                >
                  <defs>
                    <clipPath id="shape">
                      <path
                        stroke="1p solid blue"
                        fill="none"
                        d="M338.936,584.652l-112.135,64.741l-112.134,-64.741l-0,-129.358l-112.135,-64.741l0,-129.482l112.135,-64.74l-0,-129.159l112.134,-64.741l112.135,64.741l112.134,-64.741l112.135,64.741l-0,129.159l112.134,64.74l0,129.482l-112.134,64.741l-0,129.358l-112.135,64.741l-112.134,-64.741Z"
                      />
                    </clipPath>
                  </defs>
                  <image height="100%" clip-path="url(#shape)" xlinkHref={getAssetPath('../../assets/Basler_Synagoge.jpg')}></image>
                  <g>
                    <g class={`puzzle-piece ${state.q2to7locked ? 'locked' : 'unlocked'}`}>
                      <path d="M226.801,2.431l112.135,64.741l-0,129.482l-112.135,64.741l-112.134,-64.741l-0,-129.482l112.134,-64.741Z" />
                      <path class="overlay" d="M226.801,2.431l112.135,64.741l-0,129.482l-112.135,64.741l-112.134,-64.741l-0,-129.482l112.134,-64.741Z" />
                      <text x="208.376px" y="150.206px">
                        7
                      </text>
                    </g>
                    <g class={`puzzle-piece ${state.q2to7locked ? 'locked' : 'unlocked'} ${state.q2 ? 'done' : ''}`}>
                      <path d="M451.07,2.431l112.135,64.741l-0,129.482l-112.135,64.741l-112.134,-64.741l-0,-129.482l112.134,-64.741Z" />
                      <path
                        class="overlay"
                        d="M451.07,2.431l112.135,64.741l-0,129.482l-112.135,64.741l-112.134,-64.741l-0,-129.482l112.134,-64.741Z"
                        onClick={() => routerProvider.ionRouterElement.push('/puzzle/q' + 2, 'forward')}
                      />
                      <text x="433.915px" y="150.762px">
                        2
                      </text>
                    </g>
                    <g class={`puzzle-piece unlocked ${state.start ? 'done' : ''}`}>
                      <path d="M338.936,196.331l112.134,64.74l0,129.482l-112.134,64.741l-112.135,-64.741l0,-129.482l112.135,-64.74Z" />
                      <path
                        class="overlay"
                        d="M338.936,196.331l112.134,64.74l0,129.482l-112.134,64.741l-112.135,-64.741l0,-129.482l112.135,-64.74Z"
                        onClick={() => routerProvider.ionRouterElement.push('/puzzle/start', 'forward')}
                      />
                      <text x="338.375px" y="344.344px">
                        Start
                      </text>
                    </g>
                    <g class={`puzzle-piece ${state.q2to7locked ? 'locked' : 'unlocked'}`}>
                      <path d="M114.667,196.331l112.134,64.74l0,129.482l-112.134,64.741l-112.135,-64.741l0,-129.482l112.135,-64.74Z" />
                      <path class="overlay" d="M114.667,196.331l112.134,64.74l0,129.482l-112.134,64.741l-112.135,-64.741l0,-129.482l112.135,-64.74Z" />
                      <text x="97.247px" y="344.344px">
                        6
                      </text>
                    </g>
                    <g class={`puzzle-piece ${state.q2to7locked ? 'locked' : 'unlocked'}`}>
                      <path d="M226.801,390.429l112.135,64.741l-0,129.482l-112.135,64.741l-112.134,-64.741l-0,-129.482l112.134,-64.741Z" />
                      <path class="overlay" d="M226.801,390.429l112.135,64.741l-0,129.482l-112.135,64.741l-112.134,-64.741l-0,-129.482l112.134,-64.741Z" />
                      <text x="210.494px" y="538.125px">
                        5
                      </text>
                    </g>
                    <g class={`puzzle-piece ${state.q2to7locked ? 'locked' : 'unlocked'}`}>
                      <path d="M451.07,390.429l112.135,64.741l-0,129.482l-112.135,64.741l-112.134,-64.741l-0,-129.482l112.134,-64.741Z" />
                      <path class="overlay" d="M451.07,390.429l112.135,64.741l-0,129.482l-112.135,64.741l-112.134,-64.741l-0,-129.482l112.134,-64.741Z" />
                      <text x="433.651px" y="538.442px">
                        4
                      </text>
                    </g>
                    <g class={`puzzle-piece ${state.q2to7locked ? 'locked' : 'unlocked'}`}>
                      <path d="M563.205,196.331l112.134,64.74l0,129.482l-112.134,64.741l-112.135,-64.741l0,-129.482l112.135,-64.74Z" />
                      <path class="overlay" d="M563.205,196.331l112.134,64.74l0,129.482l-112.134,64.741l-112.135,-64.741l0,-129.482l112.135,-64.74Z" />
                      <text x="547.718px" y="345.376px">
                        3
                      </text>
                    </g>
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
