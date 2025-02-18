/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.freelancers .freelancer-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 5px;\n}\n.freelancers .freelancer-tools {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n}\n\n.sidebar .image i.fas {\n  color: white;\n  font-size: 34px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://freelancestudio/./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://freelancestudio/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://freelancestudio/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://freelancestudio/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://freelancestudio/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://freelancestudio/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://freelancestudio/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://freelancestudio/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://freelancestudio/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\r\n\r\n\r\nclass App {\r\n\r\n    constructor() {\r\n        new _router__WEBPACK_IMPORTED_MODULE_1__.Router();\r\n    }\r\n}\r\n\r\n(new App());\n\n//# sourceURL=webpack://freelancestudio/./src/app.js?");

/***/ }),

/***/ "./src/components/auth/login.js":
/*!**************************************!*\
  !*** ./src/components/auth/login.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth-utils */ \"./src/utils/auth-utils.js\");\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http-utils */ \"./src/utils/http-utils.js\");\n\r\n\r\n\r\nclass Login {\r\n\r\n    constructor(openNewRoute) {\r\n\r\n        this.openNewRoute = openNewRoute;\r\n\r\n        // Запрет на логин и регистрацию, когда уже авторизован\r\n        if (_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.accessTokenKey)) {\r\n            return this.openNewRoute('/');\r\n        }\r\n\r\n        this.emailElement = document.getElementById('email');\r\n        this.passwordElement = document.getElementById('password');\r\n        this.rememberMeElement = document.getElementById('remember-me');\r\n        this.commonErrorElement = document.getElementById('common-error');\r\n        document.getElementById('process-button').addEventListener('click', this.login.bind(this));\r\n    }\r\n\r\n    validateForm() {\r\n        // Установка флага\r\n        let isValid = true;\r\n        // Валдиация инпута Почты\r\n        if (this.emailElement.value && this.emailElement.value.match(/^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/)) {\r\n            this.emailElement.classList.remove('is-invalid');\r\n        } else {\r\n            this.emailElement.classList.add('is-invalid');\r\n            isValid = false;\r\n        }\r\n        // Валдиация инпута Пароля\r\n        if (this.passwordElement.value) {\r\n            this.passwordElement.classList.remove('is-invalid');\r\n        } else {\r\n            this.passwordElement.classList.add('is-invalid');\r\n            isValid = false;\r\n        }\r\n        return isValid;\r\n    }\r\n\r\n    async login () {\r\n        // Скрываем сообщение об ошибке логина\r\n        this.commonErrorElement.style.display = 'none';\r\n\r\n        if (this.validateForm()) {\r\n\r\n            const result = await _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/login','POST', false,{\r\n                email: this.emailElement.value,\r\n                password: this.passwordElement.value,\r\n                rememberMe: this.rememberMeElement.checked\r\n            })\r\n            if (result.error || !result.response || result.response && (!result.response.accessToken || !result.response.refreshToken || !result.response.id || !result.response.name)) {\r\n                // Отображаем сообщение об ошибке логина\r\n                this.commonErrorElement.style.display = 'block';\r\n                return;\r\n            }\r\n\r\n            _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.setAuthInfo(result.response.accessToken, result.response.refreshToken, {\r\n                    id: result.response.id,\r\n                    name: result.response.name\r\n            });\r\n            this.openNewRoute('/')\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://freelancestudio/./src/components/auth/login.js?");

/***/ }),

/***/ "./src/components/auth/logout.js":
/*!***************************************!*\
  !*** ./src/components/auth/logout.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Logout: () => (/* binding */ Logout)\n/* harmony export */ });\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth-utils */ \"./src/utils/auth-utils.js\");\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http-utils */ \"./src/utils/http-utils.js\");\n\r\n\r\n\r\nclass Logout {\r\n\r\n    constructor(openNewRoute) {\r\n\r\n        this.openNewRoute = openNewRoute;\r\n\r\n        // Запрет на логин и регистрацию, когда уже авторизован\r\n        if (!_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.accessTokenKey) || !_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.refreshTokenKey)) {\r\n            return this.openNewRoute('/');\r\n        }\r\n\r\n        this.logout().then();\r\n    }\r\n\r\n    async logout() {\r\n\r\n        await _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/signup','POST', false, {\r\n            refreshToken: _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.refreshTokenKey),\r\n        });\r\n\r\n        _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.removeAuthInfo();\r\n        this.openNewRoute('/login')\r\n    }\r\n}\n\n//# sourceURL=webpack://freelancestudio/./src/components/auth/logout.js?");

