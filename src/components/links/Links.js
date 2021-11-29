import withProps from '../hoc/withProps'

import BaseComp from '../zhn-atoms/Link'
import PoweredBy from './PoweredBy'

const CryptoCompare = withProps({
  title: "CryptoCompare",
  href: "https://cryptocompare.com",
  tabIndex: "-1"
})(BaseComp)

const CoinStats = withProps({
  title: "CoinStats",
  href: "https://coinstats.app",
  tabIndex: "-1"
})(BaseComp)

const Messari = withProps({
  title: "Messari",
  href: "https://messari.io",
  tabIndex: "-1"
})(BaseComp)

export const NewsApi = withProps({
  title: "NewsApi.org",
  href: "https://newsapi.org",
  tabIndex: "-1"
})(BaseComp)

export const Webz = withProps({
  title: "Webz.io",
  href: "https://webz.io",
  tabIndex: "-1"
})(BaseComp)

export const StackOverflow = withProps({
  title: "StackOverflow",
  href: "https://stackoverflow.com",
  tabIndex: "-1"
})(BaseComp)

export const IexApi = withProps({
  title: "IEX Cloud",
  href: "https://iexcloud.io",
  tabIndex: "-1"
})(BaseComp)

const FmpApi = withProps({
  title: "FMP",
  href: "https://financialmodelingprep.com",
  tabIndex: "-1"
})(BaseComp)

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
