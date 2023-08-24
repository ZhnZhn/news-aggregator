import { crCn } from '../crStyle';

export const CL_TAB = "tab"
, CL_ACTIVE = "active"
, CL_TAB_TITLE = "tab_t"
, CL_TABS = "tabs"
, CL_PANES = "panes"
, crTabCn = (isSelected) => crCn(
  CL_TAB,
  [isSelected, CL_ACTIVE]
)
, crTabId = (
  tabPaneId,
  index
) => `tab-${tabPaneId}-${index}`
, crTabPanelId = (
  tabPaneId,
  index
) => `tabpanel-${tabPaneId}-${index}`
