"use strict";

exports.__esModule = true;
exports["default"] = void 0;
//import { TYPES } from '../actions/LoadingProgressActions'
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
  /*
  onLoadingProgress(){
    this.triggerLoadingProgress(TYPES.LOADING);
  },
  onLoadingProgressComplete(){
    this.triggerLoadingProgress(TYPES.LOADING_COMPLETE);
  },
  onLoadingProgressFailed(){
    this.triggerLoadingProgress(TYPES.LOADING_FAILED);
  }
  */

};
var _default = WithLoadingProgress;
exports["default"] = _default;
//# sourceMappingURL=WithLoadingProgress.js.map