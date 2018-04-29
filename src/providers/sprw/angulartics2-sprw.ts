import { Injectable } from '@angular/core';

import { Angulartics2 } from '../../core/angulartics2';

declare var sa: any;

@Injectable()
export class Angulartics2SPRW {

  public saPreviousPage: any;

  constructor(private angulartics2: Angulartics2) {
    this.angulartics2.eventTrack
      .subscribe(x => this.eventTrack(x.action, x.properties));
    this.angulartics2.pageTrack
      .subscribe(x => this.pageTrack(x.path));
  }

  /**
   * Send interactions to the Pixel, i.e. for event tracking in Pixel
   *
   * @param action action associated with the event
   */
  eventTrack(action: string, properties: any = {}) {
    // Google Analytics requires an Event Category
    if (!properties || !properties.category) {
      properties = properties || {};
      properties.category = 'Event';
    }
    // GA requires that eventValue be an integer, see:
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventValue
    // https://github.com/luisfarzati/angulartics/issues/81
    if (properties.value) {
      const parsed = parseInt(properties.value, 10);
      properties.value = isNaN(parsed) ? 0 : parsed;
    }

    if (typeof sa !== 'undefined') {
      const eventOptions = {
        eventCategory: properties.category,
        eventAction: action,
        eventLabel: properties.label,
        eventValue: properties.value,
        nonInteraction: properties.noninteraction,
        path: properties.page || location.hash.substring(1) || location.pathname,
        previousPage: this.saPreviousPage,
        hitCallback: properties.hitCallback
      };
      sa('send', 'event', eventOptions, {sendGAEvent:0});
    }
  }

  pageTrack(path: string) {
    if (typeof sa !== 'undefined' && sa) {
      sa('send', 'pageview', {page: path, previousPage:this.saPreviousPage});
    }
    this.saPreviousPage = location.href;
  }
}
