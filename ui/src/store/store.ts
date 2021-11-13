import { createStore } from 'vuex'

export default createStore({
  state: {
    load: false,
    partners: [],
    query: null,
    selectParams: null
  },
  getters: {
    load: (state) => state.load,
    partners: (state) => state.partners,
    query: (state) => state.query,
    selectParams: (state) => state.selectParams
  },
  mutations: {
    load: (state, load) => state.load = load,
    partners: (state, data) => state.partners = data,
    query: (state, query) => state.query = query,
    selectParams: (state, params) => state.selectParams = params
  }
})