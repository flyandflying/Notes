/**
 * 
 * @authors hbc (you@example.org)
 * @date    2018-05-13 15:30:32
 * @version $Id$
 */
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
// banner轮播
(function(jQuery){
	jQuery.fn.picture_swing = function(options)
	{
		var defaults = {
			time		:5000,		//轮换秒数
			index		:1,			//默认第几张
			speed		:800,		//切换时间
			dis			:1190,      //移动宽度
			splits 		:1	,
			_isFadeIn   :false,
			swing_pic   :".banner_pic",//banner图片
			swing_list  :".banner_list",//图片标记列表
			pic_selected:"pic_selected",//给当前图片标记按钮添加class
			btn_flag    :false,//按钮是否显示 true一直显示，flase隐藏，当鼠标在轮播图上时才显示
			btn_left    :".banner_btn_l",//左按钮
			btn_right   :".banner_btn_r",//右按钮
			easing      :"easeInOutExpo"  //easeInOutExpo,easeInOutElastic,easeOutBounce,"easeInOutBack"
		};
		var opts = jQuery.extend({}, defaults, options),
			_swing_pic = opts.swing_pic,
			_swing_list = opts.swing_list,
			_selected = opts.pic_selected,
			_index = opts.index,
			_time = opts.time,
			_speed = opts.speed,
			_dis = opts.dis,
			_easing = opts.easing,
			_splits = opts.splits,
			_this = jQuery(this),
			_btn_flag=opts.btn_flag,
			_btn_left=opts.btn_left,
			_btn_right=opts.btn_right,
			$parent=_this.parent(),
			btn_left=$parent.find(_btn_left),
			btn_right=$parent.find(_btn_right),
			node_ul = _this.find(_swing_pic),
			node_li = node_ul.find("li"),
			node_list = $parent.find(_swing_list),
			node_li_nav = node_list.find("li"),
			li_len = node_li.length,
			bgColor = '',
			nav_html="";
		for (var i = 0; i < li_len; i++) {
			nav_html+="<li></li>";
		};
		node_list.empty().html(nav_html);
		node_li_nav = node_list.find("li");
		node_li_nav.eq(_index-1).addClass(_selected);
			// list_width = node_list.css('width'),
			// margin_right = node_li_nav.css('margin-right');
		opts._isFadeIn||node_ul.css("width", _dis * li_len);
		// node_li_nav.css('width', (parseInt(list_width) - (li_len - 1) * parseInt(margin_right)) / li_len);
		// node_li_nav.eq(-1).css('margin-right', 0);
		var _start_left = node_ul.css("left");
		var _timer = setInterval(show, _time);
		init();
		function init() {
			var btn_lr = btn_left.add(btn_right);
			if(opts._isFadeIn){
				_index = 0;  // 把第几页设置为默认下标。 方便操作。	
				node_li.css({"position":'absolute'});
				node_li.eq(_index).siblings().css("display","none");
			}
			btn_lr.mouseover(function() {
				_timer = clearInterval(_timer);
				$(this).addClass('selected')
			}).mouseout(function() {
				_timer = setInterval(show, _time);
				$(this).removeClass('selected')
			});
			!_btn_flag&&btn_lr.hide();
			btn_left.click(function(event) {
				left();
			});
			btn_right.click(function(event) {
				show();
			});
			node_ul.mouseover(function() {
				_timer = clearInterval(_timer);
			}).mouseout(function() {
				_timer = setInterval(show, _time);
			});
			$parent.hover(function() {
				!_btn_flag&&btn_lr.show();
			}, function() {
				!_btn_flag&&btn_lr.hide();
			});
			// node_ul.parent().parent().mouseenter(function() {
			// 	node_list.addClass('selected');
			// }).mouseleave(function() {
			// 	node_list.removeClass('selected');
			// });
			
			if(opts._isFadeIn){
				node_li_nav.click(function() {
					var _thisIndex = jQuery(this).index();
					_index = _thisIndex;
					node_li.stop(true,true).eq(_thisIndex).fadeIn(1000).siblings().fadeOut(1000);
					node_li_nav.eq(_thisIndex).addClass(_selected).siblings().removeClass(_selected);
					_timer = clearInterval(_timer);
				});
			}else{	
				node_li_nav.mouseover(function() {
					var thisIndex = $(this).index();
					_index = thisIndex+1;
					node_li_nav.eq(thisIndex).addClass(_selected).siblings().removeClass(_selected);
					_left = -_dis*(thisIndex); 
					node_ul.stop(true, true).animate({"left": _left}, _speed,_easing);
					_timer = clearInterval(_timer);
				}).mouseout(function() {
					_timer = setInterval(show, _time);
				});
			}
		}
		
		function show() {//right
			if(opts._isFadeIn){
				if(_index >= node_li.length-1){
					_index = 0;
				}else{
					_index ++;
				}
				node_li.stop(true,true).eq(_index).fadeIn(1000).siblings().fadeOut(1000);
				node_li_nav.eq(_index).addClass(_selected).siblings().removeClass(_selected);
			}else{
				node_ul.stop(true, true);
				node_li_nav.eq(_index-1).removeClass(_selected);
				_index++;
				if(_index > li_len) {
					node_ul.append(node_ul.find("li:lt(1)"));
					node_ul.css("left", parseInt(node_ul.css("left")) + _dis);
					node_li_nav.eq(0).addClass(_selected);
				}
				else {
					node_li_nav.eq(_index-1).addClass(_selected);
				}
				var _left = parseInt(node_ul.css("left")) - _dis;
				node_ul.animate({"left": _left}, _speed,_easing,function() {
					if(_index > li_len) {
						node_ul.prepend(node_ul.find("li:gt("+(li_len-_splits-1)+")"));
						node_ul.css("left", 0);
						_index = 1;
					}
				});
			}
		}
		function left() {//left
			if(opts._isFadeIn){
				if(_index <= 0){
					_index = node_li.length-1;
				}else{
					_index --;
				}
				node_li.stop(true,true).eq(_index).fadeIn(1000).siblings().fadeOut(1000);
				node_li_nav.eq(_index).addClass(_selected).siblings().removeClass(_selected);
			}else{
				node_ul.stop(true, true);
				node_li_nav.eq(_index-1).removeClass(_selected);
				_index--;
				if(_index<=0){
					node_ul.prepend(node_ul.find("li:gt("+(li_len-_splits-1)+")"));
					node_ul.css("left", parseInt(node_ul.css("left")) - _dis);
					node_li_nav.eq(_index-1).addClass(_selected);
				}
				else {
					node_li_nav.eq(_index-1).addClass(_selected);
				}
				var _left = parseInt(node_ul.css("left")) + _dis;
				node_ul.animate({"left": _left}, _speed,_easing,function() {
					if(_index<=0) {
						node_ul.append(node_ul.find("li:lt(1)"));
						node_ul.css("left", -_dis*(li_len-1));
						_index = li_len;
					}
				});
			}
		}
	}
})(jQuery);

