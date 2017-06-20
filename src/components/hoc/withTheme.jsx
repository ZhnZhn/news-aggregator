import React , { Component, PropTypes } from 'react'

const withTheme = (Wrapper) => class extends Component {
  static contextTypes = {
    theme : PropTypes.object
  }

  constructor(props, context){
    super(props, context)
  }

  render(){
    const { theme } = this.context;
    return <Wrapper {...this.props} theme={theme} />;
  }
}

export default withTheme
