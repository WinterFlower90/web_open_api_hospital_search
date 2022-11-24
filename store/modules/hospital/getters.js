import Constants from './constants'
import state from './state'

export default {
    [Constants.GET_LIST]: (state) => {
        return state.hospitalList
    },
    [Constants.GET_MATCH_COUNT]: (state) => {
        return state.matchCount
    },
    [Constants.GET_PAGE]: (state) => {
        return state.page
    },
    [Constants.GET_TOTAL_COUNT]: (state) => {
        return state.totalCount
    },

}
