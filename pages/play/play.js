// // pages/play/play.js

// var config = require('../../config.js');

// Page({
//   data: {
//     song: {},
//     isPlaying:false,
//   },
//   onLoad:function(options){
//     var self = this;
//     var duration = options.duration;

//     if (duration === undefined){
//       var curSong = wx.getStorageSync('curSong') || {};

//       if(curSong === undefined){
//         var song = { name:'未选择歌曲'};
//         this.setData({
//           song: song
//         })
//       }else{
//         this.setData({
//           song:curSong
//         });
//       }
//     }else{
//       var result = wx.getStorageSync('result') || [];
//       for (var i = 0; i < result.length; i++){
//         if (result[i].duration == duration){
//           this.setData({
//             song: result[i]
//           });
//           break;
//         }
//       }

//       wx.setStorageSync('curSong', this.data.song);

//     }
    
//   },


//   playToggle:function(){
//     var self = this;
//     if (this.data.song.name == '未选择歌曲'){
//       return;
//     }

//     if(this.data.isPlaying){
//       wx.stopBackgroundAudio();
//     }else{
//       wx.playBackgroundAudio({
//         dataUrl: this.data.song.url,
//         success: function(res){  }
//      })
//     }
//     this.setData({
//       isPlaying:!this.data.isPlaying
//     });
//   }
// })