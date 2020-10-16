import { forwardRef } from 'react'
import ThemeContext from './ThemeContext'

const withTheme = (Wrapper) => forwardRef((props, ref) => (
  <ThemeContext.Consumer>
    { theme => <Wrapper {...props} theme={theme} ref={ref} />}
  </ThemeContext.Consumer>
))

export default withTheme
