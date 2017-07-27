import * as types from './mutation-types'

const mutations = {
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  }
}

export default mutations
