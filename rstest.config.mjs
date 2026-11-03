import { defineConfig } from '@rstest/core';

const _crIncludeDir = (
 token
) => `<rootDir>/src/${token}/__tests__/*.test.js`
, _crInclude = (...tokens) => tokens.map(_crIncludeDir);

export default defineConfig({
  globals: true,

  include: _crInclude(
    'adapters', 
    'utils'
  )  
});