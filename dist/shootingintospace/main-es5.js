(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/eric/Documents/GitHub/shootingintospace.github.io/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 4,
        vars: 0,
        consts: [[1, "container-fluid", "bg"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "100vh"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "page 1's content goes here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('17520.jpg');\n  background-size: cover;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 2px 2px 5px #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7QUFDSiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzLzE3NTIwLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuaDMge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCAjMDAwO1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-animations */
      "6Z0Z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);

          this.starState = false;
          this.ringState = false;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.starState = !this.starState;
            this.ringState = !this.ringState;
          }
        }, {
          key: "starAnimDone",
          value: function starAnimDone() {
            this.starState = !this.starState;
          }
        }, {
          key: "ringAnimDone",
          value: function ringAnimDone() {
            this.ringState = !this.ringState;
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 10,
        vars: 2,
        consts: [[1, "container-fluid", "d-flex", "align-items-center", "justify-content-center", "bg"], [1, "logo"], [1, "starcircle"], ["src", "../../assets/star.svg", 1, "star"], ["src", "../../assets/ring2.svg", 1, "ring"], [1, "logotext-topline"], [1, "logotext-bottomline"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@rotate.done", function HomeComponent_Template_img_animation_rotate_done_3_listener() {
              return ctx.starAnimDone();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("@pulse.done", function HomeComponent_Template_img_animation_pulse_done_4_listener() {
              return ctx.ringAnimDone();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "shooting into");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "SPACE");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotate", ctx.starState);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@pulse", ctx.ringState);
          }
        },
        styles: [".card[_ngcontent-%COMP%] {\n  height: 260px;\n  width: auto;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.14) !important;\n  margin: 20px;\n  padding: 20px 35px;\n  text-align: center;\n  background-color: #fbfbfb;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background-image: url('19609.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100vh;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.star[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 200px;\n  width: 200px;\n}\n\n.ring[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 150px;\n  width: 150px;\n}\n\n.starcircle[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.logotext-topline[_ngcontent-%COMP%] {\n  padding-top: 25px;\n  margin-bottom: -45px;\n  font-family: \"Kanit i100\", sans-serif;\n  color: #fff;\n  font-weight: 100;\n  font-size: 1.5em;\n}\n\n.logotext-bottomline[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: #fff;\n  font-family: \"Kanit i900\", sans-serif;\n  font-weight: 900;\n  font-size: 5em;\n}\n\n@media only screen and (max-width: 600px) {\n  .star[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 120px;\n    width: 120px;\n  }\n\n  .ring[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 90px;\n    height: 90px;\n  }\n\n  .starcircle[_ngcontent-%COMP%] {\n    height: 120px;\n    width: 120px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .logotext-topline[_ngcontent-%COMP%] {\n    padding-top: 10px;\n    margin-bottom: -26px;\n    font-family: \"Kanit i100\", sans-serif;\n    color: #fff;\n    font-weight: 100;\n    font-size: 0.9em;\n  }\n\n  .logotext-bottomline[_ngcontent-%COMP%] {\n    margin: 0px;\n    color: #fff;\n    font-family: \"Kanit i900\", sans-serif;\n    font-weight: 900;\n    font-size: 3em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVEQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQUNOOztFQUVFO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFQUNOOztFQUVFO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQUNOOztFQUVFO0lBQ0ksaUJBQUE7SUFDQSxvQkFBQTtJQUNBLHFDQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFDTjs7RUFFRTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EscUNBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUFDTjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG59XG5cbi5iZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzLzE5NjA5LmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdGFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbi5yaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbi5zdGFyY2lyY2xlIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dvdGV4dC10b3BsaW5lIHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNDVweDtcbiAgICBmb250LWZhbWlseTogJ0thbml0IGkxMDAnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmxvZ290ZXh0LWJvdHRvbWxpbmUge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQgaTkwMCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDVlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5zdGFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgfVxuXG4gICAgLnJpbmcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgIH1cblxuICAgIC5zdGFyY2lyY2xlIHtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubG9nb3RleHQtdG9wbGluZSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdLYW5pdCBpMTAwJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgfVxuICAgIFxuICAgIC5sb2dvdGV4dC1ib3R0b21saW5lIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LWZhbWlseTogJ0thbml0IGk5MDAnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICB9XG59Il19 */"],
        data: {
          animation: [Object(angular_animations__WEBPACK_IMPORTED_MODULE_0__["rotateAnimation"])({
            duration: 4000,
            delay: 100,
            degrees: -360
          }), Object(angular_animations__WEBPACK_IMPORTED_MODULE_0__["pulseAnimation"])({
            duration: 5000,
            delay: 100,
            scale: 1.1
          })]
        }
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DeXN":
    /*!********************************************!*\
      !*** ./src/app/social/social.component.ts ***!
      \********************************************/

    /*! exports provided: SocialComponent */

    /***/
    function DeXN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocialComponent", function () {
        return SocialComponent;
      });
      /* harmony import */


      var angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-animations */
      "6Z0Z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SocialComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r1.id, ", ", item_r1.name, "");
        }
      }

      var SocialComponent = /*#__PURE__*/function () {
        function SocialComponent() {
          _classCallCheck(this, SocialComponent);

          this.items = [{
            id: 1,
            name: 'Twitter'
          }, {
            id: 2,
            name: 'Furaffinity'
          }, {
            id: 3,
            name: 'Github'
          }];
        }

        _createClass(SocialComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SocialComponent;
      }();

      SocialComponent.ɵfac = function SocialComponent_Factory(t) {
        return new (t || SocialComponent)();
      };

      SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SocialComponent,
        selectors: [["app-social"]],
        decls: 22,
        vars: 2,
        consts: [[1, "container-fluid", "outer-container"], [1, "content"], [4, "ngFor", "ngForOf"]],
        template: function SocialComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "social links");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "===== begin programmatically made content =====");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SocialComponent_div_8_Template, 3, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "===== end programmatically made content =====");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Suspendisse ultrices gravida dictum fusce. Pretium fusce id velit ut tortor. Ultrices in iaculis nunc sed augue lacus viverra. Velit ut tortor pretium viverra suspendisse potenti. Sit amet massa vitae tortor condimentum lacinia quis vel. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Nulla aliquet porttitor lacus luctus accumsan tortor. Id interdum velit laoreet id donec ultrices tincidunt. Nulla aliquet enim tortor at auctor urna. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Consectetur a erat nam at lectus. Facilisis leo vel fringilla est. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Donec massa sapien faucibus et molestie.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Adipiscing elit ut aliquam purus. Sit amet nulla facilisi morbi tempus. Quis varius quam quisque id. Amet nisl suscipit adipiscing bibendum est ultricies integer. Viverra nibh cras pulvinar mattis nunc. Nisl condimentum id venenatis a. Tempus egestas sed sed risus pretium quam vulputate dignissim. Enim blandit volutpat maecenas volutpat blandit. Ac turpis egestas integer eget aliquet nibh praesent tristique. Luctus venenatis lectus magna fringilla urna porttitor. Viverra nibh cras pulvinar mattis nunc. Sed felis eget velit aliquet sagittis. Nunc lobortis mattis aliquam faucibus purus in. Dolor magna eget est lorem. Nunc congue nisi vitae suscipit tellus mauris a diam. Euismod elementum nisi quis eleifend.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Elementum curabitur vitae nunc sed velit. Mi proin sed libero enim sed faucibus turpis in. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Sit amet cursus sit amet dictum. Sit amet massa vitae tortor condimentum lacinia quis. Elementum curabitur vitae nunc sed velit. Nunc mattis enim ut tellus. Scelerisque varius morbi enim nunc. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Aenean et tortor at risus viverra adipiscing at in tellus. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Malesuada fames ac turpis egestas integer eget aliquet nibh praesent. Leo vel orci porta non pulvinar neque laoreet. Sit amet cursus sit amet dictum. Vitae et leo duis ut diam quam nulla porttitor massa. Faucibus nisl tincidunt eget nullam. Volutpat ac tincidunt vitae semper quis lectus nulla. Quam lacus suspendisse faucibus interdum posuere. A condimentum vitae sapien pellentesque habitant morbi tristique. Turpis nunc eget lorem dolor sed viverra. Cursus euismod quis viverra nibh cras pulvinar mattis nunc.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Vitae suscipit tellus mauris a. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Quisque egestas diam in arcu cursus euismod. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Pharetra vel turpis nunc eget lorem. A arcu cursus vitae congue mauris. Cursus in hac habitasse platea dictumst. Magna ac placerat vestibulum lectus mauris ultrices eros. Elementum nisi quis eleifend quam adipiscing. Feugiat scelerisque varius morbi enim. Erat nam at lectus urna. Cursus eget nunc scelerisque viverra. Vitae congue mauris rhoncus aenean vel elit scelerisque. Augue ut lectus arcu bibendum at varius vel. Tristique risus nec feugiat in fermentum.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInDownOnEnter", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: [".outer-container[_ngcontent-%COMP%] {\n  background-image: url('39610.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  overflow-y: scroll;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 700px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 20px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  background-color: white;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.14) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvY2lhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVEQUFBO0FBQUoiLCJmaWxlIjoic29jaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzLzM5NjEwLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0gXG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSAhaW1wb3J0YW50O1xufSBcblxuaDMge1xuICAgIFxufSJdfQ== */"],
        data: {
          animation: [Object(angular_animations__WEBPACK_IMPORTED_MODULE_0__["fadeInDownOnEnterAnimation"])()]
        }
      });
      /***/
    },

    /***/
    "J1Ni":
    /*!*******************************!*\
      !*** ./src/app/animations.ts ***!
      \*******************************/

    /*! exports provided: fadeInAnimation */

    /***/
    function J1Ni(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function () {
        return fadeInAnimation;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var resetRoute = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'relative'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'fixed',
        // tslint:disable-next-line: max-line-length
        left: 0,
        width: '100%',
        opacity: 0
      })], {
        optional: true
      })];
      var fadeInAnimation = // Fade Animation
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [].concat(resetRoute, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      })], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
      }))], {
        optional: true
      })])]))]);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./animations */
      "J1Ni");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var mdb_angular_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! mdb-angular-ui-kit */
      "rPIy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = ["collapse"];

      var _c1 = function _c1() {
        return {
          exact: true
        };
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'shootinginto.space';
        } // tslint:disable-next-line: typedef


        _createClass(AppComponent, [{
          key: "prepareRoute",
          value: function prepareRoute(outlet) {
            return (outlet === null || outlet === void 0 ? void 0 : outlet.activatedRouteData) && outlet.activatedRouteData.animation;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        viewQuery: function AppComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.collapse = _t.first);
          }
        },
        decls: 32,
        vars: 3,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["type", "button", "aria-controls", "toggleThingTest", "aria-expanded", "false", 1, "navbar-toggler", 3, "click"], [1, "fas", "fa-bars"], ["id", "toggleThingTest", "mdbCollapse", "", 1, "collapse", "navbar-collapse"], ["basicCollapse", "mdbCollapse"], [1, "navbar-nav", "mr-auto"], ["routerLink", "", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "about", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "social", "routerLinkActive", "active", 1, "nav-link"], [1, "navbar-nav", "ms-auto"], ["href", "https://blog.shootinginto.space", 1, "nav-link", 2, "display", "inline-block"], [1, "fas", "fa-blog", "fa-lg"], ["href", "https://twitter.com/AxelSparkster", "target", "_blank", 1, "nav-link", 2, "display", "inline-block"], [1, "fab", "fa-twitter", "fa-lg"], ["href", "https://github.com/AxelSparkster", "target", "_blank", 1, "nav-link", 2, "display", "inline-block"], [1, "fab", "fa-github", "fa-lg"], ["href", "https://trello.com/b/CtYfAAPA/shootingintospace", "target", "_blank", 1, "nav-link", 2, "display", "inline-block"], [1, "fab", "fa-trello", "fa-lg"], ["outlet", "outlet"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Social");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "router-outlet", null, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@routeAnimation", ctx.prepareRoute(_r1));
          }
        },
        directives: [mdb_angular_ui_kit__WEBPACK_IMPORTED_MODULE_2__["MdbCollapseDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100vh;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n}\n[_nghost-%COMP%]   router-outlet[_ngcontent-%COMP%]    ~ *[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUVJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFOIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICBcbiAgICBtYWluIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICBcbiAgICByb3V0ZXItb3V0bGV0IH4gKiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiAgIl19 */"],
        data: {
          animation: [_animations__WEBPACK_IMPORTED_MODULE_0__["fadeInAnimation"]]
        }
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var mdb_angular_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! mdb-angular-ui-kit */
      "rPIy");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _social_social_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./social/social.component */
      "DeXN");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], mdb_angular_ui_kit__WEBPACK_IMPORTED_MODULE_3__["MdbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], mdb_angular_ui_kit__WEBPACK_IMPORTED_MODULE_3__["MdbCollapseModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _social_social_component__WEBPACK_IMPORTED_MODULE_6__["SocialComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], mdb_angular_ui_kit__WEBPACK_IMPORTED_MODULE_3__["MdbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], mdb_angular_ui_kit__WEBPACK_IMPORTED_MODULE_3__["MdbCollapseModule"]]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _social_social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./social/social.component */
      "DeXN");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        pathMatch: 'full',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        data: {
          animation: 'home'
        }
      }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        data: {
          animation: 'about'
        }
      }, {
        path: 'social',
        component: _social_social_component__WEBPACK_IMPORTED_MODULE_3__["SocialComponent"],
        data: {
          animation: 'social'
        }
      }, // just redirect home if it's not found
      {
        path: '**',
        redirectTo: ''
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map