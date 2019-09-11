/* 间接更新state对象 */
import {
  RECEIVE_RECOMMENDS,
  RECEIVE_CLASSIFY,
  RECEIVE_RANKSORT,
  RECEIVE_ADDBOOKSHELF
} from './mutations-type'

import {
  reqRecommends,
  reqClassify,
  reqRankSort,
  reqAddBookshelf
} from '../api/index'

export default {
  //异步获取推荐信息
  async getRecommends({commit}){
    let result = await reqRecommends()
    if (result.state === 'ok'){
      let recommends = result.data
      commit(RECEIVE_RECOMMENDS,{recommends})
    }
  },
  //异步获取漫画分类信息
  async getClassify({commit}){
    let result = await reqClassify()
    if (result.state === 'ok'){
      let classes = result.data
      commit(RECEIVE_CLASSIFY,{classes})
    }
  },
  //异步获取排行榜排序方式
  async getRankSort({commit}){
    let result = await reqRankSort()
    if (result.state === 'ok'){
      let rankSorts = result.data
      commit(RECEIVE_RANKSORT,{rankSorts})
    }
  },
  //处理加入书架功能
  async addBookshelf({commit}){
    let result = await reqAddBookshelf
    if (result.state === 'ok') {
      let message = result.message
      commit(RECEIVE_ADDBOOKSHELF,{message})
    }
  }
}
