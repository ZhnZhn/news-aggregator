import withProps from '../hoc/withProps'

import BaseComp from '../zhn-atoms/Link'

export const LinkNewsApi = withProps({
  title: "NewsApi.org",
  href: "https://newsapi.org"
})(BaseComp)

export const LinkWebhoseIo = withProps({
  title: "Webhose.io",
  href: "https://webhose.io"
})(BaseComp)

export const LinkStackOverflow = withProps({
  title: "StackOverflow",
  href: "https://stackoverflow.com"
})(BaseComp)

const Link = {
  NewsApi: LinkNewsApi,
  WebhoseIo: LinkWebhoseIo,
  StackOverflow: LinkStackOverflow
}

export default Link
