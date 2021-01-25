import { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'
import A from '../Comp'
import Decors from './decorators/Decors'

const NEWS_FOR_OPTIONS = [
{caption: "Latest", value: "latest"},
{caption: "Handpicked", value: "handpicked"},
{caption: "Trending", value: "trending"},
{caption: "Bullish", value: "bullish"},
{caption: "Bearish", value: "bearish"}
]
, DF_FILTER = NEWS_FOR_OPTIONS[0];


@Decors.withDecors
class CoinStatsDialog extends Component {
  constructor(props){
    super(props)
    this._initWithDecors(this)
  }

  _selectNewsAbout = (option) => {
    this._filter = option
       ? option.value
       : void 0
  }

  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props

    onLoad({
      type, source, itemConf,
      loadId: 'CS',
      filter: this._filter
    })
    this._handleClose()
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
           caption="CoinStats News"
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >

         <A.InputSelect
           caption="News filter"
           initItem={DF_FILTER}
           options={NEWS_FOR_OPTIONS}
           styleConfig={TS.SELECT}
           onSelect={this._selectNewsAbout}
         />
        <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
          <A.Link.CoinStats />
        </A.Link.PoweredBy>
      </A.DraggableDialog>
    );
  }
}

export default withTheme(CoinStatsDialog)
