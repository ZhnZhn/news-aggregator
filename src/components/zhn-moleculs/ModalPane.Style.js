const styleConfig = {
  themeName: void 0,
  style: void 0,

  createStyle: (CSS_RULE) => {
    return {
      ROOT: {
        ...CSS_RULE.BG
      }
    };
  }
};

export default styleConfig
