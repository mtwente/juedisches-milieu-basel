import { Component, h, Host } from '@stencil/core';
import { state } from '../../global/store';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',
  shadow: true,
})
export class AppFooter {
  render() {
    const parts = [state.q1, state.q2, state.q3, state.q4, state.q5, state.q6, state.q7];
    const resolved = parts.filter(q => q).length;
    const total = parts.length;
    const percentResolved = (resolved / total) * 100;
    return (
      <Host>
        <ion-footer translucent={true}>
          <ion-toolbar>
            <div class="progress-bar" style={{ width: `${percentResolved}%` }}></div>
            <div class="progress-text">
              Gelöst: {resolved} / {total}
            </div>
          </ion-toolbar>
        </ion-footer>
      </Host>
    );
  }
}
