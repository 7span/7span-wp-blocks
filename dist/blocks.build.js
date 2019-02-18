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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero__ = __webpack_require__(/*! ./hero */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(/*! ./button */ 4);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9oZXJvJztcbmltcG9ydCAnLi9idXR0b24nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************!*\
  !*** ./src/hero/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button__ = __webpack_require__(/*! ../button */ 4);\n/**\n * BLOCK: sevenspan-hero\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    PlainText = _wp$editor.PlainText,\n    InspectorControls = _wp$editor.InspectorControls,\n    InnerBlocks = _wp$editor.InnerBlocks;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl;\n\n\n\nregisterBlockType('sevenspan/hero-block', {\n\ttitle: __('Hero'),\n\ticon: 'shield',\n\tcategory: 'sevenspan-blocks',\n\n\tattributes: {\n\t\ttitle1: {\n\t\t\tsource: 'text',\n\t\t\tselector: '.card__title1'\n\t\t},\n\t\ttitle2: {\n\t\t\tsource: 'text',\n\t\t\tselector: '.card__title2'\n\t\t},\n\t\tsummary: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.card__summary'\n\t\t},\n\t\timageAlt: {\n\t\t\tattribute: 'alt',\n\t\t\tselector: '.card__image'\n\t\t},\n\t\timageUrl: {\n\t\t\tattribute: 'src',\n\t\t\tselector: '.card__image'\n\t\t}\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\n\t\tvar getImageButton = function getImageButton(openEvent) {\n\t\t\tif (attributes.imageUrl) {\n\t\t\t\treturn wp.element.createElement('img', {\n\t\t\t\t\tsrc: attributes.imageUrl,\n\t\t\t\t\tonClick: openEvent,\n\t\t\t\t\tclassName: 'image'\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'button-container' },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tButton,\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tonClick: openEvent,\n\t\t\t\t\t\t\tclassName: 'button button-large'\n\t\t\t\t\t\t},\n\t\t\t\t\t\t'Pick an image'\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t}\n\t\t};\n\n\t\treturn [wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tPanelBody,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\t\treturn setAttributes({ title1: content });\n\t\t\t\t\t},\n\t\t\t\t\tvalue: attributes.title1,\n\t\t\t\t\tplaceholder: 'Your card title',\n\t\t\t\t\tclassName: 'heading'\n\t\t\t\t})\n\t\t\t)\n\t\t), wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: '' },\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: function onSelect(media) {\n\t\t\t\t\tsetAttributes({ imageAlt: media.alt, imageUrl: media.url });\n\t\t\t\t},\n\t\t\t\ttype: 'image',\n\t\t\t\tvalue: attributes.imageID,\n\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\treturn getImageButton(open);\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(PlainText, {\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ title1: content });\n\t\t\t\t},\n\t\t\t\tvalue: attributes.title1,\n\t\t\t\tplaceholder: 'Your card title',\n\t\t\t\tclassName: 'heading'\n\t\t\t}),\n\t\t\twp.element.createElement(PlainText, {\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ title2: content });\n\t\t\t\t},\n\t\t\t\tvalue: attributes.title2,\n\t\t\t\tplaceholder: 'Your card title',\n\t\t\t\tclassName: 'heading'\n\t\t\t}),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ summary: content });\n\t\t\t\t},\n\t\t\t\tvalue: attributes.summary,\n\t\t\t\tmultiline: 'p',\n\t\t\t\tplaceholder: 'Your card text',\n\t\t\t\tformattingControls: ['bold', 'italic', 'underline'],\n\t\t\t\tisSelected: attributes.isSelected\n\t\t\t}),\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\ttemplate: [['sevenspan/button-block']],\n\t\t\t\ttemplateLock: 'all'\n\t\t\t})\n\t\t)];\n\t},\n\n\tsave: function save(_ref3) {\n\t\tvar attributes = _ref3.attributes;\n\n\n\t\tvar heroImage = function heroImage(src, alt) {\n\t\t\tif (!src) return null;\n\n\t\t\tif (alt) {\n\t\t\t\treturn wp.element.createElement('img', {\n\t\t\t\t\tclassName: 'card__image',\n\t\t\t\t\tsrc: src,\n\t\t\t\t\talt: alt\n\t\t\t\t});\n\t\t\t}\n\n\t\t\t// No alt set, so let's hide it from screen readers\n\t\t\treturn wp.element.createElement('img', {\n\t\t\t\tclassName: 'card__image',\n\t\t\t\tsrc: src,\n\t\t\t\talt: '',\n\t\t\t\t'aria-hidden': 'true'\n\t\t\t});\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: 'card' },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'card__content' },\n\t\t\t\theroImage(attributes.imageUrl, attributes.imageAlt),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\t{ className: 'card__title1' },\n\t\t\t\t\tattributes.title1\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\t{ className: 'card__title2' },\n\t\t\t\t\tattributes.title2\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'card__summary' },\n\t\t\t\t\tattributes.summary\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZXJvL2luZGV4LmpzPzUxZjgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCTE9DSzogc2V2ZW5zcGFuLWhlcm9cbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGVkaXRvci5NZWRpYVVwbG9hZCxcbiAgICBQbGFpblRleHQgPSBfd3AkZWRpdG9yLlBsYWluVGV4dCxcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgSW5uZXJCbG9ja3MgPSBfd3AkZWRpdG9yLklubmVyQmxvY2tzO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBCdXR0b24gPSBfd3AkY29tcG9uZW50cy5CdXR0b24sXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFRleHRDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dENvbnRyb2w7XG5cbmltcG9ydCBTU0J1dHRvbiBmcm9tICcuLi9idXR0b24nO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnc2V2ZW5zcGFuL2hlcm8tYmxvY2snLCB7XG5cdHRpdGxlOiBfXygnSGVybycpLFxuXHRpY29uOiAnc2hpZWxkJyxcblx0Y2F0ZWdvcnk6ICdzZXZlbnNwYW4tYmxvY2tzJyxcblxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0dGl0bGUxOiB7XG5cdFx0XHRzb3VyY2U6ICd0ZXh0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLmNhcmRfX3RpdGxlMSdcblx0XHR9LFxuXHRcdHRpdGxlMjoge1xuXHRcdFx0c291cmNlOiAndGV4dCcsXG5cdFx0XHRzZWxlY3RvcjogJy5jYXJkX190aXRsZTInXG5cdFx0fSxcblx0XHRzdW1tYXJ5OiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknLFxuXHRcdFx0c291cmNlOiAnY2hpbGRyZW4nLFxuXHRcdFx0c2VsZWN0b3I6ICcuY2FyZF9fc3VtbWFyeSdcblx0XHR9LFxuXHRcdGltYWdlQWx0OiB7XG5cdFx0XHRhdHRyaWJ1dGU6ICdhbHQnLFxuXHRcdFx0c2VsZWN0b3I6ICcuY2FyZF9faW1hZ2UnXG5cdFx0fSxcblx0XHRpbWFnZVVybDoge1xuXHRcdFx0YXR0cmlidXRlOiAnc3JjJyxcblx0XHRcdHNlbGVjdG9yOiAnLmNhcmRfX2ltYWdlJ1xuXHRcdH1cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuXG5cdFx0dmFyIGdldEltYWdlQnV0dG9uID0gZnVuY3Rpb24gZ2V0SW1hZ2VCdXR0b24ob3BlbkV2ZW50KSB7XG5cdFx0XHRpZiAoYXR0cmlidXRlcy5pbWFnZVVybCkge1xuXHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG5cdFx0XHRcdFx0c3JjOiBhdHRyaWJ1dGVzLmltYWdlVXJsLFxuXHRcdFx0XHRcdG9uQ2xpY2s6IG9wZW5FdmVudCxcblx0XHRcdFx0XHRjbGFzc05hbWU6ICdpbWFnZSdcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnYnV0dG9uLWNvbnRhaW5lcicgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRCdXR0b24sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s6IG9wZW5FdmVudCxcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiAnYnV0dG9uIGJ1dHRvbi1sYXJnZSdcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQnUGljayBhbiBpbWFnZSdcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiBbd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRQYW5lbEJvZHksXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb250ZW50KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHRpdGxlMTogY29udGVudCB9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnRpdGxlMSxcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogJ1lvdXIgY2FyZCB0aXRsZScsXG5cdFx0XHRcdFx0Y2xhc3NOYW1lOiAnaGVhZGluZydcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHQpLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiAnJyB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG5cdFx0XHRcdG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdChtZWRpYSkge1xuXHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBpbWFnZUFsdDogbWVkaWEuYWx0LCBpbWFnZVVybDogbWVkaWEudXJsIH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5pbWFnZUlELFxuXHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuXHRcdFx0XHRcdHZhciBvcGVuID0gX3JlZjIub3Blbjtcblx0XHRcdFx0XHRyZXR1cm4gZ2V0SW1hZ2VCdXR0b24ob3Blbik7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBsYWluVGV4dCwge1xuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGUxOiBjb250ZW50IH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy50aXRsZTEsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnWW91ciBjYXJkIHRpdGxlJyxcblx0XHRcdFx0Y2xhc3NOYW1lOiAnaGVhZGluZydcblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFBsYWluVGV4dCwge1xuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGUyOiBjb250ZW50IH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy50aXRsZTIsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnWW91ciBjYXJkIHRpdGxlJyxcblx0XHRcdFx0Y2xhc3NOYW1lOiAnaGVhZGluZydcblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb250ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBzdW1tYXJ5OiBjb250ZW50IH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5zdW1tYXJ5LFxuXHRcdFx0XHRtdWx0aWxpbmU6ICdwJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICdZb3VyIGNhcmQgdGV4dCcsXG5cdFx0XHRcdGZvcm1hdHRpbmdDb250cm9sczogWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSxcblx0XHRcdFx0aXNTZWxlY3RlZDogYXR0cmlidXRlcy5pc1NlbGVjdGVkXG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcywge1xuXHRcdFx0XHR0ZW1wbGF0ZTogW1snc2V2ZW5zcGFuL2J1dHRvbi1ibG9jayddXSxcblx0XHRcdFx0dGVtcGxhdGVMb2NrOiAnYWxsJ1xuXHRcdFx0fSlcblx0XHQpXTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmMy5hdHRyaWJ1dGVzO1xuXG5cblx0XHR2YXIgaGVyb0ltYWdlID0gZnVuY3Rpb24gaGVyb0ltYWdlKHNyYywgYWx0KSB7XG5cdFx0XHRpZiAoIXNyYykgcmV0dXJuIG51bGw7XG5cblx0XHRcdGlmIChhbHQpIHtcblx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywge1xuXHRcdFx0XHRcdGNsYXNzTmFtZTogJ2NhcmRfX2ltYWdlJyxcblx0XHRcdFx0XHRzcmM6IHNyYyxcblx0XHRcdFx0XHRhbHQ6IGFsdFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTm8gYWx0IHNldCwgc28gbGV0J3MgaGlkZSBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG5cdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogJ2NhcmRfX2ltYWdlJyxcblx0XHRcdFx0c3JjOiBzcmMsXG5cdFx0XHRcdGFsdDogJycsXG5cdFx0XHRcdCdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiAnY2FyZCcgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnY2FyZF9fY29udGVudCcgfSxcblx0XHRcdFx0aGVyb0ltYWdlKGF0dHJpYnV0ZXMuaW1hZ2VVcmwsIGF0dHJpYnV0ZXMuaW1hZ2VBbHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2gzJyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NhcmRfX3RpdGxlMScgfSxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLnRpdGxlMVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2gzJyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NhcmRfX3RpdGxlMicgfSxcblx0XHRcdFx0XHRhdHRyaWJ1dGVzLnRpdGxlMlxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdjYXJkX19zdW1tYXJ5JyB9LFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuc3VtbWFyeVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVyby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************!*\
  !*** ./src/hero/style.scss ***!
  \*****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZXJvL3N0eWxlLnNjc3M/ZjJmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hlcm8vc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/hero/editor.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZXJvL2VkaXRvci5zY3NzPzlkNGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oZXJvL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*****************************!*\
  !*** ./src/button/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(/*! ./save */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(/*! ./edit */ 9);\n/**\n * BLOCK: sevenspan-hero\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\n\n\n\nregisterBlockType('sevenspan/button-block', {\n\ttitle: __('Button'),\n\ticon: 'button',\n\tcategory: 'sevenspan-blocks',\n\n\tattributes: {\n\t\tlabel: {\n\t\t\tsource: 'text',\n\t\t\tselector: '.button',\n\t\t\tdefault: 'Button'\n\t\t},\n\t\turl: {\n\t\t\tselector: '.button', // From tag a\n\t\t\tsource: 'attribute', // binds an attribute of the tag\n\t\t\tattribute: 'href' // bin\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\treturn Object(__WEBPACK_IMPORTED_MODULE_3__edit__[\"a\" /* default */])(props);\n\t},\n\tsave: function save(props) {\n\t\treturn Object(__WEBPACK_IMPORTED_MODULE_2__save__[\"a\" /* default */])(props);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9idXR0b24vaW5kZXguanM/MGM5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBzZXZlbnNwYW4taGVyb1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG5cblxuaW1wb3J0IF9zYXZlIGZyb20gJy4vc2F2ZSc7XG5pbXBvcnQgX2VkaXQgZnJvbSAnLi9lZGl0JztcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3NldmVuc3Bhbi9idXR0b24tYmxvY2snLCB7XG5cdHRpdGxlOiBfXygnQnV0dG9uJyksXG5cdGljb246ICdidXR0b24nLFxuXHRjYXRlZ29yeTogJ3NldmVuc3Bhbi1ibG9ja3MnLFxuXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRsYWJlbDoge1xuXHRcdFx0c291cmNlOiAndGV4dCcsXG5cdFx0XHRzZWxlY3RvcjogJy5idXR0b24nLFxuXHRcdFx0ZGVmYXVsdDogJ0J1dHRvbidcblx0XHR9LFxuXHRcdHVybDoge1xuXHRcdFx0c2VsZWN0b3I6ICcuYnV0dG9uJywgLy8gRnJvbSB0YWcgYVxuXHRcdFx0c291cmNlOiAnYXR0cmlidXRlJywgLy8gYmluZHMgYW4gYXR0cmlidXRlIG9mIHRoZSB0YWdcblx0XHRcdGF0dHJpYnV0ZTogJ2hyZWYnIC8vIGJpblxuXHRcdH1cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0cmV0dXJuIF9lZGl0KHByb3BzKTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHJldHVybiBfc2F2ZShwcm9wcyk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2J1dHRvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*******************************!*\
  !*** ./src/button/style.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9idXR0b24vc3R5bGUuc2Nzcz8xODFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYnV0dG9uL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************!*\
  !*** ./src/button/editor.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9idXR0b24vZWRpdG9yLnNjc3M/ZjhkMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2J1dHRvbi9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!****************************!*\
  !*** ./src/button/save.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = (function (_ref) {\n  var attributes = _ref.attributes;\n\n  var el = void 0;\n\n  if (attributes.url) {\n    el = wp.element.createElement(\n      \"a\",\n      { className: \"button\", href: attributes.url },\n      attributes.label\n    );\n  } else {\n    el = wp.element.createElement(\n      \"button\",\n      { className: \"button\" },\n      attributes.label\n    );\n  }\n  return wp.element.createElement(\n    \"div\",\n    null,\n    el\n  );\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9idXR0b24vc2F2ZS5qcz8wNTMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcztcblxuICB2YXIgZWwgPSB2b2lkIDA7XG5cbiAgaWYgKGF0dHJpYnV0ZXMudXJsKSB7XG4gICAgZWwgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImFcIixcbiAgICAgIHsgY2xhc3NOYW1lOiBcImJ1dHRvblwiLCBocmVmOiBhdHRyaWJ1dGVzLnVybCB9LFxuICAgICAgYXR0cmlidXRlcy5sYWJlbFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZWwgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgeyBjbGFzc05hbWU6IFwiYnV0dG9uXCIgfSxcbiAgICAgIGF0dHJpYnV0ZXMubGFiZWxcbiAgICApO1xuICB9XG4gIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgXCJkaXZcIixcbiAgICBudWxsLFxuICAgIGVsXG4gICk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9idXR0b24vc2F2ZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */,
/* 9 */
/*!****************************!*\
  !*** ./src/button/edit.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    PlainText = _wp$editor.PlainText,\n    InspectorControls = _wp$editor.InspectorControls;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl;\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (_ref) {\n  var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes;\n\n  return [wp.element.createElement(\n    InspectorControls,\n    null,\n    wp.element.createElement(TextControl, {\n      label: \"Label\",\n      type: \"string\",\n      onChange: function onChange(content) {\n        return setAttributes({ label: content });\n      },\n      value: attributes.label\n    }),\n    wp.element.createElement(TextControl, {\n      label: \"URL\",\n      type: \"string\",\n      onChange: function onChange(content) {\n        return setAttributes({ url: content });\n      },\n      value: attributes.url\n    })\n  ), wp.element.createElement(\n    Button,\n    {\n      isDefault: true },\n    attributes.label\n  )];\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9idXR0b24vZWRpdC5qcz9mNDE3Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQsXG4gICAgUGxhaW5UZXh0ID0gX3dwJGVkaXRvci5QbGFpblRleHQsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBCdXR0b24gPSBfd3AkY29tcG9uZW50cy5CdXR0b24sXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFRleHRDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVGV4dENvbnRyb2w7XG5cblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuICByZXR1cm4gW3dwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICBudWxsLFxuICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuICAgICAgbGFiZWw6IFwiTGFiZWxcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IGxhYmVsOiBjb250ZW50IH0pO1xuICAgICAgfSxcbiAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLmxhYmVsXG4gICAgfSksXG4gICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG4gICAgICBsYWJlbDogXCJVUkxcIixcbiAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IHVybDogY29udGVudCB9KTtcbiAgICAgIH0sXG4gICAgICB2YWx1ZTogYXR0cmlidXRlcy51cmxcbiAgICB9KVxuICApLCB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgQnV0dG9uLFxuICAgIHtcbiAgICAgIGlzRGVmYXVsdDogdHJ1ZSB9LFxuICAgIGF0dHJpYnV0ZXMubGFiZWxcbiAgKV07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9idXR0b24vZWRpdC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ })
/******/ ]);