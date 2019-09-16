//index.js
//获取应用实例
const app = getApp()
import request from '../../service/request.js'
import {getMultiData,
        getGoodsData
        } from '../../service/index.js'
Page({
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    goods:{
      'new':{page:0,list:[]},
      'pop':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType:'pop',
    types:['pop','new','sell']
  },
  onLoad: function() {
    //1.轮播数据和推荐数据
    this._getMultiData()
    // 2.流行 新款 精选数据
    this._getGoodsData('new')
    this._getGoodsData('pop')
    this._getGoodsData('sell')
  },
  //----------------网络请求轮播数据和推荐数据---------------------
  _getMultiData(){
    getMultiData()
      .then(res => {
        //轮播数据和推荐数据
        const banners = res.data.data.banner.list
        const recommends = res.data.data.recommend.list
        //放入data中
        this.setData({
          banners,
          recommends
        })
      })
      .catch(err => {
        console.log(err)
      })
  },

  //----------------网络请求流行 新款 精选数据---------------------
  _getGoodsData(type){
    let page = this.data.goods[type].page +1
    getGoodsData(type,page)
    .then(res=>{
     let oldList = this.data.goods[type].list
     let tempList = res.data.data.list
     let typeKey = `goods.${type}.list`
     let pageKey = `goods.${type}.page`
      oldList.push(...tempList)
      this.setData({
        [typeKey]:oldList,
        [pageKey]: page
      })
      cosole.log(page)
    })
    .catch(res=>{

    })
  },
  tabClick(e) {
   let index = e.detail
   this.setData({
     currentType:this.data.types[index]
   })
  }
})