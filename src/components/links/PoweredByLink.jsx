import fPoweredBy from './fPoweredBy';
import {
  NewsApiLink,
  StackOverflowLink,
  WebzLink
} from './Links';

export const PoweredByNewsApi = fPoweredBy(NewsApiLink)
export const PoweredByStackOverflow = fPoweredBy(StackOverflowLink)
export const PoweredByWebzLink = fPoweredBy(WebzLink)
