import React from 'react'

const S = {
  SVG: {
    display: 'inline-block',
    color: 'black',
    //color: 'rgb(255, 255, 255)',
    //fill: 'inherit',
    fill: 'black',
    height: '24px',
    width: '24px',
    userSelect: 'none',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  }
}

const ArrowCell = () =>
  <svg viewBox="0 0 24 24" style={S.ROOT}>
    <path d="M7 10l5 5 5-5z">
    </path>
  </svg>

export default ArrowCell
