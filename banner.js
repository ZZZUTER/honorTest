define(["jquery"], function($){
    function bannerTab(){
        var dIv = $(".el-carousel").find("div div a div");
        var aBtns = $(".el-carousel").find("ul li");
        var iNow = 0; //当前显示图片的下标
        var timer = null;

        //点击按钮的时候实现图片的切换
        aBtns.click(function(){
            iNow = $(this).index();
            tab();
        })

        //自动轮播
        timer = setInterval(function(){
            iNow++;
            // document.title = iNow;
            tab();
        }, 2500);

        //封装一个切换的函数
        function tab(){
            if(iNow == 6){
                iNow = 0;
            }
            if(iNow == -1){
                iNow = 5;
            }
            aBtns.removeClass("active").eq(iNow).addClass("active");
            dIv.hide().css("opacity", 0.2).eq(iNow).show().animate({opacity: 1}, 800);
        }

        //移入移出
        $(".el-carousel").mouseenter(function(){
            clearInterval(timer);
          }).mouseleave(function(){
             timer = setInterval(function(){
             iNow++;
             tab();
           }, 2000);
          })

          //添加左右切换
         $(".container").find("button").click(function(){
            if(this.className == 'left'){
              iNow--;
              tab();
            }else{
              //右
              iNow++;
              tab();
            }
            return false; //阻止默认行为
          })
    }
    return {
        bannerTab: bannerTab
    }
})