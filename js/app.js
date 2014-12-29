(function (router, console) {
"use strict"

/**
 * See http://avoidwork.github.io/dom-router/ for router configuration options
 *
 * The callback is an excellent place to have a state machine handle lazy initialization
 * of a view's custom JavaScript.
 */
var r = router({callback: function (arg) {
	console.log(arg.element.id, "is visible");
}});
})(router, console);
