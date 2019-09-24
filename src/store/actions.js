/* 间接更新state对象 */
import {
  RECEIVE_RECOMMENDS,
  RECEIVE_CLASSIFY,
  RECEIVE_RANKSORT,
  RECEIVE_COMICINFO,
  RECEIVE_CHAPTERS,
  RECEIVE_COLLECT,
  RECEIVE_READHISTORIES,
  RECEIVE_SEARCHLIST,
  RECEIVE_SEARCHRESULT,
  RECEIVE_SELLWELLCOMICS,
  RECEIVE_SERIALCOMICS,
  RECEIVE_MEMBERENDCOMICS,
  RECEIVE_MEMBERCOMICS,
  RECEIVE_SETMEALS,
  RECEIVE_RECHARGELIST,
  RECEIVE_BUYHISTORY,
  RECEIVE_COMICCONTENT,
  RECEIVE_RECOMMENDCHANGE,
  RECEIVE_ENDEASYSELL,
  RECEIVE_ENDCOMICS,
  RECEIVE_RECENTENDS,
  RECEIVE_QUERYCOMICS,
  RECEIVE_PAYINFO,
  RECEIVE_RECHARGE,
  RECEIVE_POPULARITYLIST,
  RECEIVE_NEWLIST,
  RECEIVE_WEEKLYRANKING,
  RECEIVE_MONTHLYRANKING
} from './mutations-type'

import {
  reqRecommends,
  reqClassify,
  reqRankSort,
  reqComicInfo,
  reqChapters,
  reqCollect,
  reqReadHistory,
  reqSearchList,
  reqSearchResult,
  reqSellWellComics,
  reqSerialComics,
  reqMemberEndComics,
  reqMemberComics,
  reqSetMeals,
  reqRechargeList,
  reqBuyHistory,
  reqComicContent,
  reqRecommendChange,
  reqEndEasySell,
  reqEndComics,
  reqRecentEnd,
  reqQueryComics,
  reqRankingList,
  reqPayInfo,
  reqRecharge,
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
  //异步获取更换推荐信息
  async getRecommendChange({commit},id){
    let result = await reqRecommendChange(id)
    if (result.state === 'ok'){
      let changeRecommends = result.data
      commit(RECEIVE_RECOMMENDCHANGE,{changeRecommends})
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
  //异步获取人气榜列表
  async getPopularityList({commit},pageNumber){
    let result = await reqRankingList(pageNumber);
    if (result.state === 'ok'){
      let popularityList = result.data
      commit(RECEIVE_POPULARITYLIST,{popularityList})
    }
  },
  //异步获取新番榜列表
  async getNewList({commit},pageNumber){
    let result = await reqRankingList(pageNumber);
    if (result.state === 'ok'){
      let newList = result.data
      commit(RECEIVE_NEWLIST,{newList})
    }
  },
  //异步获取周排行列表
  async getWeeklyRanking({commit},pageNumber){
    let result = await reqRankingList(pageNumber);
    if (result.state === 'ok'){
      let weeklyRanking = result.data
      commit(RECEIVE_WEEKLYRANKING,{weeklyRanking})
    }
  },
  //异步获取月排行列表
  async getMonthlyRanking({commit},pageNumber){
    let result = await reqRankingList(pageNumber);
    if (result.state === 'ok'){
      let monthlyRanking = result.data
      commit(RECEIVE_MONTHLYRANKING,{monthlyRanking})
    }
  },
  //异步获取漫画信息
  async getComicInfo({commit},comicId){
    let result = await reqComicInfo(comicId)
    if (result.state === 'ok'){
      let comicInfo = result.data
      commit(RECEIVE_COMICINFO,{comicInfo})
    }
  },
  //异步获取漫画章节列表
  async getChapters({commit},setPage){
    let result = await reqChapters(setPage)
    if (result.state === 'ok'){
      let chapters = result.data
      commit(RECEIVE_CHAPTERS,{chapters})
    }
  },
  //异步获取漫画内容
  async getComicContent({commit},id){
    let result = await reqComicContent(id)
    if (result.state === 'ok') {
      let comicContents = result.data
      commit(RECEIVE_COMICCONTENT,{comicContents})
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
  },
  //异步获取畅销漫画
  async getSellWellComics({commit}){
    let result = await reqSellWellComics()
    if (result.state === 'ok') {
      let sellWellComics = result.data
      commit(RECEIVE_SELLWELLCOMICS,{sellWellComics})
    }
  },
  //异步获取连载漫画
  async getSerialComics({commit}){
    let result = await reqSerialComics()
    if (result.state === 'ok'){
      let serialComics = result.data
      commit(RECEIVE_SERIALCOMICS,{serialComics})
    }
  },
  //异步获取会员区完结漫画
  async getMemberEndComics({commit}){
    let result = await reqMemberEndComics()
    if (result.state === 'ok') {
      let memberEndComics = result.data
      commit(RECEIVE_MEMBERENDCOMICS,{memberEndComics})
    }
  },
  //异步获取全部会员漫画
  async getMemberComics({commit}){
    let result = await reqMemberComics()
    if (result.state === 'ok') {
      let memberComics = result.data
      commit(RECEIVE_MEMBERCOMICS,{memberComics})
    }
  },
  //异步获取套餐列表
  async getSetMeals({commit}){
    let result = await reqSetMeals()
    if (result.state === 'ok') {
      let setMeals = result.data
      commit(RECEIVE_SETMEALS,{setMeals})
    }
  },
  //异步获取金币充值列表
  async getRechargeList({commit}){
    let result = await reqRechargeList()
    if (result.state === 'ok') {
      let rechargeList = result.data
      commit(RECEIVE_RECHARGELIST,{rechargeList})
    }
  },
  //异步获取购买漫画历史
  async getBuyHistory({commit}){
    let result = await reqBuyHistory()
    if (result.state === 'ok') {
      let buyHistory = result.data
      commit(RECEIVE_BUYHISTORY,{buyHistory})
    }
  },
  //异步获取完结佳作列表
  async getEndEasySell({commit}){
    let result = await reqEndEasySell()
    if (result.state === 'ok') {
      let endEasySell = result.data
      commit(RECEIVE_ENDEASYSELL,{endEasySell})
    }
  },
  //异步获取完结全本列表
  async getEndComics({commit}){
    let result = await reqEndComics()
    if (result.state === 'ok'){
      let endComics = result.data
      commit(RECEIVE_ENDCOMICS,{endComics})
    }
  },
  //异步获取最新完结列表
  async getRecentEnd({commit}){
    let result = await reqRecentEnd()
    if (result.state === 'ok') {
      let recentEnds = result.data
      commit(RECEIVE_RECENTENDS,{recentEnds})
    }
  },
  //异步获取分类条件数据列表
  async getQueryComics({commit},query){
    let result = await reqQueryComics(query);
    if (result.state === 'ok'){
      let queryComics = result.data;
      commit(RECEIVE_QUERYCOMICS,{queryComics})
    }
  },
  //处理会员支付功能
  async handlePay({commit},param){
    let result = await reqPayInfo(param);
    if (result.state === 'ok'){
      let payInfo = result.data
      window.location.href = payInfo.payUrl
      commit(RECEIVE_PAYINFO,{payInfo})
    }
  },
  //处理金币充值功能
  async handleRecharge({commit},param){
    let result = await reqRecharge(param);
    if (result.state === 'ok'){
      let rechargeInfo = result.data;
      window.location.href = rechargeInfo.payUrl
      commit(RECEIVE_RECHARGE,{rechargeInfo})
    }
  }
}
