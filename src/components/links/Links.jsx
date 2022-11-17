import {
  IEX_CLOUD,
  FMP,
  NEWS_API_LONG,
  THE_NEWS_API,
  WEBZ_IO
} from '../../conf/ProviderNames';
import SafeLink from '../zhn-atoms/SafeLink';

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

export const CryptoCompareLink = _fSafeLink(
  "https://cryptocompare.com",
  "CryptoCompare"
)

export const CoinStatsLink = _fSafeLink(
  "https://coinstats.app",
  "CoinStats"
)

export const MessariLink = _fSafeLink(
  "https://messari.io",
  "Messari"
)

export const NewsApiLink = _fSafeLink(
  "https://newsapi.org",
  NEWS_API_LONG
)

export const TheNewsApiLink = _fSafeLink(
  "https://thenewsapi.com",
  THE_NEWS_API
)

export const WebzLink = _fSafeLink(
  "https://webz.io",
  WEBZ_IO
)

export const StackOverflowLink = _fSafeLink(
  "https://stackoverflow.com",
  "StackOverflow"
)

export const IexApiLink = _fSafeLink(
  "https://iexcloud.io",
  IEX_CLOUD
)

export const FmpApiLink = _fSafeLink(
  "https://financialmodelingprep.com",
  FMP
);
