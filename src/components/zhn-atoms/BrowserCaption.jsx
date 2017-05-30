import React from 'react'

import SvgClose from './SvgClose'

const S = {
  ROOT: {
    //backgroundColor: '#232F3B',
    //backgroundColor: '#3f51b5',
    backgroundColor: '#3f5178',
    color: 'rgba(164, 135, 212, 1)',
    lineHeight: '1.8',
    paddingTop: '4px',
    paddingLeft: '10px',
    marginBottom: '10px',
    marginRight: '-2px',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px'
  },
  CAPTION: {
    //color: '#9e9e9e',
    color: '#8a8a8a',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  SVG_CLOSE: {
    width: '24px',
    height: '24px',
    position: 'relative',
    top: '3px'
  }
}

const BrowserCaption = ({ caption, children, onClose }) => (
  <div style={S.ROOT}>
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
