webpackJsonp([8],[
/* 0 */,
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./dashboard": 3,
		"./dashboard.js": 3,
		"./inbox": 4,
		"./inbox.js": 4
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;


/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var React = __webpack_require__(5);
	var ReactRouter = __webpack_require__(2);
	var Link = ReactRouter.Link;

	var Dashboard = React.createClass({displayName: 'Dashboard',

	  render: function() {
	    return (
	      React.DOM.div(null, 
	        React.DOM.h1(null, "Dashboard!"),
	        React.DOM.ul(null, 
	          React.DOM.li(null, Link( {to:"inbox"}, "Inbox"))
	        ),
	        this.props.activeRoute
	      )
	    );
	  }
	});

	module.exports = Dashboard;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var React = __webpack_require__(5);

	var Inbox = React.createClass({displayName: 'Inbox',

	  render: function() {
	    return (
	      React.DOM.div(null, 
	        React.DOM.h1(null, "Inbox!")
	      )
	    );
	  }
	});

	module.exports = Inbox;


/***/ }
])