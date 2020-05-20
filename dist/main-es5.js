function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/API.service.ts":
  /*!********************************!*\
    !*** ./src/app/API.service.ts ***!
    \********************************/

  /*! exports provided: ModelAttributeTypes, APIService */

  /***/
  function srcAppAPIServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelAttributeTypes", function () {
      return ModelAttributeTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIService", function () {
      return APIService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @aws-amplify/api */
    "./node_modules/@aws-amplify/api/lib-esm/index.js");
    /* tslint:disable */

    /* eslint-disable */
    //  This file was automatically generated and should not be edited.


    var ModelAttributeTypes;

    (function (ModelAttributeTypes) {
      ModelAttributeTypes["binary"] = "binary";
      ModelAttributeTypes["binarySet"] = "binarySet";
      ModelAttributeTypes["bool"] = "bool";
      ModelAttributeTypes["list"] = "list";
      ModelAttributeTypes["map"] = "map";
      ModelAttributeTypes["number"] = "number";
      ModelAttributeTypes["numberSet"] = "numberSet";
      ModelAttributeTypes["string"] = "string";
      ModelAttributeTypes["stringSet"] = "stringSet";
      ModelAttributeTypes["_null"] = "_null";
    })(ModelAttributeTypes || (ModelAttributeTypes = {}));

    var APIService = /*#__PURE__*/function () {
      function APIService() {
        _classCallCheck(this, APIService);

        this.OnCreateTodoListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnCreateTodo {\n        onCreateTodo {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }"));
        this.OnUpdateTodoListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnUpdateTodo {\n        onUpdateTodo {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }"));
        this.OnDeleteTodoListener = _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])("subscription OnDeleteTodo {\n        onDeleteTodo {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }"));
      }

      _createClass(APIService, [{
        key: "CreateTodo",
        value: function CreateTodo(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    statement = "mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {\n        createTodo(input: $input, condition: $condition) {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context.sent;
                    return _context.abrupt("return", response.data.createTodo);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "UpdateTodo",
        value: function UpdateTodo(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    statement = "mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {\n        updateTodo(input: $input, condition: $condition) {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context2.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context2.sent;
                    return _context2.abrupt("return", response.data.updateTodo);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "DeleteTodo",
        value: function DeleteTodo(input, condition) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    statement = "mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {\n        deleteTodo(input: $input, condition: $condition) {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      input: input
                    };

                    if (condition) {
                      gqlAPIServiceArguments.condition = condition;
                    }

                    _context3.next = 5;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 5:
                    response = _context3.sent;
                    return _context3.abrupt("return", response.data.deleteTodo);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "GetTodo",
        value: function GetTodo(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    statement = "query GetTodo($id: ID!) {\n        getTodo(id: $id) {\n          __typename\n          id\n          name\n          description\n          createdAt\n          updatedAt\n        }\n      }";
                    gqlAPIServiceArguments = {
                      id: id
                    };
                    _context4.next = 4;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 4:
                    response = _context4.sent;
                    return _context4.abrupt("return", response.data.getTodo);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "ListTodos",
        value: function ListTodos(filter, limit, nextToken) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var statement, gqlAPIServiceArguments, response;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    statement = "query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {\n        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {\n          __typename\n          items {\n            __typename\n            id\n            name\n            description\n            createdAt\n            updatedAt\n          }\n          nextToken\n        }\n      }";
                    gqlAPIServiceArguments = {};

                    if (filter) {
                      gqlAPIServiceArguments.filter = filter;
                    }

                    if (limit) {
                      gqlAPIServiceArguments.limit = limit;
                    }

                    if (nextToken) {
                      gqlAPIServiceArguments.nextToken = nextToken;
                    }

                    _context5.next = 7;
                    return _aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["default"].graphql(Object(_aws_amplify_api__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(statement, gqlAPIServiceArguments));

                  case 7:
                    response = _context5.sent;
                    return _context5.abrupt("return", response.data.listTodos);

                  case 9:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        }
      }]);

      return APIService;
    }();

    APIService.ɵfac = function APIService_Factory(t) {
      return new (t || APIService)();
    };

    APIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: APIService,
      factory: APIService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](APIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _API_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./API.service */
    "./src/app/API.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r1.name, " - ", item_r1.description, "");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(apiService) {
        _classCallCheck(this, AppComponent);

        this.apiService = apiService;
        this.title = 'myAmplifyProject';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.apiService.ListTodos().then(function (evt) {
                      _this.todos = evt.items;
                    });
                    this.apiService.OnCreateTodoListener.subscribe(function (evt) {
                      var data = evt.value.data.onCreateTodo;
                      _this.todos = [].concat(_toConsumableArray(_this.todos), [data]);
                    });

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "createTodo",
        value: function createTodo() {
          this.apiService.CreateTodo({
            name: 'Angular',
            description: 'testing'
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_API_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 1,
      consts: [[3, "click"], [4, "ngFor", "ngForOf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_0_listener() {
            return ctx.createTodo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Todo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_li_3_Template, 2, 2, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.todos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _API_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/aws-exports.ts":
  /*!****************************!*\
    !*** ./src/aws-exports.ts ***!
    \****************************/

  /*! exports provided: default */

  /***/
  function srcAwsExportsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* eslint-disable */
    // WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.


    var awsmobile = {
      "aws_project_region": "us-east-1",
      "aws_appsync_graphqlEndpoint": "https://gs7sx5uj7zaf3gfqxl2kfqnra4.appsync-api.us-east-1.amazonaws.com/graphql",
      "aws_appsync_region": "us-east-1",
      "aws_appsync_authenticationType": "API_KEY",
      "aws_appsync_apiKey": "da2-e4nd32rwhvdn7a4pzxdbpnre5y"
    };
    /* harmony default export */

    __webpack_exports__["default"] = awsmobile;
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @aws-amplify/pubsub */
    "./node_modules/@aws-amplify/pubsub/lib-esm/index.js");
    /* harmony import */


    var _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @aws-amplify/api */
    "./node_modules/@aws-amplify/api/lib-esm/index.js");
    /* harmony import */


    var _aws_exports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./aws-exports */
    "./src/aws-exports.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    _aws_amplify_api__WEBPACK_IMPORTED_MODULE_3__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_4__["default"]);

    _aws_amplify_pubsub__WEBPACK_IMPORTED_MODULE_2__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_4__["default"]);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Amit\Desktop\try\amplify-test\myAmplifyProject\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map