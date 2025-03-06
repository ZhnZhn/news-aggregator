import {
  CRYPTO_COMPARE,
  COIN_STATS,
  MESSARI,
  FMP,
  ALPHA_VANTAGE,
  PLG_IO,
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
  domain,
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
    href={`https://${domain}`}
  >
    {title || caption}
  </SafeLink>
);

export const CryptoCompareLink = _fSafeLink(
  "cryptocompare.com",
  CRYPTO_COMPARE
)

export const CoinStatsLink = _fSafeLink(
  "coinstats.app",
  COIN_STATS
)

export const MessariLink = _fSafeLink(
  "messari.io",
  MESSARI
)

export const NewsApiLink = _fSafeLink(
  "newsapi.org",
  NEWS_API_LONG
)

export const TheNewsApiLink = _fSafeLink(
  "thenewsapi.com",
  THE_NEWS_API
)

export const WebzLink = _fSafeLink(
  "webz.io",
  WEBZ_IO
)

export const RedditLink = _fSafeLink(
  "www.reddit.com",
  REDDIT
)

export const DevToLink = _fSafeLink(
  "dev.to",
  DEV_TO
)

export const StackOverflowLink = _fSafeLink(
  "stackoverflow.com",
  STACK_OVERFLOW
)

export const FmpApiLink = _fSafeLink(
  "financialmodelingprep.com",
  FMP
);

export const AlphaVantageLink = _fSafeLink(
  "www.alphavantage.co",
  ALPHA_VANTAGE
)

export const PlgLink = _fSafeLink(
  "polygon.io",
  PLG_IO
)
