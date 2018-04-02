import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ComponentHrzContainer extends Component {
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    addAction: PropTypes.string
  }

  constructor(props){
    super()
    this.state = {
      containers : []
    }
  }

  componentDidMount(){
    const { store } = this.props;
    this.unsubscribe = store.listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  _onStore = (actionType, option) => {
     if (actionType === this.props.addAction && option.Comp){
       this.setState(prevState => {
         prevState.containers.unshift(option.Comp)
         return prevState;
       })
     }
  }

  _renderContainers(containers){
    return containers.map(container => {
      return React.cloneElement(container);
    });
  }

  render(){
    const { containers } = this.state;
    return (
       <div className="hrz-container">
          {this._renderContainers(containers)}
       </div>
    )
  }
}

export default ComponentHrzContainer
