import React, { Component } from 'react'

import ProgressLine from '../zhn-atoms/ProgressLine'

const COLOR = {
  LOADING : '#2F7ED8',
  FAILED : 'rgb(237, 88, 19)'
};

class LoadingProgress extends Component {
  constructor(props){
    super()
    this.state = {
      completed : 0,
      color : COLOR.LOADING
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listenLoadingProgress(this._onStore)
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  shouldComponentUpdate(nextState, nextProps){
    if (this.props !== nextProps){
      return false;
    }
    return true;
  }

  _onStore = (actionType) => {
      const { ACTIONS } = this.props;
      if (actionType === ACTIONS.LOADING){
        this.setState({ completed: 35, color: COLOR.LOADING })
      } else if (actionType === ACTIONS.LOADING_COMPLETE){
        this.setState({ completed: 100, color: COLOR.LOADING })
      } else if (actionType === ACTIONS.LOADING_FAILED){
        this.setState({ completed: 100, color: COLOR.FAILED })
      }
  }

  render(){
    const { completed, color } = this.state;
    return (
      <ProgressLine
         height={3}
         color={color}
         completed={completed}
      />
    );
  }
}

export default LoadingProgress
