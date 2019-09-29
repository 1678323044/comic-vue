/*
 * 包含n个接口请求函数的模块
 * 返回值：promise对象
*/
import ajax from "./ajax"

//const API_URL = 'http://106.53.110.107/comic'
const API_URL = '/api'

//推荐信息模块
export const reqRecommends = () => ajax(`${API_URL}/recommends.do`)

//更换推荐信息模块
export const reqRecommendChange = (data) => ajax(`${API_URL}/recommendChange.do`,data)

//分类信息模块
export const reqClassify = () => ajax(`${API_URL}/bookcategory.do`)

//排行榜排序方式模块
export const reqRankSort = () => ajax(`${API_URL}/rankCategory.do`);

//排行榜列表模块
export const reqRankingList = (data) => ajax(`${API_URL}/rankinglist.do`,data);

//加入书架模块
export const reqAddBookshelf = (data) => ajax(`${API_URL}/collect.do`,data)

//漫画信息模块
export const reqComicInfo = (data) => ajax(`${API_URL}/bookinfo.do`,data)

//漫画章节模块
export const reqChapters = (data) => ajax(`${API_URL}/chapters.do`,data)

//漫画内容模块
export const reqComicContent = (data) => ajax(`${API_URL}/reading.do`,data)

//漫画收藏模块
export const reqCollect = () => ajax(`${API_URL}/mycollect.do`)

//取消收藏模块
export const reqCancelCollection = (data) => ajax(`${API_URL}/cancelCollect.do`,data)

//阅读历史记录模块
export const reqReadHistory = () => ajax(`${API_URL}/readhistory.do`)

//删除历史记录模块
export const reqDelHistory = (data) => ajax(`${API_URL}/delHistory.do`,data)

//搜素列表模块
export const reqSearchList = (data) => ajax(`${API_URL}/search.do`,data)

//查看搜索结果模块
export const reqSearchResult = (data) => ajax(`${API_URL}/bookinfo.do`,data)

//会员区畅销漫画模块
export const reqSellWellComics = (data) => ajax(`${API_URL}/vipEasySell.do`,data)

//会员区连载漫画模块
export const reqSerialComics = (data) => ajax(`${API_URL}/vipSerialize.do`,data)

//会员区完结漫画模块
export const reqMemberEndComics = (data) => ajax(`${API_URL}/VipEnd.do`,data)

//会员区全部漫画模块
export const reqMemberComics = (data) => ajax(`${API_URL}/vipBooks.do`,data)

//会员套餐模块
export const reqSetMeals = () => ajax(`${API_URL}/vipCombo.do`)

//金币充值模块
export const reqRechargeList = () => ajax(`${API_URL}/readCoinCombo.do`)

//历史购买漫画模块
export const reqBuyHistory = () => ajax(`${API_URL}/buyHistory.do`)

//完结人气畅销模块
export const reqEndEasySell = (data) => ajax(`${API_URL}/endEasySell.do`,data)

//完结全本模块
export const reqEndComics = (data) => ajax(`${API_URL}/endBooks.do`,data)

//最新完结模块
export const reqRecentEnd = (data) => ajax(`${API_URL}/recentEnd.do`,data);

//分类查询模块
export const reqQueryComics = (data) => ajax(`${API_URL}/querybooks.do`,data);

//支付会员模块
export const reqPayInfo = (data) => ajax(`${API_URL}/buyVip.do`,data);

//金币充值模块
export const reqRecharge = (data) => ajax(`${API_URL}/buyReadCoin.do`,data);

//用户评分模块
export const reqScore = (data) => ajax(`${API_URL}/grade.do`,data)

//查询订单状态模块
export const reqOrderState = (data) => ajax(`${API_URL}/pay/state.do`,data)

//购买漫画章节模块
export const reqBuyChapter = (data) => ajax(`${API_URL}/buyChapter.do`,data)

//查询账号信息模块
export const reqAccountInfo = () => ajax(`${API_URL}/accountInfo.do`)

//分享推广模块
export const reqShareLink = () => ajax(`${API_URL}/spreadLink.do`)
