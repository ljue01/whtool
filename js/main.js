$(function($){
	
	let heightClien = document.body.clientHeight;
	$('#about').click(function(){
		let aboutPop ='<div class="pop-box none"></div>';
		let aboutBox = 
			'<div class="about-box none">'+
				'<p>在设计时，经常要算配图的宽高比例多少合适，计算器的话，要按好多下，本人比较懒，因此写了个脚本好偷懒...</p>'+
				'<div class="about-img-box">'+
					'<div class="about-img">'+
						'<img src="img/wxgzh.png" alt="公众号">'+
						'<label class="inp-name">公众号：设计师工作日常</label>'+
					'</div>'+
				'</div>'+
				'<p>公众号里有记录的设计和前端方面的文章、教程，可以关注一下。</p>'+
				'<p style="margin-bottom: 0;">电报频道：<a style="color: #3a6dd5;" href="https://t.me/designer_work_share" target="_blank">设计师工作日常© 频道</a></p>'+
			'</div>';
		$('body').append(aboutPop);
		$('body').append(aboutBox);
		$('.pop-box').css('height',heightClien+'px').fadeIn(500);
		$('.about-box').slideDown(500);
	});
	
	$('#like').click(function(){
		let likePop ='<div class="pop-box none"></div>';
		let likeBox = 
			'<div class="like-box none">'+
				'<p>WHTOOL是一个设计师辅助小工具，如果你喜欢它，可以推广给你的设计师小伙伴，也可以通过打赏支持一下。</p>'+
				'<div class="like-img-box">'+
					'<div class="about-img">'+
						'<img src="img/zfb.png" alt="支付宝">'+
						'<label class="inp-name">支付宝</label>'+
					'</div>'+
					'<div class="about-img">'+
						'<img src="./img/wx.png" alt="微信支付">'+
						'<label class="inp-name">微信支付</label>'+
					'</div>'+
				'</div>'+
			'</div>';
		$('body').append(likePop);
		$('body').append(likeBox);
		$('.pop-box').css('height',heightClien+'px').fadeIn(500);
		$('.like-box').slideDown(500);
	});
	
	$('#sponsor-btn').click(function(){
			let sponsorPop ='<div class="pop-box none"></div>';
			let sponsorBox = 
				'<div class="sponsor-box none">'+
					'<p>因为个人运营网站，这个入口是希望大家能免费的支持一下本站的运营。</p>'+
					'<p>如果您觉得这个网站还不错，可以打开支付宝扫一扫下面的红包码，在您领取一些红包的同时，也可以支持和帮助一下本站。</p>'+			
					'<p>此致！敬礼！</p>'+
					'<div class="like-img-box">'+
						'<div class="about-img">'+
							'<img src="img/zfbhb.png" alt="支付宝红包">'+
							'<label class="inp-name">- 扫码领红包 -</label>'+
						'</div>'+
					'</div>'+
				'</div>';
			$('body').append(sponsorPop);
			$('body').append(sponsorBox);
			$('.pop-box').css('height',heightClien+'px').fadeIn(500);
			$('.sponsor-box').slideDown(500);
		});
	
	
	
	$('body').delegate('.pop-box','click',function(){
		$('.about-box').slideUp(500);
		$('.like-box').slideUp(500);
		$('.sponsor-box').slideUp(500);
		$('.pop-box').css('height',heightClien+'px').fadeOut(500);
		setTimeout(function(){
			$('.pop-box').remove();
			$('.about-box').remove();
			$('.like-box').remove();
			$('.sponsor-box').remove();
		},500);
	});
	
	$('#w-num').on('click',function(){
		$('#w-inp').select();
		document.execCommand("Copy");
		$('.message').slideDown(500);
		setTimeout(function(){
			$('.message').slideUp(500);
		},1500);
	});
	
	$('#h-num').on('click',function(){
		$('#h-inp').select();
		document.execCommand("Copy");
		$('.message').slideDown(500);
		setTimeout(function(){
			$('.message').slideUp(500);
		},1500);
	});
	
	var selW = 16;
	var selH = 9;
	$('.scale-box a').click(function(){
		$('.scale-box a').removeClass('scale-sel');
		$(this).addClass('scale-sel');
		let selIndex = $(this).index();
		switch(selIndex){
			case 0:
				$('.pic').animate({height: '211px'}, 500);
				selW = 16;
				selH = 9;
				scaleChange();
			break;
			case 1:
				$('.pic').animate({height: '281px'}, 500);
				selW = 4;
				selH = 3;
				scaleChange();
			break;
			case 2:
				$('.pic').animate({height: '250px'}, 500);
				selW = 3;
				selH = 2;
				scaleChange();
			break;
			case 3:
				$('.pic').animate({height: '232px'}, 500);
				selW = 1.618;
				selH = 1;
				scaleChange();
			break;
		}
	});
	
	var widthNum,heightNum;
	
	$('#w-inp').on('keyup', function(){
		widthNum = $(this).val();
		heightNum = widthNum / selW * selH ;
		heightVal = Math.round((heightNum + Number.EPSILON) * 100) / 100;
		$('#h-inp').val(heightVal.toFixed());
	});
	
	$('#h-inp').on('keyup', function(){
		heightNum = $(this).val();
		widthNum = heightNum / selH * selW ;
		widthVal = Math.round((widthNum + Number.EPSILON) * 100) / 100;
		$('#w-inp').val(widthVal.toFixed());
	});
	
	function scaleChange(){
		widthNum = $('#w-inp').val();
		heightNum = $('#h-inp').val();
		if( widthNum != '' ){
			heightNum = widthNum / selW * selH ;
			heightVal = Math.round((heightNum + Number.EPSILON) * 100) / 100;
			$('#h-inp').val(heightVal.toFixed());
		}
		if ( widthNum == '' && heightNum != ''){
			widthNum = heightNum / selH * selW ;
			widthVal = Math.round((widthNum + Number.EPSILON) * 100) / 100;
			$('#w-inp').val(widthVal.toFixed());
		}
	}

})