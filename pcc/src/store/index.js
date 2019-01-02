import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  showLoading: false,
  showTip: false,
  userInfo: undefined
}

const getters = {
  showLoading(showLoading) {
    return state.showLoading
  },
  showTip(showTip) {
    return state.showTip
  },
  userInfo(userInfo) {

    if(!state.userInfo) {
      state.userInfo = window.localStorage.getItem("userInfo")
    }

    return state.userInfo
  }
}

const mutations = {
  showLoading: function () {
    state.showLoading = true
  },
  hideLoading: function () {
    state.showLoading = false
  },
  showTip: function () {
    state.showTip = true
  },
  hideTip: function () {
    state.showTip = false
  },
  setUserInfo: function (newUserInfo) {
    state.userInfo = newUserInfo

    window.localStorage.setItem("userInfo", state.userInfo)

  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations
})

export default store;