/* 间接更新state对象 */
import {
  RECEIVE_RECOMMENDS,
  RECEIVE_CLASSIFY,
  RECEIVE_RANKSORT,
  RECEIVE_ADDBOOKSHELF,
  RECEIVE_COMICINFO,
  RECEIVE_CHAPTERS,
  RECEIVE_COLLECT,
  RECEIVE_READHISTORIES,
  RECEIVE_SEARCHLIST,
  RECEIVE_SEARCHRESULT
} from './mutations-type'

import {
  reqRecommends,
  reqClassify,
  reqRankSort,
  reqAddBookshelf,
  reqComicInfo,
  reqChapters,
  reqCollect,
  reqReadHistory,
  reqSearchList,
  reqSearchResult
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
  async addBookshelf({commit},bookId){
    let result = await reqAddBookshelf(bookId)
    if (result.state === 'ok') {
      let message = result.message
      commit(RECEIVE_ADDBOOKSHELF,{message})
    }
  },
  //异步获取漫画信息
  async getComicInfo({commit},comicId){
    let result = await reqComicInfo(comicId)
    console.log(comicId)
    if (result.state === 'ok'){
      let comicInfo = result.data
      commit(RECEIVE_COMICINFO,{comicInfo})
    }
  },
  //异步获取漫画章节
  async getChapters({commit},setPage){
    let result = await reqChapters(setPage)
    if (result.state === 'ok'){
      let chapters = result.data
      commit(RECEIVE_CHAPTERS,{chapters})
    }
  },
  //异步获取漫画收藏列表
  async getCollect({commit}){
    let result = await reqCollect()
    if (result.state === 'ok'){
      let collections = result.data
      commit(RECEIVE_COLLECT,{collections})
    }
  },
  //异步获取阅读历史
  async getReadHistory({commit}){
    let result = await reqReadHistory()
    if (result.state === 'ok'){
      let readHistories = result.data
      commit(RECEIVE_READHISTORIES,{readHistories})
    }
  },
  //异步获取搜索列表
  async getSearchList({commit},comicKey){
    let result = await reqSearchList(comicKey)
    if (result.state === 'ok'){
      let searchList = result.data
      commit(RECEIVE_SEARCHLIST,{searchList})
    }
  },
  //异步查看漫画搜索结果
  async getSearchResult({commit},comicIndex){
    let result = await reqSearchResult(comicIndex)
    if (result.state === 'ok'){
      let searchResult = result.data
      commit(RECEIVE_SEARCHRESULT,{searchResult})
    }
  }
}
