require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var request = require('request'); //类似于ajax的方式获取一个url里的html代码，用于爬虫
var cheerio = require('cheerio'); //cheerio类似于jQuery那样对所获取的html代码进行处理
var iconv = require('iconv-lite'); //解码与编码
var fs = require("fs"); //文件读写
//var he = require('he'); //解码
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
// var autoOpenBrowser = !!config.dev.autoOpenBrowser
var autoOpenBrowser = false
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
//app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

app.get('/test', function(req, res) {
  //var str = "%CB%B3%CC%EC%B4%F3%D2%A9%B7%BF%D3%D0%CF%DE%B9%AB%CB%BE";
  function changestr(str){
    var arr = ['%'];
    //str = '%' + str
    for (var i = 0; i < str.length; i++) {
      // if (i % 2 == 0) {
      //   //console.log(str[i]);
      //   str = str.splice(i,str[i],str[i] + '%');
      // }
      arr.push(str[i]);
    }
    var _str = "";
    for (var j = 0; j < arr.length; j++) {
      if (j % 2 == 0 && j != 0) {
        //console.log(str[i]);
        arr[j] = arr[j] + '%'
      }
      _str = _str + arr[j];
    }
    return _str
    //console.log(_str);
  }
  function rd(num){ //生成随机数
    var num = Number(num || 255);
    return parseInt(num * Math.random());
  }
  function getname(){
    var str = "欢畅昌盛兴隆鸿喜寿祺百福步云宝源宝和存德诚信畅春大发大盛得利道亨鼎泰德和德昌凤和福安福寿福和广远广雅广益观仁观文合盛华盛和祥厚孚厚康恒德恒孚鸿运鸿福鸿源金福聚兴骏兴谦益勤和瑞隆天发天福通顺万顺馨德永盛志成致远";
    var str2 = "无忧无虑潇洒活泼开心快乐安康丰满喜悦轻盈飘逸洒脱健美健康强壮体强健壮矫健强健健硕精神丰腴娇美青春靓丽肌腱发达阔背圆腰体态柔美膀阔三停虎背熊腰英俊威武健美身躯粗粗壮壮钢筋铁骨高大彪悍墩墩实实体魄健壮傻大黑粗骨架坚实身高马大体壮如牛";
    var str3 = "大药房有限公司";
    var name = str[rd(str.length)] + str2[rd(str2.length)] + str3;
    return name;
  }

  var auto = function(){ //抓取数据
    //var name = "人人健"
    var name = getname();
    var str = iconv.encode(name,'gb2312').toString('hex');
    str = changestr(str);
    var options = {
        method: 'GET',
        encoding: null,
        //url: 'http://gongsi.1518.com/gongsi.php?st=5&sp=1&v=1&word=%CB%B3%CC%EC%B4%F3%D2%A9%B7%BF%D3%D0%CF%DE%B9%AB%CB%BE&submit='
        url: 'http://gongsi.1518.com/gongsi.php?st=5&sp=1&v=1&word='+str+'&submit='
    }
    request(options, function(error,response,body) {
      if (!error && response.statusCode == 200) {
        body = iconv.decode(body, 'gb2312'); //转化不出现乱码
        $ = cheerio.load(body,{decodeEntities:false});
        //console.log($)
        var data = {
          point:$('#main .listpage_content dl').first().find('dd b').text(),
          name:$('#main .listpage_title span').text()
        }
        data.point = +data.point.replace(/[^0-9]/ig,"");
        res.json({
            point: data.point,
            name:name,
            url:options.url,
        });
        // var w_data = '分数：' + data.point + ',' + '名字：' + name + ',' + '链接：' + options.url;
        // fs.writeFile('input.txt',w_data,function(err) {
        //    if (err) {
        //        return console.error(err);
        //    }
        //    fs.readFile('input.txt', function (err, data) {
        //       if (err) {
        //          return console.error(err);
        //       }
        //       //console.log("异步读取文件数据: " + data.toString());
        //    });
        // });
      }
    })    
  }
  auto();


}); //test接口

app.get('/test2',function(req, res){
  var options = {
        method: 'GET',
        encoding: null,
        url: 'http://gongsi.1518.com/gongsi.php?st=5&sp=1&v=1&word=%CB%B3%CC%EC%B4%F3%D2%A9%B7%BF%D3%D0%CF%DE%B9%AB%CB%BE&submit='
    }
    request(options, function(error,response,body) {
      if (!error && response.statusCode == 200) {
        body = iconv.decode(body, 'gb2312'); //转化不出现乱码
        //console.log(body)
        $ = cheerio.load(body,{decodeEntities:false});
        //console.log($)
        var data = {
          //point:$('#main .listpage_content dl').first().find('dd b').text(),
          name:$('#main .listpage_title span').text()
        }
        //data.point = +data.point.replace(/[^0-9]/ig,"");
        res.json({
            //point: data.point,
            name:data.name,
            //url:options.url,
        });
      }
    })   //request
}); //test2

app.post('/test3',function(req, res){
  console.log(req.body);
  res.json({
    //point: data.point,
    name:req,
    //url:options.url,
  });
}); //test2

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
