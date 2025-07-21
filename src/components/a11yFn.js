
export const crPresentationRole = (
  isShow
) => ({
  role: "presentation",
  hidden: !isShow,
  'aria-hidden': isShow ? void 0 : "true"
})
