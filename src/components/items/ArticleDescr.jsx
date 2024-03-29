import { DP_CLOSE_RIGHT } from '../DP';
import { CL_SELECT_NONE } from '../crStyle';

import SafeLink from '../zhn-atoms/SafeLink';
import {
  TextDiv,
  TextSpan
} from '../zhn-atoms/TextToken';
import SvgX from '../zhn-atoms/SvgX';

const CL_DIV = "link-wrapper"
, S_FONT = {
   color: '#121212',
   fontSize: '1rem',
   fontWeight: 'bold',
   wordBreak: 'break-word'
}
, S_DESCR = {
   ...S_FONT,
   display: 'block',
   lineHeight: 1.4,
   padding: '8px 16px 4px 12px',
   whiteSpace: "pre-line",
}
, S_RELATED = {
   ...S_FONT,
   lineHeight: 1.6,
   padding: '0 16px 0 12px',
}
, S_FLEX_SPACE_BETWEEN = {
   display: 'flex',
   justifyContent: 'space-between',
}
, S_AUTHOR_ROW = {
   ...S_FLEX_SPACE_BETWEEN,
   padding: '8px 12px 0 12px',
}
, S_BOTTOM_ROW = {
   ...S_FLEX_SPACE_BETWEEN,
   padding: '0 12px 6px 12px',
}
, S_DATE = {
   color: 'gray',
   fontWeight: 'bold'
}
, S_AUTHOR = {
   ...S_DATE,
   paddingRight: 16,
}
, S_PT_8 = { paddingTop: 8};


const ArticleDescr = ({
  href,
  description,
  related,
  publishedAt,
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
      <TextSpan
         style={S_DATE}
         text={timeAgo}
      />
    </div>
    {href ? (
       <SafeLink
         className={CL_DIV}
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
      <TextDiv
        className={CL_SELECT_NONE}
        style={S_RELATED}
        text={related}
      />
      <div style={S_BOTTOM_ROW}>
        <SvgX
          dataPos={DP_CLOSE_RIGHT}
          onClick={onClose}
        />
        <TextSpan
          className={CL_SELECT_NONE}
          style={S_DATE}
          text={publishedAt}
        />
      </div>
    </div>
  </>
);


export default ArticleDescr
