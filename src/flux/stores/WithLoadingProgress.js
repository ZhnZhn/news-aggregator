//import { TYPES } from '../actions/LoadingProgressActions'

const CHANNEL = 'WITH_LOADING_PROGRESS';

const WithLoadingProgress = {

  listenLoadingProgress(fnHandler){
    this.emitter.addListener(CHANNEL, fnHandler);
    return () => {
      this.emitter.removeListener(CHANNEL, fnHandler);
    }
  },

  triggerLoadingProgress(actionType){
    this.emitter.emit(CHANNEL, actionType);
  },

  /*
  onLoadingProgress(){
    this.triggerLoadingProgress(TYPES.LOADING);
  },
  onLoadingProgressComplete(){
    this.triggerLoadingProgress(TYPES.LOADING_COMPLETE);
  },
  onLoadingProgressFailed(){
    this.triggerLoadingProgress(TYPES.LOADING_FAILED);
  }
  */

};

export default WithLoadingProgress
