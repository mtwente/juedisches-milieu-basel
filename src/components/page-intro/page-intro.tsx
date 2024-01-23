import { Animation, createAnimation } from '@ionic/core';
import { Component, Fragment, h, State } from '@stencil/core';
import { animationBuilderFadePages } from '../../global/page-animation';
import routerProvider from '../../global/router-provider';
import { state } from '../../global/store';

@Component({
  tag: 'page-intro',
  styleUrl: 'page-intro.css',
  // shadow: true,
})
export class PageIntro {
  skipBtn: HTMLIonButtonElement;

  flash1: Animation;
  flash2: Animation;
  flash3: Animation;

  @State() playing: 'initial' | 'playing' | 'ended' = 'initial';

  async componentDidLoad() {
    if (state.playedIntro) this.skipIntro();
  }
  private async playIntro() {
    this.playing = 'playing';
    await this.flash1.play();
    await this.flash2.play();
    await this.flash3.play();
    this.playing = 'ended';
    state.playedIntro = true;
    this.navigateToPuzzle();
  }

  private skipIntro() {
    this.flash1.stop();
    this.flash2.stop();
    this.flash3.stop();
    this.playing = 'ended';
    state.playedIntro = true;
    this.navigateToPuzzle();
  }

  private navigateToPuzzle() {
    routerProvider.ionRouterElement.push('/puzzle', 'forward', animationBuilderFadePages);
  }

  render() {
    return (
      <Fragment>
        <ion-content class="ion-padding overflow-y-hidden" id="main-menu">
          <div class={`container ${this.playing}`}>
            <div class="go-btn">
              <ion-button fill="clear" size="large" onClick={() => this.playIntro()}>
                Los geht's
                <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
              </ion-button>
            </div>
            <Fragment>
              <div class="flash-container hidden" ref={e => (this.flash1 = this.createShowHideAnimation(e))}>
                Eine Geschichte
              </div>
              <div class="flash-container hidden" ref={e => (this.flash2 = this.createShowHideAnimation(e))}>
                Ein Puzzle
              </div>
              <div class="flash-container hidden" ref={e => (this.flash3 = this.createShowHideAnimation(e))}>
                Zwölf Teile
              </div>
              <ion-button fill="clear" class="skip-intro-btn" ref={e => (this.skipBtn = e)} onClick={() => this.skipIntro()}>
                Intro überspringen
                <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
              </ion-button>
            </Fragment>
          </div>
        </ion-content>
      </Fragment>
    );
  }

  createShowAnimation(el: Element): Animation {
    return createAnimation('show')
      .addElement(el)
      .duration(1500)
      .keyframes([
        { offset: 0, opacity: '0', display: 'block' },
        { offset: 1, opacity: '1', display: 'block' },
      ]);
  }
  createShowHideAnimation(el: Element): Animation {
    return createAnimation('show-hide')
      .addElement(el)
      .duration(2500)
      .beforeStyles({ display: 'flex' })
      .afterStyles({ display: 'none' })
      .keyframes([
        { offset: 0, opacity: '0' },
        { offset: 0.2, opacity: '1' },
        { offset: 0.4, opacity: '1' },
        { offset: 0.8, opacity: '0', transform: 'scale(1)' },
        { offset: 1, opacity: '0', transform: 'scale(1)' },
      ]);
  }
}
