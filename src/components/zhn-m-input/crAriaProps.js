
const LISTBOX_ARIA_LABEL = "Suggestions";

export const crAriaListboxProps = (
  id
) => ({
  id,
  role: "listbox",
  "aria-label": LISTBOX_ARIA_LABEL
})

export const crAriaOptionProps = (
  isSelected,
  tabIndex
) => ({
  role: "option",
  "aria-selected": isSelected,
  tabIndex
})
