var $ = require("../lib/jquery-2.1.1.min.js");
$(function() {
	var page = {
		init: function() {
			this.clickA();
			this.footTab();
		},
		//页面中所有可点击的A标签
		clickA: function() {
			$(document).on('click', 'a[href]', function(e) { //冒泡事件
				//		e.preventDefault(); //取消它的默认行为
				var temId = $(this).attr('href');
				var title = $(this).attr('title');
				$('#label').html(title);
				$(temId).show().siblings().hide();
			})
		},
		//底部按钮效果
		footTab: function() {

			$(".footer-tab").on("click", function() {
				var _index = $(this).index();
				$('.mark').animate({
					left: _index * 25 + '%'
				}, 300);
			})
		}
	}
	page.init();
})