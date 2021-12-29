import splitByParagraph from './splitByParagraph';
import decodeHTMLEntities from './decodeHTMLEntities';

const crDescription = (
  str,
  maxLength
) => splitByParagraph(decodeHTMLEntities(str), maxLength)

export default crDescription
