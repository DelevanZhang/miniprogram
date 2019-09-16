import request from './request.js'
//获取首页轮播和推荐数据
export function getMultiData(){
  let url = '/home/multidata'
  return request(url)
}

//----------获取流行 新款 精选数据----------

export function getGoodsData(type,page){
  let url ='/home/data'
  let data = {
    type,
    page
  }
  return request(url, data)
}