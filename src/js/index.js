$(function() {
	//banner js end

	//代码初始化
	var size = $(".img li").size();

	//手动控制轮播图
	$(".img li").eq(0).show();
	$(".num li").eq(0).addClass("active");
	$(".num li").mouseover(function() {
		$(this).addClass("active").siblings().removeClass("active");
		var i = $(this).index();
		$(".img li").eq(i).stop().fadeIn(300).siblings().stop().fadeOut(300);
	})

	//自动轮播
	var i = 0;
	var timer = setInterval(move, 2000);

	//核心向左运动函数
	function moveL() {
		i--;
		if (i == -1) {
			i = size - 1;
		}

		$(".num li").eq(i).addClass("active").siblings().removeClass("active");
		$(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);

	}

	//核心向右运动函数
	function move() {
		i++;
		if (i == size) {
			i = 0;
		}

		$(".num li").eq(i).addClass("active").siblings().removeClass("active");
		$(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);

	}

	//左边按钮点击事件
	$(".banner .btn1").click(function() {
		moveL();
	})

	//右边按钮点击事件
	$(".banner .btn2").click(function() {
		move()

	})

	//定时器的开始于结束
	$(".banner").hover(function() {
		clearInterval(timer)
	}, function() {
		timer = setInterval(move, 1500);
	})

	//banner js end

});

$(function() {

	//about  js  start

	$('.left i').css('background-image', 'url(img/home/about-l.png)');
	$('.right i').css('background-image', 'url(img/home/about-r.png)');

	$('.about .left').mouseover(function() {
		$(this).stop().animate({
			'top': -10
		});
		$('.left i').css('background-image', 'url(img/home/about-l2.png)');
	})
	$('.about .left').mouseout(function() {
		$(this).stop().animate({
			'top': 0
		})
		$('.left i').css('background-image', 'url(img/home/about-l.png)');
	})
	$('.about .right').mouseover(function() {
		$(this).stop().animate({
			'top': -10
		});
		$('.right i').css('background-image', 'url(img/home/about-r2.png)');
	})
	$('.about .right').mouseout(function() {
		$(this).stop().animate({
			'top': 0
		})
		$('.right i').css('background-image', 'url(img/home/about-r.png)');
	})

	//about  js  end

	//pro js start

	var i = 0;
	var size = $(".wrap-img li").size();

	/*自动轮播*/
	var t = setInterval(function() {
		i++;
		move()
	}, 2000)

	/*对banner定时器的操作*/
	$(".tempWrap,.pro .btn1,.pro .btn2").hover(function() {
		clearInterval(t);
	}, function() {
		t = setInterval(function() {
			i++;
			move()
		}, 2000)
	})

	/*向左的按钮*/
	$(".pro .btn1").click(function() {
		i++
		move();
	})

	/*向右的按钮*/
	$(".pro .btn2").click(function() {
		i--
		move()
	})

	function move() {
		if (i == size - 3) {
			$('.wrap-img').css({
				left: 0
			});
			i = 1;
		}
		if (i == -1) {
			$('.wrap-img').css({
				left: -(size - 4) * 278
			});
			i = size - 5;
		}
		$('.wrap-img').stop().animate({
			left: -i * 278
		}, 800);

	}

	//pro js end
	var embed_src = '<embed src="http://cloud.video.taobao.com//play/u/823756228/p/2/e/1/t/1/31470813.swf" allowFullScreen="true" quality="high" width="500" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'
	$(".news-content-r img").click(function() {
		$(".video,.video_bg").fadeIn();
		$(".video").append(embed_src)
	})
	$(".video .close,.video_bg").click(function() {
		$(".video,.video_bg").fadeOut();
		$(".video embed").remove();
	})

});