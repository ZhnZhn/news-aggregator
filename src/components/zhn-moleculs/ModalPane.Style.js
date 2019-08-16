const styleConfig = {
  themeName: undefined,
  style: undefined,

  createStyle: (CSS_RULE) => {
    return {
      ROOT: {
        ...CSS_RULE.BG
      }
    };
  }
};

export default styleConfig
