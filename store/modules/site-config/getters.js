import Constants from './constants'
import state from './state'

export default {
  [Constants.GET_SITE_NAME]: (state) => {
    return state.siteName
  },
  [Constants.GET_COMPANY_ADDRESS]: (state) => {
    return state.companyAddress
  },
  [Constants.GET_COMPANY_TEL]: (state) => {
    return state.companyTel
  },
  [Constants.GET_SITE_LOGO]: (state) => {
    return state.siteLogo
  },
}
