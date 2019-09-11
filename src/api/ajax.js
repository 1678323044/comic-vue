import axios from 'axios'

export default function ajax (url,data={},type='GET'){
  return new Promise(function (resolve,reject){
    let promise
    if(type === 'GET'){
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== ''){
        //substring 字符串截取
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url,{
        headers: {
          authorization: "d198dff49a696e8dc5a9b4036c87125b" // 授权码
        }
      })
    }else{
      //发送post请求
      promise = axios.post(url,data)
    }
    promise.then(function(response){
      resolve(response.data)
    }).catch(function(error){
      reject(error)
    })
  })
}
