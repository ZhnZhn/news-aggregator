import fnFetch from '../../utils/fn';
import { isFn } from '../../utils/isTypeFn';

const _fnCatch = ({
  error,
  onFailed
}) => {
  onFailed(error)
};

const _fFetch = (adapter) => ({
  json,
  option,
  onCompleted
}) => {
  const news = adapter.toNews(json, option)
  , itemConf = option.itemConf;
  onCompleted({ news, itemConf })
};

const loadNews = (
  option,
  onCompleted,
  onFailed
) => {
  const {
    api,
    adapter
  } = option;

  fnFetch({
    uri: api.getRequestUrl(option),
    optionFetch: isFn(api.crOptionFetch)
       ? api.crOptionFetch(option) : void 0,
    option: option,
    onCheckResponse: api.checkResponse,
    onFetch: _fFetch(adapter),
    onCompleted: onCompleted,
    onCatch: _fnCatch,
    onFailed: onFailed
  })
};

export default loadNews