/***/ }),

/***/ "./src/components/auth/sign-up.js":
/*!****************************************!*\
  !*** ./src/components/auth/sign-up.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignUp: () => (/* binding */ SignUp)\n/* harmony export */ });\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/auth-utils */ \"./src/utils/auth-utils.js\");\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/http-utils */ \"./src/utils/http-utils.js\");\n\r\n\r\n\r\nclass SignUp {\r\n\r\n    constructor(openNewRoute) {\r\n\r\n        this.openNewRoute = openNewRoute;\r\n\r\n        // Запрет на логин и регистрацию, когда уже авторизован\r\n        if (_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.accessTokenKey)) {\r\n            return this.openNewRoute('/');\r\n        }\r\n\r\n        this.nameElement = document.getElementById('name');\r\n        this.lastNameElement = document.getElementById('last-name');\r\n        this.emailElement = document.getElementById('email');\r\n        this.passwordElement = document.getElementById('password');\r\n        this.passwordRepeatElement = document.getElementById('password-repeat');\r\n        this.agreeElement = document.getElementById('agree');\r\n        this.commonErrorElement = document.getElementById('common-error');\r\n        document.getElementById('process-button').addEventListener('click', this.signUp.bind(this));\r\n    }\r\n\r\n    validateForm() {\r\n        // Установка флага\r\n        let isValid = true;\r\n\r\n        // Валдиация инпута Имени\r\n        if (this.nameElement.value) {\r\n            this.nameElement.classList.remove('is-invalid');\r\n        } else {\r\n            this.nameElement.classList.add('is-invalid');\r\n            isValid = false;\r\n        }\r\n        // Валдиация инпута Фамилии\r\n        if (this.lastNameElement.value) {\r\n            this.lastNameElement.classList.remove('is-invalid');\r\n        } else {\r\n            this.lastNameElement.classList.add('is-invalid');\r\n            isValid = false;\r\n        }\r\n        // Валдиация инпута Почты\r\n        if (this.emailElement.value && this.emailElement.value.match(/^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/)) {\r\n            this.emailElement.classList.remove('is-invalid');\r\n        } else {\r\n            this.emailElement.classList.add('is-invalid');\r\n            isValid = false;\r\n        }\r\n        // Валдиация инпута Пароля\r\n        if (this.passwordElement.value && this.passwordElement.value.match(/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {\r\n            this.passwordElement.classList.remove('is-invalid');\r\n        } else {\r\n            this.passwordElement.classList.add('is-invalid');\r\n            isValid = false;\r\n        }\r\n        // Валдиация инпута Повтора пароля\r\n        if (this.passwordRepeatElement.value && this.passwordRepeatElement.value === this.passwordElement.value) {\r\n            this.passwordRepeatElement.classList.remove('is-invalid');\r\n        } else {\r\n            this.passwordRepeatElement.classList.add('is-invalid');\r\n            isValid = false;\r\n        }\r\n        // Валдиация чекбокс-инпута Согласия с условиями\r\n        if (this.agreeElement.checked) {\r\n            this.agreeElement.classList.remove('is-invalid');\r\n        } else {\r\n            this.agreeElement.classList.add('is-invalid');\r\n            isValid = false;\r\n        }\r\n\r\n        return isValid;\r\n    }\r\n\r\n    async signUp() {\r\n        // Скрываем сообщение об ошибке логина\r\n        this.commonErrorElement.style.display = 'none';\r\n\r\n        if (this.validateForm()) {\r\n\r\n            const result = await _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/signup','POST', false, {\r\n                name: this.nameElement.value,\r\n                lastName: this.lastNameElement.value,\r\n                email: this.emailElement.value,\r\n                password: this.passwordElement.value\r\n            });\r\n            if (result.error || !result.response || result.response && (!result.response.accessToken || !result.response.refreshToken || !result.response.id || !result.response.name)) {\r\n                // Отображаем сообщение об ошибке логина\r\n                this.commonErrorElement.style.display = 'block';\r\n                return;\r\n            }\r\n\r\n            _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.setAuthInfo(result.response.accessToken, result.response.refreshToken, {id: result.response.id, name: result.response.name});\r\n            this.openNewRoute('/');\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://freelancestudio/./src/components/auth/sign-up.js?");