// 固定在屏幕中
(function($) {
	$.fn.fixedTop = function(options) {

		var cssfixedsupport = !-[1,]&&!window.XMLHttpRequest; //$.browser.msie && parseFloat($.browser.version) < 7, //判断是否ie6
			$window = $(window);

		return this.each(function() {

			var $this = $(this),
				fixedTime,
				def = {
					cankao:null,//参考的对象 窗口改变 目标元素才可以跟着改变
					is_right:false,//是否固定浮动在右边
					startline: $this.offset().top, //出现固定位置的距离
					top: 0, //固定位置的高度
					left: $this.offset().left, //左边的距离
					right:$this.offset().right,
					z_index: 100
				},
				chazhi,//目标元素 与 参考元素 的offset.left差值
				opts = $.extend({}, def, options),
				controlTop = opts.top, //固定的高度
				init_css = { //初始化css属性
					top: $this.css("top"),
					right: $this.css("right"),
					bottom: $this.css("bottom"),
					left: $this.css("left"),
					position: $this.css("position"),
					zIndex: $this.css("zIndex")
				},
				clonehtml = $this.clone().css("visibility", "hidden"); //复制一遍被选中元素,复制后的元素不可见
			var cankao=$(opts.cankao);
			if(opts.cankao){
				var init_cankao=cankao.offset().left;
				chazhi=opts.left-init_cankao;//目标元素 与 参考元素 的offset.left差值
			};
			
			if ($this.css("position") == "relative") {
				var addBox = $("<div></div>").css({
					"position": "relative"
				}); //新建一个元素，作为后代元素的参考对象
				$this.wrapInner(addBox); //目标元素被新建元素包裹着，防止其他子元素以目标元素为参考的left、top属性失去定位标准
			}

			if (opts.startline == 0 && !cssfixedsupport) {//起始位置为0并且非ie6 直接固定位置，不用设置定时器
				if (opts.is_right) {
					$this.after(clonehtml).css({
						position: 'fixed',
						top: controlTop,
						right: opts.right,
						zIndex: opts.z_index
					});
				}else{
					$this.after(clonehtml).css({
						position: 'fixed',
						top: controlTop,
						left: opts.left,
						zIndex: opts.z_index
					});
				}
				if(opts.cankao){
					$window.resize(function(event) {
						opts.left=cankao.offset().left+chazhi;
						$this.after(clonehtml).css({
							left: opts.left
						});
					});
				};
				return;
			};
			clearInterval(fixedTime);
			fixedTime = setInterval(function() {
				var shouldfixed = ($window.scrollTop() >= opts.startline) ? true : false;
				var controlTop_1 = cssfixedsupport ? $window.scrollTop() + controlTop : controlTop;

				if (shouldfixed) {
					$this.after(clonehtml).css({
						position: cssfixedsupport ? 'absolute' : 'fixed',
						top: controlTop_1,
						left: opts.left,
						zIndex: opts.z_index
					});
				} else {
					clonehtml.remove();
					$this.css(init_css);
				}

			}, 100);
			if(opts.cankao){
				$window.resize(function(event) {
					opts.left=cankao.offset().left+chazhi;
				});
			};

		});
	};

})(jQuery);

