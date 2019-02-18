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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero__ = __webpack_require__(/*! ./hero */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(/*! ./button */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_header__ = __webpack_require__(/*! ./section-header */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feature__ = __webpack_require__(/*! ./feature */ 15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feature_feature_item__ = __webpack_require__(/*! ./feature/feature-item */ 20);\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vaGVybyc7XG5pbXBvcnQgJy4vYnV0dG9uJztcbmltcG9ydCAnLi9zZWN0aW9uLWhlYWRlcic7XG5pbXBvcnQgJy4vZmVhdHVyZSc7XG5pbXBvcnQgJy4vZmVhdHVyZS9mZWF0dXJlLWl0ZW0nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

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

/***/ }),
/* 10 */
/*!*************************************!*\
  !*** ./src/section-header/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(/*! ./save */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(/*! ./edit */ 14);\n/**\n * BLOCK: sevenspan-hero\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\n\n\n\nregisterBlockType('sevenspan/section-header', {\n\ttitle: 'Section Header',\n\ticon: 'header',\n\tcategory: 'sevenspan-blocks',\n\n\tattributes: {\n\t\ttitle: {\n\t\t\tsource: 'text',\n\t\t\tselector: '.title'\n\t\t},\n\t\tdesc: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.desc'\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\treturn Object(__WEBPACK_IMPORTED_MODULE_3__edit__[\"a\" /* default */])(props);\n\t},\n\tsave: function save(props) {\n\t\treturn Object(__WEBPACK_IMPORTED_MODULE_2__save__[\"a\" /* default */])(props);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbi1oZWFkZXIvaW5kZXguanM/ZTdlOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBzZXZlbnNwYW4taGVyb1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxuXG5pbXBvcnQgX3NhdmUgZnJvbSAnLi9zYXZlJztcbmltcG9ydCBfZWRpdCBmcm9tICcuL2VkaXQnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnc2V2ZW5zcGFuL3NlY3Rpb24taGVhZGVyJywge1xuXHR0aXRsZTogJ1NlY3Rpb24gSGVhZGVyJyxcblx0aWNvbjogJ2hlYWRlcicsXG5cdGNhdGVnb3J5OiAnc2V2ZW5zcGFuLWJsb2NrcycsXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHRzb3VyY2U6ICd0ZXh0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLnRpdGxlJ1xuXHRcdH0sXG5cdFx0ZGVzYzoge1xuXHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdHNvdXJjZTogJ2NoaWxkcmVuJyxcblx0XHRcdHNlbGVjdG9yOiAnLmRlc2MnXG5cdFx0fVxuXHR9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHRyZXR1cm4gX2VkaXQocHJvcHMpO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIF9zYXZlKHByb3BzKTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VjdGlvbi1oZWFkZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!***************************************!*\
  !*** ./src/section-header/style.scss ***!
  \***************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbi1oZWFkZXIvc3R5bGUuc2Nzcz83NzEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VjdGlvbi1oZWFkZXIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!****************************************!*\
  !*** ./src/section-header/editor.scss ***!
  \****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbi1oZWFkZXIvZWRpdG9yLnNjc3M/MGJlYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NlY3Rpb24taGVhZGVyL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!************************************!*\
  !*** ./src/section-header/save.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = (function (_ref) {\n  var attributes = _ref.attributes;\n\n  return wp.element.createElement(\n    \"div\",\n    null,\n    wp.element.createElement(\n      \"h3\",\n      { className: \"title\" },\n      attributes.title\n    ),\n    wp.element.createElement(\n      \"div\",\n      { className: \"desc\" },\n      attributes.desc\n    )\n  );\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbi1oZWFkZXIvc2F2ZS5qcz85OTU4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcztcblxuICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgbnVsbCxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImgzXCIsXG4gICAgICB7IGNsYXNzTmFtZTogXCJ0aXRsZVwiIH0sXG4gICAgICBhdHRyaWJ1dGVzLnRpdGxlXG4gICAgKSxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzc05hbWU6IFwiZGVzY1wiIH0sXG4gICAgICBhdHRyaWJ1dGVzLmRlc2NcbiAgICApXG4gICk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZWN0aW9uLWhlYWRlci9zYXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!************************************!*\
  !*** ./src/section-header/edit.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    PlainText = _wp$editor.PlainText;\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (_ref) {\n  var attributes = _ref.attributes,\n      setAttributes = _ref.setAttributes;\n\n  return [wp.element.createElement(\n    \"div\",\n    null,\n    wp.element.createElement(PlainText, {\n      onChange: function onChange(content) {\n        return setAttributes({ title: content });\n      },\n      value: attributes.title,\n      placeholder: \"Title\",\n      className: \"heading\"\n    }),\n    wp.element.createElement(RichText, {\n      onChange: function onChange(content) {\n        return setAttributes({ desc: content });\n      },\n      value: attributes.desc,\n      multiline: \"p\",\n      placeholder: \"Long description\",\n      formattingControls: ['bold', 'italic', 'underline']\n    })\n  )];\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbi1oZWFkZXIvZWRpdC5qcz9mYTBiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBQbGFpblRleHQgPSBfd3AkZWRpdG9yLlBsYWluVGV4dDtcblxuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuXG4gIHJldHVybiBbd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgbnVsbCxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGxhaW5UZXh0LCB7XG4gICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pO1xuICAgICAgfSxcbiAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLnRpdGxlLFxuICAgICAgcGxhY2Vob2xkZXI6IFwiVGl0bGVcIixcbiAgICAgIGNsYXNzTmFtZTogXCJoZWFkaW5nXCJcbiAgICB9KSxcbiAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcbiAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgZGVzYzogY29udGVudCB9KTtcbiAgICAgIH0sXG4gICAgICB2YWx1ZTogYXR0cmlidXRlcy5kZXNjLFxuICAgICAgbXVsdGlsaW5lOiBcInBcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcIkxvbmcgZGVzY3JpcHRpb25cIixcbiAgICAgIGZvcm1hdHRpbmdDb250cm9sczogWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXVxuICAgIH0pXG4gICldO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VjdGlvbi1oZWFkZXIvZWRpdC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!******************************!*\
  !*** ./src/feature/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(/*! ./save */ 18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(/*! ./edit */ 19);\n/**\n * BLOCK: sevenspan-hero\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\n\n\n\nregisterBlockType('sevenspan/feature', {\n\ttitle: 'Feature',\n\ticon: 'button',\n\tcategory: 'sevenspan-blocks',\n\n\tedit: function edit(props) {\n\t\treturn Object(__WEBPACK_IMPORTED_MODULE_3__edit__[\"a\" /* default */])(props);\n\t},\n\tsave: function save(props) {\n\t\treturn Object(__WEBPACK_IMPORTED_MODULE_2__save__[\"a\" /* default */])(props);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZS9pbmRleC5qcz85M2NlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHNldmVuc3Bhbi1oZXJvXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xuXG5cbmltcG9ydCBfc2F2ZSBmcm9tICcuL3NhdmUnO1xuaW1wb3J0IF9lZGl0IGZyb20gJy4vZWRpdCc7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdzZXZlbnNwYW4vZmVhdHVyZScsIHtcblx0dGl0bGU6ICdGZWF0dXJlJyxcblx0aWNvbjogJ2J1dHRvbicsXG5cdGNhdGVnb3J5OiAnc2V2ZW5zcGFuLWJsb2NrcycsXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHJldHVybiBfZWRpdChwcm9wcyk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gX3NhdmUocHJvcHMpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mZWF0dXJlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!********************************!*\
  !*** ./src/feature/style.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZS9zdHlsZS5zY3NzPzAwNWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mZWF0dXJlL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*********************************!*\
  !*** ./src/feature/editor.scss ***!
  \*********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZS9lZGl0b3Iuc2Nzcz8xNzZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmVhdHVyZS9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*****************************!*\
  !*** ./src/feature/save.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var InnerBlocks = wp.editor.InnerBlocks;\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function () {\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\tnull,\n\t\twp.element.createElement(InnerBlocks.Content, null)\n\t);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZS9zYXZlLmpzP2U5ZDUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIElubmVyQmxvY2tzID0gd3AuZWRpdG9yLklubmVyQmxvY2tzO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFwiZGl2XCIsXG5cdFx0bnVsbCxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcblx0KTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZlYXR1cmUvc2F2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*****************************!*\
  !*** ./src/feature/edit.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    PlainText = _wp$editor.PlainText,\n    InnerBlocks = _wp$editor.InnerBlocks;\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function () {\n\treturn [wp.element.createElement(\n\t\t'div',\n\t\tnull,\n\t\twp.element.createElement(InnerBlocks, {\n\t\t\ttemplate: [['sevenspan/section-header'], ['sevenspan/feature-item']],\n\t\t\tallowedBlocks: ['sevenspan/feature-item']\n\t\t})\n\t)];\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZS9lZGl0LmpzP2MxMWMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHQgPSBfd3AkZWRpdG9yLlJpY2hUZXh0LFxuICAgIFBsYWluVGV4dCA9IF93cCRlZGl0b3IuUGxhaW5UZXh0LFxuICAgIElubmVyQmxvY2tzID0gX3dwJGVkaXRvci5Jbm5lckJsb2NrcztcblxuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gW3dwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHQnZGl2Jyxcblx0XHRudWxsLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcywge1xuXHRcdFx0dGVtcGxhdGU6IFtbJ3NldmVuc3Bhbi9zZWN0aW9uLWhlYWRlciddLCBbJ3NldmVuc3Bhbi9mZWF0dXJlLWl0ZW0nXV0sXG5cdFx0XHRhbGxvd2VkQmxvY2tzOiBbJ3NldmVuc3Bhbi9mZWF0dXJlLWl0ZW0nXVxuXHRcdH0pXG5cdCldO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmVhdHVyZS9lZGl0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*******************************************!*\
  !*** ./src/feature/feature-item/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 22);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__save__ = __webpack_require__(/*! ./save */ 23);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit__ = __webpack_require__(/*! ./edit */ 24);\n/**\n * BLOCK: sevenspan-hero\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\n\n\n\n\n\nregisterBlockType('sevenspan/feature-item', {\n\ttitle: 'Feature Item',\n\ticon: 'button',\n\tparent: ['sevenspan/feature'],\n\tcategory: 'sevenspan-blocks',\n\n\tattributes: {\n\t\ttitle: {\n\t\t\tsource: 'text',\n\t\t\tselector: '.title'\n\t\t},\n\t\tdesc: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.desc'\n\t\t},\n\t\timageAlt: {\n\t\t\tattribute: 'alt',\n\t\t\tselector: '.feature__image'\n\t\t},\n\t\timageUrl: {\n\t\t\tattribute: 'src',\n\t\t\tselector: '.feature__image'\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\treturn Object(__WEBPACK_IMPORTED_MODULE_3__edit__[\"a\" /* default */])(props);\n\t},\n\tsave: function save(props) {\n\t\treturn Object(__WEBPACK_IMPORTED_MODULE_2__save__[\"a\" /* default */])(props);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZS9mZWF0dXJlLWl0ZW0vaW5kZXguanM/NmRkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBzZXZlbnNwYW4taGVyb1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcblxuXG5pbXBvcnQgX3NhdmUgZnJvbSAnLi9zYXZlJztcbmltcG9ydCBfZWRpdCBmcm9tICcuL2VkaXQnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnc2V2ZW5zcGFuL2ZlYXR1cmUtaXRlbScsIHtcblx0dGl0bGU6ICdGZWF0dXJlIEl0ZW0nLFxuXHRpY29uOiAnYnV0dG9uJyxcblx0cGFyZW50OiBbJ3NldmVuc3Bhbi9mZWF0dXJlJ10sXG5cdGNhdGVnb3J5OiAnc2V2ZW5zcGFuLWJsb2NrcycsXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHRzb3VyY2U6ICd0ZXh0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLnRpdGxlJ1xuXHRcdH0sXG5cdFx0ZGVzYzoge1xuXHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdHNvdXJjZTogJ2NoaWxkcmVuJyxcblx0XHRcdHNlbGVjdG9yOiAnLmRlc2MnXG5cdFx0fSxcblx0XHRpbWFnZUFsdDoge1xuXHRcdFx0YXR0cmlidXRlOiAnYWx0Jyxcblx0XHRcdHNlbGVjdG9yOiAnLmZlYXR1cmVfX2ltYWdlJ1xuXHRcdH0sXG5cdFx0aW1hZ2VVcmw6IHtcblx0XHRcdGF0dHJpYnV0ZTogJ3NyYycsXG5cdFx0XHRzZWxlY3RvcjogJy5mZWF0dXJlX19pbWFnZSdcblx0XHR9XG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHJldHVybiBfZWRpdChwcm9wcyk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gX3NhdmUocHJvcHMpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mZWF0dXJlL2ZlYXR1cmUtaXRlbS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*********************************************!*\
  !*** ./src/feature/feature-item/style.scss ***!
  \*********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZS9mZWF0dXJlLWl0ZW0vc3R5bGUuc2Nzcz9mNGFlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmVhdHVyZS9mZWF0dXJlLWl0ZW0vc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**********************************************!*\
  !*** ./src/feature/feature-item/editor.scss ***!
  \**********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZS9mZWF0dXJlLWl0ZW0vZWRpdG9yLnNjc3M/ZTYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ZlYXR1cmUvZmVhdHVyZS1pdGVtL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!******************************************!*\
  !*** ./src/feature/feature-item/save.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = (function (_ref) {\n\tvar attributes = _ref.attributes;\n\n\tvar media = function media(src, alt) {\n\t\tif (!src) return null;\n\n\t\tif (alt) {\n\t\t\treturn wp.element.createElement(\"img\", { className: \"feature__image\", src: src, alt: alt });\n\t\t}\n\n\t\t// No alt set, so let's hide it from screen readers\n\t\treturn wp.element.createElement(\"img\", {\n\t\t\tclassName: \"feature__image\",\n\t\t\tsrc: src,\n\t\t\talt: \"\",\n\t\t\t\"aria-hidden\": \"true\"\n\t\t});\n\t};\n\n\treturn wp.element.createElement(\n\t\t\"div\",\n\t\tnull,\n\t\tmedia(attributes.imageUrl, attributes.imageAlt),\n\t\twp.element.createElement(\n\t\t\t\"h3\",\n\t\t\t{ className: \"title\" },\n\t\t\tattributes.title\n\t\t),\n\t\twp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: \"desc\" },\n\t\t\tattributes.desc\n\t\t)\n\t);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZS9mZWF0dXJlLWl0ZW0vc2F2ZS5qcz80ODUxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoX3JlZikge1xuXHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcztcblxuXHR2YXIgbWVkaWEgPSBmdW5jdGlvbiBtZWRpYShzcmMsIGFsdCkge1xuXHRcdGlmICghc3JjKSByZXR1cm4gbnVsbDtcblxuXHRcdGlmIChhbHQpIHtcblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzc05hbWU6IFwiZmVhdHVyZV9faW1hZ2VcIiwgc3JjOiBzcmMsIGFsdDogYWx0IH0pO1xuXHRcdH1cblxuXHRcdC8vIE5vIGFsdCBzZXQsIHNvIGxldCdzIGhpZGUgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuXHRcdFx0Y2xhc3NOYW1lOiBcImZlYXR1cmVfX2ltYWdlXCIsXG5cdFx0XHRzcmM6IHNyYyxcblx0XHRcdGFsdDogXCJcIixcblx0XHRcdFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFwiZGl2XCIsXG5cdFx0bnVsbCxcblx0XHRtZWRpYShhdHRyaWJ1dGVzLmltYWdlVXJsLCBhdHRyaWJ1dGVzLmltYWdlQWx0KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImgzXCIsXG5cdFx0XHR7IGNsYXNzTmFtZTogXCJ0aXRsZVwiIH0sXG5cdFx0XHRhdHRyaWJ1dGVzLnRpdGxlXG5cdFx0KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcImRpdlwiLFxuXHRcdFx0eyBjbGFzc05hbWU6IFwiZGVzY1wiIH0sXG5cdFx0XHRhdHRyaWJ1dGVzLmRlc2Ncblx0XHQpXG5cdCk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mZWF0dXJlL2ZlYXR1cmUtaXRlbS9zYXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!******************************************!*\
  !*** ./src/feature/feature-item/edit.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    PlainText = _wp$editor.PlainText,\n    MediaUpload = _wp$editor.MediaUpload;\nvar Button = wp.components.Button;\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (function (_ref) {\n\tvar attributes = _ref.attributes,\n\t    setAttributes = _ref.setAttributes;\n\n\tvar getImageButton = function getImageButton(openEvent) {\n\t\tif (attributes.imageUrl) {\n\t\t\treturn wp.element.createElement(\"img\", {\n\t\t\t\tsrc: attributes.imageUrl,\n\t\t\t\tonClick: openEvent,\n\t\t\t\tclassName: \"image\"\n\t\t\t});\n\t\t} else {\n\t\t\treturn wp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"button-container\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tButton,\n\t\t\t\t\t{ onClick: openEvent, className: \"button button-large\" },\n\t\t\t\t\t\"Pick an image\"\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t};\n\n\treturn [wp.element.createElement(\n\t\t\"div\",\n\t\tnull,\n\t\twp.element.createElement(MediaUpload, {\n\t\t\tonSelect: function onSelect(media) {\n\t\t\t\tsetAttributes({ imageAlt: media.alt, imageUrl: media.url });\n\t\t\t},\n\t\t\ttype: \"image\",\n\t\t\tvalue: attributes.imageID,\n\t\t\trender: function render(_ref2) {\n\t\t\t\tvar open = _ref2.open;\n\t\t\t\treturn getImageButton(open);\n\t\t\t}\n\t\t}),\n\t\twp.element.createElement(PlainText, {\n\t\t\tonChange: function onChange(content) {\n\t\t\t\treturn setAttributes({ title: content });\n\t\t\t},\n\t\t\tvalue: attributes.title,\n\t\t\tplaceholder: \"Title\",\n\t\t\tclassName: \"heading\"\n\t\t}),\n\t\twp.element.createElement(RichText, {\n\t\t\tonChange: function onChange(content) {\n\t\t\t\treturn setAttributes({ desc: content });\n\t\t\t},\n\t\t\tvalue: attributes.desc,\n\t\t\tmultiline: \"p\",\n\t\t\tplaceholder: \"Long description\",\n\t\t\tformattingControls: ['bold', 'italic', 'underline']\n\t\t})\n\t)];\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZS9mZWF0dXJlLWl0ZW0vZWRpdC5qcz81NDE0Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBQbGFpblRleHQgPSBfd3AkZWRpdG9yLlBsYWluVGV4dCxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQ7XG52YXIgQnV0dG9uID0gd3AuY29tcG9uZW50cy5CdXR0b247XG5cblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChfcmVmKSB7XG5cdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuXHR2YXIgZ2V0SW1hZ2VCdXR0b24gPSBmdW5jdGlvbiBnZXRJbWFnZUJ1dHRvbihvcGVuRXZlbnQpIHtcblx0XHRpZiAoYXR0cmlidXRlcy5pbWFnZVVybCkge1xuXHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG5cdFx0XHRcdHNyYzogYXR0cmlidXRlcy5pbWFnZVVybCxcblx0XHRcdFx0b25DbGljazogb3BlbkV2ZW50LFxuXHRcdFx0XHRjbGFzc05hbWU6IFwiaW1hZ2VcIlxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBcImJ1dHRvbi1jb250YWluZXJcIiB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdHsgb25DbGljazogb3BlbkV2ZW50LCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1sYXJnZVwiIH0sXG5cdFx0XHRcdFx0XCJQaWNrIGFuIGltYWdlXCJcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIFt3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XCJkaXZcIixcblx0XHRudWxsLFxuXHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChNZWRpYVVwbG9hZCwge1xuXHRcdFx0b25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KG1lZGlhKSB7XG5cdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBpbWFnZUFsdDogbWVkaWEuYWx0LCBpbWFnZVVybDogbWVkaWEudXJsIH0pO1xuXHRcdFx0fSxcblx0XHRcdHR5cGU6IFwiaW1hZ2VcIixcblx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmltYWdlSUQsXG5cdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuXHRcdFx0XHR2YXIgb3BlbiA9IF9yZWYyLm9wZW47XG5cdFx0XHRcdHJldHVybiBnZXRJbWFnZUJ1dHRvbihvcGVuKTtcblx0XHRcdH1cblx0XHR9KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGxhaW5UZXh0LCB7XG5cdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuXHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pO1xuXHRcdFx0fSxcblx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLnRpdGxlLFxuXHRcdFx0cGxhY2Vob2xkZXI6IFwiVGl0bGVcIixcblx0XHRcdGNsYXNzTmFtZTogXCJoZWFkaW5nXCJcblx0XHR9KSxcblx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb250ZW50KSB7XG5cdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgZGVzYzogY29udGVudCB9KTtcblx0XHRcdH0sXG5cdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5kZXNjLFxuXHRcdFx0bXVsdGlsaW5lOiBcInBcIixcblx0XHRcdHBsYWNlaG9sZGVyOiBcIkxvbmcgZGVzY3JpcHRpb25cIixcblx0XHRcdGZvcm1hdHRpbmdDb250cm9sczogWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXVxuXHRcdH0pXG5cdCldO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZmVhdHVyZS9mZWF0dXJlLWl0ZW0vZWRpdC5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ })
/******/ ]);