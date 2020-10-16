import { Component } from 'react'
//import PropTypes from 'prop-types'

import utils from './utils'

const CL = "hrz-container";
const { isInCont } = utils;

class ComponentHrzContainer extends Component {
  /*
  static propTypes = {
    store: PropTypes.shape({
      listen: PropTypes.func
    }),
    addAction: PropTypes.string
  }
  */
  state = {
    containers: []
  }

  componentDidMount(){
    const { store } = this.props;
    this.unsubscribe = store.listen(this._onStore)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

  _onStore = (actionType, option) => {
     const { Comp } = option || {};
     if (actionType === this.props.addAction && Comp){
       this.setState(prevState => {
         if (!isInCont(prevState.containers, Comp)) {
           prevState.containers.unshift(Comp)
         }
         return prevState;
       })
     }
  }

  render(){
    const { containers } = this.state;
    return (
       <div className={CL}>
         {containers}
       </div>
    );
  }
}

export default ComponentHrzContainer
