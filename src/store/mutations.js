/* 直接更新state对象 */
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
  }
}
