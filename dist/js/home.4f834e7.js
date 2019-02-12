/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/index.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js!./src/css/index.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../fonts/font2.ttf */ \"./src/fonts/font2.ttf\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../assets/logo.jpg */ \"./src/assets/logo.jpg\"));\n\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: 'myFont';\\n  src: url(\" + ___CSS_LOADER_URL___0___ + \") format(\\\"truetype\\\"); }\\n\\nbody {\\n  background-color: #ccc; }\\n\\n.bg-title {\\n  margin-top: 30px;\\n  text-align: center;\\n  font-size: 20px;\\n  color: #666;\\n  font-family: 'myFont'; }\\n\\n.box {\\n  display: -webkit-box;\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: center;\\n  -webkit-justify-content: center;\\n     -moz-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n  -webkit-box-align: center;\\n  -webkit-align-items: center;\\n     -moz-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  margin-top: 100px; }\\n  .box img {\\n    border: 0;\\n    display: block; }\\n\\n.logo-box {\\n  width: 375px;\\n  height: 61px;\\n  margin: 100px auto 0;\\n  background: url(\" + ___CSS_LOADER_URL___1___ + \") no-repeat center; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/css/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/assets/logo.jpg":
/*!*****************************!*\
  !*** ./src/assets/logo.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/jpeg;base64,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\"\n\n//# sourceURL=webpack:///./src/assets/logo.jpg?");

/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/lib/loader.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/index.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/index.scss?");

/***/ }),

/***/ "./src/fonts/font2.ttf":
/*!*****************************!*\
  !*** ./src/fonts/font2.ttf ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/font2.9da95f9.ttf\";\n\n//# sourceURL=webpack:///./src/fonts/font2.ttf?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log('Hello webpack---home');\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ })

/******/ });