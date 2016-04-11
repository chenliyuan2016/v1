// JavaScript Document

//index
$(function(){
	$(".banner a:first").fadeIn(500);
	function _banfade(){
		$(".banner a:first").fadeOut(500,function(){
			$(this).appendTo(".banner");
			$(".banner a:first").delay(250).fadeIn(500);
		});
	};
	function _banfade_back(){
		$(".banner a:first").fadeOut(500,function(){
			$(".banner a:last").prependTo(".banner").delay(250).fadeIn(500);
		});
	};
	var _nums = $(".banner a").length;
	if( _nums > 1 ){
		setInterval(_banfade,6000);
	}
	
	function _pros(){
		$(".probox li:first").animate({marginLeft:"-178px"},300,function(){
			$(this).appendTo(".probox ul").css({"margin-left":"4px"});
		});
	};
	var _num = $(".probox li").length;
	if( _num > 5 ){
		setInterval(_pros,3000);
	}
});

$(function () {
    var _htm = $("#adheaden").children("b").html();
    if (_htm == "关于我们") {
        $("#adheaden").append("<span>About us</span>");
    } else if (_htm == "新闻中心") {
        $("#adheaden").append("<span>About us</span>");
    } else if (_htm == "产品中心") {
        $("#adheaden").append("<span>About us</span>");
    } else if (_htm == "产品参数") {
        $("#adheaden").append("<span>About us</span>");
    } else if (_htm == "人力资源") {
        $("#adheaden").append("<span>About us</span>");
    } else if (_htm == "客户服务") {
        $("#adheaden").append("<span>About us</span>");
    }
});


function AddFavorite(sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
//设为首页 <a onclick="SetHome(this,window.location)">设为首页</a>
function SetHome(obj, vrl) {
    try {
        obj.style.behavior = 'url(#default#homepage)'; obj.setHomePage(vrl);
    }
    catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            catch (e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl);
        }
    }
}