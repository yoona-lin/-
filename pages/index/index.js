//index.js
//获取应用实例
var config=require('../../config.js');

Page({
  data:{
    result:[],
    loading:false,
    isPlaying: false,
  },

  onLoad:function(options){
  
    var self = this;
    var topid = options.type;

    this.setData({
      loading: true
    })

      wx.request({
        url: config.config.hotUrl,
        data: { topid: topid },

        success: function (e) {

          if (e.statusCode == 200) {
            var result = e.data.showapi_res_body.result;

            self.setData({
              result: result,
              loading: false
            });

            wx.setStorageSync('result', result)
          }
        }
      });
  },

  playToggle: function (index) {
    var self = this;
    
    var duration = index.duration;

    // if (duration === undefined) {
    //   var result = wx.getStorageSync('result') || {};

    //   if (result === undefined) {
    //     var song = { name: '未选择歌曲' };
    //     this.setData({
    //       song: song
    //     })
    //   } else {
    //     this.setData({
    //       song: result
    //     });
    //   }
    // } else {
    //   var result = wx.getStorageSync('result') || [];
    //   for (var i = 0; i < result.length; i++) {
    //     if (result[i].duration == duration) {
    //       this.setData({
    //         song: result[i]
    //       });
    //       break;
    //     }
    //   }

    //   wx.setStorageSync('result', this.data.song);

    // }

    // if (this.data.song.name == '未选择歌曲') {
    //   return;
    // }

    if (this.data.isPlaying) {
      wx.stopBackgroundAudio();
    } else {
      wx.playBackgroundAudio({
        dataUrl: this.data.result.url,
        success: function (res) { }
      })
    }
    this.setData({
      isPlaying: !this.data.isPlaying
    });
  }
})

