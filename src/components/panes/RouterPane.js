
import NewsPane from './NewsPane'

const R = {
  DEFAULT: NewsPane
}

const RouterPane = {
  getElement: (type) => {
    const El = R[type];
    if (El) {
      return R[type];
    } else {
      return  R.DEFAULT;
    }
  }
}

export default RouterPane
