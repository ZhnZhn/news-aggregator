import NewsApi from '../../api/NewsApi'
import fnFetch from '../../utils/fn'
import NewsApiAdapter from '../../adapters/NewsApiAdapter'

const _fnCatch = ({ error, onFailed }) => {
  onFailed(error)
}

const _fnFetch = function({ json, option, onCompleted }){
  const news = NewsApiAdapter.toNews(json, option);
  const itemConf = option.itemConf;
  onCompleted({ news, itemConf })
}

const loadNews = function(option, onCompleted, onFailed){
  fnFetch({
    uri: NewsApi.getRequestUrl(option),
    option: option,
    onCheckResponse: NewsApi.checkResponse,
    onFetch: _fnFetch,
    onCompleted: onCompleted,
    onCatch: _fnCatch,
    onFailed: onFailed
  })
}

export default loadNews
