import * as types from './mutations.types'

const mutations = {
  [types.SETMSGRECORDSHOW] (state, msgRecordShow) {
    state.msgRecordShow = msgRecordShow
  },
  [types.SETSPEEDYREPLY] (state, speedyReply) {
    state.speedyReply = speedyReply
  }
}

export default mutations