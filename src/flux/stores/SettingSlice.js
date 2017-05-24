
const SettingSlice = {
  settings: {
    newsKey: undefined
  },

  exportSettingsFn(){
    return {
      setNewsKey: this.setNewsKey.bind(this)
    }
  },

  setNewsKey(value){
    this.settings.newsKey = value
  },
  getNewsKey(){
    return this.settings.newsKey;
  }
}

export default SettingSlice
