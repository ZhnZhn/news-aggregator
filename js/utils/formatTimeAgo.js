"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _timeago = require("timeago.js");

// number: the time ago / time in number;
// index: the index of array below;
// totalSec: total seconds between date to be formatted and today's date;
var locale = function locale(number, index, totalSec) {
  return [['just now', 'right now'], ['%s sec ago', 'in %s sec'], ['1 min ago', 'in 1 min'], ['%s min ago', 'in %s min'], ['1 hour ago', 'in 1 hour'], ['%s hours ago', 'in %s hours'], ['1 day ago', 'in 1 day'], ['%s days ago', 'in %s days'], ['1 week ago', 'in 1 week'], ['%s weeks ago', 'in %s weeks'], ['1 month ago', 'in 1 month'], ['%s months ago', 'in %s months'], ['1 year ago', 'in 1 year'], ['%s years ago', 'in %s years']][index];
};

(0, _timeago.register)('en_US', locale);

var formatTimeAgo = function formatTimeAgo(dateMls, options) {
  try {
    return (0, _timeago.format)(dateMls, 'en_US', options);
  } catch (exception) {
    return;
  }
};

formatTimeAgo.crOptions = function () {
  return {
    relativeDate: new Date()
  };
};

var _default = formatTimeAgo;
exports["default"] = _default;
//# sourceMappingURL=formatTimeAgo.js.map