"use strict";

exports.__esModule = true;
exports.crAriaOptionProps = exports.crAriaListboxProps = void 0;
const LISTBOX_ARIA_LABEL = "Suggestions";
const crAriaListboxProps = id => ({
  id,
  role: "listbox",
  "aria-label": LISTBOX_ARIA_LABEL
});
exports.crAriaListboxProps = crAriaListboxProps;
const crAriaOptionProps = (isSelected, tabIndex) => ({
  role: "option",
  "aria-selected": isSelected,
  tabIndex
});
exports.crAriaOptionProps = crAriaOptionProps;
//# sourceMappingURL=crAriaProps.js.map