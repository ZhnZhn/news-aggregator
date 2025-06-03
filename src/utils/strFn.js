import { isStr } from "./isTypeFn";

export const toLowerCase = (
  v
) => isStr(v)
  ? v.toLowerCase()
  : ""

export const trimStr = (
  v
) => isStr(v)
  ? v.trim()
  : ""

export const replaceAllBlankByNbsp = v => isStr(v)
  ? v.replaceAll(" ", "\u00A0")
  : ""

export const getNotEmpty = (
  str
) => isStr(str) && str !== ""
  ? str
  : void 0
