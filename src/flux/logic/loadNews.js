import fnFetch from '../../utils/fn'

const _fnCatch = ({ error, onFailed }) => {
  onFailed(error)
}

const _fFetch = (adapter) => function({ json, option, onCompleted }){
  const news = adapter.toNews(json, option);
  const itemConf = option.itemConf;
  onCompleted({ news, itemConf })
}

const loadNews = function(option, onCompleted, onFailed){
  const { api, adapter } = option;
  fnFetch({
    uri: api.getRequestUrl(option),
    option: option,
    onCheckResponse: api.checkResponse,
    onFetch: _fFetch(adapter),
    onCompleted: onCompleted,
    onCatch: _fnCatch,
    onFailed: onFailed
  })
}

export default loadNews
