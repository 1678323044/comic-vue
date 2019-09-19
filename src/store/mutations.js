/* 直接更新state对象 */
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
  RECEIVE_RANKINGLIST
} from './mutations-type'

export default {
  [RECEIVE_RECOMMENDS](state,{recommends}){
    state.recommends = recommends
  },
  [RECEIVE_RECOMMENDCHANGE](state,{changeRecommends}){
    state.changeRecommends = changeRecommends
  },
  [RECEIVE_CLASSIFY](state,{classes}){
    state.classes = classes
  },
  [RECEIVE_RANKSORT](state,{rankSorts}){
    state.rankSorts = rankSorts
  },
  [RECEIVE_COMICINFO](state,{comicInfo}){
    state.comicInfo = comicInfo
  },
  [RECEIVE_CHAPTERS](state,{chapters}){
    state.chapters = chapters
  },
  [RECEIVE_COLLECT](state,{collections}){
    state.collections = collections
  },
  [RECEIVE_READHISTORIES](state,{readHistories}){
    state.readHistories = readHistories
  },
  [RECEIVE_SEARCHLIST](state,{searchList}){
    state.searchList = searchList
  },
  [RECEIVE_SEARCHRESULT](state,{searchResult}){
    state.searchResult = searchResult
  },
  [RECEIVE_SELLWELLCOMICS](state,{sellWellComics}){
    state.sellWellComics = sellWellComics
  },
  [RECEIVE_SERIALCOMICS](state,{serialComics}){
    state.serialComics = serialComics
  },
  [RECEIVE_MEMBERENDCOMICS](state,{memberEndComics}){
    state.memberEndComics = memberEndComics
  },
  [RECEIVE_MEMBERCOMICS](state,{memberComics}){
    state.memberComics = memberComics
  },
  [RECEIVE_SETMEALS](state,{setMeals}){
    state.setMeals = setMeals
  },
  [RECEIVE_RECHARGELIST](state,{rechargeList}){
    state.rechargeList = rechargeList
  },
  [RECEIVE_BUYHISTORY](state,{buyHistory}){
    state.buyHistory = buyHistory
  },
  [RECEIVE_COMICCONTENT](state,{comicContents}){
    state.comicContents = comicContents
  },
  [RECEIVE_ENDEASYSELL](state,{endEasySell}){
    state.endEasySell = endEasySell
  },
  [RECEIVE_ENDCOMICS](state,{endComics}){
    state.endComics = endComics
  },
  [RECEIVE_RECENTENDS](state,{recentEnds}){
    state.recentEnds = recentEnds
  },
  [RECEIVE_QUERYCOMICS](state,{queryComics}){
    state.comicList = queryComics
  },
  [RECEIVE_RANKINGLIST](state,{rankingList}){
    state.comicList = rankingList
  }
}
