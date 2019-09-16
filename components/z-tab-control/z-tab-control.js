// components/z-tab-control/z-tab-control.js
Component({
  /**
   * Component properties
   */
  properties: {
   titles:{
     type:Array,
     value:[]
   }
  },

  /**
   * Component initial data
   */
  data: {
    currentIndex:0
  },

  /**
   * Component methods
   */
  methods: {
    handleTabClick(e){
      const currentIndex = e.currentTarget.dataset.index
      this.setData({
        currentIndex
      })
      //发出当前事件数据
      const data = this.data.currentIndex
      this.triggerEvent("tabclick",data,{})
    }
  }
})
