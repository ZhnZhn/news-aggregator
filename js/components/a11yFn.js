"use strict";

exports.__esModule = true;
exports.crTooltip = void 0;
var _joinBy = require("../utils/joinBy");
var _has = require("./has");
const _crAriaLabel = (ariaLabel, hotKey) => hotKey ? (0, _joinBy.joinByBlank)(ariaLabel, `[${hotKey.toLowerCase()}]`) : ariaLabel;
const crTooltip = (ariaLabel, dataPos, hotKey) => _has.HAS_TOUCH_EVENTS ? [] : [_crAriaLabel(ariaLabel, hotKey), dataPos];
exports.crTooltip = crTooltip;
//# sourceMappingURL=a11yFn.js.map