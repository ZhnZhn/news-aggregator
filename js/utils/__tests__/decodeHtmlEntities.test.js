"use strict";

var _decodeHtmlEntities = require("../decodeHtmlEntities");
describe("decodeHTMLEntities", () => {
  const fn = _decodeHtmlEntities.decodeHtmlEntitiesByHashMap;
  test("should return string with decoded html entities", () => {
    expect(fn("a&nbsp;b")).toBe("a b");
    expect(fn("a&gt;b")).toBe("a>b");
    expect(fn("a&lt;b")).toBe("a<b");
    expect(fn("a&quot;b")).toBe('a"b');
    expect(fn("a&apos;b")).toBe("a'b");
    expect(fn("a&amp;b")).toBe("a&b");
  });
});
//# sourceMappingURL=decodeHtmlEntities.test.js.map