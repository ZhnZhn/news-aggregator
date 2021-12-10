import { useContext } from 'react';

import ThemeContext  from './ThemeContext';

const useTheme = styleConfig => useContext(ThemeContext)
 .createStyle(styleConfig);

export default useTheme
