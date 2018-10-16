const qcloud = require('../../vendor/wafer2-client-sdk/index')
const config = require('../../config.js')
Page({
  data: {
    userInfo: null,
    // userInfo: {
    //   nickName: "优达学城",
    //   avatarUrl: "", // 头像 URL 地址
    // }, // 虚拟数据
  },
  onTapAddress() {
    wx.showToast({
      icon: 'none',
      title: '此功能暂未开放'
    })
  },
  onTapKf() {
    wx.showToast({
      icon: 'none',
      title: '此功能暂未开放'
    })
  },
  onTapLogin(){
   this.doQcloudLogin({success: (userInfo) => {
     this.setData({
       userInfo
     })
   }})
  },
  doQcloudLogin({success,error}){
    qcloud.login({
      success:result => {
        if(result){
          let userInfo = result
          success && success({
            userInfo
          })
        }else{
          this.getUserInfo({success,error})
        }
      },fail :() =>{
        error && error()
      }
    })
  },
  getUserInfo({success,error}){
    qcloud.request({
      url:config.service.requestUrl,
      login:true,
      success:result =>{
        let data = result.data
        if(!data.code){
          let userInfo = data.data
          success && success({
            userInfo
          })
        }else{
          error && error()
        }
      },
      fail :() => {
        error && error()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})