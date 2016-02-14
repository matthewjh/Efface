(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var Context = (function () {
    function Context(plugins) {
        this._plugins = plugins;
    }
    Context.prototype.start = function () {
        this._plugins.forEach(function (p) {
            p.onContextStart();
        });
    };
    Context.prototype.end = function () {
        this._plugins.forEach(function (p) {
            p.onContextEnd();
        });
    };
    return Context;
})();
exports.Context = Context;
},{}],3:[function(require,module,exports){
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./abstract'));
__export(require('./context'));
__export(require('./stack'));
__export(require('./runners/facade'));
},{"./abstract":1,"./context":2,"./runners/facade":4,"./stack":6}],4:[function(require,module,exports){
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./stack'));
},{"./stack":5}],5:[function(require,module,exports){
var stack_1 = require('../stack');
var ContextStackRunner = (function () {
    function ContextStackRunner(createContext) {
        this._createContext = createContext;
        this._stack = new stack_1.ContextStack();
    }
    ContextStackRunner.prototype.start = function () {
        var context = this._createContext();
        this._stack.push(context);
        context.start();
    };
    ContextStackRunner.prototype.end = function () {
        this._stack.activeContext.end();
        this._stack.pop();
    };
    return ContextStackRunner;
})();
exports.ContextStackRunner = ContextStackRunner;
},{"../stack":6}],6:[function(require,module,exports){
var ContextStack = (function () {
    function ContextStack() {
    }
    ContextStack.prototype.constuctor = function () {
        this._contexts = [];
    };
    ContextStack.prototype.push = function (context) {
        this._contexts.push(context);
    };
    ContextStack.prototype.pop = function () {
        return this._contexts.pop();
    };
    Object.defineProperty(ContextStack.prototype, "activeContext", {
        get: function () {
            return this._contexts[this._contexts.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    return ContextStack;
})();
exports.ContextStack = ContextStack;
},{}],7:[function(require,module,exports){
var facade_1 = require('./context/facade');
var DefaultContext = (function () {
    function DefaultContext() {
        var defaultPlugins = [];
        this._context = new facade_1.Context(defaultPlugins);
    }
    DefaultContext.prototype.start = function () {
        this._context.start();
    };
    DefaultContext.prototype.end = function () {
        this._context.end();
    };
    return DefaultContext;
})();
exports.DefaultContext = DefaultContext;
},{"./context/facade":3}],8:[function(require,module,exports){
var default_context_1 = require('./default-context');
var facade_1 = require('./context/facade');
var stackRunner = new facade_1.ContextStackRunner(function () { return new default_context_1.DefaultContext(); });
function start() {
    stackRunner.start();
}
exports.start = start;
function end() {
    stackRunner.end();
}
exports.end = end;
},{"./context/facade":3,"./default-context":7}],9:[function(require,module,exports){
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var facade_1 = require('./context/facade');
exports.Context = facade_1.Context;
exports.ContextStackRunner = facade_1.ContextStackRunner;
__export(require('./plugins/facade'));
__export(require('./implicit-helpers'));
__export(require('./default-context'));
},{"./context/facade":3,"./default-context":7,"./implicit-helpers":8,"./plugins/facade":11}],10:[function(require,module,exports){

},{}],11:[function(require,module,exports){
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./abstract'));
},{"./abstract":10}],12:[function(require,module,exports){

},{}]},{},[9,12]);
