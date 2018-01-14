import {
  INIT_STATE,
  NEXT_QUESTION,
  SELECT_LIST
} from '../mutation-types'

const state = {
  itemNum: 1, // 第几题
  totalTime: 0, // 总共用时
  answerList: [],
  itemDetail: [{ // 题库
    tit: '第一题',
    score: 10,
    right: 1,
    list: ['111', '222', '333', '444']
  }, {
    tit: '第二题',
    score: 20,
    right: 1,
    list: ['111', '222', '333', '444']
  }, {
    tit: '第三题',
    score: 30,
    right: 2,
    list: ['111', '222', '333', '444']
  }, {
    tit: '第四题',
    score: 40,
    right: 3,
    list: ['111', '222', '333', '444']
  }, {
    tit: '第五题',
    score: 50,
    right: 4,
    list: ['111', '222', '333', '444']
  }]
}

const mutations = {
  [INIT_STATE] (state) {
    state.itemNum = 1
    state.totalTime = 0
    state.answerList = []
  },
  [NEXT_QUESTION] (state, num) {
    state.itemNum += num
  },
  [SELECT_LIST] (state, num) {
    state.answerList.push(num)
  }
}

const getters = {
  itemDetail: state => state.itemDetail,
  itemNum: state => state.itemNum,
  answerList: state => state.answerList
}

export default {
  state,
  getters,
  mutations
}
