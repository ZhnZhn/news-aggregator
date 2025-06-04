import { isNumber } from '../utils/isTypeFn';
import { splitByParagraph } from '../utils/splitByParagraph';
import { decodeHTMLEntities } from '../utils/decodeHTMLEntities';

export const toMls = sec => isNumber(sec)
  ? sec*1000
  : void 0

const MLS_FREQUENCY_RESTRICTION = 15000;
export const updateNextPage = (
  option,
  mlsFr
) => {
  if (!option._nextPage) {
   option._nextPage = 1
  }
  option._nextPage += 1
  option._mlsFr = mlsFr || MLS_FREQUENCY_RESTRICTION
}

export const crTitle = (
  title
) => decodeHTMLEntities(title)

export const crDescription = (
  str,
  maxLength
) => splitByParagraph(decodeHTMLEntities(str), maxLength)
