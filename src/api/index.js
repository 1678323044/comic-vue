/*
 * 包含n个接口请求函数的模块
 * 返回值：promise对象
*/
import ajax from "./ajax"

//const API_URL = 'http://103.229.214.108/comic'
const API_URL = '/api'

//推荐信息模块
export const reqRecommends = () => ajax(`${API_URL}/recommends.do`)

//分类信息模块
export const reqClassify = () => ajax(`${API_URL}/bookcategory.do`)

//排行榜排序方式模块
export const reqRankSort = () => ajax(`${API_URL}/rankCategory.do`)

//加入书架模块
export const reqAddBookshelf = (data) => ajax(`${API_URL}/collect.do`,data)

//漫画信息模块
export const reqComicInfo = (data) => ajax(`${API_URL}/bookinfo.do`,data)

//漫画章节模块
export const reqChapters = (data) => ajax(`${API_URL}/chapters.do`,data)

//漫画收藏模块
export const reqCollect = () => ajax(`${API_URL}/mycollect.do`)

//阅读历史记录模块
export const reqReadHistory = () => ajax(`${API_URL}/readhistory.do`)

//搜素列表模块
export const reqSearchList = (data) => ajax(`${API_URL}/search.do`,data)

//查看搜索结果模块
export const reqSearchResult = (data) => ajax(`${API_URL}/bookinfo.do`,data)
