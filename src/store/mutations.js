/* 直接更新state对象 */
import {
  RECEIVE_RECOMMENDS,
  RECEIVE_CLASSIFY,
  RECEIVE_RANKSORT,
  RECEIVE_ADDBOOKSHELF
} from './mutations-type'

export default {
  [RECEIVE_RECOMMENDS](state,{recommends}){
    state.recommends = recommends
  },
  [RECEIVE_CLASSIFY](state,{classes}){
    state.classes = classes
  },
  [RECEIVE_RANKSORT](state,{rankSorts}){
    state.rankSorts = rankSorts
  },
  [RECEIVE_ADDBOOKSHELF](state,{message}){
    state.message = message
  }
}
