import {baseURL} from './config.js'
export default function(url, data = {},method='get') {
  url = baseURL + url
  return new Promise((resolve, reject) => {
    wx.request({
      url, //接口地址
      data,
      method,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        resolve(res)
      },
      fail: reject
    })
  })
}