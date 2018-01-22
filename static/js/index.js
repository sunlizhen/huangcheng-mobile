$(function(){
	var html = document.documentElement;
	var clientWidth = 375;
	var fontSize = 16;
	var newFontSize = html.clientWidth*fontSize/clientWidth;
	html.style.fontSize = newFontSize+'px';
	var H = $("body").height();
	$(".swiper-container").css({
		height:H+"px"
	})
	//动态设置首页内三个div的高度;
	var idnexH = $(".swiper_index").height();
	$(".swiper_index section").css({
		height:idnexH/3+"px"
	})

	
	
	
		//swiper特效--大焦点图
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			spaceBetween: 30,
			initialSlide: 1,
			noSwiping : true, //swiper-no-swiping 设置这个class 在设置noSwiping，在这个区域不能滑动；
			mousewheelControl: true,
			touchMoveStopPropagation : true,
			onSlideChangeStart: function(swiper){
            	if(swiper.activeIndex == 2){
            		$(".con_wrap_inner .line2").animate({
            			width:"100%"
            		},1500)
            		
            		//添加首页动画效果;
					$(".huanying").textillate({ 
						out: { effect: 'flipInY',delayScale: 4 ,minDisplayTime: 2000}
					});
									
					$('.yidong').textillate({
						out: { effect: 'flipInY',delayScale: 4 ,minDisplayTime: 2000}
					});
				
					//添加首页动画效果结束;
					
					$(".jingcai").removeClass("animated bounce infinite");
										
					//右边页面效果
					$(".section1:nth-child(1)").animate({
						bottom:0
					},600)
					$(".section1:nth-child(2)").delay(400).animate({
						bottom:0
					},500)
					$(".section1:nth-child(3)").delay(800).animate({
						bottom:0
					},400)
					           		           		
            	}else if(swiper.activeIndex == 1){
            		$(".con_wrap_inner .line2").animate({
            			width:"0%"
            		},1000);
            		
            		//添加首页动画效果;
					$(".huanying").textillate({ 
						in: { effect: 'flipInY',delayScale: 4 ,minDisplayTime: 2000},
						out: { effect: 'flipInY',delayScale: 4 ,minDisplayTime: 2000}
					});
					
					setTimeout(function(){
						$('.yidong').css({
							"display":"block"
						}).textillate({in: { effect: 'flipInY',delayScale: 4 ,minDisplayTime: 2000},
						out: { effect: 'flipInY',delayScale: 4 ,minDisplayTime: 2000}
						});
					},1000)
					
					//添加首页动画效果结束;
					
						$(".jingcai").addClass("animated bounce infinite");										
					
					//右边页面效果
					$(".section1:nth-child(1)").animate({
						bottom:"-400px"
					},100)
					$(".section1:nth-child(2)").animate({
						bottom:"-400px"
					},100)
					$(".section1:nth-child(3)").animate({
						bottom:"-400px"
					},100)
            		           		           		
            	}else if(swiper.activeIndex == 0){
            		
  					//添加首页动画效果;
					$(".huanying").textillate({ 
						out: { effect: 'flipInY',delayScale: 4 ,minDisplayTime: 2000}
					});
									
					$('.yidong').textillate({
						out: { effect: 'flipInY',delayScale: 4 ,minDisplayTime: 2000}
					});
				
					//添加首页动画效果结束;
					
					$(".jingcai").removeClass("animated bounce infinite");
					//右边页面效果
					$(".section1:nth-child(1)").animate({
						bottom:"-400px"
					},100)
					$(".section1:nth-child(2)").animate({
						bottom:"-400px"
					},100)
					$(".section1:nth-child(3)").animate({
						bottom:"-400px"
					},100)
            	}
        	}
  			
		});
		// 第三页slider--小焦点图
		$('.hiSlider3').hiSlider({
		isFlexible: true,
		isSupportTouch: true,
		captions: true,//自动控制
		controls: false,//隐藏左右按钮
		startSlide:0, //开始索引
		isShowPage:true, //是否显示分页按钮
		isShowControls:false,//是否显示左右按钮
		isShowTitle:false,//是否显示标题栏
		titleAttr: function(curIdx){
			return $('img', this).attr('alt');
		}
	});
})

