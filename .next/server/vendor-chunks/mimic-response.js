"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mimic-response";
exports.ids = ["vendor-chunks/mimic-response"];
exports.modules = {

/***/ "(ssr)/./node_modules/mimic-response/index.js":
/*!**********************************************!*\
  !*** ./node_modules/mimic-response/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\n// We define these manually to ensure they're always copied\n// even if they would move up the prototype chain\n// https://nodejs.org/api/http.html#http_class_http_incomingmessage\nconst knownProperties = [\n\t'aborted',\n\t'complete',\n\t'headers',\n\t'httpVersion',\n\t'httpVersionMinor',\n\t'httpVersionMajor',\n\t'method',\n\t'rawHeaders',\n\t'rawTrailers',\n\t'setTimeout',\n\t'socket',\n\t'statusCode',\n\t'statusMessage',\n\t'trailers',\n\t'url'\n];\n\nmodule.exports = (fromStream, toStream) => {\n\tif (toStream._readableState.autoDestroy) {\n\t\tthrow new Error('The second stream must have the `autoDestroy` option set to `false`');\n\t}\n\n\tconst fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));\n\n\tconst properties = {};\n\n\tfor (const property of fromProperties) {\n\t\t// Don't overwrite existing properties.\n\t\tif (property in toStream) {\n\t\t\tcontinue;\n\t\t}\n\n\t\tproperties[property] = {\n\t\t\tget() {\n\t\t\t\tconst value = fromStream[property];\n\t\t\t\tconst isFunction = typeof value === 'function';\n\n\t\t\t\treturn isFunction ? value.bind(fromStream) : value;\n\t\t\t},\n\t\t\tset(value) {\n\t\t\t\tfromStream[property] = value;\n\t\t\t},\n\t\t\tenumerable: true,\n\t\t\tconfigurable: false\n\t\t};\n\t}\n\n\tObject.defineProperties(toStream, properties);\n\n\tfromStream.once('aborted', () => {\n\t\ttoStream.destroy();\n\n\t\ttoStream.emit('aborted');\n\t});\n\n\tfromStream.once('close', () => {\n\t\tif (fromStream.complete) {\n\t\t\tif (toStream.readable) {\n\t\t\t\ttoStream.once('end', () => {\n\t\t\t\t\ttoStream.emit('close');\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\ttoStream.emit('close');\n\t\t\t}\n\t\t} else {\n\t\t\ttoStream.emit('close');\n\t\t}\n\t});\n\n\treturn toStream;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWltaWMtcmVzcG9uc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2hhbmdyb2FzdGVyeS8uL25vZGVfbW9kdWxlcy9taW1pYy1yZXNwb25zZS9pbmRleC5qcz9hOWZiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gV2UgZGVmaW5lIHRoZXNlIG1hbnVhbGx5IHRvIGVuc3VyZSB0aGV5J3JlIGFsd2F5cyBjb3BpZWRcbi8vIGV2ZW4gaWYgdGhleSB3b3VsZCBtb3ZlIHVwIHRoZSBwcm90b3R5cGUgY2hhaW5cbi8vIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfY2xhc3NfaHR0cF9pbmNvbWluZ21lc3NhZ2VcbmNvbnN0IGtub3duUHJvcGVydGllcyA9IFtcblx0J2Fib3J0ZWQnLFxuXHQnY29tcGxldGUnLFxuXHQnaGVhZGVycycsXG5cdCdodHRwVmVyc2lvbicsXG5cdCdodHRwVmVyc2lvbk1pbm9yJyxcblx0J2h0dHBWZXJzaW9uTWFqb3InLFxuXHQnbWV0aG9kJyxcblx0J3Jhd0hlYWRlcnMnLFxuXHQncmF3VHJhaWxlcnMnLFxuXHQnc2V0VGltZW91dCcsXG5cdCdzb2NrZXQnLFxuXHQnc3RhdHVzQ29kZScsXG5cdCdzdGF0dXNNZXNzYWdlJyxcblx0J3RyYWlsZXJzJyxcblx0J3VybCdcbl07XG5cbm1vZHVsZS5leHBvcnRzID0gKGZyb21TdHJlYW0sIHRvU3RyZWFtKSA9PiB7XG5cdGlmICh0b1N0cmVhbS5fcmVhZGFibGVTdGF0ZS5hdXRvRGVzdHJveSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIHNlY29uZCBzdHJlYW0gbXVzdCBoYXZlIHRoZSBgYXV0b0Rlc3Ryb3lgIG9wdGlvbiBzZXQgdG8gYGZhbHNlYCcpO1xuXHR9XG5cblx0Y29uc3QgZnJvbVByb3BlcnRpZXMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKGZyb21TdHJlYW0pLmNvbmNhdChrbm93blByb3BlcnRpZXMpKTtcblxuXHRjb25zdCBwcm9wZXJ0aWVzID0ge307XG5cblx0Zm9yIChjb25zdCBwcm9wZXJ0eSBvZiBmcm9tUHJvcGVydGllcykge1xuXHRcdC8vIERvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBwcm9wZXJ0aWVzLlxuXHRcdGlmIChwcm9wZXJ0eSBpbiB0b1N0cmVhbSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvcGVydGllc1twcm9wZXJ0eV0gPSB7XG5cdFx0XHRnZXQoKSB7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gZnJvbVN0cmVhbVtwcm9wZXJ0eV07XG5cdFx0XHRcdGNvbnN0IGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG5cblx0XHRcdFx0cmV0dXJuIGlzRnVuY3Rpb24gPyB2YWx1ZS5iaW5kKGZyb21TdHJlYW0pIDogdmFsdWU7XG5cdFx0XHR9LFxuXHRcdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRcdGZyb21TdHJlYW1bcHJvcGVydHldID0gdmFsdWU7XG5cdFx0XHR9LFxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXModG9TdHJlYW0sIHByb3BlcnRpZXMpO1xuXG5cdGZyb21TdHJlYW0ub25jZSgnYWJvcnRlZCcsICgpID0+IHtcblx0XHR0b1N0cmVhbS5kZXN0cm95KCk7XG5cblx0XHR0b1N0cmVhbS5lbWl0KCdhYm9ydGVkJyk7XG5cdH0pO1xuXG5cdGZyb21TdHJlYW0ub25jZSgnY2xvc2UnLCAoKSA9PiB7XG5cdFx0aWYgKGZyb21TdHJlYW0uY29tcGxldGUpIHtcblx0XHRcdGlmICh0b1N0cmVhbS5yZWFkYWJsZSkge1xuXHRcdFx0XHR0b1N0cmVhbS5vbmNlKCdlbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0dG9TdHJlYW0uZW1pdCgnY2xvc2UnKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b1N0cmVhbS5lbWl0KCdjbG9zZScpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0b1N0cmVhbS5lbWl0KCdjbG9zZScpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIHRvU3RyZWFtO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mimic-response/index.js\n");

/***/ })

};
;