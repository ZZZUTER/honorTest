console.log("加载成功");

//1、配置要引入的.js模块的路径
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "parabola": "parabola",  //抛物线方程不支持AMD规范
        "banner": "banner",
        "nav": "nav"
    },
    shim: {
        //设置依赖关系
        "jquery-cookie": ["jquery"],
        //某一个模块，不遵从AMD
        "parabola": {
            exports: "_"
        }
    }

})

//2、引入模块，调用实现对应的功能
require(["banner", "nav"], function(banner, nav){
    banner.bannerTab();
    nav.leftNav();
})