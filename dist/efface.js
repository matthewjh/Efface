(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Context = (function () {
    function Context(plugins) {
        this._plugins = plugins;
    }
    Context.prototype.start = function () {
    };
    Context.prototype.end = function () {
    };
    return Context;
})();
exports.Context = Context;
},{}],2:[function(require,module,exports){
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./context'));
},{"./context":1}],3:[function(require,module,exports){
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var facade_1 = require('./context/facade');
exports.Context = facade_1.Context;
__export(require('./plugins/facade'));
},{"./context/facade":2,"./plugins/facade":5}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./abstract'));
},{"./abstract":4}],6:[function(require,module,exports){

},{}]},{},[3,6]);