var buildEvent=function(obj,e){
	var that=this;
	that.list={};
	$(obj).on(e, '[data-'+e+']', function(event) {
		var d=$(this).data(e);
		if(that.list[d].call(this,event)===false){
			return false;
		};
	});
};

//用于表单验证
(function(){
	// 策略对象
	var strategys = {
		required: function(value, errorMsg) {//是否必填
			if (value === '') {
				return errorMsg;
			}
		},
		// 限制最小长度
		minLength: function(value, length, errorMsg) {
			if (value.length < length) {
				return errorMsg;
			}
		},
		// 限制最大长度
		maxLength: function(value, length, errorMsg) {
			if (value.length > length) {
				return errorMsg;
			}
		},
		// 手机号码格式
		mobile: function(value, errorMsg) {
			if (!/^0?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$/.test(value)) {//   /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/
				return errorMsg;
			}
		},
		//密码验证
		password: function(value, errorMsg) {
			if (!/^[\w\\\[\]\:\^\-~!@#$%&*()-+={}|;'",.\/<>?]{6,16}$/.test(value)) {
				return errorMsg;
			}
		},
		//重复密码验证
		equal: function(value, selector, errorMsg) {
			if (value!==$.trim($(selector).val())) {
				return errorMsg;
			}
		},
		//验证邮箱
		email: function(value, errorMsg) {
			if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/.test(value)) {
				return errorMsg;
			}
		}
	};
	var Validator = function() {
		this.cache = []; // 保存校验规则
	};
	Validator.prototype.add = function(dom, rules, errfunc) {//添加验证
		var self = this;
			
		for (var i = 0, rule; rule = rules[i++];) {
			(function(rule) {
				var strategy_arr = rule.strategy;
				var errorMsg = rule.errorMsg;
				
				self.cache.push({
					dom: dom,//验证的dom对象
					errfunc: errfunc || function() {},//错误后执行的方法
					checkfunc: function() {
						var strategyAry = strategy_arr.split(":"),
							strategy = strategyAry.shift(),
							value = dom.value;
						value = typeof value == "string" ? value.trim ? value.trim() : value.replace(/^\s+|\s+$/gm, "") : "";
						strategyAry.unshift(value);
						strategyAry.push(errorMsg);
						return strategys[strategy].apply(dom, strategyAry);//执行验证函数 strategyAry 第一个参数为dom.value 最后一个参数为错误信息
					}
				});
			})(rule);
		}
	};
	Validator.prototype.start = function() {//开始验证
		for (var i = 0, j; j = this.cache[i++];) {
			var msg = j.checkfunc(); // 开始校验 并取得校验后的返回信息
			if (msg) {
				return j.errfunc(j.dom, msg), msg;
			}
		}
	};
	Validator.prototype.newFlag = function() {
		var g = "";
		var i = 32;
		while (i--) {
			g += Math.floor(Math.random() * 16.0).toString(16);
		}
		return g;
	}
	Validator.prototype.addRulesByAttr = function(elem,errfunc){
		var self = this;
		var elem = elem,
			errfunc = errfunc||function(){},
			validate = elem.getAttribute("data-validate"),
			msg = elem.getAttribute("data-msg"),
			strategys = validate && validate.split("|") || [],
			errorMsgs = msg && msg.split("|") || [],
			rules = [];
		for (var i = 0; i < strategys.length; i++) { //遍历增加校验规则
			rules.push({
				strategy: strategys[i],
				errorMsg: errorMsgs[i]
			});
		};
		self.add(elem, rules, errfunc);
	};
	window.Validator = Validator;
})();

