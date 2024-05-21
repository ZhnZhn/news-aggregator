import SafeLink from '../zhn/SafeLink';

import {
  CL_SELECT_NONE,
  CL_LINK_WRAPPER,
  S_RELATED_DIV,
  S_RELATED,
  S_COMMENTS_LINK
} from './ArticleDescr.Style';

const RelatedDiv = ({
  related,
  commentsUrl,
  commentsTitle
}) => (commentsUrl || commentsTitle) && (
  <div className={CL_SELECT_NONE} style={S_RELATED_DIV}>
    <span style={S_RELATED}>{related}</span>
    <SafeLink
      className={CL_LINK_WRAPPER}
      style={S_COMMENTS_LINK}
      href={commentsUrl}
      fallback={<span>{commentsTitle}</span>}
    >
      {commentsTitle}
    </SafeLink>
  </div>
);

export default RelatedDiv
