/* 直接更新state对象 */
import {
  RECEIVE_RECOMMENDS,
  RECEIVE_CLASSIFY
} from './mutations-type'

export default {
  [RECEIVE_RECOMMENDS](state,{recommends}){
    state.recommends = recommends
  },
  [RECEIVE_CLASSIFY](state,{classes}){
    state.classes = classes
  }
}
