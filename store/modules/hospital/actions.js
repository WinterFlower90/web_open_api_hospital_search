import axios from 'axios'
import apiUrls from './apiUrls'
import Constants from './constants'

export default {
    [Constants.DO_LIST]: (store, payload) => {
        const serviceKey = 'ZSn%2BlDrdhS5u4rWN9YZx4%2FDYect6y2jALGFL%2BLe1pWsqi0dqJVzA7aNkDR1n283ASKplpRbTKnV2Q5RI3%2BxrvA%3D%3D'
        return axios.get(`${apiUrls.DO_LIST}?serviceKey=${serviceKey}&page=${payload.page}&cond%5BorgZipaddr%3A%3ALIKE%5D=${payload.searchKeyword}`)
            .then((res) => {
                store.commit(Constants.FETCH_LIST, res.data.data)
                store.commit(Constants.FETCH_MATCH_COUNT, res.data.matchCount)
                store.commit(Constants.FETCH_PAGE, res.data.page)
                store.commit(Constants.FETCH_TOTAL_COUNT, res.data.totalCount)
            })
    }
}
