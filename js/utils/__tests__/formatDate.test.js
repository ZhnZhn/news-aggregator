"use strict";

var _formatDate = require("../formatDate");
describe("safeFormatMls", () => {
  const fn = _formatDate.safeFormatMls;
  test("should return correct string date age from mls, nowMls parameters", () => {
    expect(fn(100, 1)).toBe("just now");
    expect(fn(1001, 1)).toBe("1 sec ago");
    expect(fn(2001, 1)).toBe("2 secs ago");
    expect(fn(3001, 1)).toBe("3 secs ago");
    expect(fn(3401, 1)).toBe("3 secs ago");
    expect(fn(3501, 1)).toBe("4 secs ago");
    expect(fn(4001, 1)).toBe("4 secs ago");
    expect(fn(5001, 1)).toBe("5 secs ago");
    expect(fn(60001, 1)).toBe("1 min ago");
    expect(fn(120001, 1)).toBe("2 mins ago");
    expect(fn(60 * 60000 + 1, 1)).toBe("1 hour ago");
    expect(fn(2 * 60 * 60000, 1)).toBe("2 hours ago");
    expect(fn(24 * 60 * 60000 + 1, 1)).toBe("1 day ago");
    expect(fn(2 * 24 * 60 * 60000, 1)).toBe("2 days ago");
    expect(fn(7 * 24 * 60 * 60000 + 1, 1)).toBe("1 week ago");
    expect(fn(2 * 7 * 24 * 60 * 60000, 1)).toBe("2 weeks ago");
    expect(fn(30 * 24 * 60 * 60000 + 1, 1)).toBe("1 month ago");
    expect(fn(2 * 30 * 24 * 60 * 60000, 1)).toBe("2 months ago");
    expect(fn(365 * 24 * 60 * 60000 + 1, 1)).toBe("1 year ago");
    expect(fn(2 * 365 * 24 * 60 * 60000, 1)).toBe("2 years ago");
  });
});
describe("safeFormatSec", () => {
  const fn = _formatDate.safeFormatSec;
  test("should return correct string date age from sec, nowMls parameters", () => {
    expect(fn(2, 1000)).toBe("1 sec ago");
    expect(fn(2, 1)).toBe("2 secs ago");
    expect(fn(61, 1000)).toBe("1 min ago");
    expect(fn(120, 1)).toBe("2 mins ago");
    expect(fn(2 * 60 * 60, 60 * 60 * 1000)).toBe("1 hour ago");
    expect(fn(2 * 60 * 60, 1)).toBe("2 hours ago");
    expect(fn(2 * 24 * 60 * 60, 24 * 60 * 60 * 1000)).toBe("1 day ago");
    expect(fn(2 * 24 * 60 * 60, 1)).toBe("2 days ago");
    expect(fn(8 * 24 * 60 * 60, 24 * 60 * 60 * 1000)).toBe("1 week ago");
    expect(fn(2 * 7 * 24 * 60 * 60, 1)).toBe("2 weeks ago");
    expect(fn(2 * 30 * 24 * 60 * 60, 30 * 24 * 60 * 60 * 1000)).toBe("1 month ago");
    expect(fn(2 * 30 * 24 * 60 * 60, 1)).toBe("2 months ago");
    expect(fn(2 * 365 * 24 * 60 * 60, 365 * 24 * 60 * 60 * 1000)).toBe("1 year ago");
    expect(fn(2 * 365 * 24 * 60 * 60, 1)).toBe("2 years ago");
  });
});
//# sourceMappingURL=formatDate.test.js.map