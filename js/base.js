layui.use('element', function(){
    $ = layui.jquery;
    var element = layui.element;
   
    $('.layui-nav-item').click(function(event) {
		$(this).siblings().removeClass('layui-nav-itemed');
	});

    $('.layui-tab-title li').eq(0).find('i').remove();
    

    // //使iframe内容撑开视口
    height = $('.layui-layout-admin .site-demo').height();
    $('.layui-layout-admin .site-demo').height(height-70);

    //侧边栏按钮点击隐藏侧边栏
    if($(window).width() <768){
        trun = 0;
        $('.x-slide_left').css('background-position','0px -61px');
        $('.x-side').animate({left:'-200px'},200).siblings('.s-main').animate({left:'0'},200);
    }else{
        trun = 1;
        $('.x-side').animate({left:'0px'},200).siblings('.s-main').animate({left:'200px'},200);
    }
    $('.x-slide_left').click(function(event){
        if(trun){
            $('.x-side').animate({left:'-200px'},200).siblings('.s-main').animate({left:'0'},200);
            $(this).css('background-position','0px -61px');
            trun = 0;
        }else{
            $('.x-side').animate({left:'0px'},200).siblings('.s-main').animate({left:'200px'},200);
            $(this).css('background-position','0px 0px');
            trun = 1;
        }
    })

    //监听导航点击
    element.on('nav',function(elem){
        title = elem.find('cite').text();
    	url = elem.find('a').attr('_href');
    	// alert(url);

    	for (var i = 0; i <$('.s-iframe').length; i++) {
    		if($('.s-iframe').eq(i).attr('src')==url){
    			element.tabChange('s-tab', i);
    			return;
    		}
    	};

    	res = element.tabAdd('s-tab', {
	        title: title//用于演示
            ,content: '<iframe frameborder="0" src="'+url+'" class="s-iframe"></iframe>'
            ,id: $('.layui-tab-title li').length
		    });

 
        element.tabChange('s-tab', $('.layui-tab-title li').length-1);

    	$('.layui-tab-title li').eq(0).find('i').remove();

    });

    $('.home i').css('display','none');

    $(".login .header .headerRight span:nth-of-type(1)").click(function(){
        $('body').css("background","#333");
    })
    $(".login .header .headerRight span:nth-of-type(2)").click(function(){
        $('body').css("background","#019688");
    })
    $(".login .header .headerRight span:nth-of-type(3)").click(function(){
        $('body').css("background","#D3D916");
    })
    
});
