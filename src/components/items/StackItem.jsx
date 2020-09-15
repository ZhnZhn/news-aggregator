import React, { Component } from 'react'

import has from '../has'

import withTheme from '../hoc/withTheme'
import styleConfig from './Article.Style'

import SvgX from '../zhn-atoms/SvgX'
import withDnD from './decorators/withDnD'

const CL_WRAPPER = "link-wrapper";

const { HAS_TOUCH } = has;

const _S = {
  BADGE: {
    display: 'inline-block',
    paddingRight: 8,
    fontSize: '1.125rem',
  }
};
const S = {
  NONE: {
    display: 'none'
  },
  ROOT: {
    position: 'relative',
    backgroundColor: '#404040',
    fontWeight: 'bold',
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 16,
    lineHeight: 1.5,
    width: '100%',
    marginBottom: 5,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  SVG_CLOSE: {
    float: 'none',
    position: 'absolute',
    top: 8,
    right: 0
  },
  ITEM_CAPTION: {
    paddingBottom: 8
  },
  LINK: {
    display: 'block',
    paddingBottom: 8
  },
  SPAN_VERSION : {
    color: '#80c040',
    paddingLeft : 10,
    paddingRight : 10
  },
  BTN_CIRCLE : {
    marginLeft: 10
  },
  SPAN_TAG : {
    display: 'inline-block',
    color: 'black',
    backgroundColor: 'gray',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 6,
    marginBottom: 2,
    borderRadius: 16
  },
  FISH_BADGE: {
    ..._S.BADGE,
    color: '#d7bb52'
  },
  GREEN_BADGE : {
    ..._S.BADGE,
    color: '#80c040',
  },
  BLACK_BADGE : {
    ..._S.BADGE,
    color: 'black'
  }
};

const TOKEN_ANSWER = HAS_TOUCH ? 'A' : (
  <span role="img" arial-label="hammer and pick">&#x2692;</span>
);
const TOKEN_SCORE = HAS_TOUCH ? 'S' : (
  <span role="img" aria-label="fish">&#x1F41F;</span>
);
const TOKEN_VIEW = HAS_TOUCH ? 'V' : (
  <span role="img" aria-label="wheel of dharma">&#x2638;</span>
);
const TOKEN_REPUTATION = HAS_TOUCH ? 'R' : (
  <span role="img" arial-label="shamrock">&#x2618;</span>
);

@withDnD
class StackItem extends Component {

  static defaultProps = {
    onRemoveUnder: () => {},
    onRemoveItem: () => {}
  }

  constructor(props){
    super(props)

    this._itemHandlers = this._crDnDHandlers()

    this.state = {
      isClosed: false
    }
  }

  _handleClose = () => {
    const { onCloseItem, item } = this.props;
    onCloseItem(item)
    this.setState({ isClosed: true })
  }

  _renderTags(tags, TS){
    return tags.map((tag, index) => {
       return (
         <span key={index} style={{ ...S.SPAN_TAG, ...TS.DESCR }}>
            {tag}
         </span>
       );
    })
  }

  render(){
    const { item, theme } = this.props
        , TS = theme.createStyle(styleConfig)
        , {
            is_answered,
            answer_count, score, view_count,
            title,
            //dateAgo,
            link, owner, tags
          } = item
        , { reputation, display_name } = owner
        , { isClosed } = this.state
        , _rootStyle = isClosed
              ? S.NONE
              : void 0;
    return (
      <div
        style={{ ...S.ROOT, ..._rootStyle, ...TS.HEADER }}
        {...this._itemHandlers}
      >
        <div style={S.ITEM_CAPTION}>
            <span style={is_answered ? S.GREEN_BADGE : S.FISH_BADGE}>
              {TOKEN_ANSWER}&nbsp;{answer_count}
            </span>
            <span style={S.FISH_BADGE}>
              {TOKEN_SCORE}&nbsp;{score}
            </span>
            <span style={S.BLACK_BADGE}>
              {TOKEN_VIEW}&nbsp;{view_count}
            </span>
            <span style={S.GREEN_BADGE}>
              {TOKEN_REPUTATION}&nbsp;{reputation}
            </span>
            <span style={S.BLACK_BADGE}>
              {display_name}
            </span>
            {/*
            <DateAgo
               dateAgo={dateAgo}
               date={""}
            />
           */}
           <SvgX
              style={S.SVG_CLOSE}
              onClick={this._handleClose}
           />
          </div>
          <a
            className={CL_WRAPPER}
            style={S.LINK}
            href={link}
          >
            <div>
              {title}
            </div>
            <div>
              {this._renderTags(tags, TS)}
            </div>
          </a>
      </div>
    );
  }
}

export default withTheme(StackItem)
