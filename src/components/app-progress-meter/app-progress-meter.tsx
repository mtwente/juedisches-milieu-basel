import { Component, Fragment, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-progress-meter',
  styleUrl: 'app-progress-meter.css',
  shadow: false,
})
export class AppProgressMeter {
  @Prop() value = 9;
  @Prop() maxVal = 12;

  wrapper: HTMLDivElement;
  meter: SVGElement;
  outlineCurves: SVGElement;
  low: SVGElement;
  avg: SVGElement;
  high: SVGElement;
  mask: SVGElement;
  outlineEnds: SVGElement;
  slider: HTMLInputElement;
  lbl: HTMLLabelElement;

  // radius of circle (scales to parent)
  r = 60;
  // stroke width for outlines
  strokeOuter = 10;
  // stroke width for indicator
  strokeInner = 6;
  // closing, 1 = semi-circle, 2= full circle
  closing = 1.6;
  // gap between label lines
  labelGap = 6;
  rotation = 0.5 - (this.closing - 1) / 4;
  cf = 2 * Math.PI * this.r;
  semi_cf = (this.closing * this.cf) / 2;
  semi_cf_1by3 = this.semi_cf / 3;
  semi_cf_2by3 = this.semi_cf_1by3 * 2;
  width = 2 * this.r + this.strokeOuter;
  height = this.width; // / this.closing;

  componentDidLoad() {
    // set radius
    [this.outlineCurves, this.low, this.avg, this.high, this.mask, this.outlineEnds].forEach(circle => {
      circle.setAttribute('r', this.r.toString());
    });
    // set inner stroke with
    [this.low, this.avg, this.high].forEach(e => e.setAttribute('stroke-width', this.strokeInner.toString()));
    // set outer stroke with
    [this.outlineCurves, this.mask, this.outlineEnds].forEach(e => e.setAttribute('stroke-width', this.strokeOuter.toString()));

    // set viewbox

    this.meter.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);

    // set stroke dasharray for all circles except for mask
    this.outlineCurves.setAttribute('stroke-dasharray', this.semi_cf + ',' + this.cf);
    this.low.setAttribute('stroke-dasharray', this.semi_cf + ',' + this.cf);
    this.avg.setAttribute('stroke-dasharray', this.semi_cf_2by3 + ',' + this.cf);
    this.high.setAttribute('stroke-dasharray', this.semi_cf_1by3 + ',' + this.cf);
    this.outlineEnds.setAttribute('stroke-dasharray', 2 + ',' + (this.semi_cf - 2));
  }

  render() {
    var meter_value = this.semi_cf - (this.value / this.maxVal) * this.semi_cf;

    return (
      <Fragment>
        <svg ref={e => (this.meter = e)}>
          <g style={{ 'transform': 'scaleX(-1)', 'transform-origin': 'center' }}>
            <g
              style={{
                'transform': `rotate(${this.rotation}turn)`,
                'transform-origin': 'center',
              }}
            >
              <circle ref={e => (this.outlineCurves = e)} class="circle outline" cx="50%" cy="50%"></circle>
              <circle ref={e => (this.low = e)} class="circle segment-1" cx="50%" cy="50%"></circle>
              <circle ref={e => (this.avg = e)} class="circle segment-2" cx="50%" cy="50%"></circle>
              <circle ref={e => (this.high = e)} class="circle segment-3" cx="50%" cy="50%"></circle>
              <circle ref={e => (this.mask = e)} class="circle outline" cx="50%" cy="50%" stroke-dasharray={meter_value + ',' + this.cf}></circle>
              <circle ref={e => (this.outlineEnds = e)} class="circle outline" cx="50%" cy="50%"></circle>
            </g>
          </g>
          <text class="label-3" x={this.width / 2} y={this.height / 2 + this.labelGap * 3} dominant-baseline="middle" text-anchor="middle">
            gelöst
          </text>{' '}
          <text class="label-1" x={this.width / 2} y={this.height / 2 - this.labelGap} dominant-baseline="middle" text-anchor="middle">
            {this.value} / {this.maxVal}
          </text>{' '}
        </svg>
      </Fragment>
    );
  }
}