//函数节流  fn运行的方法，delay时间内连续调用函数，后一个调用会把前一个调用的等待处理掉，但每隔runDelay时间之久会至少执行一次
function throttle(fn, delay, runDelay) {
	var timer = null;
	var t_start;
	return function() {
		var context = this,
			args = arguments,
			t_cur = new Date();
		timer & clearTimeout(timer);
		if (!t_start) {
			t_start = t_cur;          
		}          
		if (t_cur - t_start >= runDelay) {
			fn.apply(context, args);
			t_start = t_cur;          
		} else {
			timer = setTimeout(function() {
				fn.apply(context, args);                
			}, delay);          
		}      
	}
}


var NN = window.NN || {};
// NN.layerMsg = function(msg, time, callback) { //msg消息；time关闭时间(单位为秒)，默认1秒；callback关闭后回调；time和callback没有先后之分
// 	if (typeof time == "function") {
// 		callback = [time, time = callback][0];
// 	};
// 	layer.open({
// 		type: 1,
// 		title: 0,
// 		closeBtn: 0,
// 		shade: 0,
// 		skin: "layer_msg",
// 		shift: 5, //动画类型
// 		//btn: ['确定'],
// 		time: time * 1000 || 1000,
// 		success: function(elem, index) {},
// 		end: function() {
// 			callback && callback();
// 		},
// 		content: msg
// 	});
// },
NN.layerMsg = function (msg, time, callback) { //msg消息；time关闭时间(单位为秒,不传则按照文字长度自动计算时间)，默认1秒；callback关闭后回调；time和callback没有先后之分
    if (typeof time == "function") {
        callback = [time, time = callback][0];
    };
    if (!time) { //没传时间参数，根据文字调整时间
        var len = msg.length;
        time = len / 6 + 0.2; //每6个字1秒，加上0.2秒弹出阅读反应时间
        time < 1.5 && (time = 1.5);
        time > 4 && (time = 4);
    }
    layer.open({
        type: 1,
        title: "温馨提示",
        closeBtn: 0,
        shade: 0,
        skin: "",
        shift: 5, //动画类型
        //btn: ['确定'],
        time: time * 1000 || 1500,
        success: function (elem, index) { },
        end: function () {
            callback && callback();
        },
        content: '<div class="layer_msg">' + msg + '</div>'
    });
},
NN.layerConfirm = function (msg, yesCallback, noCallback) { //msg消息；yesCallback确定按钮回调；noCallback取消按钮回调，返回false时不关闭弹出层
    var isobj = Object.prototype.toString.call(msg) == '[object Object]',
        opt = {},
        btn;
    if (isobj) {
        opt = msg;
        msg = opt.msg;
        yesCallback = opt.yes;
        noCallback = opt.cancel;
        btn = opt.btn;
    }
    layer.open({
        type: 1,
        title: "温馨提示",
        skin: "",
        closeBtn: 0,
        shift: 5, //动画类型
        btn: btn || ['确定', '取消'],
        success: function (elem, index) {
            var doc = document,
                activeElem = doc.activeElement || {},
                tagN = activeElem.tagName || '';
            if (tagN.toLowerCase() == 'a') {
                activeElem.blur(); //防止a标签点击后聚焦，按确定键后触发click事件
            }
        },
        yes: function (index, elem) {
            yesCallback && yesCallback(index, elem);
            layer.close(index);
        },
        btn2: function (index) {//layer 3.0版本后 “取消”即第二个按钮是这个函数 cancel只对右上角按钮有效
            return noCallback && noCallback(index);
        },
        // cancel: function(index) {
        // 	return noCallback && noCallback(index);
        // },
        content: '<div class="layer_alert">' + msg + '</div>'
    });
},
NN.layerAlert = function (msg, time, callback) { //msg消息；time关闭时间(单位为秒)，可不填，表示不关闭；callback关闭后回调；time和callback没有先后之分
    if (typeof (time) == "function") {
        callback = [time, time = callback][0];
    };
    layer.open({
        type: 1,
        title: 0,
        shift: 5, //动画类型
        closeBtn: 0,
        skin: "",
        btn: ['确定'],
        time: time * 1000 || 0,
        success: function (elem, index) { },
        end: function () {
            callback && callback();
        },
        content: '<div class="v3_layer_alert">' + msg + '</div>'
    });
},
NN.layerTips = function (msg, id, opt) { //msg消息；id 类名(.abc)或id(#abc)或dom对象；opt设置参数对象
    var opt = opt || {},
        json = $.extend({
            //tips: [3, "#aaa"],
            shift: 5 //动画类型
        }, opt);
    Object.prototype.toString.call(opt.tips) !== '[object Array]' && (json.tips = [opt.tips || 3, "#aaa"]);
    layer.tips(msg, id, json);
},
//opt为对象；有title(标题，默认不显示),success(出现弹窗后的函数),width(宽度，默认auto),height(高度，默认auto),html(页面内容),
//btn(按钮),yes(第一个按钮方法),cancel或btn2(第二个按钮方法),shade(弹层透明度),closeBtn(按钮风格，0为不显示),skin(样式类名)等属性
NN.layerPage = function (opt) {
    opt = opt || {};
    !opt.btn2 && (opt.btn2 = opt.cancel);//layer 3.0版本后 “取消”即第二个按钮是这个函数 cancel只对右上角按钮有效
    var arr = ["btn", "yes", "cancel", "btn2"],
        json = {
            btn: opt.btn || ['确定', '取消'],
            yes: function (index, elem) {
                opt.yes && opt.yes(index, elem) !== false && layer.close(index);
            },
            cancel: function (index) {
                if (opt.cancel) {
                    return opt.cancel(index);
                }
            },
            btn2: function (index) {
                if (opt.btn2) {
                    return opt.btn2(index);
                }
            }
        },
        now_json = {
            type: 1,
            title: opt.title || false,
            shade: opt.shade,
            closeBtn: opt.closeBtn, //1 2 0不显示
            skin: opt.skin || "",
            shift: 5, //动画类型
            success: function (elem, index) {
                var doc = document,
                    activeElem = doc.activeElement || {},
                    tagN = activeElem.tagName || '';
                if (tagN.toLowerCase() == 'a') {
                    activeElem.blur(); //防止a标签点击后聚焦，按确定键后触发click事件
                }
                $(elem).on('click', '.main_layer_box .close', function (event) { //关闭弹出层
                    layer.close(index);
                });
                opt.success && opt.success(elem, index);
            },
            area: [opt.width || 'auto', opt.height || 'auto'],
            content: opt.html || ""
        };
    for (var i = arr.length - 1; i >= 0; i--) {
        opt[arr[i]] && (now_json[arr[i]] = json[arr[i]]);
    };
    layer.open(now_json);
},
//替换当前页面地址
NN.replacePage = function (url, title) {
    url && history.replaceState({}, title || "", url);
    var triggerEvent = "onpopstate" in window && !(navigator.userAgent.indexOf('Trident') > -1 || navigator.userAgent.indexOf("Edge") > -1) ? "popstate" : "hashchange";
    $(window).trigger(triggerEvent);
},
NN.parseQuery = function(a) {//将url参数转化为json，a为链接地址，默认当前地址
	if (void 0 === a && (a = location.href), -1 != a.indexOf("?") && (a = a.split("?").pop()) || (a = ""), !a) return {};
	for (var b = a.split("&"), c = {}, d = b.length - 1; d >= 0; d--) {
		var e = b[d].split("=");
		c[e[0]] = e[1] ? decodeURIComponent(e[1].replace(/\+/g, " ")) : null
	}
	return c
},
NN.stringifyQuery = function(a) {//将json转化为url参数，a为对象
	var b = [];
	for (var c in a)
		if ("string" == typeof a[c] || "number" == typeof a[c]) b.push(c + "=" + encodeURIComponent(a[c]));
		else if ("array" == typeof a[c])
		for (var d = 0; d < a[c].length; d++) b.push(c + "=" + encodeURIComponent(a[c][d]));
	return 0 === b.length ? "" : b.join("&")
};
$(function(){
    //首页头部固定
    ! function () {
        var $window = $(window),
            $header = $(".header"),
            $wrap = $('<div class="header_wrap"></div>'),
            checkTop = throttle(function () { //50时间内连续调用函数，后一个调用会把前一个调用的等待处理掉，但每隔100时间之久会至少执行一次
                var currentTOP = $window.scrollTop();
                if (currentTOP > 100) {
                    $header.addClass('header_fix');
                } else {
                    $header.removeClass('header_fix');
                }
            }, 50, 100);
        if (!$header.length) return;
        $wrap.css('height', $header.outerHeight());
        $header.wrap($wrap);
        $window.scroll(checkTop).trigger("scroll");
    }();

	//回车数据提交失去焦点
	$(".nonpoint,input[type='submit'],input[type='button']").on('keypress', function (e) {
		var target = e.target || e.srcElement;
		if (e.keyCode == 13) {
			target.blur();
		}
	});

	//全局ajax事件
	var layerLoad;
	NN.loading = !0;
	// $(document).ajaxSend(function() {
	// 	NN.loading && (layerLoad = layer.load(2, {
	// 		time: 60 * 1000
	// 	}));
	// });
	// $(document).ajaxComplete(function() {
	// 	layer.close(layerLoad);
	// });
	
});




