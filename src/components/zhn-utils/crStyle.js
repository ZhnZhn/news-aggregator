export const crStyle2 = (
  style1,
  style2
) => style2
 ? {...style1, ...style2}
 : style1;

export const S_BLOCK = { display: 'block'}
export const S_NONE = { display: 'none' };

export const crShowHideStyle = (
  is
) => is ? S_BLOCK : S_NONE
