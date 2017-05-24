"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var NewsSourceMenu = {
  menu: [{
    caption: "Sport",
    items: [{ id: "NS_BBC_SPORT" }, { id: "NS_ESPN" }, { id: "NS_FOX_SPORTS" }, { id: "NS_FOUR_FOUR_TWO" }, { id: "NS_FOOTBALL_ITALIA" }]
  }, {
    caption: "General",
    items: [{ id: "NS_ABC_NEWS" }, { id: "NS_BBC_NEWS" }, { id: "NS_GOOGLE_NEWS" }, { id: "NS_NEWSWEEK" }, { id: "NS_NEW_YORK_MAGAZINE" }, { id: "NS_THE_ECONOMIST" }, { id: "NS_TIME" }, { id: "NS_REUTERS" }, { id: "NS_ASSOCIATED_PRESS" }, { id: "NS_INDEPENDENT" }, { id: "NS_THE_TELEGRAPH" }, { id: "NS_METRO" }]
  }, {
    caption: "Business",
    items: [{ id: "NS_BUSINESS_INSIDER" }, { id: "NS_BLOOMBERG" }, { id: "NS_FINANCIAL_TIMES" }, { id: "NS_CNBC" }]
  }, {
    caption: "Technology",
    items: [{ id: "NS_ARS_TECHNICA" }, { id: "NS_ENGADGET" }, { id: "NS_HACKER_NEWS" }, { id: "NS_TECHCRUNCH" }, { id: "NS_TECHRADAR" }, { id: "NS_RECODE" }, { id: "NS_THE_NEXT_WEB" }, { id: "NS_THE_VERGE" }]
  }, {
    caption: "Science",
    items: [{ id: "NS_NATIONAL_GEOGRAPHIC" }, { id: "NS_NEW_SCIENTIST" }]
  }, {
    caption: "Music",
    items: [{ id: "NS_MTV_NEWS" }]
  }],
  items: {
    NS_BBC_SPORT: {
      type: "NS_BBC_SPORT",
      menuTitle: "BBC Sport",
      dialogType: "DialogType1",
      paneCaption: "BBC Sport",
      paneId: "bbc-sport",
      dialogProps: {
        caption: "BBC Sport",
        source: "bbc-sport"
      }
    },
    NS_ESPN: {
      type: "NS_ESPN",
      menuTitle: "ESPN",
      dialogType: "DialogType1",
      paneCaption: "ESPN",
      paneId: "espn",
      dialogProps: {
        caption: "ESPN Sport",
        source: "espn"
      }
    },
    NS_FOX_SPORTS: {
      type: "NS_FOX_SPORTS",
      menuTitle: "Fox SPORTS",
      dialogType: "DialogType1",
      paneCaption: "Fox SPORTS",
      paneId: "fox-sports",
      dialogProps: {
        caption: "Fox Sports",
        source: "fox-sports"
      }
    },
    NS_FOUR_FOUR_TWO: {
      type: "NS_FOUR_FOUR_TWO",
      menuTitle: "FourFourTwo",
      dialogType: "DialogType1",
      paneCaption: "FourFourTwo",
      paneId: "four-four-two",
      dialogProps: {
        caption: "FourFourTwo",
        source: "four-four-two"
      }
    },
    NS_FOOTBALL_ITALIA: {
      type: "NS_FOOTBALL_ITALIA",
      menuTitle: "FOOTBALL ITALIA",
      dialogType: "DialogType1",
      paneCaption: "FOOTBALL ITALIA",
      paneId: "football-italia",
      dialogProps: {
        caption: "FOOTBALL ITALIA",
        source: "football-italia"
      }
    },

    NS_ABC_NEWS: {
      type: "NS_ABC_NEWS",
      menuTitle: "ABC News (AU)",
      dialogType: "DialogType1",
      paneCaption: "ABC News (AU)",
      paneId: "abc-news-au",
      dialogProps: {
        caption: "ABC News (AU)",
        source: "abc-news-au"
      }
    },
    NS_BBC_NEWS: {
      type: "NS_BBC_NEWS",
      menuTitle: "BBC News",
      dialogType: "DialogType1",
      paneCaption: "BBC News",
      paneId: "bbc-news",
      dialogProps: {
        caption: "BBC News",
        source: "bbc-news"
      }
    },
    NS_GOOGLE_NEWS: {
      type: "NS_GOOGLE_NEWS",
      menuTitle: "Google News",
      dialogType: "DialogType1",
      paneCaption: "Google News",
      paneId: "google-news",
      dialogProps: {
        caption: "Google News",
        source: "google-news"
      }
    },
    NS_NEWSWEEK: {
      type: "NS_NEWSWEEK",
      menuTitle: "Newsweek",
      dialogType: "DialogType1",
      paneCaption: "Newsweek",
      paneId: "newsweek",
      dialogProps: {
        caption: "Newsweek",
        source: "newsweek"
      }
    },
    NS_NEW_YORK_MAGAZINE: {
      type: "NS_NEW_YORK_MAGAZINE",
      menuTitle: "New York Magazine",
      dialogType: "DialogType1",
      paneCaption: "New York Magazine",
      paneId: "new-york-magazine",
      dialogProps: {
        caption: "New York Magazine",
        source: "new-york-magazine"
      }
    },
    NS_THE_ECONOMIST: {
      type: "NS_THE_ECONOMIST",
      menuTitle: "The Economist",
      dialogType: "DialogType1",
      paneCaption: "The Economist",
      paneId: "the-economist",
      dialogProps: {
        caption: "The Economist",
        source: "the-economist"
      }
    },
    NS_TIME: {
      type: "NS_TIME",
      menuTitle: "TIME",
      dialogType: "DialogType1",
      paneCaption: "TIME",
      paneId: "time",
      dialogProps: {
        caption: "TIME",
        source: "time"
      }
    },
    NS_REUTERS: {
      type: "NS_REUTERS",
      menuTitle: "REUTERS",
      dialogType: "DialogType1",
      paneCaption: "REUTERS",
      paneId: "reuters",
      dialogProps: {
        caption: "REUTERS",
        source: "reuters"
      }
    },
    NS_ASSOCIATED_PRESS: {
      type: "NS_ASSOCIATED_PRESS",
      menuTitle: "ASSOCIATED PRESS",
      dialogType: "DialogType1",
      paneCaption: "ASSOCIATED PRESS",
      paneId: "associated-press",
      dialogProps: {
        caption: "ASSOCIATED PRESS",
        source: "associated-press"
      }
    },
    NS_INDEPENDENT: {
      type: "NS_INDEPENDENT",
      menuTitle: "INDEPENDENT",
      dialogType: "DialogType1",
      paneCaption: "INDEPENDENT",
      paneId: "independent",
      dialogProps: {
        caption: "INDEPENDENT",
        source: "independent"
      }
    },
    NS_THE_TELEGRAPH: {
      type: "NS_THE_TELEGRAPH",
      menuTitle: "The Telegraph",
      dialogType: "DialogType1",
      paneCaption: "The Telegraph",
      paneId: "the-telegraph",
      dialogProps: {
        caption: "The Telegraph",
        source: "the-telegraph"
      }
    },
    NS_METRO: {
      type: "NS_METRO",
      menuTitle: "Metro",
      dialogType: "DialogType1",
      paneCaption: "Metro",
      paneId: "metro",
      dialogProps: {
        caption: "Metro",
        source: "metro"
      }
    },

    NS_BUSINESS_INSIDER: {
      type: "NS_BUSINESS_INSIDER",
      menuTitle: "Business Insider",
      dialogType: "DialogType1",
      paneCaption: "Business Insider",
      paneId: "business-insider",
      dialogProps: {
        caption: "Business Insider",
        source: "business-insider"
      }
    },
    NS_BLOOMBERG: {
      type: "NS_BLOOMBERG",
      menuTitle: "BLOOMBERG",
      dialogType: "DialogType1",
      paneCaption: "BLOOMBERG",
      paneId: "bloomberg",
      dialogProps: {
        caption: "BLOOMBERG",
        source: "bloomberg"
      }
    },
    NS_FINANCIAL_TIMES: {
      type: "NS_FINANCIAL_TIMES",
      menuTitle: "Financial Times",
      dialogType: "DialogType1",
      paneCaption: "Financial Times",
      paneId: "financial-times",
      dialogProps: {
        caption: "Financial Times",
        source: "financial-times"
      }
    },
    NS_CNBC: {
      type: "NS_CNBC",
      menuTitle: "CNBC",
      dialogType: "DialogType1",
      paneCaption: "CNBC",
      paneId: "cnbc",
      dialogProps: {
        caption: "CNBC",
        source: "cnbc"
      }
    },

    NS_ARS_TECHNICA: {
      type: "NS_ARS_TECHNICA",
      menuTitle: "Ars Technica",
      dialogType: "DialogType1",
      paneCaption: "Ars Technica",
      paneId: "ars-technica",
      dialogProps: {
        caption: "Ars Technica",
        source: "ars-technica"
      }
    },
    NS_ENGADGET: {
      type: "NS_ENGADGET",
      menuTitle: "Engadget",
      dialogType: "DialogType1",
      paneCaption: "Engadget",
      paneId: "engadget",
      dialogProps: {
        caption: "Engadget",
        source: "engadget"
      }
    },
    NS_HACKER_NEWS: {
      type: "NS_HACKER_NEWS",
      menuTitle: "Hacker News",
      dialogType: "DialogType1",
      paneCaption: "Hacker News",
      paneId: "hacker-news",
      dialogProps: {
        caption: "Hacker News",
        source: "hacker-news"
      }
    },
    NS_TECHCRUNCH: {
      type: "NS_TECHCRUNCH",
      menuTitle: "TechCrunch",
      dialogType: "DialogType1",
      paneCaption: "TechCrunch",
      paneId: "techcrunch",
      dialogProps: {
        caption: "TechCrunch",
        source: "techcrunch"
      }
    },
    NS_TECHRADAR: {
      type: "NS_TECHRADAR",
      menuTitle: "TechRadar",
      dialogType: "DialogType1",
      paneCaption: "TechRadar",
      paneId: "techradar",
      dialogProps: {
        caption: "TechRadar",
        source: "techradar"
      }
    },
    NS_RECODE: {
      type: "NS_RECODE",
      menuTitle: "Recode",
      dialogType: "DialogType1",
      paneCaption: "Recode",
      paneId: "recode",
      dialogProps: {
        caption: "Recode",
        source: "recode"
      }
    },
    NS_THE_NEXT_WEB: {
      type: "NS_THE_NEXT_WEB",
      menuTitle: "The Next Web",
      dialogType: "DialogType1",
      paneCaption: "The Next Web",
      paneId: "the-next-web",
      dialogProps: {
        caption: "The Next Web",
        source: "the-next-web"
      }
    },
    NS_THE_VERGE: {
      type: "NS_THE_VERGE",
      menuTitle: "The Verge",
      dialogType: "DialogType1",
      paneCaption: "The Verge",
      paneId: "the-verge",
      dialogProps: {
        caption: "The Verge",
        source: "the-verge"
      }
    },

    NS_MTV_NEWS: {
      type: "NS_MTV_NEWS",
      menuTitle: "MTV News",
      dialogType: "DialogType1",
      paneCaption: "MTV News",
      paneId: "mtv-news",
      dialogProps: {
        caption: "MTV News",
        source: "mtv-news"
      }
    },

    NS_NATIONAL_GEOGRAPHIC: {
      type: "NS_NATIONAL_GEOGRAPHIC",
      menuTitle: "NATIONAL GEOGRAPHIC",
      dialogType: "DialogType1",
      paneCaption: "NATIONAL GEOGRAPHIC",
      paneId: "national-geographic",
      dialogProps: {
        caption: "NATIONAL GEOGRAPHIC",
        source: "national-geographic"
      }
    },
    NS_NEW_SCIENTIST: {
      type: "NS_NEW_SCIENTIST",
      menuTitle: "NEW SCIENTIST",
      dialogType: "DialogType1",
      paneCaption: "NEW SCIENTIST",
      paneId: "new-scientist",
      dialogProps: {
        caption: "NEW SCIENTIST",
        source: "new-scientist"
      }
    }

  }
};

exports.default = NewsSourceMenu;
//# sourceMappingURL=D:\_Dev\_React\_News\js\conf\NewsSourceMenu.js.map