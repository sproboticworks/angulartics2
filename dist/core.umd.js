(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/router"), require("@angular/platform-browser"), require("rxjs/ReplaySubject"), require("rxjs/add/operator/filter"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/router", "@angular/platform-browser", "rxjs/ReplaySubject", "rxjs/add/operator/filter"], factory);
	else if(typeof exports === 'object')
		exports["ngx-translate-core"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/router"), require("@angular/platform-browser"), require("rxjs/ReplaySubject"), require("rxjs/add/operator/filter"));
	else
		root["ngx-translate-core"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/router"], root["@angular/platform-browser"], root["rxjs/ReplaySubject"], root["rxjs/add/operator/filter"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ReplaySubject_1 = __webpack_require__(7);
var common_1 = __webpack_require__(2);
var router_1 = __webpack_require__(3);
__webpack_require__(8);
var Angulartics2 = /** @class */ (function () {
    function Angulartics2(location, router) {
        this.settings = {
            pageTracking: {
                autoTrackVirtualPages: true,
                basePath: '',
                excludedRoutes: []
            },
            eventTracking: {},
            developerMode: false
        };
        /*
          @Param: ({url: string, location: Location})
         */
        this.pageTrack = new ReplaySubject_1.ReplaySubject(10);
        /*
          @Param: ({action: any, properties: any})
         */
        this.eventTrack = new ReplaySubject_1.ReplaySubject(10);
        /*
          @Param: (properties: any)
         */
        this.exceptionTrack = new ReplaySubject_1.ReplaySubject(10);
        /*
          @Param: (alias: string)
         */
        this.setAlias = new ReplaySubject_1.ReplaySubject(10);
        /*
          @Param: (userId: string)
         */
        this.setUsername = new ReplaySubject_1.ReplaySubject(10);
        /*
          @Param: ({action: any, properties: any})
         */
        this.setUserProperties = new ReplaySubject_1.ReplaySubject(10);
        /*
          @Param: (properties: any)
         */
        this.setUserPropertiesOnce = new ReplaySubject_1.ReplaySubject(10);
        /*
          @Param: (properties: any)
         */
        this.setSuperProperties = new ReplaySubject_1.ReplaySubject(10);
        /*
          @Param: (properties: any)
         */
        this.setSuperPropertiesOnce = new ReplaySubject_1.ReplaySubject(10);
        /*
          @Param: (properties: any)
         */
        this.userTimings = new ReplaySubject_1.ReplaySubject(10);
        this.trackLocation(location, router);
    }
    Angulartics2.prototype.trackLocation = function (location, router) {
        var _this = this;
        router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (event) {
            if (!_this.settings.developerMode) {
                _this.trackUrlChange(event.urlAfterRedirects, location);
            }
        });
    };
    Angulartics2.prototype.virtualPageviews = function (value) {
        this.settings.pageTracking.autoTrackVirtualPages = value;
    };
    Angulartics2.prototype.excludeRoutes = function (routes) {
        this.settings.pageTracking.excludedRoutes = routes;
    };
    Angulartics2.prototype.firstPageview = function (value) {
        this.settings.pageTracking.autoTrackFirstPage = value;
    };
    Angulartics2.prototype.withBase = function (value) {
        this.settings.pageTracking.basePath = (value);
    };
    Angulartics2.prototype.developerMode = function (value) {
        this.settings.developerMode = value;
    };
    Angulartics2.prototype.trackUrlChange = function (url, location) {
        if (!this.settings.developerMode) {
            if (this.settings.pageTracking.autoTrackVirtualPages && !this.matchesExcludedRoute(url)) {
                this.pageTrack.next({
                    path: this.settings.pageTracking.basePath.length ? this.settings.pageTracking.basePath + url : location.prepareExternalUrl(url),
                    location: location
                });
            }
        }
    };
    Angulartics2.prototype.matchesExcludedRoute = function (url) {
        for (var _i = 0, _a = this.settings.pageTracking.excludedRoutes; _i < _a.length; _i++) {
            var excludedRoute = _a[_i];
            if ((excludedRoute instanceof RegExp && excludedRoute.test(url)) || url.indexOf(excludedRoute) > -1) {
                return true;
            }
        }
        return false;
    };
    Angulartics2 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [common_1.Location, router_1.Router])
    ], Angulartics2);
    return Angulartics2;
}());
exports.Angulartics2 = Angulartics2;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(5);
// import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';
var angulartics2_1 = __webpack_require__(1);
var Angulartics2On = /** @class */ (function () {
    function Angulartics2On(elRef, angulartics2, eventManager) {
        this.elRef = elRef;
        this.angulartics2 = angulartics2;
        this.eventManager = eventManager;
        this.el = this.elRef.nativeElement;
    }
    Angulartics2On.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Don't listen in server-side
        if (this.isBrowser()) {
            this.eventManager.addEventListener(this.el, this.angulartics2On || 'click', function (event) { return _this.eventTrack(event); });
        }
    };
    Angulartics2On.prototype.isBrowser = function () {
        return typeof (window) !== 'undefined';
    };
    Angulartics2On.prototype.eventTrack = function (event) {
        var action = this.angularticsEvent; // || this.inferEventName();
        var properties = {
            eventType: event.type
        };
        if (this.angularticsCategory) {
            properties.category = this.angularticsCategory;
        }
        // Allow components to pass through an expression that gets merged on to the event properties
        // eg. angulartics-properites='myComponentScope.someConfigExpression.$angularticsProperties'
        if (this.angularticsProperties) {
            Object.assign(properties, this.angularticsProperties);
        }
        this.angulartics2.eventTrack.next({
            action: action,
            properties: properties
        });
    };
    __decorate([
        core_1.Input('angulartics2On'),
        __metadata("design:type", String)
    ], Angulartics2On.prototype, "angulartics2On", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Angulartics2On.prototype, "angularticsEvent", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Angulartics2On.prototype, "angularticsCategory", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Angulartics2On.prototype, "angularticsProperties", void 0);
    Angulartics2On = __decorate([
        core_1.Injectable(),
        core_1.Directive({
            selector: '[angulartics2On]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            angulartics2_1.Angulartics2,
            platform_browser_1.EventManager])
    ], Angulartics2On);
    return Angulartics2On;
}());
exports.Angulartics2On = Angulartics2On;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
var angulartics2On_1 = __webpack_require__(4);
__export(__webpack_require__(1));
__export(__webpack_require__(4));
__export(__webpack_require__(9));
exports.ANGULARTICS2_FORROOT_GUARD = new core_1.InjectionToken('ANGULARTICS2_FORROOT_GUARD');
function provideForRootGuard(angulartics2) {
    if (angulartics2) {
        throw new Error("Angulartics2Module.forRoot() called twice. Lazy loaded modules should use Angulartics2Module.forChild() instead.");
    }
    return 'guarded';
}
exports.provideForRootGuard = provideForRootGuard;
var Angulartics2Module = /** @class */ (function () {
    function Angulartics2Module(guard) {
    }
    Angulartics2Module_1 = Angulartics2Module;
    Angulartics2Module.forRoot = function (providers) {
        return {
            ngModule: Angulartics2Module_1,
            providers: [
                {
                    provide: exports.ANGULARTICS2_FORROOT_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [[angulartics2_1.Angulartics2, new core_1.Optional(), new core_1.SkipSelf()]]
                },
                angulartics2_1.Angulartics2
            ].concat(providers)
        };
    };
    Angulartics2Module.forChild = function () {
        return {
            ngModule: Angulartics2Module_1,
            providers: []
        };
    };
    Angulartics2Module = Angulartics2Module_1 = __decorate([
        core_1.NgModule({
            declarations: [angulartics2On_1.Angulartics2On],
            exports: [angulartics2On_1.Angulartics2On]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.Inject(exports.ANGULARTICS2_FORROOT_GUARD)),
        __metadata("design:paramtypes", [Object])
    ], Angulartics2Module);
    return Angulartics2Module;
    var Angulartics2Module_1;
}());
exports.Angulartics2Module = Angulartics2Module;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(10));
__export(__webpack_require__(11));
__export(__webpack_require__(12));
__export(__webpack_require__(13));
__export(__webpack_require__(14));
__export(__webpack_require__(15));
__export(__webpack_require__(16));
__export(__webpack_require__(17));
__export(__webpack_require__(18));
__export(__webpack_require__(19));
__export(__webpack_require__(20));
__export(__webpack_require__(21));
__export(__webpack_require__(22));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
var Angulartics2BaiduAnalytics = /** @class */ (function () {
    function Angulartics2BaiduAnalytics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (hmt) === 'undefined') {
            hmt = [];
        }
        else {
            hmt.push(['_ setAutoPageview', false]);
        }
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    /**
     * Page Track in Baidu Analytics
     * @name pageTrack
     *
     * @param {string} path Required 'path' (string)
     *
     * @link http://tongji.baidu.com/open/api/more?p=ref_trackPageview
     *
     */
    Angulartics2BaiduAnalytics.prototype.pageTrack = function (path) {
        if (typeof hmt !== 'undefined' && hmt) {
            hmt.push(['_trackPageview', path]);
        }
    };
    /**
     * Track Event in Baidu Analytics
     * @name eventTrack
     *
     * @param {string} action Required 'action' (string) associated with the event
     * @param {object} properties Comprised of the mandatory field 'category' (string), 'opt_label'(string) and 'opt_value' (string)
     *
     * @link http://tongji.baidu.com/open/api/more?p=ref_trackEvent
     *
     */
    Angulartics2BaiduAnalytics.prototype.eventTrack = function (action, properties) {
        //baidu analytics requires category
        if (!properties || !properties.category) {
            properties = properties || {};
            properties.category = 'Event';
            properties.opt_label = 'default';
            properties.opt_value = 'default';
        }
        if (typeof hmt !== 'undefined' && hmt) {
            hmt.push(['_trackEvent', properties.category, action, properties.opt_label, properties.opt_value]);
        }
    };
    Angulartics2BaiduAnalytics.prototype.setUsername = function (userId) {
        // set default custom variables name to 'identity' and 'value'
        hmt.push(['_setCustomVar', 1, 'identity', userId]);
    };
    Angulartics2BaiduAnalytics.prototype.setUserProperties = function (properties) {
        hmt.push(['_setCustomVar', 2, 'user', JSON.stringify(properties)]);
    };
    Angulartics2BaiduAnalytics = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2])
    ], Angulartics2BaiduAnalytics);
    return Angulartics2BaiduAnalytics;
}());
exports.Angulartics2BaiduAnalytics = Angulartics2BaiduAnalytics;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
var Angulartics2GoogleAnalytics = /** @class */ (function () {
    function Angulartics2GoogleAnalytics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.settings.pageTracking.trackRelativePath = true;
        // Set the default settings for this module
        this.angulartics2.settings.ga = {
            // array of additional account names (only works for analyticsjs)
            additionalAccountNames: [],
            userId: null
        };
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.exceptionTrack.subscribe(function (x) { return _this.exceptionTrack(x); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.userTimings.subscribe(function (x) { return _this.userTimings(x); });
    }
    Angulartics2GoogleAnalytics.prototype.pageTrack = function (path) {
        if (typeof _gaq !== 'undefined' && _gaq) {
            _gaq.push(['_trackPageview', path]);
            for (var _i = 0, _a = this.angulartics2.settings.ga.additionalAccountNames; _i < _a.length; _i++) {
                var accountName = _a[_i];
                _gaq.push([accountName + '._trackPageview', path]);
            }
            ;
        }
        if (typeof ga !== 'undefined' && ga) {
            if (this.angulartics2.settings.ga.userId) {
                ga('set', '&uid', this.angulartics2.settings.ga.userId);
            }
            ga('send', 'pageview', path);
            for (var _b = 0, _c = this.angulartics2.settings.ga.additionalAccountNames; _b < _c.length; _b++) {
                var accountName = _c[_b];
                ga(accountName + '.send', 'pageview', path);
            }
            ;
        }
    };
    /**
     * Track Event in GA
     * @name eventTrack
     *
     * @param {string} action Required 'action' (string) associated with the event
     * @param {object} properties Comprised of the mandatory field 'category' (string) and optional  fields 'label' (string), 'value' (integer) and 'noninteraction' (boolean)
     *
     * @link https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#SettingUpEventTracking
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     */
    Angulartics2GoogleAnalytics.prototype.eventTrack = function (action, properties) {
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
        if (typeof ga !== 'undefined') {
            var eventOptions = {
                eventCategory: properties.category,
                eventAction: action,
                eventLabel: properties.label,
                eventValue: properties.value,
                nonInteraction: properties.noninteraction,
                page: properties.page || location.hash.substring(1) || location.pathname,
                userId: this.angulartics2.settings.ga.userId,
                hitCallback: properties.hitCallback
            };
            // add custom dimensions and metrics
            this.setDimensionsAndMetrics(properties);
            if (this.angulartics2.settings.ga.transport) {
                ga('send', 'event', eventOptions, { transport: this.angulartics2.settings.ga.transport });
            }
            else {
                ga('send', 'event', eventOptions);
            }
            for (var _i = 0, _a = this.angulartics2.settings.ga.additionalAccountNames; _i < _a.length; _i++) {
                var accountName = _a[_i];
                ga(accountName + '.send', 'event', eventOptions);
            }
        }
        else if (typeof _gaq !== 'undefined') {
            _gaq.push(['_trackEvent', properties.category, action, properties.label, properties.value, properties.noninteraction]);
        }
    };
    /**
     * Exception Track Event in GA
     * @name exceptionTrack
     *
     * @param {object} properties Comprised of the optional fields:
     *     'fatal' (string),
     *     'description' (string)
     *
     * @https://developers.google.com/analytics/devguides/collection/analyticsjs/exceptions
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     */
    Angulartics2GoogleAnalytics.prototype.exceptionTrack = function (properties) {
        if (properties.fatal === undefined) {
            console.log('No "fatal" provided, sending with fatal=true');
            properties.fatal = true;
        }
        properties.exDescription = properties.description;
        var eventOptions = {
            exFatal: properties.fatal,
            exDescription: properties.description
        };
        ga('send', 'exception', eventOptions);
    };
    Angulartics2GoogleAnalytics.prototype.setUsername = function (userId) {
        this.angulartics2.settings.ga.userId = userId;
    };
    Angulartics2GoogleAnalytics.prototype.setUserProperties = function (properties) {
        this.setDimensionsAndMetrics(properties);
    };
    /**
     * User Timings Event in GA
     * @name userTimings
     *
     * @param {object} properties Comprised of the mandatory fields:
     *     'timingCategory' (string),
     *     'timingVar' (string),
     *     'timingValue' (number)
     * Properties can also have the optional fields:
     *     'timingLabel' (string)
     *
     * @link https://developers.google.com/analytics/devguides/collection/analyticsjs/user-timings
     */
    Angulartics2GoogleAnalytics.prototype.userTimings = function (properties) {
        if (!properties || !properties.timingCategory || !properties.timingVar || !properties.timingValue) {
            console.error('Properties timingCategory, timingVar, and timingValue are required to be set.');
            return;
        }
        if (ga) {
            ga('send', 'timing', properties);
        }
    };
    Angulartics2GoogleAnalytics.prototype.setDimensionsAndMetrics = function (properties) {
        if (ga) {
            // add custom dimensions and metrics
            for (var idx = 1; idx <= 200; idx++) {
                if (properties['dimension' + idx.toString()]) {
                    ga('set', 'dimension' + idx.toString(), properties['dimension' + idx.toString()]);
                }
                else {
                    ga('set', 'dimension' + idx.toString(), undefined);
                }
                if (properties['metric' + idx.toString()]) {
                    ga('set', 'metric' + idx.toString(), properties['metric' + idx.toString()]);
                }
                else {
                    ga('set', 'metric' + idx.toString(), undefined);
                }
            }
        }
    };
    Angulartics2GoogleAnalytics = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2])
    ], Angulartics2GoogleAnalytics);
    return Angulartics2GoogleAnalytics;
}());
exports.Angulartics2GoogleAnalytics = Angulartics2GoogleAnalytics;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
var Angulartics2GoogleTagManager = /** @class */ (function () {
    function Angulartics2GoogleTagManager(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        // The dataLayer needs to be initialized
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer = window.dataLayer = window.dataLayer || [];
        }
        this.angulartics2.settings.pageTracking.trackRelativePath = true;
        // Set the default settings for this module
        this.angulartics2.settings.gtm = {
            userId: null
        };
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.exceptionTrack.subscribe(function (x) { return _this.exceptionTrack(x); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
    }
    Angulartics2GoogleTagManager.prototype.pageTrack = function (path) {
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer.push({
                'event': 'Page View',
                'content-name': path,
                'userId': this.angulartics2.settings.gtm.userId
            });
        }
    };
    /**
     * Send interactions to the dataLayer, i.e. for event tracking in Google Analytics
     * @name eventTrack
     *
     * @param {string} action Required 'action' (string) associated with the event
     * @param {object} properties Comprised of the mandatory field 'category' (string) and optional  fields 'label' (string), 'value' (integer) and 'noninteraction' (boolean)
     */
    Angulartics2GoogleTagManager.prototype.eventTrack = function (action, properties) {
        // Set a default GTM category
        properties = properties || {};
        if (typeof dataLayer !== 'undefined' && dataLayer) {
            dataLayer.push({
                event: properties.event || 'interaction',
                target: properties.category || 'Event',
                action: action,
                label: properties.label,
                value: properties.value,
                interactionType: properties.noninteraction,
                userId: this.angulartics2.settings.gtm.userId
            });
        }
    };
    /**
     * Exception Track Event in GTM
     * @name exceptionTrack
     *
     * @param {object} properties Comprised of the mandatory fields 'appId' (string), 'appName' (string) and 'appVersion' (string) and
     * optional  fields 'fatal' (boolean) and 'description' (string)
     */
    Angulartics2GoogleTagManager.prototype.exceptionTrack = function (properties) {
        if (!properties || !properties.appId || !properties.appName || !properties.appVersion) {
            console.error('Must be setted appId, appName and appVersion.');
            return;
        }
        if (properties.fatal === undefined) {
            console.log('No "fatal" provided, sending with fatal=true');
            properties.exFatal = true;
        }
        properties.exDescription = properties.event ? properties.event.stack : properties.description;
        this.eventTrack("Exception thrown for " + properties.appName + " <" + properties.appId + "@" + properties.appVersion + ">", {
            'category': 'Exception',
            'label': properties.exDescription
        });
    };
    /**
     * Set userId for use with Universal Analytics User ID feature
     * @name setUsername
     *
     * @param {string} userId Required 'userId' value (string) used to identify user cross-device in Google Analytics
     */
    Angulartics2GoogleTagManager.prototype.setUsername = function (userId) {
        this.angulartics2.settings.gtm.userId = userId;
    };
    Angulartics2GoogleTagManager = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2])
    ], Angulartics2GoogleTagManager);
    return Angulartics2GoogleTagManager;
}());
exports.Angulartics2GoogleTagManager = Angulartics2GoogleTagManager;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
var Angulartics2Kissmetrics = /** @class */ (function () {
    function Angulartics2Kissmetrics(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (_kmq) === 'undefined') {
            _kmq = [];
        }
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2Kissmetrics.prototype.pageTrack = function (path, location) {
        _kmq.push(['record', 'Pageview', { 'Page': path }]);
    };
    Angulartics2Kissmetrics.prototype.eventTrack = function (action, properties) {
        _kmq.push(['record', action, properties]);
    };
    Angulartics2Kissmetrics.prototype.setUsername = function (userId) {
        _kmq.push(['identify', userId]);
    };
    Angulartics2Kissmetrics.prototype.setUserProperties = function (properties) {
        _kmq.push(['set', properties]);
    };
    Angulartics2Kissmetrics = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2])
    ], Angulartics2Kissmetrics);
    return Angulartics2Kissmetrics;
}());
exports.Angulartics2Kissmetrics = Angulartics2Kissmetrics;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
var Angulartics2Mixpanel = /** @class */ (function () {
    function Angulartics2Mixpanel(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.setUserPropertiesOnce.subscribe(function (x) { return _this.setUserPropertiesOnce(x); });
        this.angulartics2.setSuperProperties.subscribe(function (x) { return _this.setSuperProperties(x); });
        this.angulartics2.setSuperPropertiesOnce.subscribe(function (x) { return _this.setSuperPropertiesOnce(x); });
        this.angulartics2.setAlias.subscribe(function (x) { return _this.setAlias(x); });
    }
    Angulartics2Mixpanel.prototype.pageTrack = function (path, location) {
        try {
            mixpanel.track('Page Viewed', { page: path });
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.eventTrack = function (action, properties) {
        try {
            mixpanel.track(action, properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setUsername = function (userId) {
        try {
            mixpanel.identify(userId);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setUserProperties = function (properties) {
        try {
            mixpanel.people.set(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setUserPropertiesOnce = function (properties) {
        try {
            mixpanel.people.set_once(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setSuperProperties = function (properties) {
        try {
            mixpanel.register(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setSuperPropertiesOnce = function (properties) {
        try {
            mixpanel.register_once(properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel.prototype.setAlias = function (alias) {
        try {
            mixpanel.alias(alias);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Mixpanel = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2])
    ], Angulartics2Mixpanel);
    return Angulartics2Mixpanel;
}());
exports.Angulartics2Mixpanel = Angulartics2Mixpanel;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
var Angulartics2Piwik = /** @class */ (function () {
    function Angulartics2Piwik(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof (_paq) === 'undefined') {
            console.warn('Piwik not found');
        }
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2Piwik.prototype.pageTrack = function (path, location) {
        try {
            _paq.push(['setDocumentTitle', window.document.title]);
            _paq.push(['setCustomUrl', path]);
            _paq.push(['trackPageView']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Piwik.prototype.eventTrack = function (action, properties) {
        try {
            if (properties.value) {
                var parsed = parseInt(properties.value, 10);
                properties.value = isNaN(parsed) ? 0 : parsed;
            }
            _paq.push(['trackEvent', properties.category, action, properties.label, properties.value]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Piwik.prototype.setUsername = function (userId) {
        try {
            _paq.push(['setUserId', userId]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    /**
     * Sets custom dimensions if at least one property has the key "dimension<n>",
     * e.g. dimension10. If there are custom dimensions, any other property is ignored.
     *
     * If there are no custom dimensions in the given properties object, the properties
     * object is saved as a custom variable.
     *
     * If in doubt, prefer custom dimensions.
     * @see https://piwik.org/docs/custom-variables/
     */
    Angulartics2Piwik.prototype.setUserProperties = function (properties) {
        try {
            var dimensions = this.setCustomDimensions(properties);
            if (dimensions.length === 0) {
                _paq.push(['setCustomVariable', properties]);
            }
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Piwik.prototype.setCustomDimensions = function (properties) {
        var dimensionRegex = /dimension[1-9]\d*/;
        var dimensions = Object.keys(properties).filter(function (key) { return dimensionRegex.exec(key); });
        dimensions.forEach(function (dimension) {
            var number = Number(dimension.substr(9));
            _paq.push(['setCustomDimension', number, properties[dimension]]);
        });
        return dimensions;
    };
    Angulartics2Piwik = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2])
    ], Angulartics2Piwik);
    return Angulartics2Piwik;
}());
exports.Angulartics2Piwik = Angulartics2Piwik;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
var Angulartics2Segment = /** @class */ (function () {
    function Angulartics2Segment(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.setUserPropertiesOnce.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.setAlias.subscribe(function (x) { return _this.setAlias(x); });
    }
    // https://segment.com/docs/libraries/analytics.js/#page
    // analytics.page([category], [name], [properties], [options], [callback]);
    // TODO : Support optional parameters where the parameter order and type changes their meaning
    // e.g.
    // (string) is (name)
    // (string, string) is (category, name)
    // (string, object) is (name, properties)
    Angulartics2Segment.prototype.pageTrack = function (path, location) {
        try {
            analytics.page(path);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    // https://segment.com/docs/libraries/analytics.js/#track
    // analytics.track(event, [properties], [options], [callback]);
    Angulartics2Segment.prototype.eventTrack = function (action, properties) {
        try {
            analytics.track(action, properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    // https://segment.com/docs/libraries/analytics.js/#identify
    // analytics.identify([userId], [traits], [options], [callback]);
    Angulartics2Segment.prototype.setUserProperties = function (properties) {
        try {
            if (properties.userId) {
                analytics.identify(properties.userId, properties);
            }
            else {
                analytics.identify(properties);
            }
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    // https://segment.com/docs/libraries/analytics.js/#alias
    // analytics.alias(userId, previousId, options, callback);
    Angulartics2Segment.prototype.setAlias = function (alias) {
        try {
            analytics.alias(alias);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Segment = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2])
    ], Angulartics2Segment);
    return Angulartics2Segment;
}());
exports.Angulartics2Segment = Angulartics2Segment;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
var Angulartics2Intercom = /** @class */ (function () {
    function Angulartics2Intercom(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
        this.angulartics2.setUserPropertiesOnce.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2Intercom.prototype.pageTrack = function (path, location) {
        try {
            this.eventTrack('Pageview', {
                url: path
            });
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Intercom.prototype.eventTrack = function (action, properties) {
        try {
            Intercom('trackEvent', action, properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Intercom.prototype.setUserProperties = function (properties) {
        try {
            if (properties.userId && !properties.user_id) {
                properties.user_id = properties.userId;
            }
            Intercom('boot', properties);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    };
    Angulartics2Intercom = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2])
    ], Angulartics2Intercom);
    return Angulartics2Intercom;
}());
exports.Angulartics2Intercom = Angulartics2Intercom;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
var Angulartics2Facebook = /** @class */ (function () {
    function Angulartics2Facebook(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.angulartics2.settings.pageTracking.trackRelativePath = true;
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
    }
    /**
     * Send interactions to the Pixel, i.e. for event tracking in Pixel
     * @name eventTrack
     *
     * @param {string} action Required 'action' (string) associated with the event
     * @param {object} properties
     */
    Angulartics2Facebook.prototype.eventTrack = function (action, properties) {
        properties = properties || {};
        var eventList = [
            'ViewContent',
            'Search',
            'AddToCart',
            'AddToWishlist',
            'InitiateCheckout',
            'AddPaymentInfo',
            'Purchase',
            'Lead',
            'CompleteRegistration'
        ];
        if (typeof fbq !== 'undefined' && fbq) {
            eventList.indexOf(action) === -1 ?
                fbq('trackCustom', action, properties) :
                fbq('track', action, properties);
        }
    };
    Angulartics2Facebook = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2])
    ], Angulartics2Facebook);
    return Angulartics2Facebook;
}());
exports.Angulartics2Facebook = Angulartics2Facebook;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(5);
var router_1 = __webpack_require__(3);
var Angulartics2AppInsights = /** @class */ (function () {
    function Angulartics2AppInsights(angulartics2, title, router) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.title = title;
        this.router = router;
        this.loadStartTime = null;
        this.loadTime = null;
        this.metrics = null;
        this.dimensions = null;
        this.measurements = null;
        if (typeof (appInsights) === 'undefined') {
            console.warn('appInsights not found');
        }
        this.angulartics2.settings.appInsights = {
            userId: null
        };
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.exceptionTrack.subscribe(function (x) { return _this.exceptionTrack(x); });
        this.angulartics2.setUsername.subscribe(function (x) { return _this.setUsername(x); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationStart; })
            .subscribe(function (event) { return _this.startTimer(); });
        this.router.events
            .filter(function (event) {
            return (event instanceof router_1.NavigationError) ||
                (event instanceof router_1.NavigationEnd);
        })
            .subscribe(function (error) { return _this.stopTimer(); });
    }
    Angulartics2AppInsights.prototype.startTimer = function () {
        this.loadStartTime = Date.now();
        this.loadTime = null;
    };
    Angulartics2AppInsights.prototype.stopTimer = function () {
        this.loadTime = Date.now() - this.loadStartTime;
        this.loadStartTime = null;
    };
    /**
     * Page Track in Baidu Analytics
     * @name pageTrack
     *
     * @param {string} path Required 'path' (string)
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackpageview
     *
     */
    Angulartics2AppInsights.prototype.pageTrack = function (path) {
        appInsights.trackPageView(this.title.getTitle(), path, this.dimensions, this.metrics, this.loadTime);
    };
    /**
     * Log a user action or other occurrence.
     * @param   name    A string to identify this event in the portal.
     *
     * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
     *
     * @https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackevent
     */
    Angulartics2AppInsights.prototype.eventTrack = function (name, properties) {
        appInsights.trackEvent(name, properties, this.measurements);
    };
    /**
     * Exception Track Event in GA
     * @name exceptionTrack
     *
     * @param {any} properties Comprised of the mandatory fields 'appId' (string), 'appName' (string) and 'appVersion' (string) and
     * optional  fields 'fatal' (boolean) and 'description' (string), error
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#trackexception
     */
    Angulartics2AppInsights.prototype.exceptionTrack = function (properties) {
        var description = properties.event || properties.description || properties;
        appInsights.trackException(description);
    };
    /**
     *
     * @param userId
     *
     * @link https://github.com/Microsoft/ApplicationInsights-JS/blob/master/API-reference.md#setauthenticatedusercontext
     */
    Angulartics2AppInsights.prototype.setUsername = function (userId) {
        this.angulartics2.settings.appInsights.userId = userId;
        appInsights.setAuthenticatedUserContext(userId);
    };
    Angulartics2AppInsights.prototype.setUserProperties = function (properties) {
        if (properties.userId) {
            this.angulartics2.settings.appInsights.userId = properties.userId;
        }
        if (properties.accountId) {
            appInsights.setAuthenticatedUserContext(this.angulartics2.settings.appInsights.userId, properties.accountId);
        }
    };
    Angulartics2AppInsights = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2,
            platform_browser_1.Title,
            router_1.Router])
    ], Angulartics2AppInsights);
    return Angulartics2AppInsights;
}());
exports.Angulartics2AppInsights = Angulartics2AppInsights;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
var Angulartics2Hubspot = /** @class */ (function () {
    function Angulartics2Hubspot(angulartics2) {
        var _this = this;
        this.angulartics2 = angulartics2;
        if (typeof _hsq === 'undefined') {
            _hsq = [];
        }
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path, x.location); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2Hubspot.prototype.pageTrack = function (path, location) {
        if (typeof _hsq !== 'undefined') {
            _hsq.push(['setPath', path]);
            _hsq.push(['trackPageView']);
        }
    };
    Angulartics2Hubspot.prototype.eventTrack = function (action, properties) {
        if (typeof _hsq !== 'undefined') {
            _hsq.push(['trackEvent', properties]);
        }
    };
    Angulartics2Hubspot.prototype.setUserProperties = function (properties) {
        if (typeof _hsq !== 'undefined') {
            _hsq.push(['identify', properties]);
        }
    };
    Angulartics2Hubspot = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2])
    ], Angulartics2Hubspot);
    return Angulartics2Hubspot;
}());
exports.Angulartics2Hubspot = Angulartics2Hubspot;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(2);
var angulartics2_1 = __webpack_require__(1);
var Angulartics2AdobeAnalytics = /** @class */ (function () {
    function Angulartics2AdobeAnalytics(angulartics2, location) {
        var _this = this;
        this.angulartics2 = angulartics2;
        this.location = location;
        this.angulartics2.settings.pageTracking.trackRelativePath = true;
        this.angulartics2.pageTrack.subscribe(function (x) { return _this.pageTrack(x.path); });
        this.angulartics2.eventTrack.subscribe(function (x) { return _this.eventTrack(x.action, x.properties); });
        this.angulartics2.setUserProperties.subscribe(function (x) { return _this.setUserProperties(x); });
    }
    Angulartics2AdobeAnalytics.prototype.pageTrack = function (path) {
        if (typeof s !== 'undefined' && s) {
            s.clearVars();
            s.t({ pageName: path });
        }
    };
    /**
     * Track Event in Adobe Analytics
     * @name eventTrack
     *
     * @param {string} action Required 'action' (string) associated with the event
     * @param {object} properties Comprised of the mandatory field 'category' (string) and optional  fields 'label' (string), 'value' (integer) and 'noninteraction' (boolean)
     *
     * @link https://marketing.adobe.com/resources/help/en_US/sc/implement/js_implementation.html
     */
    Angulartics2AdobeAnalytics.prototype.eventTrack = function (action, properties) {
        if (!properties) {
            properties = properties || {};
        }
        if (typeof s !== 'undefined' && s) {
            if (typeof properties === 'object') {
                this.setUserProperties(properties);
            }
            if (action) {
                // if linkName property is passed, use that; otherwise, the action is the linkName
                var linkName = (properties['linkName']) ? properties['linkName'] : action;
                // note that 'this' should refer the link element, but we can't get that in this function. example:
                // <a href="http://anothersite.com" onclick="s.tl(this,'e','AnotherSite',null)">
                // if disableDelay property is passed, use that to turn off/on the 500ms delay; otherwise, it uses this
                var disableDelay = !!properties['disableDelay'] ? true : this;
                // if action property is passed, use that; otherwise, the action remains unchanged
                if (properties['action']) {
                    action = properties['action'];
                }
                this.setPageName();
                if (action.toUpperCase() === "DOWNLOAD") {
                    s.tl(disableDelay, 'd', linkName);
                }
                else if (action.toUpperCase() === "EXIT") {
                    s.tl(disableDelay, 'e', linkName);
                }
                else {
                    s.tl(disableDelay, 'o', linkName);
                }
            }
        }
    };
    Angulartics2AdobeAnalytics.prototype.setPageName = function () {
        var path = this.location.path(true);
        var hashNdx = path.indexOf('#');
        if (hashNdx > 0 && hashNdx < path.length) {
            s.pageName = path.substring(hashNdx + 1);
        }
        else {
            s.pageName = path;
        }
    };
    Angulartics2AdobeAnalytics.prototype.setUserProperties = function (properties) {
        if (typeof s !== 'undefined' && s) {
            if (typeof properties === 'object') {
                for (var key in properties) {
                    if (properties.hasOwnProperty(key)) {
                        s[key] = properties[key];
                    }
                }
            }
        }
    };
    Angulartics2AdobeAnalytics = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2,
            common_1.Location])
    ], Angulartics2AdobeAnalytics);
    return Angulartics2AdobeAnalytics;
}());
exports.Angulartics2AdobeAnalytics = Angulartics2AdobeAnalytics;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var angulartics2_1 = __webpack_require__(1);
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
    Angulartics2SPRW = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angulartics2_1.Angulartics2])
    ], Angulartics2SPRW);
    return Angulartics2SPRW;
}());
exports.Angulartics2SPRW = Angulartics2SPRW;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiNmEyOTRiODNhNWQxMDA1MzBmYyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvYW5ndWxhcnRpY3MyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9jb3JlL2FuZ3VsYXJ0aWNzMk9uLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9SZXBsYXlTdWJqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdmlkZXJzL2JhaWR1L2FuZ3VsYXJ0aWNzMi1iYWlkdS1hbmFseXRpY3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9nYS9hbmd1bGFydGljczItZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9ndG0vYW5ndWxhcnRpY3MyLWd0bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdmlkZXJzL2tpc3NtZXRyaWNzL2FuZ3VsYXJ0aWNzMi1raXNzbWV0cmljcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdmlkZXJzL21peHBhbmVsL2FuZ3VsYXJ0aWNzMi1taXhwYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdmlkZXJzL3Bpd2lrL2FuZ3VsYXJ0aWNzMi1waXdpay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvdmlkZXJzL3NlZ21lbnQvYW5ndWxhcnRpY3MyLXNlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9pbnRlcmNvbS9hbmd1bGFydGljczItaW50ZXJjb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9mYWNlYm9vay9hbmd1bGFydGljczItZmFjZWJvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9hcHBpbnNpZ2h0cy9hbmd1bGFydGljczItYXBwaW5zaWdodHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3ZpZGVycy9odWJzcG90L2FuZ3VsYXJ0aWNzMi1odWJzcG90LnRzIiwid2VicGFjazovLy8uL3NyYy9wcm92aWRlcnMvYWRvYmVhbmFseXRpY3MvYW5ndWxhcnRpY3MyLWFkb2JlYW5hbHl0aWNzLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm92aWRlcnMvc3Bydy9hbmd1bGFydGljczItc3Bydy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxvQ0FBMkM7QUFDM0MsNkNB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WUFBWSxHQUFHO2dCQUNuQixhQUFhLEVBQUUsVUFBVSxDQUFDLFFBQVE7Z0JBQ2xDLFdBQVcsRUFBRSxNQUFNO2dCQUNuQixVQUFVLEVBQUUsVUFBVSxDQUFDLEtBQUs7Z0JBQzVCLFVBQVUsRUFBRSxVQUFVLENBQUMsS0FBSztnQkFDNUIsY0FBYyxFQUFFLFVBQVUsQ0FBQyxjQUFjO2dCQUN6QyxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUTtnQkFDeEUsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNqQyxXQUFXLEVBQUUsVUFBVSxDQUFDLFdBQVc7YUFDcEMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxJQUFZO1FBQ3BCLElBQUksT0FBTyxFQUFFLEtBQUssV0FBVyxJQUFJLEVBQUUsRUFBRTtZQUNuQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDLElBQUksQ0FBQyxjQUFjLEVBQUMsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFsRFUsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7eUNBS3VCLDJCQUFZO09BSm5DLGdCQUFnQixDQW1ENUI7SUFBRCx1QkFBQztDQUFBO0FBbkRZLDRDQUFnQiIsImZpbGUiOiJjb3JlLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIiksIHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLCByZXF1aXJlKFwicnhqcy9SZXBsYXlTdWJqZWN0XCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkBhbmd1bGFyL2NvcmVcIiwgXCJAYW5ndWxhci9jb21tb25cIiwgXCJAYW5ndWxhci9yb3V0ZXJcIiwgXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIsIFwicnhqcy9SZXBsYXlTdWJqZWN0XCIsIFwicnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5neC10cmFuc2xhdGUtY29yZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIiksIHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLCByZXF1aXJlKFwicnhqcy9SZXBsYXlTdWJqZWN0XCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ3gtdHJhbnNsYXRlLWNvcmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJAYW5ndWxhci9jb3JlXCJdLCByb290W1wiQGFuZ3VsYXIvY29tbW9uXCJdLCByb290W1wiQGFuZ3VsYXIvcm91dGVyXCJdLCByb290W1wiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXSwgcm9vdFtcInJ4anMvUmVwbGF5U3ViamVjdFwiXSwgcm9vdFtcInJ4anMvYWRkL29wZXJhdG9yL2ZpbHRlclwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjZhMjk0YjgzYTVkMTAwNTMwZmMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMvUmVwbGF5U3ViamVjdCc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyIHtcclxuICBwdWJsaWMgc2V0dGluZ3M6IGFueSA9IHtcclxuICAgIHBhZ2VUcmFja2luZzoge1xyXG4gICAgICBhdXRvVHJhY2tWaXJ0dWFsUGFnZXM6IHRydWUsXHJcbiAgICAgIGJhc2VQYXRoOiAnJyxcclxuICAgICAgZXhjbHVkZWRSb3V0ZXM6IFtdXHJcbiAgICB9LFxyXG4gICAgZXZlbnRUcmFja2luZzoge30sXHJcbiAgICBkZXZlbG9wZXJNb2RlOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIC8qXHJcbiAgICBAUGFyYW06ICh7dXJsOiBzdHJpbmcsIGxvY2F0aW9uOiBMb2NhdGlvbn0pXHJcbiAgICovXHJcbiAgcHVibGljIHBhZ2VUcmFjazogUmVwbGF5U3ViamVjdDxhbnk+ID0gbmV3IFJlcGxheVN1YmplY3QoMTApO1xyXG5cclxuICAvKlxyXG4gICAgQFBhcmFtOiAoe2FjdGlvbjogYW55LCBwcm9wZXJ0aWVzOiBhbnl9KVxyXG4gICAqL1xyXG4gIHB1YmxpYyBldmVudFRyYWNrOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdCgxMCk7XHJcblxyXG4gIC8qXHJcbiAgICBAUGFyYW06IChwcm9wZXJ0aWVzOiBhbnkpXHJcbiAgICovXHJcbiAgcHVibGljIGV4Y2VwdGlvblRyYWNrOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdCgxMCk7XHJcblxyXG4gIC8qXHJcbiAgICBAUGFyYW06IChhbGlhczogc3RyaW5nKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXRBbGlhczogUmVwbGF5U3ViamVjdDxhbnk+ID0gbmV3IFJlcGxheVN1YmplY3QoMTApO1xyXG5cclxuICAvKlxyXG4gICAgQFBhcmFtOiAodXNlcklkOiBzdHJpbmcpXHJcbiAgICovXHJcbiAgcHVibGljIHNldFVzZXJuYW1lOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdCgxMCk7XHJcblxyXG4gIC8qXHJcbiAgICBAUGFyYW06ICh7YWN0aW9uOiBhbnksIHByb3BlcnRpZXM6IGFueX0pXHJcbiAgICovXHJcbiAgcHVibGljIHNldFVzZXJQcm9wZXJ0aWVzOiBSZXBsYXlTdWJqZWN0PGFueT4gPSBuZXcgUmVwbGF5U3ViamVjdCgxMCk7XHJcblxyXG4gIC8qXHJcbiAgICBAUGFyYW06IChwcm9wZXJ0aWVzOiBhbnkpXHJcbiAgICovXHJcbiAgcHVibGljIHNldFVzZXJQcm9wZXJ0aWVzT25jZTogUmVwbGF5U3ViamVjdDxhbnk+ID0gbmV3IFJlcGxheVN1YmplY3QoMTApO1xyXG5cclxuICAvKlxyXG4gICAgQFBhcmFtOiAocHJvcGVydGllczogYW55KVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXRTdXBlclByb3BlcnRpZXM6IFJlcGxheVN1YmplY3Q8YW55PiA9IG5ldyBSZXBsYXlTdWJqZWN0KDEwKTtcclxuXHJcbiAgLypcclxuICAgIEBQYXJhbTogKHByb3BlcnRpZXM6IGFueSlcclxuICAgKi9cclxuICBwdWJsaWMgc2V0U3VwZXJQcm9wZXJ0aWVzT25jZTogUmVwbGF5U3ViamVjdDxhbnk+ID0gbmV3IFJlcGxheVN1YmplY3QoMTApO1xyXG5cclxuICAvKlxyXG4gICAgQFBhcmFtOiAocHJvcGVydGllczogYW55KVxyXG4gICAqL1xyXG4gIHB1YmxpYyB1c2VyVGltaW5nczogUmVwbGF5U3ViamVjdDxhbnk+ID0gbmV3IFJlcGxheVN1YmplY3QoMTApO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbjogTG9jYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLnRyYWNrTG9jYXRpb24obG9jYXRpb24sIHJvdXRlcik7XHJcbiAgfVxyXG5cclxuICB0cmFja0xvY2F0aW9uKGxvY2F0aW9uOiBMb2NhdGlvbiwgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIHJvdXRlci5ldmVudHNcclxuICAgICAgLmZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmRldmVsb3Blck1vZGUpIHtcclxuICAgICAgICAgIHRoaXMudHJhY2tVcmxDaGFuZ2UoZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMsIGxvY2F0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmlydHVhbFBhZ2V2aWV3cyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuYXV0b1RyYWNrVmlydHVhbFBhZ2VzID0gdmFsdWU7XHJcbiAgfVxyXG4gIGV4Y2x1ZGVSb3V0ZXMocm91dGVzOiBBcnJheTxzdHJpbmd8UmVnRXhwPikge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuZXhjbHVkZWRSb3V0ZXMgPSByb3V0ZXM7XHJcbiAgfVxyXG4gIGZpcnN0UGFnZXZpZXcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2V0dGluZ3MucGFnZVRyYWNraW5nLmF1dG9UcmFja0ZpcnN0UGFnZSA9IHZhbHVlO1xyXG4gIH1cclxuICB3aXRoQmFzZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5iYXNlUGF0aCA9ICh2YWx1ZSk7XHJcbiAgfVxyXG4gIGRldmVsb3Blck1vZGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuZGV2ZWxvcGVyTW9kZSA9IHZhbHVlO1xyXG4gIH1cclxuICBcclxuICBwcm90ZWN0ZWQgdHJhY2tVcmxDaGFuZ2UodXJsOiBzdHJpbmcsIGxvY2F0aW9uOiBMb2NhdGlvbikge1xyXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLmRldmVsb3Blck1vZGUpIHtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MucGFnZVRyYWNraW5nLmF1dG9UcmFja1ZpcnR1YWxQYWdlcyAmJiAhdGhpcy5tYXRjaGVzRXhjbHVkZWRSb3V0ZSh1cmwpKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlVHJhY2submV4dCh7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5iYXNlUGF0aC5sZW5ndGggPyB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5iYXNlUGF0aCArIHVybCA6IGxvY2F0aW9uLnByZXBhcmVFeHRlcm5hbFVybCh1cmwpLFxyXG4gICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBtYXRjaGVzRXhjbHVkZWRSb3V0ZSh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgZm9yIChsZXQgZXhjbHVkZWRSb3V0ZSBvZiB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5leGNsdWRlZFJvdXRlcykge1xyXG4gICAgICBpZiAoKGV4Y2x1ZGVkUm91dGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZXhjbHVkZWRSb3V0ZS50ZXN0KHVybCkpIHx8IHVybC5pbmRleE9mKGV4Y2x1ZGVkUm91dGUpID4gLTEpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb3JlL2FuZ3VsYXJ0aWNzMi50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3RhYmxlLCBJbnB1dCwgRWxlbWVudFJlZiwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudE1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuLy8gaW1wb3J0IHsgZ2V0RE9NIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9zcmMvZG9tL2RvbV9hZGFwdGVyJztcclxuXHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJy4vYW5ndWxhcnRpY3MyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYW5ndWxhcnRpY3MyT25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyT24gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuICBASW5wdXQoJ2FuZ3VsYXJ0aWNzMk9uJykgYW5ndWxhcnRpY3MyT246IHN0cmluZztcclxuICBASW5wdXQoKSBhbmd1bGFydGljc0V2ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYW5ndWxhcnRpY3NDYXRlZ29yeTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFuZ3VsYXJ0aWNzUHJvcGVydGllczogYW55O1xyXG5cclxuICBwcml2YXRlIGVsOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXHJcbiAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyXHJcbiAgKSB7XHJcbiAgICB0aGlzLmVsID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG4gICAgLy8gRG9uJ3QgbGlzdGVuIGluIHNlcnZlci1zaWRlXHJcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIoKSkge1xyXG4gICAgICB0aGlzLmV2ZW50TWFuYWdlci5hZGRFdmVudExpc3RlbmVyKHRoaXMuZWwsIHRoaXMuYW5ndWxhcnRpY3MyT24gfHwgJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHRoaXMuZXZlbnRUcmFjayhldmVudCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQnJvd3NlcigpIHtcclxuICAgIHJldHVybiB0eXBlb2Yod2luZG93KSAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXZlbnRUcmFjayhldmVudDogYW55KSB7XHJcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFuZ3VsYXJ0aWNzRXZlbnQ7IC8vIHx8IHRoaXMuaW5mZXJFdmVudE5hbWUoKTtcclxuICAgIGxldCBwcm9wZXJ0aWVzOiBhbnkgPSB7XHJcbiAgICAgIGV2ZW50VHlwZTogZXZlbnQudHlwZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5hbmd1bGFydGljc0NhdGVnb3J5KSB7XHJcbiAgICAgIHByb3BlcnRpZXMuY2F0ZWdvcnkgPSB0aGlzLmFuZ3VsYXJ0aWNzQ2F0ZWdvcnk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWxsb3cgY29tcG9uZW50cyB0byBwYXNzIHRocm91Z2ggYW4gZXhwcmVzc2lvbiB0aGF0IGdldHMgbWVyZ2VkIG9uIHRvIHRoZSBldmVudCBwcm9wZXJ0aWVzXHJcbiAgICAvLyBlZy4gYW5ndWxhcnRpY3MtcHJvcGVyaXRlcz0nbXlDb21wb25lbnRTY29wZS5zb21lQ29uZmlnRXhwcmVzc2lvbi4kYW5ndWxhcnRpY3NQcm9wZXJ0aWVzJ1xyXG4gICAgaWYgKHRoaXMuYW5ndWxhcnRpY3NQcm9wZXJ0aWVzKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywgdGhpcy5hbmd1bGFydGljc1Byb3BlcnRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2submV4dCh7XHJcbiAgICAgIGFjdGlvbixcclxuICAgICAgcHJvcGVydGllc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKnByaXZhdGUgaXNDb21tYW5kKCkge1xyXG4gICAgcmV0dXJuIFsnYTonLCAnYnV0dG9uOicsICdidXR0b246YnV0dG9uJywgJ2J1dHRvbjpzdWJtaXQnLCAnaW5wdXQ6YnV0dG9uJywgJ2lucHV0OnN1Ym1pdCddLmluZGV4T2YoXHJcbiAgICAgIGdldERPTSgpLnRhZ05hbWUodGhpcy5lbCkudG9Mb3dlckNhc2UoKSArICc6JyArIChnZXRET00oKS50eXBlKHRoaXMuZWwpIHx8ICcnKSkgPj0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5mZXJFdmVudE5hbWUoKSB7XHJcbiAgICBpZiAodGhpcy5pc0NvbW1hbmQoKSkgcmV0dXJuIGdldERPTSgpLmdldFRleHQodGhpcy5lbCkgfHwgZ2V0RE9NKCkuZ2V0VmFsdWUodGhpcy5lbCk7XHJcbiAgICByZXR1cm4gZ2V0RE9NKCkuZ2V0UHJvcGVydHkodGhpcy5lbCwgJ2lkJykgfHwgZ2V0RE9NKCkuZ2V0UHJvcGVydHkodGhpcy5lbCwgJ25hbWUnKSB8fCBnZXRET00oKS50YWdOYW1lKHRoaXMuZWwpO1xyXG4gIH0qL1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvcmUvYW5ndWxhcnRpY3MyT24udHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7XHJcbiAgTmdNb2R1bGUsXHJcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcclxuICBJbmplY3QsXHJcbiAgT3B0aW9uYWwsXHJcbiAgSW5qZWN0aW9uVG9rZW4sXHJcbiAgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJy4vY29yZS9hbmd1bGFydGljczInO1xyXG5pbXBvcnQgeyBBbmd1bGFydGljczJPbiB9IGZyb20gJy4vY29yZS9hbmd1bGFydGljczJPbic7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvcmUvYW5ndWxhcnRpY3MyJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2FuZ3VsYXJ0aWNzMk9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9wcm92aWRlcnMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFOR1VMQVJUSUNTMl9GT1JST09UX0dVQVJEID0gbmV3IEluamVjdGlvblRva2VuKCdBTkdVTEFSVElDUzJfRk9SUk9PVF9HVUFSRCcpO1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUZvclJvb3RHdWFyZChhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMik6IGFueSB7XHJcbiAgaWYgKGFuZ3VsYXJ0aWNzMikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgQW5ndWxhcnRpY3MyTW9kdWxlLmZvclJvb3QoKSBjYWxsZWQgdHdpY2UuIExhenkgbG9hZGVkIG1vZHVsZXMgc2hvdWxkIHVzZSBBbmd1bGFydGljczJNb2R1bGUuZm9yQ2hpbGQoKSBpbnN0ZWFkLmApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICdndWFyZGVkJztcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFsgQW5ndWxhcnRpY3MyT24gXSxcclxuICBleHBvcnRzOiBbIEFuZ3VsYXJ0aWNzMk9uIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMk1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChBTkdVTEFSVElDUzJfRk9SUk9PVF9HVUFSRCkgZ3VhcmQ6IGFueSkge31cclxuXHJcbiAgc3RhdGljIGZvclJvb3QocHJvdmlkZXJzOiBBcnJheTxhbnk+KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQW5ndWxhcnRpY3MyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBBTkdVTEFSVElDUzJfRk9SUk9PVF9HVUFSRCxcclxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHByb3ZpZGVGb3JSb290R3VhcmQsXHJcbiAgICAgICAgICBkZXBzOiBbW0FuZ3VsYXJ0aWNzMiwgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpXV1cclxuICAgICAgICB9LFxyXG4gICAgICAgIEFuZ3VsYXJ0aWNzMixcclxuICAgICAgICAuLi5wcm92aWRlcnNcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBbmd1bGFydGljczJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW11cclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvUmVwbGF5U3ViamVjdFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXJcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuL2JhaWR1L2FuZ3VsYXJ0aWNzMi1iYWlkdS1hbmFseXRpY3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2dhL2FuZ3VsYXJ0aWNzMi1nYSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZ3RtL2FuZ3VsYXJ0aWNzMi1ndG0nO1xyXG5leHBvcnQgKiBmcm9tICcuL2tpc3NtZXRyaWNzL2FuZ3VsYXJ0aWNzMi1raXNzbWV0cmljcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWl4cGFuZWwvYW5ndWxhcnRpY3MyLW1peHBhbmVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9waXdpay9hbmd1bGFydGljczItcGl3aWsnO1xyXG5leHBvcnQgKiBmcm9tICcuL3NlZ21lbnQvYW5ndWxhcnRpY3MyLXNlZ21lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ludGVyY29tL2FuZ3VsYXJ0aWNzMi1pbnRlcmNvbSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZmFjZWJvb2svYW5ndWxhcnRpY3MyLWZhY2Vib29rJztcclxuZXhwb3J0ICogZnJvbSAnLi9hcHBpbnNpZ2h0cy9hbmd1bGFydGljczItYXBwaW5zaWdodHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2h1YnNwb3QvYW5ndWxhcnRpY3MyLWh1YnNwb3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2Fkb2JlYW5hbHl0aWNzL2FuZ3VsYXJ0aWNzMi1hZG9iZWFuYWx5dGljcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3Bydy9hbmd1bGFydGljczItc3Bydyc7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9wcm92aWRlcnMvaW5kZXgudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICcuLi8uLi9jb3JlL2FuZ3VsYXJ0aWNzMic7XHJcblxyXG5kZWNsYXJlIHZhciBobXQ6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkJhaWR1QW5hbHl0aWNzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyXHJcbiAgICApIHtcclxuICAgICAgICBpZiAodHlwZW9mIChobXQpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBobXQgPSBbXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBobXQucHVzaChbJ18gc2V0QXV0b1BhZ2V2aWV3JywgZmFsc2VdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLnBhZ2VUcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJuYW1lLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldFVzZXJuYW1lKHgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlclByb3BlcnRpZXMuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGFnZSBUcmFjayBpbiBCYWlkdSBBbmFseXRpY3NcclxuICAgICAqIEBuYW1lIHBhZ2VUcmFja1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFJlcXVpcmVkICdwYXRoJyAoc3RyaW5nKVxyXG4gICAgICpcclxuICAgICAqIEBsaW5rIGh0dHA6Ly90b25namkuYmFpZHUuY29tL29wZW4vYXBpL21vcmU/cD1yZWZfdHJhY2tQYWdldmlld1xyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaG10ICE9PSAndW5kZWZpbmVkJyAmJiBobXQpIHtcclxuICAgICAgICAgICAgaG10LnB1c2goWydfdHJhY2tQYWdldmlldycsIHBhdGhdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmFjayBFdmVudCBpbiBCYWlkdSBBbmFseXRpY3NcclxuICAgICAqIEBuYW1lIGV2ZW50VHJhY2tcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIFJlcXVpcmVkICdhY3Rpb24nIChzdHJpbmcpIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnRcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0aWVzIENvbXByaXNlZCBvZiB0aGUgbWFuZGF0b3J5IGZpZWxkICdjYXRlZ29yeScgKHN0cmluZyksICdvcHRfbGFiZWwnKHN0cmluZykgYW5kICdvcHRfdmFsdWUnIChzdHJpbmcpXHJcbiAgICAgKlxyXG4gICAgICogQGxpbmsgaHR0cDovL3RvbmdqaS5iYWlkdS5jb20vb3Blbi9hcGkvbW9yZT9wPXJlZl90cmFja0V2ZW50XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBhbnkpIHtcclxuICAgICAgICAvL2JhaWR1IGFuYWx5dGljcyByZXF1aXJlcyBjYXRlZ29yeVxyXG4gICAgICAgIGlmICghcHJvcGVydGllcyB8fCAhcHJvcGVydGllcy5jYXRlZ29yeSkge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcclxuICAgICAgICAgICAgcHJvcGVydGllcy5jYXRlZ29yeSA9ICdFdmVudCc7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMub3B0X2xhYmVsID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLm9wdF92YWx1ZSA9ICdkZWZhdWx0JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgaG10ICE9PSAndW5kZWZpbmVkJyAmJiBobXQpIHtcclxuICAgICAgICAgICAgaG10LnB1c2goWydfdHJhY2tFdmVudCcsIHByb3BlcnRpZXMuY2F0ZWdvcnksIGFjdGlvbiwgcHJvcGVydGllcy5vcHRfbGFiZWwsIHByb3BlcnRpZXMub3B0X3ZhbHVlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgY3VzdG9tIHZhcmlhYmxlcyBuYW1lIHRvICdpZGVudGl0eScgYW5kICd2YWx1ZSdcclxuICAgICAgICBobXQucHVzaChbJ19zZXRDdXN0b21WYXInLCAxLCAnaWRlbnRpdHknLCB1c2VySWRdKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBhbnkpIHtcclxuICAgICAgICBobXQucHVzaChbJ19zZXRDdXN0b21WYXInLCAyLCAndXNlcicsIEpTT04uc3RyaW5naWZ5KHByb3BlcnRpZXMpXSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL2JhaWR1L2FuZ3VsYXJ0aWNzMi1iYWlkdS1hbmFseXRpY3MudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICcuLi8uLi9jb3JlL2FuZ3VsYXJ0aWNzMic7XHJcblxyXG5kZWNsYXJlIHZhciBfZ2FxOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGdhOiBhbnk7XHJcbmRlY2xhcmUgdmFyIGxvY2F0aW9uOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3Mge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczJcclxuICApIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLnBhZ2VUcmFja2luZy50cmFja1JlbGF0aXZlUGF0aCA9IHRydWU7XHJcblxyXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIG1vZHVsZVxyXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EgPSB7XHJcbiAgICAgIC8vIGFycmF5IG9mIGFkZGl0aW9uYWwgYWNjb3VudCBuYW1lcyAob25seSB3b3JrcyBmb3IgYW5hbHl0aWNzanMpXHJcbiAgICAgIGFkZGl0aW9uYWxBY2NvdW50TmFtZXM6IFtdLFxyXG4gICAgICB1c2VySWQ6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgpKTtcclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLmV2ZW50VHJhY2soeC5hY3Rpb24sIHgucHJvcGVydGllcykpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV4Y2VwdGlvblRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLmV4Y2VwdGlvblRyYWNrKHgpKTtcclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VybmFtZS5zdWJzY3JpYmUoKHg6IHN0cmluZykgPT4gdGhpcy5zZXRVc2VybmFtZSh4KSk7XHJcblxyXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlclByb3BlcnRpZXMuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnVzZXJUaW1pbmdzLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnVzZXJUaW1pbmdzKHgpKTtcclxuICB9XHJcblxyXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlb2YgX2dhcSAhPT0gJ3VuZGVmaW5lZCcgJiYgX2dhcSkge1xyXG4gICAgICBfZ2FxLnB1c2goWydfdHJhY2tQYWdldmlldycsIHBhdGhdKTtcclxuICAgICAgZm9yIChsZXQgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xyXG4gICAgICAgIF9nYXEucHVzaChbYWNjb3VudE5hbWUgKyAnLl90cmFja1BhZ2V2aWV3JywgcGF0aF0pO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBnYSAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2EpIHtcclxuICAgICAgaWYgKHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLnVzZXJJZCkge1xyXG4gICAgICAgIGdhKCdzZXQnLCAnJnVpZCcsIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLnVzZXJJZCk7XHJcbiAgICAgIH1cclxuICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnLCBwYXRoKTtcclxuICAgICAgZm9yIChsZXQgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xyXG4gICAgICAgIGdhKGFjY291bnROYW1lICsgJy5zZW5kJywgJ3BhZ2V2aWV3JywgcGF0aCk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFjayBFdmVudCBpbiBHQVxyXG4gICAqIEBuYW1lIGV2ZW50VHJhY2tcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gUmVxdWlyZWQgJ2FjdGlvbicgKHN0cmluZykgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0aWVzIENvbXByaXNlZCBvZiB0aGUgbWFuZGF0b3J5IGZpZWxkICdjYXRlZ29yeScgKHN0cmluZykgYW5kIG9wdGlvbmFsICBmaWVsZHMgJ2xhYmVsJyAoc3RyaW5nKSwgJ3ZhbHVlJyAoaW50ZWdlcikgYW5kICdub25pbnRlcmFjdGlvbicgKGJvb2xlYW4pXHJcbiAgICpcclxuICAgKiBAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ2Fqcy9ldmVudFRyYWNrZXJHdWlkZSNTZXR0aW5nVXBFdmVudFRyYWNraW5nXHJcbiAgICpcclxuICAgKiBAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZXZlbnRzXHJcbiAgICovXHJcbiAgZXZlbnRUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55KSB7XHJcbiAgICAvLyBHb29nbGUgQW5hbHl0aWNzIHJlcXVpcmVzIGFuIEV2ZW50IENhdGVnb3J5XHJcbiAgICBpZiAoIXByb3BlcnRpZXMgfHwgIXByb3BlcnRpZXMuY2F0ZWdvcnkpIHtcclxuICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XHJcbiAgICAgIHByb3BlcnRpZXMuY2F0ZWdvcnkgPSAnRXZlbnQnO1xyXG4gICAgfVxyXG4gICAgLy8gR0EgcmVxdWlyZXMgdGhhdCBldmVudFZhbHVlIGJlIGFuIGludGVnZXIsIHNlZTpcclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9maWVsZC1yZWZlcmVuY2UjZXZlbnRWYWx1ZVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2x1aXNmYXJ6YXRpL2FuZ3VsYXJ0aWNzL2lzc3Vlcy84MVxyXG4gICAgaWYgKHByb3BlcnRpZXMudmFsdWUpIHtcclxuICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlSW50KHByb3BlcnRpZXMudmFsdWUsIDEwKTtcclxuICAgICAgcHJvcGVydGllcy52YWx1ZSA9IGlzTmFOKHBhcnNlZCkgPyAwIDogcGFyc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgZ2EgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHZhciBldmVudE9wdGlvbnMgPSB7XHJcbiAgICAgICAgZXZlbnRDYXRlZ29yeTogcHJvcGVydGllcy5jYXRlZ29yeSxcclxuICAgICAgICBldmVudEFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgIGV2ZW50TGFiZWw6IHByb3BlcnRpZXMubGFiZWwsXHJcbiAgICAgICAgZXZlbnRWYWx1ZTogcHJvcGVydGllcy52YWx1ZSxcclxuICAgICAgICBub25JbnRlcmFjdGlvbjogcHJvcGVydGllcy5ub25pbnRlcmFjdGlvbixcclxuICAgICAgICBwYWdlOiBwcm9wZXJ0aWVzLnBhZ2UgfHwgbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkgfHwgbG9jYXRpb24ucGF0aG5hbWUsXHJcbiAgICAgICAgdXNlcklkOiB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5nYS51c2VySWQsXHJcbiAgICAgICAgaGl0Q2FsbGJhY2s6IHByb3BlcnRpZXMuaGl0Q2FsbGJhY2tcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIGFkZCBjdXN0b20gZGltZW5zaW9ucyBhbmQgbWV0cmljc1xyXG4gICAgICB0aGlzLnNldERpbWVuc2lvbnNBbmRNZXRyaWNzKHByb3BlcnRpZXMpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLnRyYW5zcG9ydCkge1xyXG4gICAgICAgIGdhKCdzZW5kJywgJ2V2ZW50JywgZXZlbnRPcHRpb25zLCB7IHRyYW5zcG9ydDogdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EudHJhbnNwb3J0IH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdhKCdzZW5kJywgJ2V2ZW50JywgZXZlbnRPcHRpb25zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChsZXQgYWNjb3VudE5hbWUgb2YgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ2EuYWRkaXRpb25hbEFjY291bnROYW1lcykge1xyXG4gICAgICAgIGdhKGFjY291bnROYW1lICsgJy5zZW5kJywgJ2V2ZW50JywgZXZlbnRPcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgX2dhcSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgX2dhcS5wdXNoKFsnX3RyYWNrRXZlbnQnLCBwcm9wZXJ0aWVzLmNhdGVnb3J5LCBhY3Rpb24sIHByb3BlcnRpZXMubGFiZWwsIHByb3BlcnRpZXMudmFsdWUsIHByb3BlcnRpZXMubm9uaW50ZXJhY3Rpb25dKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4Y2VwdGlvbiBUcmFjayBFdmVudCBpbiBHQVxyXG4gICAqIEBuYW1lIGV4Y2VwdGlvblRyYWNrXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydGllcyBDb21wcmlzZWQgb2YgdGhlIG9wdGlvbmFsIGZpZWxkczpcclxuICAgKiAgICAgJ2ZhdGFsJyAoc3RyaW5nKSxcclxuICAgKiAgICAgJ2Rlc2NyaXB0aW9uJyAoc3RyaW5nKVxyXG4gICAqXHJcbiAgICogQGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9leGNlcHRpb25zXHJcbiAgICpcclxuICAgKiBAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vYW5hbHl0aWNzanMvZXZlbnRzXHJcbiAgICovXHJcbiAgZXhjZXB0aW9uVHJhY2socHJvcGVydGllczogYW55KSB7XHJcbiAgICBpZiAocHJvcGVydGllcy5mYXRhbCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdObyBcImZhdGFsXCIgcHJvdmlkZWQsIHNlbmRpbmcgd2l0aCBmYXRhbD10cnVlJyk7XHJcbiAgICAgIHByb3BlcnRpZXMuZmF0YWwgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3BlcnRpZXMuZXhEZXNjcmlwdGlvbiA9IHByb3BlcnRpZXMuZGVzY3JpcHRpb247XHJcblxyXG4gICAgdmFyIGV2ZW50T3B0aW9ucyA9IHtcclxuICAgICAgZXhGYXRhbDogcHJvcGVydGllcy5mYXRhbCxcclxuICAgICAgZXhEZXNjcmlwdGlvbjogcHJvcGVydGllcy5kZXNjcmlwdGlvblxyXG4gICAgfTtcclxuXHJcbiAgICBnYSgnc2VuZCcsICdleGNlcHRpb24nLCBldmVudE9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlcm5hbWUodXNlcklkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmdhLnVzZXJJZCA9IHVzZXJJZDtcclxuICB9XHJcblxyXG4gIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgdGhpcy5zZXREaW1lbnNpb25zQW5kTWV0cmljcyhwcm9wZXJ0aWVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZXIgVGltaW5ncyBFdmVudCBpbiBHQVxyXG4gICAqIEBuYW1lIHVzZXJUaW1pbmdzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydGllcyBDb21wcmlzZWQgb2YgdGhlIG1hbmRhdG9yeSBmaWVsZHM6XHJcbiAgICogICAgICd0aW1pbmdDYXRlZ29yeScgKHN0cmluZyksXHJcbiAgICogICAgICd0aW1pbmdWYXInIChzdHJpbmcpLFxyXG4gICAqICAgICAndGltaW5nVmFsdWUnIChudW1iZXIpXHJcbiAgICogUHJvcGVydGllcyBjYW4gYWxzbyBoYXZlIHRoZSBvcHRpb25hbCBmaWVsZHM6XHJcbiAgICogICAgICd0aW1pbmdMYWJlbCcgKHN0cmluZylcclxuICAgKlxyXG4gICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy91c2VyLXRpbWluZ3NcclxuICAgKi9cclxuICB1c2VyVGltaW5ncyhwcm9wZXJ0aWVzOiBhbnkpIHtcclxuICAgIGlmICghcHJvcGVydGllcyB8fCAhcHJvcGVydGllcy50aW1pbmdDYXRlZ29yeSB8fCAhcHJvcGVydGllcy50aW1pbmdWYXIgfHwgIXByb3BlcnRpZXMudGltaW5nVmFsdWUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignUHJvcGVydGllcyB0aW1pbmdDYXRlZ29yeSwgdGltaW5nVmFyLCBhbmQgdGltaW5nVmFsdWUgYXJlIHJlcXVpcmVkIHRvIGJlIHNldC4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnYSkge1xyXG4gICAgICBnYSgnc2VuZCcsICd0aW1pbmcnLCBwcm9wZXJ0aWVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RGltZW5zaW9uc0FuZE1ldHJpY3MocHJvcGVydGllczogYW55KSB7XHJcbiAgICBpZiAoZ2EpIHtcclxuICAgICAgLy8gYWRkIGN1c3RvbSBkaW1lbnNpb25zIGFuZCBtZXRyaWNzXHJcbiAgICAgIGZvciAodmFyIGlkeCA9IDE7IGlkeCA8PSAyMDA7IGlkeCsrKSB7XHJcbiAgICAgICAgaWYgKHByb3BlcnRpZXNbJ2RpbWVuc2lvbicgKyBpZHgudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgIGdhKCdzZXQnLCAnZGltZW5zaW9uJyArIGlkeC50b1N0cmluZygpLCBwcm9wZXJ0aWVzWydkaW1lbnNpb24nICsgaWR4LnRvU3RyaW5nKCldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZ2EoJ3NldCcsICdkaW1lbnNpb24nICsgaWR4LnRvU3RyaW5nKCksIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzWydtZXRyaWMnICsgaWR4LnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICBnYSgnc2V0JywgJ21ldHJpYycgKyBpZHgudG9TdHJpbmcoKSwgcHJvcGVydGllc1snbWV0cmljJyArIGlkeC50b1N0cmluZygpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGdhKCdzZXQnLCAnbWV0cmljJyArIGlkeC50b1N0cmluZygpLCB1bmRlZmluZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9wcm92aWRlcnMvZ2EvYW5ndWxhcnRpY3MyLWdhLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi4vLi4vY29yZS9hbmd1bGFydGljczInO1xyXG5cclxuZGVjbGFyZSB2YXIgZGF0YUxheWVyOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJHb29nbGVUYWdNYW5hZ2VyIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyXHJcbiAgKSB7XHJcblxyXG4gICAgLy8gVGhlIGRhdGFMYXllciBuZWVkcyB0byBiZSBpbml0aWFsaXplZFxyXG4gICAgaWYgKHR5cGVvZiBkYXRhTGF5ZXIgIT09ICd1bmRlZmluZWQnICYmIGRhdGFMYXllcikge1xyXG4gICAgICBkYXRhTGF5ZXIgPSAoPGFueT53aW5kb3cpLmRhdGFMYXllciA9ICg8YW55PndpbmRvdykuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLnBhZ2VUcmFja2luZy50cmFja1JlbGF0aXZlUGF0aCA9IHRydWU7XHJcblxyXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IHNldHRpbmdzIGZvciB0aGlzIG1vZHVsZVxyXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3RtID0ge1xyXG4gICAgICB1c2VySWQ6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgpKTtcclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLmV2ZW50VHJhY2soeC5hY3Rpb24sIHgucHJvcGVydGllcykpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV4Y2VwdGlvblRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLmV4Y2VwdGlvblRyYWNrKHgpKTtcclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VybmFtZS5zdWJzY3JpYmUoKHg6IHN0cmluZykgPT4gdGhpcy5zZXRVc2VybmFtZSh4KSk7XHJcbiAgfVxyXG5cclxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIGRhdGFMYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YUxheWVyKSB7XHJcbiAgICAgIGRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICAnZXZlbnQnOiAnUGFnZSBWaWV3JyxcclxuICAgICAgICAnY29udGVudC1uYW1lJzogcGF0aCxcclxuICAgICAgICAndXNlcklkJzogdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuZ3RtLnVzZXJJZFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmQgaW50ZXJhY3Rpb25zIHRvIHRoZSBkYXRhTGF5ZXIsIGkuZS4gZm9yIGV2ZW50IHRyYWNraW5nIGluIEdvb2dsZSBBbmFseXRpY3NcclxuICAgKiBAbmFtZSBldmVudFRyYWNrXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIFJlcXVpcmVkICdhY3Rpb24nIChzdHJpbmcpIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnRcclxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydGllcyBDb21wcmlzZWQgb2YgdGhlIG1hbmRhdG9yeSBmaWVsZCAnY2F0ZWdvcnknIChzdHJpbmcpIGFuZCBvcHRpb25hbCAgZmllbGRzICdsYWJlbCcgKHN0cmluZyksICd2YWx1ZScgKGludGVnZXIpIGFuZCAnbm9uaW50ZXJhY3Rpb24nIChib29sZWFuKVxyXG4gICAqL1xyXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xyXG5cclxuICAgIC8vIFNldCBhIGRlZmF1bHQgR1RNIGNhdGVnb3J5XHJcbiAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGRhdGFMYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgZGF0YUxheWVyKSB7XHJcbiAgICAgIGRhdGFMYXllci5wdXNoKHtcclxuICAgICAgICBldmVudDogcHJvcGVydGllcy5ldmVudCB8fCAnaW50ZXJhY3Rpb24nLFxyXG4gICAgICAgIHRhcmdldDogcHJvcGVydGllcy5jYXRlZ29yeSB8fCAnRXZlbnQnLFxyXG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgIGxhYmVsOiBwcm9wZXJ0aWVzLmxhYmVsLFxyXG4gICAgICAgIHZhbHVlOiBwcm9wZXJ0aWVzLnZhbHVlLFxyXG4gICAgICAgIGludGVyYWN0aW9uVHlwZTogcHJvcGVydGllcy5ub25pbnRlcmFjdGlvbixcclxuICAgICAgICB1c2VySWQ6IHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmd0bS51c2VySWRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFeGNlcHRpb24gVHJhY2sgRXZlbnQgaW4gR1RNXHJcbiAgICogQG5hbWUgZXhjZXB0aW9uVHJhY2tcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wZXJ0aWVzIENvbXByaXNlZCBvZiB0aGUgbWFuZGF0b3J5IGZpZWxkcyAnYXBwSWQnIChzdHJpbmcpLCAnYXBwTmFtZScgKHN0cmluZykgYW5kICdhcHBWZXJzaW9uJyAoc3RyaW5nKSBhbmRcclxuICAgKiBvcHRpb25hbCAgZmllbGRzICdmYXRhbCcgKGJvb2xlYW4pIGFuZCAnZGVzY3JpcHRpb24nIChzdHJpbmcpXHJcbiAgICovXHJcbiAgZXhjZXB0aW9uVHJhY2socHJvcGVydGllczogYW55KSB7XHJcbiAgICBpZiAoISBwcm9wZXJ0aWVzIHx8ICEgcHJvcGVydGllcy5hcHBJZCB8fCAhIHByb3BlcnRpZXMuYXBwTmFtZSB8fCAhIHByb3BlcnRpZXMuYXBwVmVyc2lvbikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdNdXN0IGJlIHNldHRlZCBhcHBJZCwgYXBwTmFtZSBhbmQgYXBwVmVyc2lvbi4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wZXJ0aWVzLmZhdGFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ05vIFwiZmF0YWxcIiBwcm92aWRlZCwgc2VuZGluZyB3aXRoIGZhdGFsPXRydWUnKTtcclxuICAgICAgcHJvcGVydGllcy5leEZhdGFsID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9wZXJ0aWVzLmV4RGVzY3JpcHRpb24gPSBwcm9wZXJ0aWVzLmV2ZW50ID8gcHJvcGVydGllcy5ldmVudC5zdGFjayA6IHByb3BlcnRpZXMuZGVzY3JpcHRpb247XHJcblxyXG4gICAgdGhpcy5ldmVudFRyYWNrKGBFeGNlcHRpb24gdGhyb3duIGZvciAke3Byb3BlcnRpZXMuYXBwTmFtZX0gPCR7cHJvcGVydGllcy5hcHBJZH1AJHtwcm9wZXJ0aWVzLmFwcFZlcnNpb259PmAsIHtcclxuICAgICAgJ2NhdGVnb3J5JzogJ0V4Y2VwdGlvbicsXHJcbiAgICAgICdsYWJlbCc6IHByb3BlcnRpZXMuZXhEZXNjcmlwdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdXNlcklkIGZvciB1c2Ugd2l0aCBVbml2ZXJzYWwgQW5hbHl0aWNzIFVzZXIgSUQgZmVhdHVyZVxyXG4gICAqIEBuYW1lIHNldFVzZXJuYW1lXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcklkIFJlcXVpcmVkICd1c2VySWQnIHZhbHVlIChzdHJpbmcpIHVzZWQgdG8gaWRlbnRpZnkgdXNlciBjcm9zcy1kZXZpY2UgaW4gR29vZ2xlIEFuYWx5dGljc1xyXG4gICAqL1xyXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5ndG0udXNlcklkID0gdXNlcklkO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9wcm92aWRlcnMvZ3RtL2FuZ3VsYXJ0aWNzMi1ndG0udHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICcuLi8uLi9jb3JlL2FuZ3VsYXJ0aWNzMic7XHJcblxyXG5kZWNsYXJlIHZhciBfa21xOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJLaXNzbWV0cmljcyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMlxyXG4gICkge1xyXG4gICAgaWYgKHR5cGVvZiAoX2ttcSkgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIF9rbXEgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCwgeC5sb2NhdGlvbikpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XHJcblxyXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlcm5hbWUuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcclxuICB9XHJcblxyXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpIHtcclxuICAgIF9rbXEucHVzaChbJ3JlY29yZCcsICdQYWdldmlldycsIHsgJ1BhZ2UnOiBwYXRoIH1dKTtcclxuICB9XHJcblxyXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgX2ttcS5wdXNoKFsncmVjb3JkJywgYWN0aW9uLCBwcm9wZXJ0aWVzXSk7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VybmFtZSh1c2VySWQ6IHN0cmluZykge1xyXG4gICAgX2ttcS5wdXNoKFsnaWRlbnRpZnknLCB1c2VySWRdKTtcclxuICB9XHJcblxyXG4gIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgX2ttcS5wdXNoKFsnc2V0JywgcHJvcGVydGllc10pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9wcm92aWRlcnMva2lzc21ldHJpY3MvYW5ndWxhcnRpY3MyLWtpc3NtZXRyaWNzLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi4vLi4vY29yZS9hbmd1bGFydGljczInO1xyXG5cclxuZGVjbGFyZSB2YXIgbWl4cGFuZWw6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMk1peHBhbmVsIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyXHJcbiAgKSB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCwgeC5sb2NhdGlvbikpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XHJcblxyXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlcm5hbWUuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllc09uY2Uuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXNPbmNlKHgpKTtcclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRTdXBlclByb3BlcnRpZXMuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0U3VwZXJQcm9wZXJ0aWVzKHgpKTtcclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRTdXBlclByb3BlcnRpZXNPbmNlLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnNldFN1cGVyUHJvcGVydGllc09uY2UoeCkpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldEFsaWFzLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldEFsaWFzKHgpKTtcclxuICB9XHJcblxyXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIG1peHBhbmVsLnRyYWNrKCdQYWdlIFZpZXdlZCcsIHsgcGFnZTogcGF0aCB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbWl4cGFuZWwudHJhY2soYWN0aW9uLCBwcm9wZXJ0aWVzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFVzZXJuYW1lKHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBtaXhwYW5lbC5pZGVudGlmeSh1c2VySWQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBtaXhwYW5lbC5wZW9wbGUuc2V0KHByb3BlcnRpZXMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VXNlclByb3BlcnRpZXNPbmNlKHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbWl4cGFuZWwucGVvcGxlLnNldF9vbmNlKHByb3BlcnRpZXMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U3VwZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbWl4cGFuZWwucmVnaXN0ZXIocHJvcGVydGllcyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTdXBlclByb3BlcnRpZXNPbmNlKHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgbWl4cGFuZWwucmVnaXN0ZXJfb25jZShwcm9wZXJ0aWVzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEFsaWFzKGFsaWFzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIG1peHBhbmVsLmFsaWFzKGFsaWFzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL21peHBhbmVsL2FuZ3VsYXJ0aWNzMi1taXhwYW5lbC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJy4uLy4uL2NvcmUvYW5ndWxhcnRpY3MyJztcclxuXHJcbmRlY2xhcmUgdmFyIF9wYXE6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMlBpd2lrIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyXHJcbiAgKSB7XHJcbiAgICBpZiAodHlwZW9mIChfcGFxKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdQaXdpayBub3QgZm91bmQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCwgeC5sb2NhdGlvbikpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XHJcblxyXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlcm5hbWUuc3Vic2NyaWJlKCh4OiBzdHJpbmcpID0+IHRoaXMuc2V0VXNlcm5hbWUoeCkpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcclxuXHJcbiAgfVxyXG5cclxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nLCBsb2NhdGlvbjogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBfcGFxLnB1c2goWydzZXREb2N1bWVudFRpdGxlJywgd2luZG93LmRvY3VtZW50LnRpdGxlXSk7XHJcbiAgICAgIF9wYXEucHVzaChbJ3NldEN1c3RvbVVybCcsIHBhdGhdKTtcclxuICAgICAgX3BhcS5wdXNoKFsndHJhY2tQYWdlVmlldyddKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHByb3BlcnRpZXMudmFsdWUpIHtcclxuICAgICAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQocHJvcGVydGllcy52YWx1ZSwgMTApO1xyXG4gICAgICAgIHByb3BlcnRpZXMudmFsdWUgPSBpc05hTihwYXJzZWQpID8gMCA6IHBhcnNlZDtcclxuICAgICAgfVxyXG4gICAgICBfcGFxLnB1c2goWyd0cmFja0V2ZW50JywgcHJvcGVydGllcy5jYXRlZ29yeSwgYWN0aW9uLCBwcm9wZXJ0aWVzLmxhYmVsLCBwcm9wZXJ0aWVzLnZhbHVlXSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRVc2VybmFtZSh1c2VySWQ6IHN0cmluZ3xib29sZWFuKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBfcGFxLnB1c2goWydzZXRVc2VySWQnLCB1c2VySWRdKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgY3VzdG9tIGRpbWVuc2lvbnMgaWYgYXQgbGVhc3Qgb25lIHByb3BlcnR5IGhhcyB0aGUga2V5IFwiZGltZW5zaW9uPG4+XCIsXHJcbiAgICogZS5nLiBkaW1lbnNpb24xMC4gSWYgdGhlcmUgYXJlIGN1c3RvbSBkaW1lbnNpb25zLCBhbnkgb3RoZXIgcHJvcGVydHkgaXMgaWdub3JlZC5cclxuICAgKlxyXG4gICAqIElmIHRoZXJlIGFyZSBubyBjdXN0b20gZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gcHJvcGVydGllcyBvYmplY3QsIHRoZSBwcm9wZXJ0aWVzXHJcbiAgICogb2JqZWN0IGlzIHNhdmVkIGFzIGEgY3VzdG9tIHZhcmlhYmxlLlxyXG4gICAqXHJcbiAgICogSWYgaW4gZG91YnQsIHByZWZlciBjdXN0b20gZGltZW5zaW9ucy5cclxuICAgKiBAc2VlIGh0dHBzOi8vcGl3aWsub3JnL2RvY3MvY3VzdG9tLXZhcmlhYmxlcy9cclxuICAgKi9cclxuICBzZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLnNldEN1c3RvbURpbWVuc2lvbnMocHJvcGVydGllcyk7XHJcbiAgICAgIGlmIChkaW1lbnNpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIF9wYXEucHVzaChbJ3NldEN1c3RvbVZhcmlhYmxlJywgcHJvcGVydGllc10pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEN1c3RvbURpbWVuc2lvbnMocHJvcGVydGllczogYW55KTogc3RyaW5nW10ge1xyXG4gICAgY29uc3QgZGltZW5zaW9uUmVnZXg6IFJlZ0V4cCA9IC9kaW1lbnNpb25bMS05XVxcZCovO1xyXG4gICAgY29uc3QgZGltZW5zaW9ucyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZpbHRlcihrZXkgPT4gZGltZW5zaW9uUmVnZXguZXhlYyhrZXkpKTtcclxuICAgIGRpbWVuc2lvbnMuZm9yRWFjaChkaW1lbnNpb24gPT4ge1xyXG4gICAgICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGltZW5zaW9uLnN1YnN0cig5KSk7XHJcbiAgICAgIF9wYXEucHVzaChbJ3NldEN1c3RvbURpbWVuc2lvbicsIG51bWJlciwgcHJvcGVydGllc1tkaW1lbnNpb25dXSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkaW1lbnNpb25zO1xyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL3Bpd2lrL2FuZ3VsYXJ0aWNzMi1waXdpay50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJy4uLy4uL2NvcmUvYW5ndWxhcnRpY3MyJztcclxuXHJcbmRlY2xhcmUgdmFyIGFuYWx5dGljczogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyU2VnbWVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMlxyXG4gICkge1xyXG4gICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgsIHgubG9jYXRpb24pKTtcclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLmV2ZW50VHJhY2soeC5hY3Rpb24sIHgucHJvcGVydGllcykpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllc09uY2Uuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldEFsaWFzLnN1YnNjcmliZSgoeDogc3RyaW5nKSA9PiB0aGlzLnNldEFsaWFzKHgpKTtcclxuICB9XHJcblxyXG4gIC8vIGh0dHBzOi8vc2VnbWVudC5jb20vZG9jcy9saWJyYXJpZXMvYW5hbHl0aWNzLmpzLyNwYWdlXHJcbiAgLy8gYW5hbHl0aWNzLnBhZ2UoW2NhdGVnb3J5XSwgW25hbWVdLCBbcHJvcGVydGllc10sIFtvcHRpb25zXSwgW2NhbGxiYWNrXSk7XHJcbiAgLy8gVE9ETyA6IFN1cHBvcnQgb3B0aW9uYWwgcGFyYW1ldGVycyB3aGVyZSB0aGUgcGFyYW1ldGVyIG9yZGVyIGFuZCB0eXBlIGNoYW5nZXMgdGhlaXIgbWVhbmluZ1xyXG4gIC8vIGUuZy5cclxuICAvLyAoc3RyaW5nKSBpcyAobmFtZSlcclxuICAvLyAoc3RyaW5nLCBzdHJpbmcpIGlzIChjYXRlZ29yeSwgbmFtZSlcclxuICAvLyAoc3RyaW5nLCBvYmplY3QpIGlzIChuYW1lLCBwcm9wZXJ0aWVzKVxyXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcsIGxvY2F0aW9uOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGFuYWx5dGljcy5wYWdlKHBhdGgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaHR0cHM6Ly9zZWdtZW50LmNvbS9kb2NzL2xpYnJhcmllcy9hbmFseXRpY3MuanMvI3RyYWNrXHJcbiAgLy8gYW5hbHl0aWNzLnRyYWNrKGV2ZW50LCBbcHJvcGVydGllc10sIFtvcHRpb25zXSwgW2NhbGxiYWNrXSk7XHJcbiAgZXZlbnRUcmFjayhhY3Rpb246IHN0cmluZywgcHJvcGVydGllczogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhbmFseXRpY3MudHJhY2soYWN0aW9uLCBwcm9wZXJ0aWVzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGh0dHBzOi8vc2VnbWVudC5jb20vZG9jcy9saWJyYXJpZXMvYW5hbHl0aWNzLmpzLyNpZGVudGlmeVxyXG4gIC8vIGFuYWx5dGljcy5pZGVudGlmeShbdXNlcklkXSwgW3RyYWl0c10sIFtvcHRpb25zXSwgW2NhbGxiYWNrXSk7XHJcbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAocHJvcGVydGllcy51c2VySWQpIHtcclxuICAgICAgICBhbmFseXRpY3MuaWRlbnRpZnkocHJvcGVydGllcy51c2VySWQsIHByb3BlcnRpZXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFuYWx5dGljcy5pZGVudGlmeShwcm9wZXJ0aWVzKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaHR0cHM6Ly9zZWdtZW50LmNvbS9kb2NzL2xpYnJhcmllcy9hbmFseXRpY3MuanMvI2FsaWFzXHJcbiAgLy8gYW5hbHl0aWNzLmFsaWFzKHVzZXJJZCwgcHJldmlvdXNJZCwgb3B0aW9ucywgY2FsbGJhY2spO1xyXG4gIHNldEFsaWFzKGFsaWFzOiBhbnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGFuYWx5dGljcy5hbGlhcyhhbGlhcyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3Byb3ZpZGVycy9zZWdtZW50L2FuZ3VsYXJ0aWNzMi1zZWdtZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi4vLi4vY29yZS9hbmd1bGFydGljczInO1xyXG5cclxuZGVjbGFyZSB2YXIgSW50ZXJjb206IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkludGVyY29tIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyXHJcbiAgKSB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCwgeC5sb2NhdGlvbikpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XHJcblxyXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlclByb3BlcnRpZXMuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzT25jZS5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5zZXRVc2VyUHJvcGVydGllcyh4KSk7XHJcbiAgfVxyXG5cclxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nLCBsb2NhdGlvbjogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmV2ZW50VHJhY2soJ1BhZ2V2aWV3Jywge1xyXG4gICAgICAgIHVybDogcGF0aFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgSW50ZXJjb20oJ3RyYWNrRXZlbnQnLCBhY3Rpb24sIHByb3BlcnRpZXMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VXNlclByb3BlcnRpZXMocHJvcGVydGllczogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAocHJvcGVydGllcy51c2VySWQgJiYgIXByb3BlcnRpZXMudXNlcl9pZCkge1xyXG4gICAgICAgIHByb3BlcnRpZXMudXNlcl9pZCA9IHByb3BlcnRpZXMudXNlcklkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBJbnRlcmNvbSgnYm9vdCcsIHByb3BlcnRpZXMpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9wcm92aWRlcnMvaW50ZXJjb20vYW5ndWxhcnRpY3MyLWludGVyY29tLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi4vLi4vY29yZS9hbmd1bGFydGljczInO1xyXG5cclxuZGVjbGFyZSBjb25zdCBmYnE6IEZ1bmN0aW9uO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyRmFjZWJvb2sge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczJcclxuICApIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLnBhZ2VUcmFja2luZy50cmFja1JlbGF0aXZlUGF0aCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmQgaW50ZXJhY3Rpb25zIHRvIHRoZSBQaXhlbCwgaS5lLiBmb3IgZXZlbnQgdHJhY2tpbmcgaW4gUGl4ZWxcclxuICAgKiBAbmFtZSBldmVudFRyYWNrXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIFJlcXVpcmVkICdhY3Rpb24nIChzdHJpbmcpIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnRcclxuICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcGVydGllc1xyXG4gICAqL1xyXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XHJcblxyXG4gICAgY29uc3QgZXZlbnRMaXN0ID0gW1xyXG4gICAgICAnVmlld0NvbnRlbnQnLFxyXG4gICAgICAnU2VhcmNoJyxcclxuICAgICAgJ0FkZFRvQ2FydCcsXHJcbiAgICAgICdBZGRUb1dpc2hsaXN0JyxcclxuICAgICAgJ0luaXRpYXRlQ2hlY2tvdXQnLFxyXG4gICAgICAnQWRkUGF5bWVudEluZm8nLFxyXG4gICAgICAnUHVyY2hhc2UnLFxyXG4gICAgICAnTGVhZCcsXHJcbiAgICAgICdDb21wbGV0ZVJlZ2lzdHJhdGlvbidcclxuICAgIF07XHJcblxyXG4gICBpZiAodHlwZW9mIGZicSAhPT0gJ3VuZGVmaW5lZCcgJiYgZmJxKSB7XHJcbiAgICAgICAgZXZlbnRMaXN0LmluZGV4T2YoYWN0aW9uKSA9PT0gLTEgP1xyXG4gICAgICAgICAgIGZicSgndHJhY2tDdXN0b20nLCBhY3Rpb24sIHByb3BlcnRpZXMpIDpcclxuICAgICAgICAgICBmYnEoJ3RyYWNrJywgYWN0aW9uLCBwcm9wZXJ0aWVzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL2ZhY2Vib29rL2FuZ3VsYXJ0aWNzMi1mYWNlYm9vay50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJy4uLy4uL2NvcmUvYW5ndWxhcnRpY3MyJztcclxuXHJcbmRlY2xhcmUgY29uc3QgYXBwSW5zaWdodHM6IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzLklBcHBJbnNpZ2h0cztcclxuXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRXJyb3IgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyQXBwSW5zaWdodHMge1xyXG4gICAgbG9hZFN0YXJ0VGltZTogbnVtYmVyID0gbnVsbDtcclxuICAgIGxvYWRUaW1lOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIG1ldHJpY3M6IGFueSA9IG51bGw7XHJcbiAgICBkaW1lbnNpb25zOiBhbnkgPSBudWxsO1xyXG4gICAgbWVhc3VyZW1lbnRzOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHRpdGxlOiBUaXRsZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIChhcHBJbnNpZ2h0cykgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignYXBwSW5zaWdodHMgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXR0aW5ncy5hcHBJbnNpZ2h0cyA9IHtcclxuICAgICAgICAgICAgdXNlcklkOiBudWxsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIucGFnZVRyYWNrLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnBhZ2VUcmFjayh4LnBhdGgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuZXhjZXB0aW9uVHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXhjZXB0aW9uVHJhY2soeCkpO1xyXG5cclxuICAgICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VybmFtZS5zdWJzY3JpYmUoKHg6IHN0cmluZykgPT4gdGhpcy5zZXRVc2VybmFtZSh4KSk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldFVzZXJQcm9wZXJ0aWVzLnN1YnNjcmliZSgoeDogYW55KSA9PiB0aGlzLnNldFVzZXJQcm9wZXJ0aWVzKHgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5zdGFydFRpbWVyKCkpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgICAgICAgLmZpbHRlcihldmVudCA9PlxyXG4gICAgICAgICAgICAgICAgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yKSB8fFxyXG4gICAgICAgICAgICAgICAgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGVycm9yID0+IHRoaXMuc3RvcFRpbWVyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0VGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmxvYWRUaW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wVGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkVGltZSA9IERhdGUubm93KCkgLSB0aGlzLmxvYWRTdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy5sb2FkU3RhcnRUaW1lID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBhZ2UgVHJhY2sgaW4gQmFpZHUgQW5hbHl0aWNzXHJcbiAgICAgKiBAbmFtZSBwYWdlVHJhY2tcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBSZXF1aXJlZCAncGF0aCcgKHN0cmluZylcclxuICAgICAqXHJcbiAgICAgKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L0FwcGxpY2F0aW9uSW5zaWdodHMtSlMvYmxvYi9tYXN0ZXIvQVBJLXJlZmVyZW5jZS5tZCN0cmFja3BhZ2V2aWV3XHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwYWdlVHJhY2socGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgYXBwSW5zaWdodHMudHJhY2tQYWdlVmlldyhcclxuICAgICAgICAgICAgdGhpcy50aXRsZS5nZXRUaXRsZSgpLFxyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMsXHJcbiAgICAgICAgICAgIHRoaXMubWV0cmljcyxcclxuICAgICAgICAgICAgdGhpcy5sb2FkVGltZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2cgYSB1c2VyIGFjdGlvbiBvciBvdGhlciBvY2N1cnJlbmNlLlxyXG4gICAgICogQHBhcmFtICAgbmFtZSAgICBBIHN0cmluZyB0byBpZGVudGlmeSB0aGlzIGV2ZW50IGluIHRoZSBwb3J0YWwuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtICAgcHJvcGVydGllcyAgbWFwW3N0cmluZywgc3RyaW5nXSAtIGFkZGl0aW9uYWwgZGF0YSB1c2VkIHRvIGZpbHRlciBldmVudHMgYW5kIG1ldHJpY3MgaW4gdGhlIHBvcnRhbC4gRGVmYXVsdHMgdG8gZW1wdHkuXHJcbiAgICAgKlxyXG4gICAgICogQGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvQXBwbGljYXRpb25JbnNpZ2h0cy1KUy9ibG9iL21hc3Rlci9BUEktcmVmZXJlbmNlLm1kI3RyYWNrZXZlbnRcclxuICAgICAqL1xyXG4gICAgZXZlbnRUcmFjayhuYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgICAgIGFwcEluc2lnaHRzLnRyYWNrRXZlbnQobmFtZSwgcHJvcGVydGllcywgdGhpcy5tZWFzdXJlbWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhjZXB0aW9uIFRyYWNrIEV2ZW50IGluIEdBXHJcbiAgICAgKiBAbmFtZSBleGNlcHRpb25UcmFja1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7YW55fSBwcm9wZXJ0aWVzIENvbXByaXNlZCBvZiB0aGUgbWFuZGF0b3J5IGZpZWxkcyAnYXBwSWQnIChzdHJpbmcpLCAnYXBwTmFtZScgKHN0cmluZykgYW5kICdhcHBWZXJzaW9uJyAoc3RyaW5nKSBhbmRcclxuICAgICAqIG9wdGlvbmFsICBmaWVsZHMgJ2ZhdGFsJyAoYm9vbGVhbikgYW5kICdkZXNjcmlwdGlvbicgKHN0cmluZyksIGVycm9yXHJcbiAgICAgKlxyXG4gICAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9BcHBsaWNhdGlvbkluc2lnaHRzLUpTL2Jsb2IvbWFzdGVyL0FQSS1yZWZlcmVuY2UubWQjdHJhY2tleGNlcHRpb25cclxuICAgICAqL1xyXG4gICAgZXhjZXB0aW9uVHJhY2socHJvcGVydGllczogYW55KSB7XHJcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gcHJvcGVydGllcy5ldmVudCB8fCBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uIHx8IHByb3BlcnRpZXM7XHJcblxyXG4gICAgICAgIGFwcEluc2lnaHRzLnRyYWNrRXhjZXB0aW9uKGRlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdXNlcklkXHJcbiAgICAgKlxyXG4gICAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9BcHBsaWNhdGlvbkluc2lnaHRzLUpTL2Jsb2IvbWFzdGVyL0FQSS1yZWZlcmVuY2UubWQjc2V0YXV0aGVudGljYXRlZHVzZXJjb250ZXh0XHJcbiAgICAgKi9cclxuXHJcbiAgICBzZXRVc2VybmFtZSh1c2VySWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLnNldHRpbmdzLmFwcEluc2lnaHRzLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgICAgICBhcHBJbnNpZ2h0cy5zZXRBdXRoZW50aWNhdGVkVXNlckNvbnRleHQodXNlcklkKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBhbnkpIHtcclxuICAgICAgICBpZiAocHJvcGVydGllcy51c2VySWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuYXBwSW5zaWdodHMudXNlcklkID0gcHJvcGVydGllcy51c2VySWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcGVydGllcy5hY2NvdW50SWQpIHtcclxuICAgICAgICAgICAgYXBwSW5zaWdodHMuc2V0QXV0aGVudGljYXRlZFVzZXJDb250ZXh0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MuYXBwSW5zaWdodHMudXNlcklkLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5hY2NvdW50SWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL2FwcGluc2lnaHRzL2FuZ3VsYXJ0aWNzMi1hcHBpbnNpZ2h0cy50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJy4uLy4uL2NvcmUvYW5ndWxhcnRpY3MyJztcclxuXHJcbmRlY2xhcmUgdmFyIF9oc3E6IGFueTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJ0aWNzMkh1YnNwb3Qge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczJcclxuICApIHtcclxuICAgIGlmICh0eXBlb2YgX2hzcSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgX2hzcSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLnBhZ2VUcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5wYWdlVHJhY2soeC5wYXRoLCB4LmxvY2F0aW9uKSk7XHJcblxyXG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5ldmVudFRyYWNrKHguYWN0aW9uLCB4LnByb3BlcnRpZXMpKTtcclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5zZXRVc2VyUHJvcGVydGllcy5zdWJzY3JpYmUoKHg6IGFueSkgPT4gdGhpcy5zZXRVc2VyUHJvcGVydGllcyh4KSk7XHJcbiAgfVxyXG5cclxuICBwYWdlVHJhY2socGF0aDogc3RyaW5nLCBsb2NhdGlvbjogYW55KSB7XHJcbiAgICBpZiAodHlwZW9mIF9oc3EgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIF9oc3EucHVzaChbJ3NldFBhdGgnLCBwYXRoXSk7XHJcbiAgICAgIF9oc3EucHVzaChbJ3RyYWNrUGFnZVZpZXcnXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudFRyYWNrKGFjdGlvbjogc3RyaW5nLCBwcm9wZXJ0aWVzOiBhbnkpIHtcclxuICAgIGlmICh0eXBlb2YgX2hzcSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgX2hzcS5wdXNoKFsndHJhY2tFdmVudCcsIHByb3BlcnRpZXNdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFVzZXJQcm9wZXJ0aWVzKHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgaWYgKHR5cGVvZiBfaHNxICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBfaHNxLnB1c2goWydpZGVudGlmeScsIHByb3BlcnRpZXNdKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL2h1YnNwb3QvYW5ndWxhcnRpY3MyLWh1YnNwb3QudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnLi4vLi4vY29yZS9hbmd1bGFydGljczInO1xyXG5cclxuZGVjbGFyZSB2YXIgczogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyQWRvYmVBbmFseXRpY3Mge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvblxyXG4gICkge1xyXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0dGluZ3MucGFnZVRyYWNraW5nLnRyYWNrUmVsYXRpdmVQYXRoID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xyXG5cclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2suc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XHJcblxyXG4gICAgdGhpcy5hbmd1bGFydGljczIuc2V0VXNlclByb3BlcnRpZXMuc3Vic2NyaWJlKCh4OiBhbnkpID0+IHRoaXMuc2V0VXNlclByb3BlcnRpZXMoeCkpO1xyXG4gIH1cclxuXHJcbiAgcGFnZVRyYWNrKHBhdGg6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGVvZiBzICE9PSAndW5kZWZpbmVkJyAmJiBzKSB7XHJcbiAgICAgIHMuY2xlYXJWYXJzKCk7XHJcbiAgICAgIHMudCh7cGFnZU5hbWU6cGF0aH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhY2sgRXZlbnQgaW4gQWRvYmUgQW5hbHl0aWNzXHJcbiAgICogQG5hbWUgZXZlbnRUcmFja1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiBSZXF1aXJlZCAnYWN0aW9uJyAoc3RyaW5nKSBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50XHJcbiAgICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnRpZXMgQ29tcHJpc2VkIG9mIHRoZSBtYW5kYXRvcnkgZmllbGQgJ2NhdGVnb3J5JyAoc3RyaW5nKSBhbmQgb3B0aW9uYWwgIGZpZWxkcyAnbGFiZWwnIChzdHJpbmcpLCAndmFsdWUnIChpbnRlZ2VyKSBhbmQgJ25vbmludGVyYWN0aW9uJyAoYm9vbGVhbilcclxuICAgKlxyXG4gICAqIEBsaW5rIGh0dHBzOi8vbWFya2V0aW5nLmFkb2JlLmNvbS9yZXNvdXJjZXMvaGVscC9lbl9VUy9zYy9pbXBsZW1lbnQvanNfaW1wbGVtZW50YXRpb24uaHRtbFxyXG4gICAqL1xyXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSkge1xyXG4gICAgaWYgKCFwcm9wZXJ0aWVzKSB7XHJcbiAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcykge1xyXG4gICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgLy8gaWYgbGlua05hbWUgcHJvcGVydHkgaXMgcGFzc2VkLCB1c2UgdGhhdDsgb3RoZXJ3aXNlLCB0aGUgYWN0aW9uIGlzIHRoZSBsaW5rTmFtZVxyXG4gICAgICAgIGNvbnN0IGxpbmtOYW1lID0gKHByb3BlcnRpZXNbJ2xpbmtOYW1lJ10pID8gcHJvcGVydGllc1snbGlua05hbWUnXSA6IGFjdGlvbjtcclxuICAgICAgICAvLyBub3RlIHRoYXQgJ3RoaXMnIHNob3VsZCByZWZlciB0aGUgbGluayBlbGVtZW50LCBidXQgd2UgY2FuJ3QgZ2V0IHRoYXQgaW4gdGhpcyBmdW5jdGlvbi4gZXhhbXBsZTpcclxuICAgICAgICAvLyA8YSBocmVmPVwiaHR0cDovL2Fub3RoZXJzaXRlLmNvbVwiIG9uY2xpY2s9XCJzLnRsKHRoaXMsJ2UnLCdBbm90aGVyU2l0ZScsbnVsbClcIj5cclxuICAgICAgICAvLyBpZiBkaXNhYmxlRGVsYXkgcHJvcGVydHkgaXMgcGFzc2VkLCB1c2UgdGhhdCB0byB0dXJuIG9mZi9vbiB0aGUgNTAwbXMgZGVsYXk7IG90aGVyd2lzZSwgaXQgdXNlcyB0aGlzXHJcbiAgICAgICAgY29uc3QgZGlzYWJsZURlbGF5ID0gISFwcm9wZXJ0aWVzWydkaXNhYmxlRGVsYXknXSA/IHRydWUgOiB0aGlzO1xyXG4gICAgICAgIC8vIGlmIGFjdGlvbiBwcm9wZXJ0eSBpcyBwYXNzZWQsIHVzZSB0aGF0OyBvdGhlcndpc2UsIHRoZSBhY3Rpb24gcmVtYWlucyB1bmNoYW5nZWRcclxuICAgICAgICBpZiAocHJvcGVydGllc1snYWN0aW9uJ10pIHtcclxuICAgICAgICAgIGFjdGlvbiA9IHByb3BlcnRpZXNbJ2FjdGlvbiddO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFBhZ2VOYW1lKCk7XHJcblxyXG4gICAgICAgIGlmIChhY3Rpb24udG9VcHBlckNhc2UoKSA9PT0gXCJET1dOTE9BRFwiKSB7XHJcbiAgICAgICAgICBzLnRsKGRpc2FibGVEZWxheSwnZCcsbGlua05hbWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLnRvVXBwZXJDYXNlKCkgPT09IFwiRVhJVFwiKSB7XHJcbiAgICAgICAgICBzLnRsKGRpc2FibGVEZWxheSwnZScsbGlua05hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzLnRsKGRpc2FibGVEZWxheSwnbycsbGlua05hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRQYWdlTmFtZSgpIHtcclxuICAgIGNvbnN0IHBhdGggPSB0aGlzLmxvY2F0aW9uLnBhdGgodHJ1ZSk7XHJcbiAgICBjb25zdCBoYXNoTmR4ID0gcGF0aC5pbmRleE9mKCcjJyk7XHJcbiAgICBpZiAoaGFzaE5keCA+IDAgJiYgaGFzaE5keCA8IHBhdGgubGVuZ3RoKSB7XHJcbiAgICAgIHMucGFnZU5hbWUgPSBwYXRoLnN1YnN0cmluZyhoYXNoTmR4KzEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcy5wYWdlTmFtZSA9IHBhdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRVc2VyUHJvcGVydGllcyhwcm9wZXJ0aWVzOiBhbnkpIHtcclxuICAgIGlmICh0eXBlb2YgcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcykge1xyXG4gICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgc1trZXldID0gcHJvcGVydGllc1trZXldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL2Fkb2JlYW5hbHl0aWNzL2FuZ3VsYXJ0aWNzMi1hZG9iZWFuYWx5dGljcy50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJy4uLy4uL2NvcmUvYW5ndWxhcnRpY3MyJztcclxuXHJcbmRlY2xhcmUgdmFyIHNhOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbmd1bGFydGljczJTUFJXIHtcclxuXHJcbiAgcHVibGljIHNhUHJldmlvdXNQYWdlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIpIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2tcclxuICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMuZXZlbnRUcmFjayh4LmFjdGlvbiwgeC5wcm9wZXJ0aWVzKSk7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5wYWdlVHJhY2tcclxuICAgICAgLnN1YnNjcmliZSh4ID0+IHRoaXMucGFnZVRyYWNrKHgucGF0aCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZCBpbnRlcmFjdGlvbnMgdG8gdGhlIFBpeGVsLCBpLmUuIGZvciBldmVudCB0cmFja2luZyBpbiBQaXhlbFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGFjdGlvbiBhY3Rpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudFxyXG4gICAqL1xyXG4gIGV2ZW50VHJhY2soYWN0aW9uOiBzdHJpbmcsIHByb3BlcnRpZXM6IGFueSA9IHt9KSB7XHJcbiAgICAvLyBHb29nbGUgQW5hbHl0aWNzIHJlcXVpcmVzIGFuIEV2ZW50IENhdGVnb3J5XHJcbiAgICBpZiAoIXByb3BlcnRpZXMgfHwgIXByb3BlcnRpZXMuY2F0ZWdvcnkpIHtcclxuICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XHJcbiAgICAgIHByb3BlcnRpZXMuY2F0ZWdvcnkgPSAnRXZlbnQnO1xyXG4gICAgfVxyXG4gICAgLy8gR0EgcmVxdWlyZXMgdGhhdCBldmVudFZhbHVlIGJlIGFuIGludGVnZXIsIHNlZTpcclxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9hbmFseXRpY3Nqcy9maWVsZC1yZWZlcmVuY2UjZXZlbnRWYWx1ZVxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2x1aXNmYXJ6YXRpL2FuZ3VsYXJ0aWNzL2lzc3Vlcy84MVxyXG4gICAgaWYgKHByb3BlcnRpZXMudmFsdWUpIHtcclxuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQocHJvcGVydGllcy52YWx1ZSwgMTApO1xyXG4gICAgICBwcm9wZXJ0aWVzLnZhbHVlID0gaXNOYU4ocGFyc2VkKSA/IDAgOiBwYXJzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBzYSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgZXZlbnRPcHRpb25zID0ge1xyXG4gICAgICAgIGV2ZW50Q2F0ZWdvcnk6IHByb3BlcnRpZXMuY2F0ZWdvcnksXHJcbiAgICAgICAgZXZlbnRBY3Rpb246IGFjdGlvbixcclxuICAgICAgICBldmVudExhYmVsOiBwcm9wZXJ0aWVzLmxhYmVsLFxyXG4gICAgICAgIGV2ZW50VmFsdWU6IHByb3BlcnRpZXMudmFsdWUsXHJcbiAgICAgICAgbm9uSW50ZXJhY3Rpb246IHByb3BlcnRpZXMubm9uaW50ZXJhY3Rpb24sXHJcbiAgICAgICAgcGF0aDogcHJvcGVydGllcy5wYWdlIHx8IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpIHx8IGxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICAgIHByZXZpb3VzUGFnZTogdGhpcy5zYVByZXZpb3VzUGFnZSxcclxuICAgICAgICBoaXRDYWxsYmFjazogcHJvcGVydGllcy5oaXRDYWxsYmFja1xyXG4gICAgICB9O1xyXG4gICAgICBzYSgnc2VuZCcsICdldmVudCcsIGV2ZW50T3B0aW9ucywge3NlbmRHQUV2ZW50OjB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBhZ2VUcmFjayhwYXRoOiBzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlb2Ygc2EgIT09ICd1bmRlZmluZWQnICYmIHNhKSB7XHJcbiAgICAgIHNhKCdzZW5kJywgJ3BhZ2V2aWV3Jywge3BhZ2U6IHBhdGgsIHByZXZpb3VzUGFnZTp0aGlzLnNhUHJldmlvdXNQYWdlfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNhUHJldmlvdXNQYWdlID0gbG9jYXRpb24uaHJlZjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvcHJvdmlkZXJzL3NwcncvYW5ndWxhcnRpY3MyLXNwcncudHMiXSwic291cmNlUm9vdCI6IiJ9