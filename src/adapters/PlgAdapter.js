import { loadItem } from "../flux/itemStore";
import { isNextUrl } from "../api/PlgApi";

import { crId } from "../utils/crId";
import { safeFormatMls } from "../utils/formatDate";
import { joinByBlank } from "../utils/joinBy";
import { dateTimeToMls } from "../utils/dt";
import { replaceAllBlankByNbsp } from "../utils/strFn";

import { updateNextPage } from "./adapterFn";
import crArticles from "./crArticles";

const SOURCE_ID = "plg";
const _isArr = Array.isArray
, _getProperty = (
  item,
  propName
) => (item || {})[propName] || "";

const _crInsightList = (
  insights
) => _isArr(insights) ? insights.reduce((list, item) => `${list}
  ${_getProperty(item, "ticker")} ${_getProperty(item, "sentiment")}
  ${_getProperty(item, "sentiment_reasoning")}
`, "") : "";

const _crArticle = ({
  title,
  description,
  insights,
  author,
  published_utc,
  publisher,
  article_url
}, nowMls) => {
  const { name } = publisher || {};
  return {
    source: SOURCE_ID,
    articleId: crId(),
    title,
    description: `${description}
      ${_crInsightList(insights)}`,
    author: joinByBlank(name, replaceAllBlankByNbsp(author)),
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
