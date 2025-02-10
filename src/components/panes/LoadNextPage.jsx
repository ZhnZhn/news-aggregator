import { isNumber } from '../../utils/isTypeFn';
import FlatButton from '../zhn-bt/FlatButton';

const S_DIV = {
  textAlign: 'center',
  paddingTop: 4
};

const _crPageCounter = ({
  nextPage,
  maxPage
}) => isNumber(maxPage)
&& maxPage !== 0
&& isNumber(nextPage)
  ? `${nextPage}/${maxPage}`
  : nextPage || "";

const LoadNextPage = ({
  page
}) => page ? (
  <div style={S_DIV}>
    <FlatButton
      caption={`Load Next Page ${_crPageCounter(page)}`}
      onClick={page.onPageLoad}
    />
  </div>
) : null;

export default LoadNextPage
