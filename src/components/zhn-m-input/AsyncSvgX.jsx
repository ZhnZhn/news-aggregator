import { memo } from '../uiApi';
import { COLOR_BLACK } from '../crStyle';

import AsyncShowComponent from '../zhn-moleculs/AsyncShowComponent';
import SvgX from '../zhn/SvgX';

import { CL_BT_SVG_CLEAR } from './Input.Style';

const S_BT_CLEAR = {
  position: 'absolute',
  top: 25,
  right: 15,
  stroke: COLOR_BLACK
};

const AsyncSvgX = memo(({
  is,
  onClick
}) => (
  <AsyncShowComponent
    is={is}
    mls={700}
  >
    <SvgX
       className={CL_BT_SVG_CLEAR}
       style={S_BT_CLEAR}
       onClick={onClick}
    />
  </AsyncShowComponent>
));

export default AsyncSvgX
