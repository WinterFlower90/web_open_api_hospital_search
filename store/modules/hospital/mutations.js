import Constants from './constants'
import state from './state'

export default {
    [Constants.FETCH_LIST]: (state, payload) => {
        state.hospitalList = payload
    }, //constants에 만든것을 이곳에서 구현
    [Constants.FETCH_MATCH_COUNT]: (state, payload) => {
        state.matchCount = payload
    },
    [Constants.FETCH_PAGE]: (state, payload) => {
        state.page = payload
    },
    [Constants.FETCH_TOTAL_COUNT]: (state, payload) => {
        state.totalCount = payload
    },

}
