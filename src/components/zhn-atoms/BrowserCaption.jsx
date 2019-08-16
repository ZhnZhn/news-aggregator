import React from 'react'

import SvgMore from './SvgMore'
import SvgClose from './SvgClose'

const CL_GAP = "gap-right";

const S = {
  ROOT: {
    position: 'relative',
    backgroundColor: '#3f5178',
    color: 'rgba(164, 135, 212, 1)',
    lineHeight: '1.8',
    paddingTop: '4px',
    paddingLeft: '10px',
    paddingRight: '42px',
    marginBottom: '10px',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'clip'
  },
  CAPTION: {
    //color: '#9e9e9e',
    //color: '#8a8a8a',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  BT_MORE: {
    marginRight: '6px'
  },
  SVG_MORE: {
    fill: 'inherit',
    stroke: 'inherit'
    //fill: 'silver',
    //stroke: 'silver'
  },
  SVG_CLOSE: {
    position: 'absolute',
    top: '6px',
    right: 0,
    width: '24px',
    height: '24px'
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
    <SvgClose
      style={S.SVG_CLOSE}
      onClose={onClose}
    />
  </div>
);

export default BrowserCaption
