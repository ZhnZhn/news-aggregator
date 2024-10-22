import {
  CRYPTO_COMPARE,
  COIN_STATS,
  MESSARI,  
  FMP,
  ALPHA_VANTAGE,
  NEWS_API_LONG,
  THE_NEWS_API,
  WEBZ_IO,
  REDDIT,
  DEV_TO,
  STACK_OVERFLOW
} from '../../conf/ProviderNames';
import SafeLink from '../zhn/SafeLink';

const CL_LINK = "link";

const _fSafeLink = (
  href,
  caption
) => ({
  title,
  tabIndex="-1",
  ...restProps
}) => (
  <SafeLink
    className={CL_LINK}
    tabIndex={tabIndex}
    {...restProps}
    href={href}
  >
    {title || caption}
  </SafeLink>
);

export const CryptoCompareLink = _fSafeLink(
  "https://cryptocompare.com",
  CRYPTO_COMPARE
)

export const CoinStatsLink = _fSafeLink(
  "https://coinstats.app",
  COIN_STATS
)

export const MessariLink = _fSafeLink(
  "https://messari.io",
  MESSARI
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

export const RedditLink = _fSafeLink(
  "https://www.reddit.com",
  REDDIT
)

export const DevToLink = _fSafeLink(
  "https://dev.to",
  DEV_TO
)

export const StackOverflowLink = _fSafeLink(
  "https://stackoverflow.com",
  STACK_OVERFLOW
)

export const FmpApiLink = _fSafeLink(
  "https://financialmodelingprep.com",
  FMP
);

export const AlphaVantageLink = _fSafeLink(
  "https://www.alphavantage.co",
  ALPHA_VANTAGE
)
