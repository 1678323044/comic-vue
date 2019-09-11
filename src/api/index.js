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
