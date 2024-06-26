export const S_DIALOG_CAPTION = {
  margin: -1,
  fontSize: '1.125rem'
}
export const S_BROWSER_CAPTION = {
  ...S_DIALOG_CAPTION,
  textAlign: 'center'
}

export const S_BT_RAISED = {
  marginRight: 2,
  marginLeft: 2
}

export const S_INPUT_DATE = {
  display: 'inline-block',
  width: 110
}
export const S_POWERED_BY = {
  margin: '16px 0 8px 16px'
};

const INPUT_WIDTH = 'calc(190px + 4rem)';
export const S_INPUT_ROOT = {
  display: 'block',
  width: INPUT_WIDTH,
}

export const crInputSelectStyle = (
  width=INPUT_WIDTH
) => ({
  width
})
