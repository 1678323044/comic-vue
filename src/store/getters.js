/* vuex的计算属性 */
export default {
  handleRead(state){
    if (state.comicInfo.provChapterTitle == null){
      return ''
    }
    return this.state.comicInfo.provChapterTitle
  }
}
