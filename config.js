(function(module){
  var exports = module.exports = {};
  var appid = 92368;
  var secret = "3ec0e837928e4a17b28795fc716d89bc";
  var param = "?showapi_appid=" + appid + "&showapi_sign=" + secret;
  var hotUrl = "https://route.showapi.com/1064-1" + param;

  module.exports = {
    config: {
      hotUrl:hotUrl
    }
  };
}(module))