"use strict";

exports.__esModule = true;
exports.default = void 0;
var _Links = require("../components/links/Links");
var _dialogs = require("../components/dialogs");
var _ProviderNames = require("./ProviderNames");
const DIALOG_TYPE_2 = "DialogType2";
const _crItemDialogType2 = (getConfig, CompLink, paneCaption, paneId, options) => ({
  ...options,
  dialogType: DIALOG_TYPE_2,
  getConfig,
  CompLink,
  paneCaption,
  paneId
});
const NEWS_QUERY = {
  WEBZ: {
    type: "W_WEBZ_QUERY",
    ..._crItemDialogType2(_dialogs.getWebzQueryConfig, _Links.WebzLink, _ProviderNames.WEBZ_IO + ": News, Blogs", "webz", {
      caption: "News, Blogs",
      loadId: "W"
    })
  },
  WEBZ_COUNTRY: {
    type: "W_WEBZ_COUNTRY",
    ..._crItemDialogType2(_dialogs.getWebzCountryConfig, _Links.WebzLink, _ProviderNames.WEBZ_IO + ": By Country", "webz_country", {
      caption: "By Country, Topic",
      loadId: "W"
    })
  },
  REDDIT: {
    type: "REDDIT",
    ..._crItemDialogType2(_dialogs.getRedditTopConfig, _Links.RedditLink, _ProviderNames.REDDIT + ": Top By", "rd_topby", {
      loadId: "RD"
    })
  },
  DEV_TO: {
    type: "DEV_TO",
    ..._crItemDialogType2(_dialogs.getDevToConfig, _Links.DevToLink, _ProviderNames.DEV_TO + ": Top By", "dt_topby", {
      caption: "Top By",
      loadId: "DT"
    })
  },
  STACK_TAGGED: {
    type: "SO_TAGGED",
    ..._crItemDialogType2(_dialogs.getStackTaggedConfig, _Links.StackOverflowLink, _ProviderNames.STACK_OVERFLOW + ": Tagged", "stack_tagged", {
      caption: "Tagged Questions",
      loadId: "SO",
      paneType: "STACK_ITEM"
    })
  },
  STACK_SEARCH: {
    type: "SO_SEARCH",
    ..._crItemDialogType2(_dialogs.getStackSearchConfig, _Links.StackOverflowLink, _ProviderNames.STACK_OVERFLOW + ": Search", "stack_search", {
      caption: "Search Questions",
      loadId: "SO",
      paneType: "STACK_ITEM"
    })
  },
  CRYPTO_COMPARE: {
    type: "CRYPTO_COMPARE",
    ..._crItemDialogType2(_dialogs.getCryptoCompareConfig, _Links.CryptoCompareLink, _ProviderNames.CRYPTO_COMPARE, "cryptocompare_news", {
      loadId: "CCN"
    })
  },
  COIN_STATS: {
    type: "COIN_STATS",
    ..._crItemDialogType2(_dialogs.getCoinStatDialogConfig, _Links.CoinStatsLink, _ProviderNames.COIN_STATS + " News", "coinstats_news", {
      loadId: "CS"
    })
  },
  MESSARI: {
    type: "MESSARI",
    ..._crItemDialogType2(_dialogs.getMessariConfig, _Links.MessariLink, _ProviderNames.MESSARI, "messari_news", {
      loadId: "MS"
    })
  },
  IEX: {
    type: "IEX_NEWS",
    ..._crItemDialogType2(_dialogs.getIexCloudNewsConfig, _Links.IexApiLink, _ProviderNames.IEX_CLOUD, "iex_news", {
      loadId: "IEX"
    })
  },
  FMP: {
    type: "FMP",
    ..._crItemDialogType2(_dialogs.getFmpNewsConfig, _Links.FmpApiLink, _ProviderNames.FMP_LONG, "fmp_news")
  },
  AV: {
    type: "AV",
    ..._crItemDialogType2(_dialogs.getAvDialogConfig, _Links.AlphaVantageLink, _ProviderNames.ALPHA_VANTAGE, "av_sentiments")
  },
  NEWS_SEARCH: {
    type: "NEWS_SEARCH",
    ..._crItemDialogType2(_dialogs.getNewsApiSearchConfig, _Links.NewsApiLink, _ProviderNames.NEWS_API + ": Search", "newsapi_search", {
      loadId: "NS",
      dialogProps: {
        "source": "newsapi_search"
      }
    })
  },
  NEWS_TOP: {
    type: "NEWS_TOP",
    ..._crItemDialogType2(_dialogs.getNewsApiTopConfig, _Links.NewsApiLink, _ProviderNames.NEWS_API + ": Top By", "newsapi_top", {
      loadId: "NT",
      dialogProps: {
        "source": "newsapi_top"
      }
    })
  },
  THE_NEWS_SEARCH: {
    type: "THE_NEWS_SEARCH",
    ..._crItemDialogType2(_dialogs.getTheNewsApiSearchConfig, _Links.TheNewsApiLink, _ProviderNames.THE_NEWS_API + ": Search", "thenewsapi_search", {
      caption: "Search",
      loadId: "TNS"
    })
  },
  THE_NEWS_TOP: {
    type: "THE_NEWS_TOP",
    ..._crItemDialogType2(_dialogs.getTheNewsApiTopConfig, _Links.TheNewsApiLink, _ProviderNames.THE_NEWS_API + ": Top By", "thenewsapi_top", {
      caption: "Top By",
      loadId: "TNT"
    })
  }
};
var _default = exports.default = NEWS_QUERY;
//# sourceMappingURL=NewsQuery.js.map