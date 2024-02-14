import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',
  shadow: true,
})
export class AppFooter {
  render() {
    // const parts = [state.t1, state.t2, state.t3, state.t4, state.t5, state.t6, state.t7, state.t8, state.t9, state.t10, state.t11, state.t12];
    // const resolved = parts.filter(t => t).length;
    // const total = parts.length;
    // const percentResolved = (resolved / total) * 100;
    return (
      <Host>
        {/* <ion-footer translucent={true}>
          <ion-toolbar>
            <div class="progress-bar" style={{ width: `${percentResolved}%` }}></div>
            <div class="progress-text">
              Gelöst: {resolved} / {total}
            </div>
          </ion-toolbar>
        </ion-footer> */}
      </Host>
    );
  }
}
