(function(){var e;e=function(){var e,t;return t=function(e){return $("body").css("background-color",e)},e=$.cookie("background_color")||"",e&&t(e),$(".colors a").each(function(){var e,n;return n=$(this),e=n.attr("href"),n.css("background-color",e),n.on("click",function(n){return n.preventDefault(),e=$(this).attr("href"),t(e),$.cookie("background_color",e,{expires:7})})})},window.ColorSelector=e}).call(this);