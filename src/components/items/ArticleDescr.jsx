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

const ArticleDescr = (props) => (
  <>
    <div style={S_AUTHOR_ROW}>
      <TextSpan
         style={S_AUTHOR}
         text={props.author}
      />
      <time
        style={S_DATE}
        datetime={props.datetime}
      >
        {props.timeAgo}
      </time>
    </div>
    {props.href ? (
       <SafeLink
         className={CL_LINK_WRAPPER}
         style={S_DESCR}
         href={props.href}
         onKeyDown={props.onKeyDown}
        >
          {props.description}
        </SafeLink>
       ) : (
        <div style={S_DESCR}>
         {props.description}
        </div>
      )
    }
    <div style={S_PT_8}>
      <RelatedDiv
        related={props.related}
        commentsUrl={props.commentsUrl}
        commentsTitle={props.commentsTitle}
      />
      <div style={S_BOTTOM_ROW}>
        <SvgX
          dataPos={DP_CLOSE_RIGHT}
          onClick={props.onClose}
        />
        <time
          className={CL_SELECT_NONE}
          style={S_DATE}
          datetime={props.datetime}
        >
          {props.publishedAt}
        </time>
      </div>
    </div>
  </>
);


export default ArticleDescr
