"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var CHANNEL = 'WITH_LOADING_PROGRESS';
var WithLoadingProgress = {
  listenLoadingProgress: function listenLoadingProgress(fnHandler) {
    var _this = this;

    this.emitter.addListener(CHANNEL, fnHandler);
    return function () {
      _this.emitter.removeListener(CHANNEL, fnHandler);
    };
  },
  triggerLoadingProgress: function triggerLoadingProgress(actionType) {
    this.emitter.emit(CHANNEL, actionType);
  }
};
var _default = WithLoadingProgress;
exports["default"] = _default;
//# sourceMappingURL=WithLoadingProgress.js.map