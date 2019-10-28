import React, { Component } from 'react'

import toFirstUpperCase from '../../utils/toFirstUpperCase'

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

const _CATEGORY = [
  'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
]
, CATEGORY_OPTIONS = _CATEGORY.map(str => ({
    caption: toFirstUpperCase(str),
    value: str
  }))
, DF_CATEGORY = CATEGORY_OPTIONS[0]
, COUNTRY_OPTIONS = [
   { caption: "Argentina", value: "ar" },
   { caption: "Australia", value: "au" },
   { caption: "Austria", value: "at" },
   { caption: "Belguim", value: "be" },
   { caption: "Brazil", value: "br" },
   { caption: "Bulgaria", value: "bg" },
   { caption: "Canada", value: "ca" },
   { caption: "China", value: "cn" },
   { caption: "Colombia", value: "co" },
   { caption: "Cuba", value: "cu" },
   { caption: "Czechia", value: "cz" },
   { caption: "Egypt", value: "eg" },
   { caption: "France", value: "fr" },
   { caption: "Germany", value: "de" },
   { caption: "Greece", value: "gr" },
   { caption: "Hong Kong", value: "hk" },
   { caption: "Hungary", value: "hu" },
   { caption: "India", value: "in" },
   { caption: "Indonesia", value: "id" },
   { caption: "Ireland", value: "ie" },
   { caption: "Israel", value: "il" },
   { caption: "Italy", value: "it" },
   { caption: "Japan", value: "jp" },
   { caption: "Latvia", value: "lv" },
   { caption: "Lithuania", value: "lt" },
   { caption: "Malaysia", value: "my" },
   { caption: "Mexico", value: "mx" },
   { caption: "Morocco", value: "ma" },
   { caption: "Netherlands", value: "nl" },
   { caption: "New Zealand", value: "nz" },
   { caption: "Nigeria", value: "ng" },
   { caption: "Norway", value: "no" },
   { caption: "Phillipines", value: "ph" },
   { caption: "Poland", value: "pl" },
   { caption: "Portugal", value: "pt" },
   { caption: "Romania", value: "ro" },
   { caption: "Russian Federation", value: "ru" },
   { caption: "Saudi Arabia", value: "sa" },
   { caption: "Serbia", value: "rs" },
   { caption: "Singapore", value: "sg" },
   { caption: "Slovakia", value: "sk" },
   { caption: "Slovenia", value: "si" },
   { caption: "South Africa", value: "za" },
   { caption: "South Korea", value: "kr" },
   { caption: "Sweden", value: "se" },
   { caption: "Switzerland", value: "ch" },
   { caption: "Taiwan", value: "tw" },
   { caption: "Thailand", value: "th" },
   { caption: "Turkey", value: "tr" },
   { caption: "Ukraine", value: "ua" },
   { caption: "United Arab Emirates", value: "ae" },
   { caption: "United Kingdom", value: "gb" },
   { caption: "United States of America", value: "us" },
   { caption: "Venezuala", value: "ve" }
  ]
, DF_COUNTRY = COUNTRY_OPTIONS[52];

@withKeyDown
class NewsApiTopDialog extends Component {
  constructor(props){
    super(props)
    this.category = DF_CATEGORY.value
    this.country = DF_COUNTRY.value
    this._handleKeyDownWith = this._handleKeyDownWith.bind(this)
  }

  _selectCategory = (option) => {
    this.category = option
       ? option.value
       : void 0
  }

  _selectCountry = (option) => {
    this.country = option
       ? option.value
       : void 0
  }

  _handleLoad = () => {
    const {
      type, source, itemConf,
      onLoad
    } = this.props;

    onLoad({
      type, source, itemConf,
      loadId: 'NT',
      category: this.category,
      country: this.country
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
           caption="NewsApi Top By"
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
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
             caption="Country"
             initItem={DF_COUNTRY}
             options={COUNTRY_OPTIONS}
             styleConfig={TS.SELECT}
             onSelect={this._selectCountry}
           />
         </div>
        <A.Link.PoweredBy rootStyle={S.POWERED_BY}>
          <A.Link.NewsApi />
        </A.Link.PoweredBy>
      </A.DraggableDialog>
    );
  }
}

export default withTheme(NewsApiTopDialog)
