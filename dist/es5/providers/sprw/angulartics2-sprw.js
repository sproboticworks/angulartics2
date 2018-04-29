"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angulartics2_1 = require("../../core/angulartics2");
var Angulartics2SPRW = /** @class */ (function () {
    function Angulartics2SPRW(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.eventTrack
            .subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.pageTrack
            .subscribe(function (x) { return _this.pageTrack(x.path); });
    }
    /**
     * Send interactions to the Pixel, i.e. for event tracking in Pixel
     *
     * @param action action associated with the event
     */
    Angulartics2SPRW.prototype.eventTrack = function (action, properties) {
        if (properties === void 0) { properties = {}; }
        // Google Analytics requires an Event Category
        if (!properties || !properties.category) {
            properties = properties || {};
            properties.category = 'Event';
        }
        // GA requires that eventValue be an integer, see:
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#eventValue
        // https://github.com/luisfarzati/angulartics/issues/81
        if (properties.value) {
            var parsed = parseInt(properties.value, 10);
            properties.value = isNaN(parsed) ? 0 : parsed;
        }
        if (typeof sa !== 'undefined') {
            var eventOptions = {
                eventCategory: properties.category,
                eventAction: action,
                eventLabel: properties.label,
                eventValue: properties.value,
                nonInteraction: properties.noninteraction,
                path: properties.page || location.hash.substring(1) || location.pathname,
                previousPage: this.saPreviousPage,
                hitCallback: properties.hitCallback
            };
            sa('send', 'event', eventOptions, { sendGAEvent: 0 });
        }
    };
    Angulartics2SPRW.prototype.pageTrack = function (path) {
        if (typeof sa !== 'undefined' && sa) {
            sa('send', 'pageview', { page: path, previousPage: this.saPreviousPage });
        }
        this.saPreviousPage = location.href;
    };
    Angulartics2SPRW.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Angulartics2SPRW.ctorParameters = function () { return [
        { type: angulartics2_1.Angulartics2, },
    ]; };
    return Angulartics2SPRW;
}());
exports.Angulartics2SPRW = Angulartics2SPRW;
