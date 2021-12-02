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
  }
};

export default WithLoadingProgress
