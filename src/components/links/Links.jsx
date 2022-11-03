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
  "NewsApi.org"
)

export const TheNewsApiLink = _fSafeLink(
  "https://thenewsapi.com",
  "TheNewsApi"
)

export const WebzLink = _fSafeLink(
  "https://webz.io",
  "Webz.io"
)

export const StackOverflowLink = _fSafeLink(
  "https://stackoverflow.com",
  "StackOverflow"
)

export const IexApiLink = _fSafeLink(
  "https://iexcloud.io",
  "IEX Cloud"
)

export const FmpApiLink = _fSafeLink(
  "https://financialmodelingprep.com",
  "FMP"
);
