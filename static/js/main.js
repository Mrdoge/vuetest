/**
 * @authors KH
 * @date    2017-10-13 15:38:03
 */

//放一些常用方法

/*
方法名字：Hint
作用：提示
版本更新：v1.0.0
*/
F['Hint'] = function(opt) {
		var defaults = F['Hint']['conf'];
		var set = $.extend({}, defaults, opt);
		var font = set['font'][set.type] || '';

		var hint_html = '<div class="' + set['cls'] + ' s-' + set['type'] + '">' +
			'<div class="ico i-FU_icon">' + font + '</div>' +
			'<div class="ct"><div>' + set['ct'] + '</div></div>' +
			'</div>';
		$('body').append(hint_html);
		var $hint = $('body').children('.' + set['cls'] + ':last');
		//居中处理
		$hint.css('margin-top', (set['contain'].offset().top - $hint.outerHeight()) * 0.5 + 'px');
		$hint.css('margin-left', (set['contain'].offset().left - $hint.outerWidth()) * 0.5 + 'px');
		$hint.show();
		F['Css3Anim']($hint, set['inAnim'], function() {
			set.inBack();
			var hide = setTimeout(function() {
				F['Css3Anim']($hint, set['outAnim'], function() {
					$hint.remove();
					set.outBack();
				})
			}, set.time)
		});

	} //Hint
	//配置项
F['Hint']['conf'] = {
	cls: 'm-FU_hint',
	ct: '出错',
	type: 0,
	time: 1000,
	inBack: function(){},
	outBack: function(){},
	inAnim: 'FU_hintIn .3s ease  both',
	outAnim: 'FU_hintOut .3s ease  both',
	font: ['!', '√', '×'],
	contain: $('html')
};

/*
方法名：Rd
作用：生成一个随机整数
*/
F['Rd'] = function(num) {
	var num = Number(num || 255);
	return parseInt(num * Math.random());
};
/*
方法名：F['Space']
作用：处理空格
*/
F['Space'] = function(str, v) {
	var v = v || ' ';
	return str.replace(/\s+/g, v);
};


/*
方法名：F['UrlVars']
作用：获得URL参数
*/
F['UrlVars'] = function() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
		vars[key] = value;
	});
	return vars;
};


/*
方法名：F['Rem']
作用：获得rem最佳显示字体
*/
F['Rem'] = function(w, _min, _max) {
	//100px = 设计稿100%比例没缩放
	// 将设计稿PSD的宽度调整成640
	var dpr= window.devicePixelRatio || 1;
	var win_w = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
	var full_w = Number(w) || 640;
	var size = ((win_w - full_w) / full_w) * 100 + 100;
	var html = document.getElementsByTagName('html')[0];
	var _min = Number(_min) || 50;
	var _max = Number(_max) || 100;
	size = size >= _max ? _max : size;
	size = size <= _min ? _min : size;
	html.style.fontSize = size + 'px';
};
/*
方法名：SupportCss3
作用：判断浏览器是否支持某一个CSS3属性
使用：F.SupportCss3('CSS属性名')
使用示例：F.SupportCss3('anim');
版本更新：v1.0.0
*/
F['SupportCss3'] = function(style) {
	var prefix = ['webkit', 'moz', 'ms', 'o'],
		i,
		humpString = [],
		htmlStyle = document.documentElement.style,
		_toHumb = function(string) {
			return string.replace(/-(\w)/g, function($0, $1) {
				return $1.toUpperCase();
			});
		};
	for (i in prefix)
		humpString.push(_toHumb(prefix[i] + '-' + style));
	humpString.push(_toHumb(style));
	for (i in humpString)
		if (humpString[i] in htmlStyle) return true;

	return false;
};

/*
方法名：Css3Anim
作用：执行CSS3动画
使用：F['Css3Anim'](Jquery对象,动画值，动画结束回调)
使用示例：F['Css3Anim']($(this),'zoomOut .2s ease .1s  both',function(){alert('动画结束')})
版本更新：v1.0.1
*/
F['anim'] = F['SupportCss3']('animation'); //是否开启动画
F['Css3Anim'] = function(t, css, callback) {
	var callback = callback || function() {};
	var css = F['Space'](String(css));
	if (!Boolean(css) || t.length < 1) {
		return callback();
	}
	var css_arr = css.split(' ');
	var anim_name = css_arr[0];
	var anim_time = 0;
	//var anim_time = F['Css3Anim']['cache'][anim_name] || 0;

	//动画所需时间
	//if (anim_time == 0) {
	for (var i = 1; i < css_arr.length; i++) {
		//获得总时间
		if (css_arr[i].indexOf('s') > -1) {
			var time = Number(css_arr[i].replace(/s/i, '')) || 0;
			anim_time += time;
		};
	};
	anim_time *= 1000;
	//F['Css3Anim']['cache'][anim_name] = anim_time;
	//}
	//执行动画	
	if (F['anim']) {
		t.css('animation', css);
		setTimeout(function() {
			t.css('animation', '');
			callback();
		}, anim_time);
	} else {
		callback();
	};
};
//F['Css3Anim']['cache'] = {};