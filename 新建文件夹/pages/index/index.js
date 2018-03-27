// pages/guanwang/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listnews:[],
    listTeam:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var companyUrl = app.globalData.baseUrl + 'wx/company/getCompany'
    var that = this
    wx.request({
      url: companyUrl,
      method:'POST',
      header:{
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data:{
        sessionid: wx.getStorageSync('sessionid'),
        companyid: app.globalData.companyid
      },
      success:function(result){
        if(result.data.status){
          console.log(result)
          that.setData({
            company: result.data.company,
            listnews: result.data.articles,
            listTeam: result.data.leaders
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toTel: function () {
    wx.makePhoneCall({
      phoneNumber: '123',
    })
  },
  toMap: function () {
    wx.navigateTo({
      url: '/pages/map/index',
    })
  },
  toNews: function () {
    wx.navigateTo({
      url: '/pages/newsXiangqing/index',
    })
  },
  toBumen: function () {
    wx.navigateTo({
      url: '/pages/bumen/index',
    })
  }
})