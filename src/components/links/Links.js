import withProps from '../hoc/withProps'

import BaseComp from '../zhn-atoms/Link'

export const NewsApi = withProps({
  title: "NewsApi.org",
  href: "https://newsapi.org",
  tabIndex: "-1"
})(BaseComp)

export const WebhoseIo = withProps({
  title: "Webhose.io",
  href: "https://webhose.io",
  tabIndex: "-1"
})(BaseComp)

export const StackOverflow = withProps({
  title: "StackOverflow",
  href: "https://stackoverflow.com",
  tabIndex: "-1"
})(BaseComp)

export const IexApi = withProps({
  title: "IEX Developer API",
  href: "https://iextrading.com/developer/",
  tabIndex: "-1"
})(BaseComp)

const Link = {
  NewsApi,
  WebhoseIo,
  StackOverflow,
  IexApi
};

export default Link
