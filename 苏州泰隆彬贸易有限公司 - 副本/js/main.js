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
    if (_htm == "��������") {
        $("#adheaden").append("<span>About us</span>");
    } else if (_htm == "��������") {
        $("#adheaden").append("<span>About us</span>");
    } else if (_htm == "��Ʒ����") {
        $("#adheaden").append("<span>About us</span>");
    } else if (_htm == "��Ʒ����") {
        $("#adheaden").append("<span>About us</span>");
    } else if (_htm == "������Դ") {
        $("#adheaden").append("<span>About us</span>");
    } else if (_htm == "�ͻ�����") {
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
            alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
        }
    }
}
//��Ϊ��ҳ <a onclick="SetHome(this,window.location)">��Ϊ��ҳ</a>
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
                alert("�˲�����������ܾ���\n�����������ַ�����롰about:config�����س�\nȻ�� [signed.applets.codebase_principal_support]��ֵ����Ϊ'true',˫�����ɡ�");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', vrl);
        }
    }
}