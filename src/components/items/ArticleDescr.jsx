import { DP_CLOSE_RIGHT } from '../DP';

import SafeLink from '../zhn/SafeLink';
import { TextSpan } from '../zhn/TextToken';
import SvgX from '../zhn/SvgX';
import RelatedDiv from './RelatedDiv';

import {
  CL_SELECT_NONE,
  CL_LINK_WRAPPER,
  S_DESCR,
  S_AUTHOR_ROW,
  S_BOTTOM_ROW,
  S_DATE,
  S_AUTHOR,
  S_PT_8
} from './ArticleDescr.Style';

const ArticleDescr = ({
  href,
  description,
  related,
  commentsUrl,
  commentsTitle,
  publishedAt,
  datetime,
  timeAgo,
  author,
  onKeyDown,
  onClose
}) => (
  <>
    <div style={S_AUTHOR_ROW}>
      <TextSpan
         style={S_AUTHOR}
         text={author}
      />
      <time
        style={S_DATE}
        datetime={datetime}
      >
        {timeAgo}
      </time>
    </div>
    {href ? (
       <SafeLink
         className={CL_LINK_WRAPPER}
         style={S_DESCR}
         href={href}
         onKeyDown={onKeyDown}
        >
          {description}
        </SafeLink>
       ) : (
        <div style={S_DESCR}>
         {description}
        </div>
      )
    }
    <div style={S_PT_8}>
      <RelatedDiv
        related={related}
        commentsUrl={commentsUrl}
        commentsTitle={commentsTitle}
      />
      <div style={S_BOTTOM_ROW}>
        <SvgX
          dataPos={DP_CLOSE_RIGHT}
          onClick={onClose}
        />
        <time
          className={CL_SELECT_NONE}
          style={S_DATE}
          datetime={datetime}
        >
          {publishedAt}
        </time>
      </div>
    </div>
  </>
);


export default ArticleDescr
