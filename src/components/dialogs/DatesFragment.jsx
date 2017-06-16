import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InputDate from '../zhn-atoms/InputDate'

const STYLE = {
  ROW_DIV : {
    margin: '5px'
  },
  LABEL_SPAN : {
    color: 'black',
    display: 'inline-block',
    textAlign: 'right',
    width: '110px',
    paddingRight: '5px',
    fontSize: '16px',
    fontWeight: 'bold'
  }
}

const ERROR_FORMAT = "YYYY-MM-DD format must be"
    , FROM_DATE = "From Date"
    , TO_DATE = "To Date"
    , ERROR_FROM_NEAR_TO = "From Date is near that To Date";

class DatesFragment extends Component {
  static propTypes = {
    initFromDate: PropTypes.string,
    initToDate: PropTypes.string,
    onTestDate: PropTypes.func,
    msgOnNotValidFormat: PropTypes.func
  }
  static defaultProps = {
    msgOnNotValidFormat : (item) => `${item} is not in valid format`
  }

  render(){
    const { initFromDate, initToDate, onTestDate } = this.props;
    return (
        <div>
          <div style={STYLE.ROW_DIV}>
            <span style={STYLE.LABEL_SPAN}>
               From Date:
            </span>
            <InputDate
               ref={c => this.fromDate = c}
               initValue={initFromDate}
               errorMsg={ERROR_FORMAT}
               onTest={onTestDate}
            />
         </div>
         <div style={STYLE.ROW_DIV}>
            <span style={STYLE.LABEL_SPAN}>
              To Date:
            </span>
            <InputDate
                 ref={c => this.toDate = c}
                 initValue={initToDate}
                 errorMsg={ERROR_FORMAT}
                 onTest={onTestDate}
            />
         </div>
       </div>
    );
  }

  getValues(){
    return {
      fromDate: this.fromDate.getValue(),
      toDate: this.toDate.getValue()
    };
  }

  setValues(fromDate, toDate){
     this.fromDate.setValue(fromDate)
     this.toDate.setValue(toDate)
  }

  getValidation(){
    const { msgOnNotValidFormat } = this.props
        ,  datesMsg = [];
    if (!this.fromDate.isValid()) { datesMsg.push(msgOnNotValidFormat(FROM_DATE)) }
    if (!this.toDate.isValid())   { datesMsg.push(msgOnNotValidFormat(TO_DATE)) }

    if (this.fromDate.getValue().trim() > this.toDate.getValue().trim() ) {
      datesMsg.push(ERROR_FROM_NEAR_TO)
    }

    if (datesMsg.length>0){
      return { isValid: false, datesMsg };
    }
    return { isValid : true };
  }

  focusInput(){
    this.fromDate.focusInput()
  }

  focusNotValidInput(){
    if (!this.fromDate.isValid()){
       this.fromDate.focusInput()
       return true;
    }
    if (!this.toDate.isValid()){
      this.toDate.focusInput()
      return true;
    }
    return false;
  }
}

export default DatesFragment
