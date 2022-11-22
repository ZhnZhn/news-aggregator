"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../../uiApi");
var _useRefClose2 = _interopRequireDefault(require("./useRefClose"));
var useDialog = function useDialog(props, loadId, refInputs) {
  var type = props.type,
    source = props.source,
    itemConf = props.itemConf,
    onLoad = props.onLoad,
    onClose = props.onClose,
    _useRefClose = (0, _useRefClose2["default"])(onClose),
    _refDialog = _useRefClose[0],
    _hClose = _useRefClose[1],
    _hLoad = (0, _uiApi.useCallback)(function () {
      onLoad((0, _extends2["default"])({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: loadId
      }, (0, _uiApi.getRefValue)(refInputs)));
      _hClose();
    }, []);
  //type, source, itemConf, loadId, refInputs, onLoad, _hClose
  /*eslint-enable react-hooks/exhaustive-deps */
  return [_refDialog, _hLoad, _hClose];
};
var _default = useDialog;
exports["default"] = _default;
//# sourceMappingURL=useDialog.js.map