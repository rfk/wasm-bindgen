(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/console_log.js":
/*!****************************!*\
  !*** ./pkg/console_log.js ***!
  \****************************/
/*! exports provided: run, __wbg_log_4a4a987f783d8fd3, __wbg_log_147e873043e41c14, __wbg_log_4584557def6005e9, __widl_f_log_1_, __widl_f_log_2_, __wbindgen_string_new, __wbindgen_number_new, __wbindgen_throw, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_4a4a987f783d8fd3\", function() { return __wbg_log_4a4a987f783d8fd3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_147e873043e41c14\", function() { return __wbg_log_147e873043e41c14; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_4584557def6005e9\", function() { return __wbg_log_4584557def6005e9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_log_1_\", function() { return __widl_f_log_1_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_log_2_\", function() { return __widl_f_log_2_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony import */ var _console_log_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console_log_bg */ \"./pkg/console_log_bg.wasm\");\n\n\n/**\n* @returns {void}\n*/\nfunction run() {\n    return _console_log_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _console_log_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_console_log_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_log_4a4a987f783d8fd3(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    try {\n        console.log(varg0);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_log_147e873043e41c14(arg0) {\n    try {\n        console.log(arg0 >>> 0);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_log_4584557def6005e9(arg0, arg1, arg2, arg3) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    let varg2 = getStringFromWasm(arg2, arg3);\n    try {\n        console.log(varg0, varg2);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction __widl_f_log_1_(arg0) {\n    try {\n        console.log(getObject(arg0));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_log_2_(arg0, arg1) {\n    try {\n        console.log(getObject(arg0), getObject(arg1));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction __wbindgen_string_new(p, l) { return addHeapObject(getStringFromWasm(p, l)); }\n\nfunction __wbindgen_number_new(i) { return addHeapObject(i); }\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\n_console_log_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"]))\n\n//# sourceURL=webpack:///./pkg/console_log.js?");

/***/ }),

/***/ "./pkg/console_log_bg.wasm":
/*!*********************************!*\
  !*** ./pkg/console_log_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./console_log */ \"./pkg/console_log.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/console_log_bg.wasm?");

/***/ })

}]);