//app.js

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    var loginUrl = app.globalData.baseUrl + 'wx/login/index' 
    wx.login({
      success: function (res) {
        if (res.code) {
          console.log(res)
          //发起网络请求
          wx.request({
            url: loginUrl,
            method: 'POST',
            data: {
              code: res.code,
              companyid: app.globalData.companyid
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded' // 默认值
            },
            success: function (res) {
              console.log(res)
              if (res.data.status) {
                wx.setStorageSync('sessionid', res.data.id)
                console.log('登陆成功')
                console.log(wx.getStorageSync('sessionid'))
              } else {
                wx.showToast({
                  title: '失败',
                  icon: 'loading',
                  duration: 2000
                })
              }
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    baseUrl:""
  }
})