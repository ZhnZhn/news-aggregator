import {
  AlphaVantageLink,
  CoinStatsLink,
  CryptoCompareLink,
  DevToLink,
  FmpApiLink,
  MessariLink,
  NewsApiLink,
  RedditLink,
  StackOverflowLink,
  TheNewsApiLink,
  WebzLink
} from '../components/links/Links';

import {
  getAvDialogConfig,
  getCoinStatDialogConfig,
  getCryptoCompareConfig,
  getDevToConfig,
  getFmpNewsConfig,
  getMessariConfig,
  getNewsApiSearchConfig,
  getNewsApiTopConfig,
  getRedditTopConfig,
  getRedditSearchConfig,
  getStackSearchConfig,
  getStackTaggedConfig,
  getTheNewsApiSearchConfig,
  getTheNewsApiTopConfig,
  getWebzCountryConfig,
  getWebzQueryConfig,
} from '../components/dialogs';

import {
  CRYPTO_COMPARE,
  COIN_STATS,
  MESSARI,
  FMP_LONG,
  ALPHA_VANTAGE,
  NEWS_API,
  THE_NEWS_API,
  WEBZ_IO,
  REDDIT,
  DEV_TO,
  STACK_OVERFLOW
} from './ProviderNames';

const DIALOG_TYPE_2 = "DialogType2";

const _crItemDialogType2 = (
  getConfig,
  CompLink,
  paneCaption,
  paneId,
  options,
) => ({
  ...options,
  dialogType: DIALOG_TYPE_2,
  getConfig,
  CompLink,
  paneCaption,
  paneId
})

const NEWS_QUERY = {
  WEBZ: {
    type: "W_WEBZ_QUERY",
    ..._crItemDialogType2(
      getWebzQueryConfig,
      WebzLink,
      `${WEBZ_IO}: News, Blogs`,
      "webz",
      {
        caption: "News, Blogs",
        loadId: "W",
      }
    )
  },
  WEBZ_COUNTRY: {
    type: "W_WEBZ_COUNTRY",
    ..._crItemDialogType2(
      getWebzCountryConfig,
      WebzLink,
      `${WEBZ_IO}: By Country`,
      "webz_country",
      {
        caption: "By Country, Topic",
        loadId: "W"
      }
    )
  },
  REDDIT: {
    type: "REDDIT",
    ..._crItemDialogType2(
      getRedditTopConfig,
      RedditLink,
      `${REDDIT}: Top By`,
      "rd_topby",
      { loadId: "RD" }
    )
  },
  REDDIT_SEARCH: {
    type: "REDDIT_SEARCH",
    ..._crItemDialogType2(
      getRedditSearchConfig,
      RedditLink,
      `${REDDIT}: Search`,
      "rd_searchby",
      { loadId: "RD" }
    )
  },
  DEV_TO: {
    type: "DEV_TO",
    ..._crItemDialogType2(
      getDevToConfig,
      DevToLink,
      `${DEV_TO}: Top By`,
      "dt_topby",
      { caption: "Top By", loadId: "DT" }
    )
  },
  STACK_TAGGED: {
    type: "SO_TAGGED",
    ..._crItemDialogType2(
      getStackTaggedConfig,
      StackOverflowLink,
      `${STACK_OVERFLOW}: Tagged`,
      "stack_tagged",
      {
        caption: "Tagged Questions",
        loadId: "SO",
        paneType: "STACK_ITEM"
      }
    )
  },
  STACK_SEARCH: {
    type: "SO_SEARCH",
    ..._crItemDialogType2(
      getStackSearchConfig,
      StackOverflowLink,
      `${STACK_OVERFLOW}: Search`,
      "stack_search",
      {
        caption: "Search Questions",
        loadId: "SO",
        paneType: "STACK_ITEM"
      }
    )
  },

  CRYPTO_COMPARE: {
    type: "CRYPTO_COMPARE",
    ..._crItemDialogType2(
      getCryptoCompareConfig,
      CryptoCompareLink,
      CRYPTO_COMPARE,
      "cryptocompare_news",
      { loadId: "CCN" }
    )
  },
  COIN_STATS: {
    type: "COIN_STATS",
    ..._crItemDialogType2(
      getCoinStatDialogConfig,
      CoinStatsLink,
      `${COIN_STATS} News`,
      "coinstats_news",
      { loadId: "CS" }
    )
  },
  MESSARI: {
    type: "MESSARI",
    ..._crItemDialogType2(
      getMessariConfig,
      MessariLink,
      MESSARI,
      "messari_news",
      { loadId: "MS" }
    )
  },
  FMP: {
    type: "FMP",
    ..._crItemDialogType2(
      getFmpNewsConfig,
      FmpApiLink,
      FMP_LONG,
      "fmp_news"
    )
  },
  AV: {
    type: "AV",
    ..._crItemDialogType2(
      getAvDialogConfig,
      AlphaVantageLink,
      ALPHA_VANTAGE,
      "av_sentiments",
    )
  },
  NEWS_SEARCH: {
    type: "NEWS_SEARCH",
    ..._crItemDialogType2(
      getNewsApiSearchConfig,
      NewsApiLink,
      `${NEWS_API}: Search`,
      "newsapi_search",
      {
        loadId: "NS",
        dialogProps: {
           "source": "newsapi_search"
         }
      }
    )
  },
  NEWS_TOP: {
    type: "NEWS_TOP",
    ..._crItemDialogType2(
      getNewsApiTopConfig,
      NewsApiLink,
      `${NEWS_API}: Top By`,
      "newsapi_top",
      {
        loadId: "NT",
        dialogProps: {
           "source": "newsapi_top"
         }
      }
    )
  },
  THE_NEWS_SEARCH: {
    type: "THE_NEWS_SEARCH",
    ..._crItemDialogType2(
      getTheNewsApiSearchConfig,
      TheNewsApiLink,
      `${THE_NEWS_API}: Search`,
      "thenewsapi_search",
      {
        caption: "Search",
        loadId: "TNS"
      }
    )
  },
  THE_NEWS_TOP: {
    type: "THE_NEWS_TOP",
    ..._crItemDialogType2(
      getTheNewsApiTopConfig,
      TheNewsApiLink,
      `${THE_NEWS_API}: Top By`,
      "thenewsapi_top",
      {
        caption: "Top By",
        loadId: "TNT"
      }
    )
  }
}

export default NEWS_QUERY
