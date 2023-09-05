import { IEX_CLOUD } from '../conf/ProviderNames';

import {
  crId,
  formatTimeAgo,
  crDescription
} from '../utils';

import sanitizeArticle from './sanitizeArticle';

const _isArr = Array.isArray;

const SOURCE_ID = 'iex_news'
, DF_SYMBOL = 'AAPL';

const _isStr = v => typeof v === 'string'

const _crAuthor = (
  hasPaywall,
  source
) => hasPaywall
 ? `$ ${source}`
 : source;

const _crRelated = (
  related
) => _isStr(related)
  ? related.split(',').join(', ')
  : void 0;

const _crSource = (
  source
) => _isStr(source)
  ? source.trim()
  : '';

const _toArticles = (
  json
) => {
  const _timeAgoOptions = formatTimeAgo.crOptions()
  , _hmByHeadline = {};
  return _isArr(json) ? json
   .reduce((arr, item, index) => {
      const {
        headline,
        source,
        datetime,
        summary,
        related,
        url,
        hasPaywall
      } = item
      , _source = _crSource(source)
      , description = crDescription(summary)
      , _article = {
          source: SOURCE_ID,
          articleId: crId(),
          title: headline,
          description,
          related: _crRelated(related),
          author: _crAuthor(hasPaywall, _source),
          publishedAt: datetime,
          timeAgo: formatTimeAgo(datetime, _timeAgoOptions),
          url
      }
      , _hmArticle = _hmByHeadline[headline];

      if (_hmArticle) {
        const [
          hmSource,
          hmDescr,
          hmDatetime,
          hmIndex
        ] = _hmArticle;
        if (hmSource === _source && hmDescr === description) {
           if (hmDatetime < datetime) {
             arr[hmIndex]._isNewer = true
           } else {
             _article._isNewer = true
           }
        }
      }

      _hmByHeadline[headline] = [
        _source,
        description,
        datetime,
        arr.push(_article) - 1
      ]
      return arr;
  }, [])
   .filter(item => !item._isNewer)
   .map(sanitizeArticle) : [];
};

const _crCaption = ({
  symbol=DF_SYMBOL
}) => `${IEX_CLOUD}: ${symbol}`;

const IexAdapter = {
  toNews: (
    json,
    option
  ) => ({
     source: SOURCE_ID,
     caption: _crCaption(option),
     articles: _toArticles(json)
  })
};

export default IexAdapter
