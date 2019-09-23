/* 使用localStorage存储数据模块 */

export default {
  saveStorage(newValue){
    //JSON.stringify 将js对象转换为字符串
    window.localStorage.setItem('newKey',JSON.stringify(newValue))
  },
  readStorage(){
    return JSON.parse(window.localStorage.getItem('newKey' || []))
  }
}
