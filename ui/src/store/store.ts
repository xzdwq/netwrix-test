import { createStore } from 'vuex'

export default createStore({
  state: {
    partners: [],
    query: null,
    selectParams: null
  },
  getters: {
    partners: (state) => state.partners,
    query: (state) => state.query,
    selectParams: (state) => state.selectParams
  },
  mutations: {
    partners: (state, data) => state.partners = data,
    query: (state, query) => state.query = query,
    selectParams: (state, params) => state.selectParams = params
  }
})