import React from 'react'

import A from '../../Comp'

const _createCommandButtons = function(S) {
  return [
    <A.RaisedButton
      key="_load"
      rootStyle={S.RAISED_ROOT}
      clDiv={S.CL_RAISED_DIV}
      caption="Load"
      isPrimary={true}
      onClick={this._handleLoad}
    />
  ];
};

const withBtLoad = (target) => {
  target.prototype._createWithBtLoad = _createCommandButtons
};

export default withBtLoad
