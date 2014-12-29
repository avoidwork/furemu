(function (global) {
"use strict"

/**
 * See http://avoidwork.github.io/dom-router/ for router configuration options
 *
 * The callback is an excellent place to have a state machine handle lazy initilization
 * of a view's custom JavaScript.
 */
var r = global.router({callback: function (arg) {
	console.log(arg.element.id, "is visible");
}});
})(this);
