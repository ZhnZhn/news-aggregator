"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var SettingSlice = {
  settings: {},

  exportSettingsFn: function exportSettingsFn() {
    return {
      setNewsKey: this.setNewsKey.bind(this),
      setWebhoseKey: this.setWebhoseKey.bind(this)
    };
  },
  setNewsKey: function setNewsKey(value) {
    this.settings.newsKey = value;
  },
  getNewsKey: function getNewsKey() {
    return this.settings.newsKey;
  },
  setWebhoseKey: function setWebhoseKey(value) {
    this.settings.webhoseKey = value;
  },
  getWebhoseKey: function getWebhoseKey() {
    return this.settings.webhoseKey;
  }
};

exports.default = SettingSlice;
//# sourceMappingURL=SettingSlice.js.map