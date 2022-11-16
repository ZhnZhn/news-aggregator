import useTheme from '../hooks/useTheme';
import styleConfig from '../header/HeaderBar.Style';

import FlatButton from '../zhn-bt/FlatButton';

const S_DIV = {
  textAlign: 'center',
  paddingTop: 4
};

const _crPageCounter = ({
  nextPage,
  maxPage
}) => maxPage
  ? `${nextPage}/${maxPage}`
  : nextPage;

const LoadNextPage = ({
  page
}) => {
  const TS = useTheme(styleConfig);
  return page ? (
    <div style={S_DIV}>
      <FlatButton
        clDiv={TS.BT.CL_FLAT_DIV}
        caption={`Load Next Page ${_crPageCounter(page)}`}
        onClick={page.onPageLoad}
      />
    </div>
  ) : null;
}

export default LoadNextPage
