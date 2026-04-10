"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
var _useRefClose = _interopRequireDefault(require("./useRefClose"));
const useDialog = (props, loadId, refInputs) => {
  const {
      refEl,
      type,
      source,
      itemConf,
      onLoad,
      onClose
    } = props,
    [_refDialog, _hClose] = (0, _useRefClose.default)(onClose, refEl)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hLoad = (0, _uiApi.useCallback)(() => {
      onLoad({
        type,
        source,
        itemConf,
        loadId,
        ...(0, _uiApi.getRefValue)(refInputs)
      });
      _hClose();
    }, []);
  //type, source, itemConf, loadId, refInputs, onLoad, _hClose
  /*eslint-enable react-hooks/exhaustive-deps */
  return [_refDialog, _hLoad, _hClose];
};
var _default = exports.default = useDialog;
//# sourceMappingURL=useDialog.js.map