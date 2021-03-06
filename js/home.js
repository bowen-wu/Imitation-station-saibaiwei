$(function(){
    // 头部开始

    // 头部导航二级菜单
    var $food=$("#header_nav_food");
    var $_food=$(".header_nav_food");
    $food.hover(function(){
        $_food.css("display","block");
    },function(){
        $_food.css("display","none");
    }).trigger("mouseleave");
    // 头部导航二级菜单结束

    // 头部美食菜单点击事件
    var $list_food=$_food.children("li");
    var index_food;
    var $list_first=$(".content_right_first_li");
    $list_food.click(function(){
        index_food=$list_food.index(this);
        sessionStorage.setItem("skip_header_menu","page_header");
        sessionStorage.setItem("click_index",index_food);
    });
    // 头部美食菜单点击事件结束

    // 头部结束

    // 内容图片next和prv
    var $content_pic=$("#content .content_pic");
    var $span=$content_pic.find("span");
    $content_pic.hover(function(){
        $span.fadeIn().css("cursor","pointer");
    },function(){
        $span.fadeOut().css("cursor","pointer");
    }).triggerHandler("mouseleave");
    // 内容图片next和prv结束

    // 轮播图
    var $turnpic=$("#content .content_turnpic");
    var $list=$turnpic.find("li");
    var timer_01,timer_02,index=0;
    startMove(index);
    timer_01=setInterval(function(){
        index++;
        if(index>=$list.length){
            index=0;
        }
        startMove(index);
    },7000);
    function startMove(index){
        var $current=$list.eq(index);
        var $background=$current.find(".background");
        var $top=$current.find(".top");
        var $bottom=$current.find(".bottom");
        $current.stop(true,true).fadeIn(function(){
            debugger;
            $background.animate({height:"156px"},function(){
                debugger;
                $top.animate({left:0},function(){
                    $bottom.animate({left:"0"},function(){
                        $top.delay(4000).animate({left:"290px"},function(){
                            $(this).css("left","-290px");
                            $bottom.delay(200).animate({left:"290px"},function(){
                                $(this).css("left","-290px");
                                $background.delay(200).animate({height:"0"});
                            });
                        });
                    });
                });
            })
        }).siblings().fadeOut();
    }
    // 轮播图结束

    // 尾部开始

    //如何点餐
    var $pic_footer_order=$("#footer .footer_nav_order");
    $pic_footer_order.click(function(){
        sessionStorage.setItem("skip_footer_order","page");
    });
    // 如何点餐结束

    //促销活动
    var $pic_activity=$("#footer .footer_nav_activity");
    $pic_activity.click(function(){
        $(this).find("img").click();
    });
    //促销活动结束

    // 微信图片
    var $pic_code=$("#footer .footer_nav_code");
    var $pic_weixin=$("#footer .footer_nav_weixin");
    $pic_weixin.hover(function(){
        $pic_code.show();
    },function(){
        $pic_code.hide();
    }).triggerHandler("mouseleave");
    // 微信图片结束
});