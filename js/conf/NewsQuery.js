"use strict";

exports.__esModule = true;
exports.default = void 0;
var _Links = require("../components/links/Links");
var _dialogs = require("../components/dialogs");
var _ProviderNames = require("./ProviderNames");
const DIALOG_TYPE_2 = "DialogType2";
const _crItemDialogType2 = (getConfig, CompLink, paneId, loadId) => ({
    dialogType: DIALOG_TYPE_2,
    getConfig,
    CompLink,
    paneId,
    loadId
  }),
  _crCaption = function (paneCaption, shortCaption, caption) {
    if (caption === void 0) {
      caption = paneCaption;
    }
    return {
      paneCaption,
      caption,
      shortCaption
    };
  };
const NEWS_QUERY = {
  WEBZ: {
    type: "W_WEBZ_QUERY",
    ..._crCaption(`${_ProviderNames.WEBZ_IO}: News, Blogs`, "WBZ", "News, Blogs"),
    ..._crItemDialogType2(_dialogs.getWebzQueryConfig, _Links.WebzLink, "webz", "W")
  },
  WEBZ_COUNTRY: {
    type: "W_WEBZ_COUNTRY",
    ..._crCaption(`${_ProviderNames.WEBZ_IO}: By Country`, "WBZ", "By Country, Topic"),
    ..._crItemDialogType2(_dialogs.getWebzCountryConfig, _Links.WebzLink, "webz_country", "W")
  },
  REDDIT: {
    type: "REDDIT",
    ..._crCaption(`${_ProviderNames.REDDIT}: Listing`, "RDL"),
    ..._crItemDialogType2(_dialogs.getRedditTopConfig, _Links.RedditLink, "rd_topby", "RD")
  },
  REDDIT_SEARCH: {
    type: "REDDIT_SEARCH",
    ..._crCaption(`${_ProviderNames.REDDIT}: Search`, "RDS"),
    ..._crItemDialogType2(_dialogs.getRedditSearchConfig, _Links.RedditLink, "rd_searchby", "RD")
  },
  DEV_TO: {
    type: "DEV_TO",
    ..._crCaption(`${_ProviderNames.DEV_TO}: Top By`, "DVT", "Top By"),
    ..._crItemDialogType2(_dialogs.getDevToConfig, _Links.DevToLink, "dt_topby", "DT")
  },
  STACK_TAGGED: {
    type: "SO_TAGGED",
    ..._crCaption(`${_ProviderNames.STACK_OVERFLOW}: Tagged`, "STT", "Tagged Questions"),
    ..._crItemDialogType2(_dialogs.getStackTaggedConfig, _Links.StackOverflowLink, "stack_tagged", "SO"),
    paneType: "STACK_ITEM"
  },
  STACK_SEARCH: {
    type: "SO_SEARCH",
    ..._crCaption(`${_ProviderNames.STACK_OVERFLOW}: Search`, "STS", "Search Questions"),
    ..._crItemDialogType2(_dialogs.getStackSearchConfig, _Links.StackOverflowLink, "stack_search", "SO"),
    paneType: "STACK_ITEM"
  },
  CRYPTO_COMPARE: {
    type: "CRYPTO_COMPARE",
    ..._crCaption(_ProviderNames.CRYPTO_COMPARE, "CRC"),
    ..._crItemDialogType2(_dialogs.getCryptoCompareConfig, _Links.CryptoCompareLink, "cryptocompare_news", "CCN")
  },
  COIN_STATS: {
    type: "COIN_STATS",
    ..._crCaption(`${_ProviderNames.COIN_STATS} News`, "CSN"),
    ..._crItemDialogType2(_dialogs.getCoinStatDialogConfig, _Links.CoinStatsLink, "coinstats_news", "CS")
  },
  MESSARI: {
    type: "MESSARI",
    ..._crCaption(_ProviderNames.MESSARI, "MSSR"),
    ..._crItemDialogType2(_dialogs.getMessariConfig, _Links.MessariLink, "messari_news", "MS")
  },
  FMP: {
    type: "FMP",
    ..._crCaption(_ProviderNames.FMP_LONG, "FMP"),
    ..._crItemDialogType2(_dialogs.getFmpNewsConfig, _Links.FmpApiLink, "fmp_news")
  },
  AV: {
    type: "AV",
    ..._crCaption(_ProviderNames.ALPHA_VANTAGE, "AV"),
    ..._crItemDialogType2(_dialogs.getAvDialogConfig, _Links.AlphaVantageLink, "av_sentiments")
  },
  MASSIVE: {
    type: "MASSIVE",
    ..._crCaption(_ProviderNames.MASSIVE, "MSSV"),
    ..._crItemDialogType2(_dialogs.getMassiveDialogConfig, _Links.MassiveLink, "plg", "MSV")
  },
  NEWS_SEARCH: {
    type: "NEWS_SEARCH",
    ..._crCaption(`${_ProviderNames.NEWS_API}: Search`, "NWS"),
    ..._crItemDialogType2(_dialogs.getNewsApiSearchConfig, _Links.NewsApiLink, "newsapi_search", "NS"),
    dialogProps: {
      "source": "newsapi_search"
    }
  },
  NEWS_TOP: {
    type: "NEWS_TOP",
    ..._crCaption(`${_ProviderNames.NEWS_API}: Top By`, "NWT"),
    ..._crItemDialogType2(_dialogs.getNewsApiTopConfig, _Links.NewsApiLink, "newsapi_top", "NT"),
    dialogProps: {
      "source": "newsapi_top"
    }
  },
  THE_NEWS_SEARCH: {
    type: "THE_NEWS_SEARCH",
    ..._crCaption(`${_ProviderNames.THE_NEWS_API}: Search`, "TNWS", "Search"),
    ..._crItemDialogType2(_dialogs.getTheNewsApiSearchConfig, _Links.TheNewsApiLink, "thenewsapi_search", "TNS")
  },
  THE_NEWS_TOP: {
    type: "THE_NEWS_TOP",
    ..._crCaption(`${_ProviderNames.THE_NEWS_API}: Top By`, "TNWT", "Top By"),
    ..._crItemDialogType2(_dialogs.getTheNewsApiTopConfig, _Links.TheNewsApiLink, "thenewsapi_top", "TNT")
  }
};
var _default = exports.default = NEWS_QUERY;
//# sourceMappingURL=NewsQuery.js.map