/***/ }),

/***/ "./src/components/dashboard.js":
/*!*************************************!*\
  !*** ./src/components/dashboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Dashboard: () => (/* binding */ Dashboard)\n/* harmony export */ });\n\r\nclass Dashboard {\r\n\r\n    constructor() {\r\n        console.log(\"DASHBOARD\");\r\n    }\r\n}\n\n//# sourceURL=webpack://freelancestudio/./src/components/dashboard.js?");

/***/ }),

/***/ "./src/components/freelancers/freelancers-list.js":
/*!********************************************************!*\
  !*** ./src/components/freelancers/freelancers-list.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FreelancersList: () => (/* binding */ FreelancersList)\n/* harmony export */ });\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/http-utils */ \"./src/utils/http-utils.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n\r\n\r\n\r\nclass FreelancersList {\r\n\r\n    constructor(openNewRoute) {\r\n\r\n        this.openNewRoute = openNewRoute;\r\n        this.getFreelancers().then();\r\n    }\r\n\r\n    async getFreelancers() {\r\n\r\n        const result = await _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/freelancers');\r\n        // Проверка на наличие свойства редиректа с соответствующим действием при наличии\r\n        if (result.redirect) {\r\n            return this.openNewRoute(result.redirect);\r\n        }\r\n\r\n        if (result.error || !result.response || result.response && (result.response.error || !result.response.freelancers)) {\r\n            return alert('Возникла ошибка при запросе фрилансеров. Обратитесь в поддержку')\r\n        }\r\n\r\n        this.showRecords(result.response.freelancers);\r\n    }\r\n\r\n    showRecords(freelancers) {\r\n\r\n        const recordsElement = document.getElementById('records');\r\n        for (let i = 0; i < freelancers.length; i++) {\r\n            const trElement = document.createElement('tr');\r\n            trElement.insertCell().innerText = i + 1;\r\n            trElement.insertCell().innerHTML = freelancers[i].avatar ?\r\n                '<img class=\"freelancer-avatar\" src=\"' + _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].host + freelancers[i].avatar + '\" alt=\"User Image\">' : '';\r\n            trElement.insertCell().innerHTML = freelancers[i].name + '<p>' + freelancers[i].lastName + '</p>';\r\n            trElement.insertCell().innerText = freelancers[i].email;\r\n\r\n            let levelHtml = null;\r\n            switch (freelancers[i].level) {\r\n                case _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].freelancerLevels.junior:\r\n                    levelHtml = '<span class=\"badge badge-info\">Junior</span>';\r\n                    break;\r\n                case _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].freelancerLevels.middle:\r\n                    levelHtml = '<span class=\"badge badge-warning\">Middle</span>';\r\n                    break;\r\n                case _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].freelancerLevels.senior:\r\n                    levelHtml = '<span class=\"badge badge-success\">Senior</span>';\r\n                    break;\r\n                default:\r\n                    levelHtml = '<span class=\"badge badge-secondary\">Unknown</span>';\r\n            }\r\n            trElement.insertCell().innerHTML = levelHtml;\r\n\r\n            trElement.insertCell().innerText = freelancers[i].education;\r\n            trElement.insertCell().innerText = freelancers[i].location;\r\n            trElement.insertCell().innerText = freelancers[i].skills;\r\n            trElement.insertCell().innerHTML = '<div class=\"freelancer-tools\">' +\r\n            '<a href=\"/freelancers/view?id=\"' + freelancers[i].id + ' class=\"fas fa-eye\"></a>' +\r\n            '<a href=\"/freelancers/edit?id=\"' + freelancers[i].id + ' class=\"fas fa-edit\"></a>' +\r\n            '<a href=\"/freelancers/delete?id=\"' + freelancers[i].id + ' class=\"fas fa-trash\"></a>' +\r\n            '</div>';\r\n\r\n            recordsElement.appendChild(trElement);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://freelancestudio/./src/components/freelancers/freelancers-list.js?");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst host = 'http://localhost:3000';\r\nconst config = {\r\n    host: host,\r\n    api: host + '/api',\r\n    freelancerLevels: {\r\n        junior: 'junior',\r\n        middle: 'middle',\r\n        senior: 'senior',\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://freelancestudio/./src/config/config.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard */ \"./src/components/dashboard.js\");\n/* harmony import */ var _components_auth_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth/login */ \"./src/components/auth/login.js\");\n/* harmony import */ var _components_auth_sign_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/sign-up */ \"./src/components/auth/sign-up.js\");\n/* harmony import */ var _components_auth_logout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/logout */ \"./src/components/auth/logout.js\");\n/* harmony import */ var _components_freelancers_freelancers_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/freelancers/freelancers-list */ \"./src/components/freelancers/freelancers-list.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Router {\r\n\r\n    constructor() {\r\n        this.titlePageElement = document.getElementById('page-title');\r\n        this.contentPageElement = document.getElementById('page-content');\r\n        this.adminLteStyleElement = document.getElementById('adminlte_style');\r\n\r\n        this.initEvents();\r\n        this.routes = [\r\n            {\r\n                route: '/',\r\n                title: 'Дашборд',\r\n                filePathTemplate: '/templates/pages/dashboard.html',\r\n                useLayout: '/templates/pages/layout.html',\r\n                load: () => {\r\n                    new _components_dashboard__WEBPACK_IMPORTED_MODULE_0__.Dashboard();\r\n                }\r\n            },\r\n            {\r\n                route: '/404',\r\n                title: 'Страница не найдена',\r\n                filePathTemplate: '/templates/pages/404.html',\r\n                useLayout: false\r\n            },\r\n            {\r\n                route: '/login',\r\n                title: 'Авторизация',\r\n                filePathTemplate: '/templates/pages/auth/login.html',\r\n                useLayout: false,\r\n                load: () => {\r\n                    document.body.classList.add('login-page'); // Добавляем для выравнивания элементов по горизонтали\r\n                    document.body.style.height = '100vh'; // Добавляем для выравнивания по вертикали\r\n                    new _components_auth_login__WEBPACK_IMPORTED_MODULE_1__.Login(this.openNewRoute.bind(this));\r\n                },\r\n                unload: () => {\r\n                    document.body.classList.remove('login-page'); // Удаляем классы при выходе со страницы\r\n                    document.body.style.height = 'auto';\r\n                },\r\n                styles: ['icheck-bootstrap.min.css']\r\n            },\r\n            {\r\n                route: '/sign-up',\r\n                title: 'Регистрация',\r\n                filePathTemplate: '/templates/pages/auth/sign-up.html',\r\n                useLayout: false,\r\n                load: () => {\r\n                    document.body.classList.add('register-page'); // Добавляем для выравнивания элементов по горизонтали\r\n                    document.body.style.height = '100vh'; // Добавляем для выравнивания по вертикали\r\n                    new _components_auth_sign_up__WEBPACK_IMPORTED_MODULE_2__.SignUp(this.openNewRoute.bind(this));\r\n                },\r\n                unload: () => {\r\n                    document.body.classList.remove('register-page'); // Удаляем классы при выходе со страницы\r\n                    document.body.style.height = 'auto';\r\n                },\r\n                styles: ['icheck-bootstrap.min.css']\r\n            },\r\n            {\r\n                route: '/logout',\r\n                load: () => {\r\n                    new _components_auth_logout__WEBPACK_IMPORTED_MODULE_3__.Logout(this.openNewRoute.bind(this));\r\n                }\r\n            },\r\n            {\r\n                route: '/freelancers',\r\n                title: 'Фрилансеры',\r\n                filePathTemplate: '/templates/pages/freelancers/list.html',\r\n                useLayout: '/templates/pages/layout.html',\r\n                load: () => {\r\n                    new _components_freelancers_freelancers_list__WEBPACK_IMPORTED_MODULE_4__.FreelancersList(this.openNewRoute.bind(this));\r\n                },\r\n                styles: ['dataTables.bootstrap4.min.css'],\r\n                scripts: ['jquery.dataTables.min.js, dataTables.bootstrap4.min.js']\r\n            },\r\n        ]\r\n    }\r\n\r\n    initEvents() {\r\n        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));\r\n        window.addEventListener('popstate', this.activateRoute.bind(this));\r\n        document.addEventListener('click', this.clickHandler.bind(this));\r\n    }\r\n\r\n    async openNewRoute(url) {\r\n        const currentRoute = window.location.pathname;\r\n        history.pushState({}, '', url);\r\n        await this.activateRoute(null, currentRoute);\r\n    }\r\n\r\n    async clickHandler(e) {\r\n        let element = null;\r\n        if (e.target.nodeName === 'A') {\r\n            element = e.target;\r\n        } else if (e.target.parentNode.nodeName === 'A') {\r\n            element = e.target.parentNode;\r\n        }\r\n\r\n        if (element) {\r\n            e.preventDefault();\r\n\r\n            const url = element.href.replace(window.location.origin, '');\r\n            if (!url || url === '/#' || url.startsWith('javascript:void(0)')) {\r\n                return;\r\n            }\r\n\r\n            await this.openNewRoute(url);\r\n        }\r\n    }\r\n\r\n    async activateRoute(e, oldRoute = null) {\r\n        if (oldRoute) {\r\n            const currentRoute = this.routes.find(item => item.route === oldRoute);\r\n            // Удаление необходимых css файлов со страницы\r\n            if (currentRoute.styles && currentRoute.styles.length > 0) {\r\n                currentRoute.styles.forEach(style => {\r\n                    document.querySelector(`link[href='/css/${style}']`).remove();\r\n                });\r\n            }\r\n            // Удаление необходимых js файлов со страницы\r\n            if (currentRoute.scripts && currentRoute.scripts.length > 0) {\r\n                currentRoute.scripts.forEach(script => {\r\n                    document.querySelector(`script[src='/js/${script}']`).remove();\r\n                });\r\n            }\r\n\r\n            // Вызов функции по удалению стилей css\r\n            if (currentRoute.unload && typeof currentRoute.unload === 'function') {\r\n                currentRoute.unload();\r\n            }\r\n        }\r\n\r\n        const urlRoute = window.location.pathname;\r\n        const newRoute = this.routes.find(item => item.route === urlRoute);\r\n\r\n        if (newRoute) {\r\n            // Подключение необходимых css файлов на текущую страницу\r\n            if (newRoute.styles && newRoute.styles.length > 0) {\r\n                newRoute.styles.forEach(style => {\r\n                    const link = document.createElement('link');\r\n                    link.rel = 'stylesheet';\r\n                    link.href = '/css/' + style;\r\n                    document.head.insertBefore(link, this.adminLteStyleElement);\r\n                });\r\n            }\r\n\r\n            // Подключение необходимых js файлов на текущую страницу\r\n            if (newRoute.scripts && newRoute.scripts.length > 0) {\r\n                newRoute.scripts.forEach(file => {\r\n                    const script = document.createElement('script');\r\n                    script.src = '/js/' + file;\r\n                    document.body.appendChild(script);\r\n                });\r\n            }\r\n\r\n            // Присвоение соответствующего заголовка страницы\r\n            if (newRoute.title) {\r\n                this.titlePageElement.innerText = newRoute.title + ' | FreelanceStudio';\r\n            }\r\n\r\n            // Присовение соответствующего контента страница\r\n            if (newRoute.filePathTemplate) {\r\n\r\n                let contentBlock = this.contentPageElement;\r\n\r\n                // Присвоение html элементов лайаута при необходимости\r\n                if (newRoute.useLayout) {\r\n                    this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(response => response.text());\r\n                    contentBlock = document.getElementById('layout-content');\r\n                    document.body.classList.add('sidebar-mini');\r\n                    document.body.classList.add('layout-fixed');\r\n\r\n                } else {\r\n                    document.body.classList.remove('sidebar-mini');\r\n                    document.body.classList.remove('layout-fixed');\r\n                }\r\n                contentBlock.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text());\r\n            }\r\n\r\n            // Присвоение соответствующего скрипта страницы\r\n            if (newRoute.load && typeof newRoute.load === 'function') {\r\n                newRoute.load();\r\n            }\r\n\r\n        } else {\r\n            console.log('No route found');\r\n            history.pushState({}, '', '/404');\r\n            await this.activateRoute();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://freelancestudio/./src/router.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://freelancestudio/./src/styles/styles.scss?");

/***/ }),

