import { loadItem } from '../flux/itemStore';
import { isNextUrl } from '../api/PlgApi';

import {
  crId,
  safeFormatMls
} from '../utils';

import { dateTimeToMls } from '../utils/dt';

import { updateNextPage } from './adapterFn';
import crArticles from './crArticles';

const SOURCE_ID = "plg";
const _isArr = Array.isArray

const _crInsightList = (
  insights
) => _isArr(insights) ? insights.reduce((list, item) => `${list}
  ${item.ticker} ${item.sentiment}
  ${item.sentiment_reasoning}
`, '') : '';

const _crArticle = ({
  title,
  description,
  insights,
  author,
  published_utc,
  article_url
}, nowMls) => {
  return {
    source: SOURCE_ID,
    articleId: crId(),
    title,
    description: `${description}
      ${_crInsightList(insights)}`,
    author,
    timeAgo: safeFormatMls(dateTimeToMls(published_utc), nowMls),
    publishedAt: published_utc,
    url: article_url
  };
};

const _crPage = ({ next_url}, option) => {
  if (!isNextUrl(next_url)) {
    return;
  }
  updateNextPage(option)
  option.next_url = next_url;
  return {
    nextPage: option._nextPage,
    onPageLoad: () => loadItem(option)
  }
};

const PlgAdapter = {
  toNews(json, option) {
    const { results } = json;
    return {
      source: SOURCE_ID,
      articles: crArticles(results, _crArticle),
      page: _crPage(json, option)
    };
  }
}

export default PlgAdapter
