/* 间接更新state对象 */
import {
  RECEIVE_RECOMMENDS,
  RECEIVE_CLASSIFY
} from './mutations-type'

import {
  reqRecommends,
  reqClassify
} from '../api/index'
import classify from "../views/classify/classify";

export default {
  //异步获取推荐信息
  async getRecommends({commit}){
    let result = await reqRecommends()
    if (result.state === 'ok'){
      let recommends = result.data
      commit(RECEIVE_RECOMMENDS,{recommends})
    }
  },
  //异步获取分类信息
  async getClassify({commit}){
    let result = await reqClassify()
    if (result.state === 'ok'){
      let classes = result.data
      commit(RECEIVE_CLASSIFY,{classes})
    }
  }
}
