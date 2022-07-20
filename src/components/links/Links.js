import SafeLink from '../zhn-atoms/SafeLink';
import PoweredBy from './PoweredBy';

const CL_LINK = "link";

const _fSafeLink = (
  href,
  caption
) => ({ title, ...restProps }) => (
  <SafeLink
    className={CL_LINK}
    {...restProps}
    href={href}
    tabIndex="-1"
  >
    {title || caption}
  </SafeLink>
)
, CryptoCompare = _fSafeLink(
  "https://cryptocompare.com",
  "CryptoCompare"
)
, CoinStats = _fSafeLink(
  "https://coinstats.app",
  "CoinStats"
)
, Messari = _fSafeLink(
  "https://messari.io",
  "Messari"
)
, NewsApi = _fSafeLink(
  "https://newsapi.org",
  "NewsApi.org"
)
, Webz = _fSafeLink(
  "https://webz.io",
  "Webz.io"
)
, StackOverflow = _fSafeLink(
  "https://stackoverflow.com",
  "StackOverflow"
)
, IexApi = _fSafeLink(
  "https://iexcloud.io",
  "IEX Cloud"
)
, FmpApi = _fSafeLink(
  "https://financialmodelingprep.com",
  "FMP"
);

const Link = {
  NewsApi,
  Webz,
  StackOverflow,
  IexApi,
  FmpApi,
  CryptoCompare,
  CoinStats,
  Messari,
  PoweredBy
};

export default Link
