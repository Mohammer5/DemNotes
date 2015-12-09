(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _storageService = require('./services/storageService');

var app;
{
  (function () {
    var _p = [];
    _.forEach(plugins, function (value, index) {
      if (value) {
        _p.push(index);
      }
    });
    app = angular.module("DemNotes", _p);
  })();
}

app.factory('StorageService', _storageService.StorageService);

},{"./services/storageService":2}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StorageService = (function () {
  function StorageService() {
    _classCallCheck(this, StorageService);
  }

  _createClass(StorageService, [{
    key: "get",
    value: function get() {}
  }, {
    key: "set",
    value: function set() {}
  }]);

  return StorageService;
})();

exports.default = StorageService;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLlxcYXBwXFxqc3hcXGFwcC5qc3giLCIuLlxcYXBwXFxqc3hcXHNlcnZpY2VzXFxzdG9yYWdlU2VydmljZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDRUEsSUFBSSxHQUFHLENBQUM7QUFDUjs7QUFDRSxRQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDWixLQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFTLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDeEMsVUFBSSxLQUFLLEVBQUU7QUFDVCxVQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ2hCO0tBQ0YsQ0FBQyxDQUFDO0FBQ0gsT0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztDQUN0Qzs7QUFFRCxHQUFHLENBQUMsT0FBTyxDQUFDLGdCQUFnQixrQkFicEIsY0FBYyxDQWF1QixDQUFDOzs7Ozs7Ozs7Ozs7O0lDYnhDLGNBQWM7V0FBZCxjQUFjOzBCQUFkLGNBQWM7OztlQUFkLGNBQWM7OzBCQUNaLEVBQUU7OzswQkFDRixFQUFFOzs7U0FGSixjQUFjOzs7a0JBS0wsY0FBYyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQge1N0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3N0b3JhZ2VTZXJ2aWNlJztcclxuXHJcbnZhciBhcHA7XHJcbntcclxuICBsZXQgX3AgPSBbXTtcclxuICBfLmZvckVhY2gocGx1Z2lucywgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgX3AucHVzaChpbmRleCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgYXBwID0gYW5ndWxhci5tb2R1bGUoXCJEZW1Ob3Rlc1wiLCBfcCk7XHJcbn1cclxuXHJcbmFwcC5mYWN0b3J5KCdTdG9yYWdlU2VydmljZScsIFN0b3JhZ2VTZXJ2aWNlKTsiLCJjbGFzcyBTdG9yYWdlU2VydmljZSB7XHJcbiAgZ2V0KCkge31cclxuICBzZXQoKSB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlU2VydmljZTsiXX0=
