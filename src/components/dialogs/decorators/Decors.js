import withBtLoad from './withBtLoad'
import withClose from './withClose'
import withKeyDown from './withKeyDown'

const _initWithDecors = (instComp) => {  
  instComp._createCommandButtons = instComp._createWithBtLoad.bind(instComp)
  instComp._handleClose = instComp._handleCloseWith.bind(instComp)
  instComp._handleKeyDownWith = instComp._handleKeyDownWith.bind(instComp)
};

const Decors = {
  withDecors: (target) => {
    withBtLoad(target)
    withClose(target)
    withKeyDown(target)
    target.prototype._initWithDecors = _initWithDecors
  },
  withBtLoad,
  withClose,
  withKeyDown
};

export default Decors
