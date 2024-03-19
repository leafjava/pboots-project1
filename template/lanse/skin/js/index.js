$(function () {
    if (!$("#b182").length || $("#b182 .list182 li").length <= 1) {    return false; }
    var _this = $("#b182"),
        me = $("#b182 .list182"),
        tip = $("#b182 .tip182"),
        prev = _this.find(".prev182"),
        next = _this.find(".next182"),
        t, interval = 2000,
        speed = 1000,
        speed2 = 700,
        n = 0,
        N = me.children("li").length;
        me.find("li:gt(0)").hide();
    if ($("#b182 .tip182").length) {
        var htmlTip = "";
        for (var i = 0; i < N; i++) {
            if (i == 0) {
                htmlTip += "<span class='cur'></span>";
            } else {
                htmlTip += "<span></span>";
            }
        }
        tip.append(htmlTip);
    }
    var func = function() {
        if (n >= N - 1) {
            n = 0;
        } else {
            n++;
        }
        me.children("li").eq(n).css({
            "z-index": 2
        }).stop().fadeIn(speed).siblings("li").css({
            "z-index": 1
        }).stop().fadeOut(speed2);
        if ($("#b182 .tip182").length) {
            tip.children("span").eq(n).addClass("cur").siblings("span").removeClass("cur");
        }
    }
    next.bind("click", function(){
        clearInterval(t);
        func();
    });
    prev.bind("click", function(){
        clearInterval(t);
        n -= 2;
        n < -1 ? n = N-2 : n ;
        func();
    });
    tip.children("span").mouseover(function() {
        clearInterval(t);
        n = $(this).index() - 1;
        func();
    });
    t = setInterval(func, interval);
    _this.hover(function(){
        clearInterval(t);
    },function(){
        t = setInterval(func, interval);
    });
})
jQuery(".prccon").slide({trigger:"click"});
$(function(){
$("#pic231").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,autoPlay:true,delayTime:500,effect:"left",interTime:2000})
});