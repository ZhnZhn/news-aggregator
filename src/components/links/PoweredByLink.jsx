import fPoweredBy from './fPoweredBy';
import {
  NewsApiLink,
  WebzLink
} from './Links';

export const PoweredByNewsApi = fPoweredBy(NewsApiLink)
export const PoweredByWebzLink = fPoweredBy(WebzLink)
