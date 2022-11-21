import {
  getItemValue,
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
]

export const CATEGORY_OPTIONS = crSelectOptions(_CATEGORIES)
export const DF_CATEGORY = CATEGORY_OPTIONS[0]
export const INITIAL_CAREGORY_VALUE = getItemValue(DF_CATEGORY)
