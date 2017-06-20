import { Children, Component } from 'react'
import PropTypes from 'prop-types'

class ThemeProvider extends Component {
  static propTypes = {
    theme : PropTypes.object.isRequired,
    children : PropTypes.element.isRequired
  }
  static childContextTypes = {
    theme : PropTypes.object.isRequired
  }

  getChildContext(){
    return { theme : this.theme };
  }

  constructor(props, context){
    super(props, context)
    this.theme = props.theme
  }

  render(){
    return Children.only(this.props.children)
  }
}

export default ThemeProvider
