
const SettingSlice = {
  settings: {},

  exportSettingsFn(){
    return {
      setNewsKey: this.setNewsKey.bind(this),
      setWebhoseKey: this.setWebhoseKey.bind(this)
    }
  },

  setNewsKey(value){
    this.settings.newsKey = value
  },
  getNewsKey(){
    return this.settings.newsKey;
  },

  setWebhoseKey(value){
    this.settings.webhoseKey = value
  },
  getWebhoseKey(){
    return this.settings.webhoseKey;
  }

}

export default SettingSlice
