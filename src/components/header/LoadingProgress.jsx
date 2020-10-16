import { Component } from 'react'

import ProgressLine from '../zhn-atoms/ProgressLine'

const COLOR = {
  LOADING : '#2f7ed8',
  FAILED : '#ed5813'
};

class LoadingProgress extends Component {

  state = {
    completed : 0,
    color : COLOR.LOADING
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listenLoadingProgress(this._onStore)
  }

  componentWillUnmount(){
    this.unsubscribe()
  }


  shouldComponentUpdate(nextProps, nextState){
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
         color={color}
         completed={completed}
      />
    );
  }
}

export default LoadingProgress
