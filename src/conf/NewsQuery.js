import {
  AlphaVantageLink,
  MassiveLink,
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
  getMassiveDialogConfig,
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
  MASSIVE,
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
  paneId,
  loadId
) => ({
  dialogType: DIALOG_TYPE_2,
  getConfig,
  CompLink,
  paneId,
  loadId
})
, _crCaption = (
  paneCaption,
  shortCaption,
  caption = paneCaption
) => ({
  paneCaption,
  caption,
  shortCaption
})



const NEWS_QUERY = {
  WEBZ: {
    type: "W_WEBZ_QUERY",
    ..._crCaption(
      `${WEBZ_IO}: News, Blogs`,
      "WBZ",
      "News, Blogs"
    ),
    ..._crItemDialogType2(
      getWebzQueryConfig,
      WebzLink,
      "webz",
      "W"
    )
  },
  WEBZ_COUNTRY: {
    type: "W_WEBZ_COUNTRY",
    ..._crCaption(
      `${WEBZ_IO}: By Country`,
      "WBZ",
      "By Country, Topic"
    ),
    ..._crItemDialogType2(
      getWebzCountryConfig,
      WebzLink,
      "webz_country",
      "W"
    )
  },
  REDDIT: {
    type: "REDDIT",
    ..._crCaption(
      `${REDDIT}: Listing`,
      "RDL"
    ),
    ..._crItemDialogType2(
      getRedditTopConfig,
      RedditLink,
      "rd_topby",
      "RD"
    )
  },
  REDDIT_SEARCH: {
    type: "REDDIT_SEARCH",
    ..._crCaption(
      `${REDDIT}: Search`,
      "RDS"
    ),
    ..._crItemDialogType2(
      getRedditSearchConfig,
      RedditLink,
      "rd_searchby",
      "RD"
    )
  },
  DEV_TO: {
    type: "DEV_TO",
    ..._crCaption(
      `${DEV_TO}: Top By`,
      "DVT",
      "Top By"
    ),
    ..._crItemDialogType2(
      getDevToConfig,
      DevToLink,
      "dt_topby",
      "DT"
    )
  },
  STACK_TAGGED: {
    type: "SO_TAGGED",
    ..._crCaption(
      `${STACK_OVERFLOW}: Tagged`,
      "STT",
      "Tagged Questions"
    ),
    ..._crItemDialogType2(
      getStackTaggedConfig,
      StackOverflowLink,
      "stack_tagged",
      "SO"
    ),
    paneType: "STACK_ITEM"
  },
  STACK_SEARCH: {
    type: "SO_SEARCH",
    ..._crCaption(
      `${STACK_OVERFLOW}: Search`,
      "STS",
      "Search Questions"
    ),
    ..._crItemDialogType2(
      getStackSearchConfig,
      StackOverflowLink,
      "stack_search",
      "SO"
    ),
    paneType: "STACK_ITEM"
  },

  CRYPTO_COMPARE: {
    type: "CRYPTO_COMPARE",
    ..._crCaption(
      CRYPTO_COMPARE,
      "CRC"
    ),
    ..._crItemDialogType2(
      getCryptoCompareConfig,
      CryptoCompareLink,
      "cryptocompare_news",
      "CCN"
    )
  },
  COIN_STATS: {
    type: "COIN_STATS",
    ..._crCaption(
      `${COIN_STATS} News`,
      "CSN"
    ),
    ..._crItemDialogType2(
      getCoinStatDialogConfig,
      CoinStatsLink,
      "coinstats_news",
      "CS"
    )
  },
  MESSARI: {
    type: "MESSARI",
    ..._crCaption(
      MESSARI,
      "MSSR"
    ),
    ..._crItemDialogType2(
      getMessariConfig,
      MessariLink,
      "messari_news",
      "MS"
    )
  },
  FMP: {
    type: "FMP",
    ..._crCaption(
      FMP_LONG,
      "FMP"
    ),
    ..._crItemDialogType2(
      getFmpNewsConfig,
      FmpApiLink,
      "fmp_news"
    )
  },
  AV: {
    type: "AV",
    ..._crCaption(
      ALPHA_VANTAGE,
      "AV"
    ),
    ..._crItemDialogType2(
      getAvDialogConfig,
      AlphaVantageLink,
      "av_sentiments",
    )
  },
  MASSIVE: {
    type: "MASSIVE",
    ..._crCaption(
      MASSIVE,
      "MSSV"
    ),
    ..._crItemDialogType2(
      getMassiveDialogConfig,
      MassiveLink,
      "plg",
      "MSV"
    )
  },
  NEWS_SEARCH: {
    type: "NEWS_SEARCH",
    ..._crCaption(
      `${NEWS_API}: Search`,
      "NWS"
    ),
    ..._crItemDialogType2(
      getNewsApiSearchConfig,
      NewsApiLink,
      "newsapi_search",
      "NS"
    ),
    dialogProps: {
       "source": "newsapi_search"
     }
  },
  NEWS_TOP: {
    type: "NEWS_TOP",
    ..._crCaption(
      `${NEWS_API}: Top By`,
      "NWT"
    ),
    ..._crItemDialogType2(
      getNewsApiTopConfig,
      NewsApiLink,
      "newsapi_top",
      "NT"
    ),
    dialogProps: {
       "source": "newsapi_top"
     }
  },
  THE_NEWS_SEARCH: {
    type: "THE_NEWS_SEARCH",
    ..._crCaption(
      `${THE_NEWS_API}: Search`,
      "TNWS",
      "Search"
    ),
    ..._crItemDialogType2(
      getTheNewsApiSearchConfig,
      TheNewsApiLink,
      "thenewsapi_search",
      "TNS"
    )
  },
  THE_NEWS_TOP: {
    type: "THE_NEWS_TOP",
    ..._crCaption(
      `${THE_NEWS_API}: Top By`,
      "TNWT",
      "Top By"
    ),
    ..._crItemDialogType2(
      getTheNewsApiTopConfig,
      TheNewsApiLink,
      "thenewsapi_top",
      "TNT"
    )
  }
}

export default NEWS_QUERY
