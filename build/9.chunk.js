webpackJsonp([9],{

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./dashboard": 148,
		"./dashboard.js": 148,
		"./inbox": 149,
		"./inbox.js": 149
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

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	
	var React = __webpack_require__(2);
	var ReactRouter = __webpack_require__(1);
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

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	
	var React = __webpack_require__(2);
	
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

})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZXhhbXBsZXMvcGFydGlhbC1hcHAtbG9hZGluZy9hc3luYy1jb21wb25lbnRzIF5cXC5cXC8uKiQiLCIuL2V4YW1wbGVzL3BhcnRpYWwtYXBwLWxvYWRpbmcvYXN5bmMtY29tcG9uZW50cy9kYXNoYm9hcmQuanMiLCIuL2V4YW1wbGVzL3BhcnRpYWwtYXBwLWxvYWRpbmcvYXN5bmMtY29tcG9uZW50cy9pbmJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHVEQUF1RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7QUNyQkE7O0FBRUE7O0FBRUEsZ0NBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vZGFzaGJvYXJkXCI6IDE0OCxcblx0XCIuL2Rhc2hib2FyZC5qc1wiOiAxNDgsXG5cdFwiLi9pbmJveFwiOiAxNDksXG5cdFwiLi9pbmJveC5qc1wiOiAxNDlcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0Um91dGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliL21haW4nKTtcbnZhciBMaW5rID0gUmVhY3RSb3V0ZXIuTGluaztcblxudmFyIERhc2hib2FyZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogJ0Rhc2hib2FyZCcsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcbiAgICAgICAgUmVhY3QuRE9NLmgxKG51bGwsIFwiRGFzaGJvYXJkIVwiKSxcbiAgICAgICAgUmVhY3QuRE9NLnVsKG51bGwsIFxuICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCBMaW5rKCB7dG86XCJpbmJveFwifSwgXCJJbmJveFwiKSlcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5wcm9wcy5hY3RpdmVSb3V0ZVxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhc2hib2FyZDtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgSW5ib3ggPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6ICdJbmJveCcsXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuRE9NLmRpdihudWxsLCBcbiAgICAgICAgUmVhY3QuRE9NLmgxKG51bGwsIFwiSW5ib3ghXCIpXG4gICAgICApXG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSW5ib3g7XG4iXSwic291cmNlUm9vdCI6IndlYnBhY2stbW9kdWxlOi8vIn0=