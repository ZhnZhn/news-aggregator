import {
  crSelectOptions
} from '../zhn-m-input/OptionFn';

const _CATEGORIES = [
  'all',
  'general',
  'science',
  'sports',
  'business',
  'health',
  'tech',
  'politics',
  'food',
  'travel'
];

export const CATEGORY_OPTIONS = crSelectOptions(_CATEGORIES)
