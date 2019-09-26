/* vuex的计算属性 */
export default {
  handleRead(state){
    if (state.comicInfo.provChapterId == null){
      return '1'
    }
    return state.comicInfo.provChapterId
  },
  handleVipLevel(state){
    if (state.accountInfo.vipLevel === 0){
      return true
    }
    return false
  }
}
