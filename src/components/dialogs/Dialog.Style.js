import {
  CL_BT_RAISED_DIV
} from '../styles/CL';

const INPUT_WIDTH = 250;

const S_BROWSER_CAPTION = {
  color: '#9e9e9e',
  backgroundColor: '#3f5178',
  paddingTop: 5,
  marginBottom: 0,
  textAlign: 'center',
  fontSize: '1.125rem'
}
, S_BT_RAISED = {
  marginRight: 2,
  marginLeft: 2
}
, S_INPUT_ROOT = {
  width: INPUT_WIDTH,
  display: 'block'
}
, S_INPUT_DATE = {
  display: 'inline-block',
  width: 110
}
, S_POWERED_BY = {
  marginLeft: 16,
  marginBottom: 8
};

const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle : (CSS_RULE, themeName) => {
    return {
      R_DIALOG: {
        ...CSS_RULE.R_DIALOG
      },
      BROWSER_CAPTION: {
        ...S_BROWSER_CAPTION,
        ...CSS_RULE.BG_HEADER
      },
      INPUT_ROOT: {
        ...S_INPUT_ROOT
      },
      INPUT_DATE: {
        ...S_INPUT_DATE
      },
      POWERED_BY: {
        ...S_POWERED_BY
      },
      BT: {
        CL_RAISED_DIV: CL_BT_RAISED_DIV,
        RAISED: {
          ...S_BT_RAISED,
          ...CSS_RULE.BG_HEADER
        }
      },
      SELECT: {
        ROOT: {
          width: INPUT_WIDTH
        }
      }
    };
  }
}

export default styleConfig
