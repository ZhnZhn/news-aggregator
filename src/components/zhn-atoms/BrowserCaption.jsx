import React from 'react'

import SvgMore from './SvgMore'
import SvgX from './SvgX'

const CL_GAP = "gap-right";

const S = {
  ROOT: {
    position: 'relative',
    backgroundColor: '#3f5178',
    color: 'rgba(164, 135, 212, 1)',
    lineHeight: 1.8,
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 42,
    marginBottom: 10,
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'clip'
  },
  CAPTION: {
    fontSize: '1.125rem',
    fontWeight: 'bold'
  },
  BT_MORE: {
    marginRight: 6
  },
  SVG_MORE: {
    fill: 'inherit',
    stroke: 'inherit'
  },
  SVG_CLOSE: {
    position: 'absolute',
    top: 6,
    right: 0,
    width: 24,
    height: 24
  }
}

const _isFn = fn => typeof fn === "function";

const BrowserCaption = ({ rootStyle, caption, children, onMore, onClose }) => (
  <div className={CL_GAP} style={{...S.ROOT, ...rootStyle}}>
    {
       _isFn(onMore) &&
       <SvgMore
          style={S.BT_MORE}
          svgStyle={S.SVG_MORE}
          onClick={onMore}
       />
     }
    <span
       className="not-selected"
       style={S.CAPTION}
    >
       {caption}
    </span>
    {children}
    <SvgX
      style={S.SVG_CLOSE}
      onClick={onClose}
    />
  </div>
);

export default BrowserCaption
