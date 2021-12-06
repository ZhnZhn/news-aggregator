import { register, format } from 'timeago.js';

// number: the time ago / time in number;
// index: the index of array below;
// totalSec: total seconds between date to be formatted and today's date;
const locale = (
  number,
  index,
  totalSec
) => [
  ['just now', 'right now'],
  ['%s sec ago', 'in %s sec'],
  ['1 min ago', 'in 1 min'],
  ['%s min ago', 'in %s min'],
  ['1 hour ago', 'in 1 hour'],
  ['%s hours ago', 'in %s hours'],
  ['1 day ago', 'in 1 day'],
  ['%s days ago', 'in %s days'],
  ['1 week ago', 'in 1 week'],
  ['%s weeks ago', 'in %s weeks'],
  ['1 month ago', 'in 1 month'],
  ['%s months ago', 'in %s months'],
  ['1 year ago', 'in 1 year'],
  ['%s years ago', 'in %s years']
 ][index];

register('en_US', locale);

const formatTimeAgo = (dateMls, options) => {
  try {
    return format(dateMls, 'en_US', options);
  } catch(exception) {
    return;
  }
};

formatTimeAgo.crOptions = () => ({
  relativeDate: new Date()
});

export default formatTimeAgo
