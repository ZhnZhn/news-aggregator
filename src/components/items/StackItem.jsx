import React, { Component } from 'react'

import SvgClose from '../zhn-atoms/SvgClose'

const S = {
  ROOT: {
    position: 'relative',
    backgroundColor: '#404040',
    fontWeight: 'bold',
    paddingTop: '8px',
    paddingLeft: '16px',
    paddingBottom: '16px',
    lineHeight: 1.5,
    width: '100%',
    marginBottom: '5px',
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px'
  },
  SVG_CLOSE: {
    float: 'none',
    position: 'absolute',
    top: '8px',
    right: '0px'
  },
  LINK: {
    display: 'block',
    paddingBottom: '8px'
  },
  SPAN_VERSION : {
    color: '#80c040',
    paddingLeft : '10px',
    paddingRight : '10px'
  },
  BTN_CIRCLE : {
    marginLeft: '10px'
  },
  SPAN_TAG : {
    display: 'inline-block',
    color: 'black',
    backgroundColor: 'gray',
    paddingTop: '4px',
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingBottom: '4px',
    marginLeft: '8px',
    marginRight: '8px',
    marginTop: '6px',
    marginBottom: '2px',
    borderRadius: '16px'
  },

  PURPLE_BADGE : {
    color: '#a487d4', fontSize: '18px', paddingRight: '8px'
  },
  GREEN_BADGE : {
    color: '#80c040', fontSize: '18px', paddingRight: '8px'
  },
  BLACK_BAGDE : {
    color: 'black', fontSize: '18px', paddingRight: '8px'
  }
}

class StackItem extends Component {
  constructor(props){
    super()
    this.state = {
      isClosed: false
    }
  }

  _handleClose = () => {
    const { onCloseItem, item } = this.props;
    onCloseItem(item)
    this.setState({ isClosed: true })
  }

  _renderTags(tags){
    return tags.map((tag, index) => {
       return (
         <span key={index} style={S.SPAN_TAG}>
            {tag}
         </span>
       );
    })
  }

  render(){
    const { item } = this.props
        , {
            answer_count, score, view_count,
            title,
            //dateAgo,
            link, owner, tags
          } = item
        , { reputation, display_name } = owner
        , { isClosed } = this.state
        , _rootStyle = (isClosed)
              ? { display: 'none' }
              : undefined;
    return (
      <div style={{ ...S.ROOT, ..._rootStyle }}>
        <div style={{ paddingBottom: '8px' }}>
            <span style={S.PURPLE_BADGE}>
              &#9874;&nbsp;{answer_count}
            </span>
            <span style={S.GREEN_BADGE}>
              &#9918;&nbsp;{score}
            </span>
            <span style={S.BLACK_BAGDE}>
              &#9784;&nbsp;{view_count}
            </span>
            <span style={S.GREEN_BADGE}>
              &#9752;&nbsp;{reputation}
            </span>
            <span style={S.BLACK_BAGDE}>
              {display_name}
            </span>
            {/*
            <DateAgo
               dateAgo={dateAgo}
               date={""}
            />
           */}
           <SvgClose
              style={S.SVG_CLOSE}
              onClose={this._handleClose}
           />
          </div>
          <a
            className="wrapper-link"
            style={S.LINK}
            href={link}
          >
            <div>
              {title}
            </div>
            <div>
              {this._renderTags(tags)}
            </div>
          </a>
      </div>
    );
  }
}

export default StackItem
