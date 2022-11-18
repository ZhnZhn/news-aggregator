import fPoweredBy from './fPoweredBy';
import {
  NewsApiLink,
  TheNewsApiLink,
  StackOverflowLink,
  WebzLink
} from './Links';

export const PoweredByNewsApi = fPoweredBy(NewsApiLink)
export const PoweredByTheNewsApi = fPoweredBy(TheNewsApiLink)
export const PoweredByStackOverflow = fPoweredBy(StackOverflowLink)
export const PoweredByWebzLink = fPoweredBy(WebzLink)
