import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import A from '../Comp'

import withKeyDown from './decorators/withKeyDown'

const S = {
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};

const FEED_OPTIONS = [
  { caption: 'All', value: 'ALL_NEWS_FEEDS' },
  { caption: 'Decrypt', value: 'decrypt' },
  { caption: 'CoinDesk', value: 'coindesk' },
  { caption: 'CoinTelegraph', value: 'cointelegraph' },
  { caption: 'CryptoCompare', value: 'cryptocompare' },
]
, DF_FEED = FEED_OPTIONS[0]
, CATEGORY_OPTIONS = [
  { caption: 'All', value: 'ALL_NEWS_CATEGORIES' },
  { caption: 'Altcoin', value: 'Altcoin' },
  { caption: 'Asia', value: 'Asia' },
  { caption: 'Blockchain', value: 'Blockchain' },
  { caption: 'Business', value: 'Business' },
  { caption: 'Commodity', value: 'Commodity' },
  { caption: 'Exchange', value: 'Exchange' },
  { caption: 'Fiat', value: 'Fiat' },
  { caption: 'ICO', value: 'ICO' },
  { caption: 'Market', value: 'Market' },
  { caption: 'Mining', value: 'Mining' },
  { caption: 'Regulation', value: 'Regulation' },
  { caption: 'Trading', value: 'Trading' },
  { caption: 'Technology', value: 'Technology' },
  { caption: 'Sponsored', value: 'Sponsored' },
  { caption: 'Wallet', value: 'Wallet' },
]
, DF_CATEGORY = CATEGORY_OPTIONS[0]
, SORTBY_OPTIONS = [
  {caption: 'Latest', value: 'latest'},
  {caption: 'Popular', value: 'popular'},
], DF_SORTBY = SORTBY_OPTIONS[0]
, _getValue = item => item.value
, _fSelect = (comp, propName) => (option) => {
    comp[propName] = option
      ? option.value
      : void 0
};


@withKeyDown
class CryptoCompareNewsDialog extends Component {
  constructor(props){
    super(props)
    this.feed = _getValue(DF_FEED)
    this.category = _getValue(DF_CATEGORY)
    this.sortBy = _getValue(DF_SORTBY)
    this._selectFeed = _fSelect(this, 'feed')
    this._selectCategory = _fSelect(this, 'category')
    this._selectSortBy = _fSelect(this, 'sortBy')
    this._handleKeyDownWith = this._handleKeyDownWith.bind(this)
  }


  _handleLoad = () => {
    const {
      type, source, itemConf,
      onLoad
    } = this.props;

    onLoad({
      type, source, itemConf,
      loadId: 'CCN',
      feed: this.feed,
      category: this.category,
      sortOrder: this.sortBy
    })
  }

  _handleClose = () => {
    this.dialogComp.focusPrevEl()
    this.props.onClose()
  }

  _createCommandButtons = (S) => {
    return [
      <A.RaisedButton
        rootStyle={S.RAISED_ROOT}
        clDiv={S.CL_RAISED_DIV}
        caption="Load"
        isPrimary={true}
        onClick={this._handleLoad}
      />
    ];
  }

  _refDialogComp = comp => this.dialogComp = comp

  render(){
    const { isShow, theme, onShow } = this.props
         , TS = theme.createStyle(styleConfig)
         , _commandButtons = this._createCommandButtons(TS.BT);

    return (
      <A.DraggableDialog
           ref={this._refDialogComp}
           rootStyle={TS.R_DIALOG}
           browserCaptionStyle={TS.BROWSER_CAPTION}
           styleButton={TS.BT}
           caption="CryptoCompare News"
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
         <div>
           <A.InputSelect
             caption="Feed"
             initItem={DF_FEED}
             options={FEED_OPTIONS}
             styleConfig={TS.SELECT}
             onSelect={this._selectFeed}
           />
         </div>
         <div>
           <A.InputSelect
             caption="Category"
             initItem={DF_CATEGORY}
             options={CATEGORY_OPTIONS}
             styleConfig={TS.SELECT}
             onSelect={this._selectCategory}
           />
         </div>
         <div>
           <A.InputSelect
             caption="SortBy"
             initItem={DF_SORTBY}
             options={SORTBY_OPTIONS}
             styleConfig={TS.SELECT}
             onSelect={this._selectSortBy}
           />
         </div>
        <A.Link.PoweredBy rootStyle={S.POWERED_BY}>
          <A.Link.CryptoCompare />
        </A.Link.PoweredBy>
      </A.DraggableDialog>
    );
  }
}

export default withTheme(CryptoCompareNewsDialog)