/***/ "./src/utils/auth-utils.js":
/*!*********************************!*\
  !*** ./src/utils/auth-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthUtils: () => (/* binding */ AuthUtils)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.js\");\n\r\n\r\nclass AuthUtils {\r\n\r\n    static accessTokenKey = 'accessToken';\r\n    static refreshTokenKey = 'refreshToken';\r\n    static userInfoTokenKey = 'userInfo';\r\n\r\n    static setAuthInfo(accessToken, refreshToken, userInfo = null) {\r\n        localStorage.setItem(this.accessTokenKey, accessToken);\r\n        localStorage.setItem(this.refreshTokenKey, refreshToken);\r\n        if (userInfo) {\r\n            localStorage.setItem(this.userInfoTokenKey, JSON.stringify(userInfo));\r\n        }\r\n    }\r\n\r\n    static removeAuthInfo() {\r\n        localStorage.removeItem(this.accessTokenKey);\r\n        localStorage.removeItem(this.refreshTokenKey);\r\n        localStorage.removeItem(this.userInfoTokenKey);\r\n    }\r\n\r\n    static getAuthInfo(key = null) {\r\n        if (key && [this.accessTokenKey, this.refreshTokenKey, this.userInfoTokenKey].includes(key) ) {\r\n            return localStorage.getItem(key);\r\n        } else {\r\n            return {\r\n                [this.accessTokenKey]: localStorage.getItem(this.accessTokenKey),\r\n                [this.refreshTokenKey]: localStorage.getItem(this.refreshTokenKey),\r\n                [this.userInfoTokenKey]: localStorage.getItem(this.userInfoTokenKey),\r\n            }\r\n        }\r\n    }\r\n\r\n    static async updateRefreshToken() {\r\n\r\n        let result = false;\r\n        const refreshToken = this.getAuthInfo(this.refreshTokenKey);\r\n        if (refreshToken) {\r\n            const response = await fetch(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api + '/refresh', {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-Type': 'application/json',\r\n                    'Accept': 'application/json'\r\n                },\r\n                body: JSON.stringify({refreshToken: refreshToken}),\r\n            });\r\n            if (response && response.status === 200) {\r\n                const tokens = await response.json();\r\n                if (tokens && !tokens.error) {\r\n                    this.setAuthInfo(tokens.accessToken, tokens.refreshToken);\r\n                    result = true;\r\n                }\r\n            }\r\n        }\r\n\r\n        if (!result) {\r\n            this.removeAuthInfo();\r\n        }\r\n\r\n        return result;\r\n    }\r\n}\n\n//# sourceURL=webpack://freelancestudio/./src/utils/auth-utils.js?");

