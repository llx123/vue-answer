import * as types from './mutation-types'

export default {
  nextQuestion ({commit, state}) {
    commit(types.NEXT_QUESTION, 1)
  },
  initSate ({commit}) {
    commit(types.INIT_STATE)
  },
  setList ({commit}, num) {
    commit(types.SELECT_LIST, num)
  }
}
