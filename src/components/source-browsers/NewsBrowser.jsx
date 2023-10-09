import DynamicMenuBrowser from '../zhn-moleculs/DynamicMenuBrowser';
import { PoweredByNewsApi } from '../links/PoweredByLink';

const NewsBrowser = ({
  browserId,
  useMsBrowser,
  onClick,
  onError,
  onRemoveBadges
}) => (
  <DynamicMenuBrowser
     caption="NewsApi.org Browser"
     url="data/news-source-menu.json"
     browserId={browserId}
     useMsBrowser={useMsBrowser}
     onClick={onClick}
     onError={onError}
  >
     <PoweredByNewsApi />
  </DynamicMenuBrowser>
);


export default NewsBrowser