/***/ }),

/***/ "./src/utils/http-utils.js":
/*!*********************************!*\
  !*** ./src/utils/http-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpUtils: () => (/* binding */ HttpUtils)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.js\");\n/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-utils */ \"./src/utils/auth-utils.js\");\n\r\n\r\n\r\nclass HttpUtils {\r\n\r\n    static async request(url, method = \"GET\", useAuth = true, body = null) {\r\n        const result = {\r\n            error: false,\r\n            response: null\r\n        }\r\n\r\n        const params = {\r\n            method: method,\r\n            headers: {\r\n                // Стандартные хэдеры при запросе\r\n                'Content-Type': 'application/json',\r\n                'Accept': 'application/json'\r\n            }\r\n        };\r\n\r\n        let token = null;\r\n\r\n        if (useAuth) {\r\n            token = _auth_utils__WEBPACK_IMPORTED_MODULE_1__.AuthUtils.getAuthInfo(_auth_utils__WEBPACK_IMPORTED_MODULE_1__.AuthUtils.accessTokenKey);\r\n            if (token) {\r\n                params.headers['authorization'] = token;\r\n            }\r\n        }\r\n\r\n        if (body) {\r\n            params.body = JSON.stringify(body);\r\n        }\r\n\r\n        let response = null;\r\n        try {\r\n            response = await fetch(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api + url, params);\r\n            result.response = await response.json();\r\n        } catch(e) {\r\n            result.error = true;\r\n            return result;\r\n        }\r\n\r\n        if (response.status < 200 || response.status >= 300) {\r\n            result.error = true;\r\n\r\n            if (useAuth && response.status === 401) {\r\n                // 1) Нет токена\r\n                if (!token) {\r\n                    result.redirect = '/login';\r\n                } else {\r\n                    // 2) Токен заэкспайрился/невалиден\r\n                    const updateTokenResult = await _auth_utils__WEBPACK_IMPORTED_MODULE_1__.AuthUtils.updateRefreshToken()\r\n                    if (updateTokenResult) {\r\n                        // Повторный запрос посредством рекурсии\r\n                        return this.request(url, method, useAuth, body);\r\n                    } else {\r\n                        result.redirect = '/login';\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        return result;\r\n    }\r\n}\n\n//# sourceURL=webpack://freelancestudio/./src/utils/http-utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;