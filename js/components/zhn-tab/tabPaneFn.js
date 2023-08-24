"use strict";

exports.__esModule = true;
exports.crTabPanelId = exports.crTabId = exports.crTabCn = exports.CL_TAB_TITLE = exports.CL_TABS = exports.CL_TAB = exports.CL_PANES = exports.CL_ACTIVE = void 0;
var _crStyle = require("../crStyle");
const CL_TAB = "tab",
  CL_ACTIVE = "active",
  CL_TAB_TITLE = "tab_t",
  CL_TABS = "tabs",
  CL_PANES = "panes",
  crTabCn = isSelected => (0, _crStyle.crCn)(CL_TAB, [isSelected, CL_ACTIVE]),
  crTabId = (tabPaneId, index) => "tab-" + tabPaneId + "-" + index,
  crTabPanelId = (tabPaneId, index) => "tabpanel-" + tabPaneId + "-" + index;
exports.crTabPanelId = crTabPanelId;
exports.crTabId = crTabId;
exports.crTabCn = crTabCn;
exports.CL_PANES = CL_PANES;
exports.CL_TABS = CL_TABS;
exports.CL_TAB_TITLE = CL_TAB_TITLE;
exports.CL_ACTIVE = CL_ACTIVE;
exports.CL_TAB = CL_TAB;
//# sourceMappingURL=tabPaneFn.js.map