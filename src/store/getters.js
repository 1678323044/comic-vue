/* vuex的计算属性 */
export default {
  handleRead(state){
    if (state.comicInfo.provChapterId == null){
      return '1'
    }
    return state.comicInfo.provChapterId
  }
}
