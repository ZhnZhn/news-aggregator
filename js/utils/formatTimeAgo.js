"use strict";

exports.__esModule = true;
exports.formatTimeAgo = exports.crTimeAgoOptins = void 0;

var _timeago = require("timeago.js");

// number: the time ago / time in number;
// index: the index of array below;
// totalSec: total seconds between date to be formatted and today's date;
var locale = function locale(number, index, totalSec) {
  return [['just now', 'right now'], ['%s sec ago', 'in %s sec'], ['1 min ago', 'in 1 min'], ['%s min ago', 'in %s min'], ['1 hour ago', 'in 1 hour'], ['%s hours ago', 'in %s hours'], ['1 day ago', 'in 1 day'], ['%s days ago', 'in %s days'], ['1 week ago', 'in 1 week'], ['%s weeks ago', 'in %s weeks'], ['1 month ago', 'in 1 month'], ['%s months ago', 'in %s months'], ['1 year ago', 'in 1 year'], ['%s years ago', 'in %s years']][index];
};

(0, _timeago.register)('en_US', locale);

var crTimeAgoOptins = function crTimeAgoOptins() {
  return {
    relativeDate: new Date()
  };
};

exports.crTimeAgoOptins = crTimeAgoOptins;

var formatTimeAgo = function formatTimeAgo(date, options) {
  return (0, _timeago.format)(date, 'en_US', options);
};

exports.formatTimeAgo = formatTimeAgo;
//# sourceMappingURL=formatTimeAgo.js.map