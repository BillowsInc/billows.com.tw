$(function(){
	var $lastId,
	$win = $(window),
	_winHeight = $win.height();
	$htmlBody = $('html,body'),
	$nav = $('.nav'),
	$navBtn = $nav.find('ul > li > a'),
	$container = $('#container'),
	$content = $('.content'),
	$summary = $('.summary'),
	$scrollBtn = $('.scrollBtn'),
	$bannerBtn = $('.bannerBtn > li > a'),
	$usedForBox = $('#usedFor'),
	$usedFor1Box = $('#usedFor1'),
	$usedFor2Box = $('#usedFor2'),
	$adviser = $('#adviser'),
	$downloadBtn = $('.downloadBtn > li'),
	$managePic = $('#managePic'),
	$managePicA = $managePic.find('a'),
	$globeOuter = $('#globeOuter'),
	$globeMiddle = $('#globeMiddle'),
	$btnBm = $('#btnBm'),
	$btnSiem = $('#btnSiem'),
	$btnTd = $('#btnTd'),
	$btnAd = $('#btnAd'),
	$btnVa = $('#btnVa'),
	$otx = $('#otx'),
	$infoInt = $('#infoInt'),
	$infoBm = $('#infoBm'),
	$infoSiem = $('#infoSiem'),
	$infoTd = $('#infoTd'),
	$infoAd = $('#infoAd'),
	$infoVa = $('#infoVa'),
	_containerArray = [],
	isClick = false;

	console.log($managePicA);
	$globeOuter.hover(function(){
		$otx.stop(false, true).fadeIn(200);
	},function(){
		$otx.stop(false, true).fadeOut(200);
	});
	$globeMiddle.hover(function(){
		$infoInt.stop(false, true).fadeIn(200);
	},function(){
		$infoInt.stop(false, true).fadeOut(200);
	});
	$btnBm.hover(function(){
		$infoBm.stop(false, true).fadeIn(200);
	},function(){
		$infoBm.stop(false, true).fadeOut(200);		
	});
	$btnSiem.hover(function(){
		$infoSiem.stop(false, true).fadeIn(200);
	},function(){
		$infoSiem.stop(false, true).fadeOut(200);
	});
	$btnTd.hover(function(){
		$infoTd.stop(false, true).fadeIn(200);
	},function(){
		$infoTd.stop(false, true).fadeOut(200);
	});
	$btnAd.hover(function(){
		$infoAd.stop(false, true).fadeIn(200);
	},function(){
		$infoAd.stop(false, true).fadeOut(200);
	});
	$btnVa.hover(function(){
		$infoVa.stop(false, true).fadeIn(200);
	},function(){
		$infoVa.stop(false, true).fadeOut(200);
	});
	$managePicA.eq(0).hover(function(){
		$managePic.css({
			'background' : 'url(images/security-portal-1.png)',
			'z-index' : 5 
		});
	},function(){
		$managePic.css({
			'background' : 'url(images/security-portal.png)',
			'z-index' : 1 
		});
	});
	$managePicA.eq(1).hover(function(){
		$managePic.css({
			'background' : 'url(images/security-portal-2.png)',
			'z-index' : 5 
		});
	},function(){
		$managePic.css({
			'background' : 'url(images/security-portal.png)',
			'z-index' : 1 
		});
	});
	$managePicA.eq(2).hover(function(){
		$managePic.css({
			'background' : 'url(images/security-portal-3.png)',
			'z-index' : 5 
		});
	},function(){
		$managePic.css({
			'background' : 'url(images/security-portal.png)',
			'z-index' : 1 
		});
	});
	//banner Btn
	//_usedForBoxTop = $usedForBox.offset();
	$bannerBtn.eq(0).click(function(e){
		e.preventDefault();
		$htmlBody.stop().animate({
			scrollTop:$usedForBox.offset().top
		},400);
	});
	$bannerBtn.eq(1).click(function(e){
		e.preventDefault();
		$htmlBody.stop().animate({
			scrollTop:$usedFor1Box.offset().top
		});
	});
	$bannerBtn.eq(2).click(function(e){
		e.preventDefault();
		$htmlBody.stop().animate({
			scrollTop:$usedFor2Box.offset().top
		});
	});
	$bannerBtn.eq(3).click(function(e){
		e.preventDefault();
		$htmlBody.stop().animate({
			scrollTop:$adviser.offset().top
		});
	});

	$.each($navBtn, function(i, value){
		var $a = $navBtn.eq(i),
		_hash =$a.prop('hash'),
		$tmp = $(_hash),
		tmpOffsetTop = $tmp.offset().top,
		tmpHeight = $tmp.outerHeight(true);

		_containerArray[i] ={
			navBtn:$a,
			top:tmpOffsetTop,
			bottom:tmpOffsetTop + tmpHeight
		}
	});

	/*$win.resize(function() {
		$summary.css({
			minHeight: _winHeight
		});
	});*/

	$scrollBtn.css({opacity:.6});
	$scrollBtn.hover(function(){
		$( this ).css({opacity:.9});
	},function(){
		$( this ).css({opacity:.6});
	});

    //$navBtn scrolling
	var scrollBtnClickTimes = 0;

	$scrollBtn.click(function(e){
		e.preventDefault();
		scrollBtnClickTimes ++;

		var divTop = _containerArray[scrollBtnClickTimes].top +10;
		$htmlBody.stop().animate({scrollTop:divTop},400);
		if(scrollBtnClickTimes >= _containerArray.length - 1){return;}
	});


	$navBtn.eq(0).addClass('current');
	$navBtn.click(function(e){
		var $this = $(this),
		_href = $this.prop('hash');

		$('.current').removeClass('current');
		$this.addClass('current');

		$htmlBody.stop().animate({
			scrollTop: $(_href).offset().top
		},400);
		e.preventDefault();
	});

	$win.scroll(function(){
		var scrollTop = $win.scrollTop();

		if(isClick == false){
			$('.current').removeClass("current");
			scrollTop = scrollTop;

			if(scrollTop >= _containerArray[10].top){
				$scrollBtn.hide(); crollBtnClickTimes = 10;
			}else{
				$scrollBtn.show();
			}
			for(var i = 0; i < _containerArray.length; i++){
				var _container = _containerArray[i];

				if(scrollTop >= _container.top && scrollTop < _container.bottom){
					_container.navBtn.addClass('current');
					scrollBtnClickTimes = i;
					return;

				}
			}
		}		
		
	});

	//downloadBtn
	$downloadBtn.hover(function(){
		$(this).find('ul').stop().fadeIn(300);
	},function(){
		$(this).find('ul').stop().fadeOut(300);
	});
});