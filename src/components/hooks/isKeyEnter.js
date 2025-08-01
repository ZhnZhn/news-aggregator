import {
  KEY_ENTER,
  KEY_SPACE
} from '../uiApi';

const isKeyEnter = ({
  key
}) => key === KEY_ENTER || key === KEY_SPACE

export default isKeyEnter
