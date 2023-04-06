export const crStyle2 = (
  style1,
  style2
) => style2
 ? {...style1, ...style2}
 : style1;
