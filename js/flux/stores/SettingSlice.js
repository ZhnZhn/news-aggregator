"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SettingSlice = {
  settings: {
    newsKey: undefined
  },

  exportSettingsFn: function exportSettingsFn() {
    return {
      setNewsKey: this.setNewsKey.bind(this)
    };
  },
  setNewsKey: function setNewsKey(value) {
    this.settings.newsKey = value;
  },
  getNewsKey: function getNewsKey() {
    return this.settings.newsKey;
  }
};

exports.default = SettingSlice;
//# sourceMappingURL=D:\_Dev\_React\_News\js\flux\stores\SettingSlice.js.map