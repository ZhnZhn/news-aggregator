import useTheme from '../hooks/useTheme';

import styleConfig from './NewsBrowser.Style';

import DynamicMenuBrowser from '../zhn-moleculs/DynamicMenuBrowser';
import { PoweredByNewsApi } from '../links/PoweredByLink';

const NewsBrowser = ({
  browserId,
  useMsBrowser,
  onClick,
  onError,
  onRemoveBadges
}) => {
  const TS = useTheme(styleConfig);

  return (
    <DynamicMenuBrowser
       styleConfig={TS}
       caption="News Sources"
       url="data/news-source-menu.json"
       browserId={browserId}
       useMsBrowser={useMsBrowser}
       onClick={onClick}
       onError={onError}
    >
       <PoweredByNewsApi />
    </DynamicMenuBrowser>
  );
}

export default NewsBrowser
