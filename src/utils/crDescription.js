import splitByParagraph from './splitByParagraph';
import decodeHTMLEntities from './decodeHTMLEntities';

export const crDescription = (
  str,
  maxLength
) => splitByParagraph(decodeHTMLEntities(str), maxLength)
