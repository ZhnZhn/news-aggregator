import React from 'react'

const withProps = confProps => BaseComponent => props =>
  <BaseComponent {...confProps} {...props}  />

export default withProps
