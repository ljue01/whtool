$(function($){
	
	let heightClien = document.body.clientHeight;
	$('#about').click(function(){
		let aboutPop ='<div class="pop-box none"></div>';
		let aboutBox = 
			'<div class="about-box none">'+
				'<p>在设计时，经常要算配图的宽高比例多少合适，计算器的话，要按好多下，本人比较懒，因此写了个脚本好偷懒...这个项目是开源的，代码在 <a class="git-link" target="_blank" href="https://github.com/ljue01/whtool">GitHub</a> 上。</p>'+
				'<div class="about-img-box">'+
					'<div class="about-img">'+
						'<img src="img/wxgzh.png" alt="公众号">'+
						'<label class="inp-name">公众号：设计师工作日常</label>'+
					'</div>'+
					'<div class="about-img">'+
						'<img src="./img/qqqun.png" alt="QQ群">'+
						'<label class="inp-name">QQ群：707467840</label>'+
					'</div>'+
				'</div>'+
				'<p>公众号里有记录的设计和前端方面的文章、教程，可以关注一下。</p>'+
				'<p>QQ群的话，有一群设计师、程序员在一块玩耍，欢迎加入，群里公告也有微信群的二维码也可以加入。</p>'+
				'<p>Happy End</p>'+
			'</div>';
		$('body').append(aboutPop);
		$('body').append(aboutBox);
		$('.pop-box').css('height',heightClien+'px').fadeIn(500);
		$('.about-box').slideDown(500);
	});
	
	$('body').delegate('.pop-box','click',function(){
		$('.about-box').slideUp(500);
		$('.pop-box').css('height',heightClien+'px').fadeOut(500);
		setTimeout(function(){
			$('.pop-box').remove();
			$('.about-box').remove();
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