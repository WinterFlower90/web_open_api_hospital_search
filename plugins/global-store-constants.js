import Vue from "vue"

import siteConfigConstants from '~/store/modules/site-config/constants'
Vue.prototype.$siteConfigConstants = siteConfigConstants

import hospitalConstants from '~/store/modules/hospital/constants';
Vue.prototype.$hospitalConstants = hospitalConstants
