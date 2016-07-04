/**
 * Created by wuzhong on 2016/6/30.
 */
var iglogw = 0, iglogh = 0, tlogok = 0, allimgwh = "", alpiw = 0, alpih = 0, alpow = 0, alpoh = 0, alcw = 0;
function loadlogowh() {
    iglogw = parseInt(document.documentElement.clientWidth);
    if (document.getElementById("topback") != null)
        iglogw = parseInt(document.documentElement.clientWidth) - 214;
    iglogh = 70;
    if (parseInt(document.documentElement.clientWidth) < 800) {
        var tbl = parseInt(document.documentElement.clientWidth) / 800;
        if (parseInt(document.documentElement.clientWidth) < 320)tbl = 0.4;
        iglogh = 64 * tbl;
        if (document.getElementById("topback") != null)
            iglogw = parseInt(document.documentElement.clientWidth) - (102 * tbl + 87 * tbl + 25);
    }
    iglogw = parseInt(iglogw) - 18;
}


function loadlogo(tlogo) {
    loadlogowh();
    var w = tlogo.width;
    var h = tlogo.height;
    tlogo.style.display = "";
    if (w > iglogw || h > iglogh) {
        if (w > iglogw) {
            tlogo.style.width = iglogw + "px";
            var th = h * (iglogw / w);
            tlogo.style.height = th + "px";
            if (parseInt(tlogo.style.height) > iglogh) {
                tlogo.style.height = iglogh + "px";
                tlogo.style.width = w * (iglogh / h) + "px";
            }
        }
        else {
            tlogo.style.height = iglogh + "px";
            tlogo.style.width = w * (iglogh / h) + "px";
            if (parseInt(tlogo.style.width) > iglogw) {
                tlogo.style.height = h * (iglogw / w) + "px";
                tlogo.style.width = iglogw + "px";
            }
        }
    }
    tlogok = "1";
}


var tocwidth = -1, mocwidth = -1, focwidth = -1;
function loadtop() {
    if (parseInt(tocwidth) == parseInt(document.documentElement.clientWidth))return;
    if (parseInt(document.documentElement.clientWidth) < 320) {
        document.getElementById("dvtopbg").style.height = "40px";
        document.getElementById("dvtop").style.height = "40px";
        var tbl = 0.4;
        document.getElementById("dvtop").style.paddingTop = 9 * tbl + "px";
        if (document.getElementById("topback") != null) {
            document.getElementById("topback").style.height = 64 * tbl + "px";
            document.getElementById("topback").style.width = 102 * tbl + "px";
            document.getElementById("tophome").style.height = 64 * tbl + "px";
            document.getElementById("tophome").style.width = 87 * tbl + "px";
            document.getElementById("topback").style.marginLeft = 10 * tbl + "px";
            document.getElementById("tophome").style.marginRight = 10 * tbl + "px";
        }
    }
    else {
        if (parseInt(document.documentElement.clientWidth) < 800) {
            var tbl = parseInt(document.documentElement.clientWidth) / 800;
            document.getElementById("dvtopbg").style.height = 99 * tbl + "px";
            document.getElementById("dvtop").style.height = 99 * tbl + "px";
            document.getElementById("dvtop").style.paddingTop = 9 * tbl + "px";
            if (document.getElementById("topback") != null) {
                document.getElementById("topback").style.height = 64 * tbl + "px";
                document.getElementById("topback").style.width = 102 * tbl + "px";
                document.getElementById("tophome").style.height = 64 * tbl + "px";
                document.getElementById("tophome").style.width = 87 * tbl + "px";
            }
        }
    }
    if (tlogok == "1")
        loadlogo(document.getElementById("tiglog"));
    document.getElementById("dvtopbg").style.display = "block";
    document.getElementById("dvtop").style.display = "block";
    tocwidth = parseInt(document.documentElement.clientWidth);
}


function loadmain() {
    if (parseInt(mocwidth) == parseInt(document.documentElement.clientWidth))return;
    var tm = "";
    var tw = parseInt(document.documentElement.clientWidth);
    if (tw < 320)tw = 320;
    tw = tw / 800;
    if (parseInt(document.documentElement.clientWidth) < 320)
        document.getElementById("dvmain").style.paddingTop = "44px"; else {
        if (parseInt(document.documentElement.clientWidth) < 800) {
            var tblt = parseInt(document.documentElement.clientWidth) / 800;
            document.getElementById("dvmain").style.paddingTop = 99 * tblt + 5 + "px";
        }
    }
    if (parseInt(document.documentElement.clientWidth) < 640)
        document.getElementById("dvmain").style.paddingBottom = 90 * parseInt(document.documentElement.clientWidth) / 640 + 15 + "px";
    if (document.getElementById("dvmenu") != null) {
        document.getElementById("dvmenu").style.width = parseInt(document.documentElement.clientWidth) - 24 + "px";
        if (parseInt(document.documentElement.clientWidth) < 800) {
            var tfs = 14;
            if (36 * tw > 14)tfs = 36 * tw;
            tm = parseInt(document.documentElement.clientWidth) - 24 - (30 * tw + 6) + "px ";
            $("#dvmenu a").css({
                "background": "url(ke01_img/app-ico1.png) no-repeat " + tm,
                "height": (115 * tw) + "px",
                "padding-top": (15 * tw) + "px",
                "font-size": tfs + "px"
            });
            $("#dvmenu li").css({"margin-top": (22 * tw) + "px", "height": (130 * tw) + "px"});
            $("#dvmenu img").css({
                "width": (100 * tw) + "px",
                "height": (100 * tw) + "px",
                "margin-left": (15 * tw) + "px",
                "margin-right": (20 * tw) + "px"
            });
            if (document.getElementById("dvpw") != null)
                $("#dvpw").css({"font-size": (32 * tw) + "px", "margin-top": (26 * tw) + "px"});
        }
        else {
            tm = parseInt(document.documentElement.clientWidth) - 24 - 30 + "px 50px";
            $("#dvmenu a").css("background", "url(ke01_img/app-ico1.png) no-repeat " + tm + "");
        }
    }
    if (document.getElementById("dvmenulist") != null) {
        var tdu = window.location.href.toLowerCase();
        if (tdu.indexOf("newsclass.aspx") > -1)
            $("#dvmenulist li").css({"line-height": 100 + "px"});
        document.getElementById("dvmain").style.paddingTop = "90px";
        if (parseInt(document.documentElement.clientWidth) < 320)
            document.getElementById("dvmain").style.paddingTop = "37px"; else {
            if (parseInt(document.documentElement.clientWidth) < 800) {
                var tblt = parseInt(document.documentElement.clientWidth) / 800
                document.getElementById("dvmain").style.paddingTop = 99 * tblt - 3 + "px";
            }
        }
        document.getElementById("dvmain").style.paddingBottom = "90px";
        if (parseInt(document.documentElement.clientWidth) < 640) {
            var tbl = parseInt(document.documentElement.clientWidth) / 640;
            document.getElementById("dvmain").style.paddingBottom = 88 * tbl + 2 + "px";
        }
        document.getElementById("dvmenulist").style.width = parseInt(document.documentElement.clientWidth) + "px";
        if (parseInt(document.documentElement.clientWidth) < 800) {
            var tfs = 14;
            if (36 * tw > 14)tfs = 36 * tw;
            tm = parseInt(document.documentElement.clientWidth) - 20 + "px ";
            $("#dvmenulist a").css({
                "background": "url(ke01_img/app-ico1.png) no-repeat " + tm,
                "height": (100 * tw + 10) + "px",
                "font-size": tfs + "px"
            });
            $("#dvmenulist a").css({"height": (115 * tw) + "px", "padding-top": (15 * tw) + "px"});
            $("#dvmenulist li").css({"height": (130 * tw) + "px"});
            if (tdu.indexOf("newsclass.aspx") > -1)
                $("#dvmenulist li").css({"height": (130 * tw) + "px", "line-height": (100 * tw) + "px"}); else
                $("#dvmenulist img").css({
                    "width": (100 * tw) + "px",
                    "height": (100 * tw) + "px",
                    "margin-left": (15 * tw) + "px",
                    "margin-right": (20 * tw) + "px"
                });
        }
        else {
            tm = parseInt(document.documentElement.clientWidth) - 20 + "px 50px";
            $("#dvmenulist a").css("background", "url(ke01_img/app-ico1.png) no-repeat " + tm + "");
        }
    }
    if (document.getElementById("dvmnewslist") != null) {
        document.getElementById("dvmain").style.paddingTop = "90px";
        if (parseInt(document.documentElement.clientWidth) < 320)
            document.getElementById("dvmain").style.paddingTop = "37px"; else {
            if (parseInt(document.documentElement.clientWidth) < 800) {
                var tblt = parseInt(document.documentElement.clientWidth) / 800;
                document.getElementById("dvmain").style.paddingTop = 99 * tblt - 3 + "px";
            }
        }


        document.getElementById("dvmain").style.paddingBottom = "90px";
        if (parseInt(document.documentElement.clientWidth) < 640) {
            var tbl = parseInt(document.documentElement.clientWidth) / 640;
            document.getElementById("dvmain").style.paddingBottom = 88 * tbl + 2 + "px";
        }


        document.getElementById("dvmnewslist").style.width = parseInt(document.documentElement.clientWidth) + "px";
        $("#dvmnewslist dt").css({"width": "180px"});
        $("#dvmnewslist dd").css({"width": (parseInt(document.documentElement.clientWidth) - 182) + "px"});
        if (parseInt(document.documentElement.clientWidth) < 800) {
            var tfs = 14;
            if (32 * tw > 14)tfs = 32 * tw;
            var dtw = parseInt(document.documentElement.clientWidth) * 0.22;
            $("#dvmnewslist dt").css({"width": (dtw + 30 * tw) + "px"});
            $("#dvmnewslist dd").css({"width": (parseInt(document.documentElement.clientWidth) - dtw - 2 - 30 * tw) + "px"});
            $("#dvmnewslist dl").css({"height": (120 * tw) + "px", "line-height": (120 * tw) + "px"});
            $("#dvmnewslist dt").css({"height": (120 * tw) + "px", "line-height": (120 * tw) + "px"});
            $("#dvmnewslist dd").css({"height": (120 * tw) + "px", "line-height": (120 * tw) + "px"});
            ;
            $("#dvmnewslist dd a").css({
                "height": (120 * tw) + "px",
                "line-height": (120 * tw) + "px",
                "font-size": tfs + "px"
            });
            $("#dvmnewslist img").css({"margin-left": (15 * tw) + "px", "margin-right": (30 * tw) + "px"});
        }
    }


    if (document.getElementById("feedback") != null) {
        document.getElementById("feedback").style.width = parseInt(document.documentElement.clientWidth) - 30 + "px";
        if (parseInt(document.documentElement.clientWidth) < 800) {
            $("#feedback h2").css({"line-height": (36 * tw) + "px", "font-size": (28 * tw + 2) + "px"});
            $(".feedback-item").css({"padding": (15 * tw + 2) + "px " + (20 * tw + 2) + "px"});
            $(".feedback-item p").css({"line-height": (30 * tw) + "px", "font-size": (24 * tw + 2) + "px"});
            if (document.getElementById("imgplw") != null) {
                document.getElementById("imgplw").style.width = (138 * tw) + "px";
                document.getElementById("imgplw").style.height = (52 * tw) + "px";
                $("#feedback .rbtext").css({
                    "width": parseInt(document.documentElement.clientWidth) - 50 + "px",
                    "height": (200 * tw) + "px",
                    "line-height": (25 * tw) + "px",
                    "font-size": (25 * tw) + "px"
                });
                $("#feedback .rbin").css({
                    "width": parseInt(document.documentElement.clientWidth) - 50 + "px",
                    "height": (60 * tw) + "px",
                    "line-height": (25 * tw) + "px",
                    "font-size": (25 * tw) + "px"
                });
                $("#dtmes").css({"line-height": (28 * tw) + "px", "font-size": (24 * tw) + "px"});
                $("#feedback .feedback-tips").css({"padding-top": (15 * tw) + "px"});
            }
        }
    }


    if (document.getElementById("dvminfo") != null) {
        document.getElementById("dvminfo").style.width = parseInt(document.documentElement.clientWidth) - 30 + "px";
        if (parseInt(document.documentElement.clientWidth) < 640) {
            if (tw * 30 < 24)

















                $("#dvminfo").css({"line-height": "24px"}); else

















                $("#dvminfo").css({"line-height": (30 * tw) + "px"});
            if (tw * 20 < 14)

















                $("#dvminfo").css({"font-size": "14px"}); else

















                $("#dvminfo").css({"font-size": Math.round((20 * tw)) + "px"});
        }
    }


    if (document.getElementById("dvmtit") != null) {
        document.getElementById("dvmtit").style.width = parseInt(document.documentElement.clientWidth) - 30 + "px";
        if (parseInt(document.documentElement.clientWidth) < 640) {
            if (tw * 64 < 32)

















                $("#dvmtit").css({"line-height": "32px"}); else

















                $("#dvmtit").css({"line-height": (60 * tw) + "px"});
            if (tw * 36 < 20)

















                $("#dvmtit").css({"font-size": "20px"}); else

















                $("#dvmtit").css({"font-size": Math.round((36 * tw)) + "px"});
        }
    }


    if (document.getElementById("dvmdate") != null) {
        document.getElementById("dvmdate").style.width = parseInt(document.documentElement.clientWidth) - 30 + "px";
        if (parseInt(document.documentElement.clientWidth) < 800) {
            if (tw * 26 < 14)

















                $("#dvmdate").css({"font-size": "14px", "line-height": "14px"}); else

















                $("#dvmdate").css({
                    "font-size": Math.round((26 * tw)) + "px",
                    "line-height": Math.round((26 * tw)) + "px"
                });
            $("#dvmdate").css({"margin-bottom": Math.round((12 * tw)) + "px"});
        }


        $("#dvminfo img").each(function () {
            if (!isNaN(parseInt($(this).width()))) {
                if (parseInt(document.documentElement.clientWidth) - 30 < parseInt($(this).width())) {
                    $(this).css({"height": parseInt($(this).height()) * (parseInt(document.documentElement.clientWidth) - 30) / parseInt($(this).width()) + "px"});
                    $(this).css({"width": parseInt(document.documentElement.clientWidth) - 30 + "px"});
                }
            }
        });
    }


    if (document.getElementById("dvmimg") != null) {
        document.getElementById("dvmimg").style.width = parseInt(document.documentElement.clientWidth) - 30 + "px";
        loadfimg(document.getElementById("acfimg"));
        loadpimg(document.getElementById("acpimg"));
    }


    if (document.getElementById("dvphototit") != null) {
        document.getElementById("dvphototit").style.width = parseInt(document.documentElement.clientWidth) - 20 + "px";
        if (parseInt(document.documentElement.clientWidth) < 800) {
            if (tw * 40 < 20)

















                $("#dvphototit").css({"line-height": "20px"}); else

















                $("#dvphototit").css({"line-height": (40 * tw) + "px"});
            if (tw * 36 < 16)

















                $("#dvphototit").css({"font-size": "16px"}); else

















                $("#dvphototit").css({"font-size": Math.round((36 * tw)) + "px"});
        }
    }


    if (document.getElementById("dvphotolist") != null) {
        document.getElementById("dvphotolist").style.width = parseInt(document.documentElement.clientWidth) + "px";
        loadardplistall();
    }


    var inh = 0;
    if (document.getElementById("dvphotoinfo") != null) {
        document.getElementById("dvphotoinfo").style.width = parseInt(document.documentElement.clientWidth) - 24 + "px";
        document.getElementById("ltit").style.width = parseInt(document.documentElement.clientWidth) - 48 - 100 + "px";
        inh = 64;
        document.getElementById("dvmain").style.paddingBottom = 88 + "px";
        if (parseInt(document.documentElement.clientWidth) < 640) {
            var tbl = parseInt(document.documentElement.clientWidth) / 640;
            if (parseInt(document.documentElement.clientWidth) < 320)tbl = 0.5;
            tbl = Math.round(tbl * 10) / 10;
            document.getElementById("ltit").style.width = parseInt(document.documentElement.clientWidth) - 48 - (100 * tbl) + "px";
            document.getElementById("dvphotoinfo").style.height = 52 * tbl + "px";
            document.getElementById("dvphotoinfo").style.lineHeight = 52 * tbl + "px";
            inh = 52 * tbl + 12;
            $("#dvphotoinfo img").css({"width": (50 * tbl) + "px", "height": (52 * tbl) + "px"});
            if (tw * 28 < 16)

















                $("#ltit").css({"font-size": "16px"}); else

















                $("#ltit").css({"font-size": Math.round((28 * tw)) + "px"});
            document.getElementById("dvmain").style.paddingBottom = 88 * (parseInt(document.documentElement.clientWidth) / 640) + "px";
        }
    }


    if (document.getElementById("dvphotobig") != null) {
        document.getElementById("dvphotobig").style.width = parseInt(document.documentElement.clientWidth) + "px";
        document.getElementById("dvphotobig").style.height = getbigph() + "px";
        document.getElementById("mainul").style.height = getbigph() + "px";
        loadallbigpgwh();
    }


    document.getElementById("dvmain").style.display = "block";
    mocwidth = parseInt(document.documentElement.clientWidth);
}


function getbigph() {
    var tb = 88, tt = 99, it = 52;
    if (parseInt(document.documentElement.clientWidth) < 640)tb = 88 * (parseInt(document.documentElement.clientWidth) / 640);
    if (parseInt(document.documentElement.clientWidth) < 320)tt = 44;
    if (parseInt(document.documentElement.clientWidth) < 800)tt = 99 * (parseInt(document.documentElement.clientWidth) / 800) + 4;
    if (parseInt(document.documentElement.clientWidth) < 640) {
        var tbl = parseInt(document.documentElement.clientWidth) / 640;
        if (parseInt(document.documentElement.clientWidth) < 320)tbl = 0.5;
        tbl = Math.round(tbl * 10) / 10;
        it = 52 * tbl;
    }


    var h = parseInt(document.documentElement.clientHeight) - tb - tt - it - 28;
    return h;
}


var arigwh = "";
function loadallbigpgwh() {
    var idlist = arigwh.split(",");
    for (var i = 0; i < idlist.length; i++) {
        if (idlist[i] != "") {
            var tar = idlist[i].split(":");
            var tmyid = tar[0];
            var twh = tar[1].split("x");
            var w = twh[0];
            var h = twh[1];
            var iw = document.documentElement.clientWidth - 20;
            var th = getbigph();
            if (w > iw) {
                h = h / (w / iw);
                if (h > th) {
                    iw = iw * (th / h);
                    h = th;
                }


                document.getElementById("ig" + tmyid).style.width = iw + "px";
                document.getElementById("ig" + tmyid).style.height = h + "px";
            }


            else {
                if (w != iw)

















                    h = h * (iw / w)


                if (h > th) {
                    iw = iw * (th / h);
                    h = th;
                }


                document.getElementById("ig" + tmyid).style.width = iw + "px";
                document.getElementById("ig" + tmyid).style.height = h + "px";
            }


            document.getElementById("li" + tmyid).style.height = h + "px";
            document.getElementById("li" + tmyid).style.lineHeight = h + "px";
        }
    }
}


function loadfoot() {
    document.getElementById("dvfoot").style.display = "block";
    if (parseInt(focwidth) == parseInt(document.documentElement.clientWidth))return;
    document.getElementById("dvfoot").style.width = parseInt(document.documentElement.clientWidth) + "px";
    if (parseInt(document.documentElement.clientWidth) < 640) {
        var tbl = parseInt(document.documentElement.clientWidth) / 640;
        document.getElementById("dvfoot").style.height = 88 * tbl + "px";
        var tbl = parseInt(document.documentElement.clientWidth - 4) / 640;
        document.getElementById("aphone").style.width = 127 * tbl + "px";
        document.getElementById("aemail").style.width = 127 * tbl + "px";
        document.getElementById("amap").style.width = 127 * tbl + "px";
        document.getElementById("ashare").style.width = 127 * tbl + "px";
        document.getElementById("aleave").style.width = 128 * tbl + "px";
        if (document.getElementById("divshare") != null)
            document.getElementById("divshare").style.bottom = 88 * tbl + 8 + "px";
    }
    focwidth = parseInt(document.documentElement.clientWidth);
}


function loadardplistall() {
    $("#dvphotolist img").each(function () {
        if (!isNaN(parseInt($(this).width()))) {
            var tlpid = $(this).attr('id');
            if (parseInt($(this).width()) > 0 && tlpid.indexOf("lig") < 0)

















                loadardplist(document.getElementById(tlpid))
        }
    });
}


var plcouar = 0;
function loadardplist(timg) {
    if (timg == null)return;
    if (isNaN(parseInt(timg.width)))return;
    if (parseInt(timg.width) == 0)return;
    if (plcouarall != -1)plcouar++;
    if (alpow == 0) {
        alpow = parseInt(timg.width);
        alpoh = parseInt(timg.height);
    }


    if (parseInt(alcw) != parseInt(document.documentElement.clientWidth)) {
        alcw = parseInt(document.documentElement.clientWidth);
        alpiw = alpow;
        if (alpiw > parseInt(alcw) - 24)alpiw = parseInt(alcw) - 24


        else {
            while (document.documentElement.clientWidth % (parseInt(alpiw) + 12) > 15 || document.documentElement.clientWidth % (parseInt(alpiw) + 12) < 10)

















                alpiw = parseInt(alpiw) - 1;
        }


        alpih = parseInt(alpoh) * (parseInt(alpiw) / parseInt(alpow));
    }


    timg.style.height = parseInt(alpih) + "px";
    timg.style.width = parseInt(alpiw) + "px";
    document.getElementById("li" + timg.id).style.width = parseInt(alpiw) + "px";
    document.getElementById("l" + timg.id).style.display = "none";
    document.getElementById("li" + timg.id).style.display = "";
    if (alpiw > 130)document.getElementById("sp" + timg.id).style.display = "";
    timg.style.display = "";
    if (plcouar == plcouarall) {
        plcouarall = -1;
        alcw = 0;
        loadardplistall();
    }
}


function limgnewsard(timg) {
    if (timg == null)return;
    if (isNaN(parseInt(timg.width)))return;
    if (parseInt(timg.width) == 0)return;
    if (allimgwh.indexOf(timg.id) < 0)

















        allimgwh += "|_" + timg.id + ":" + timg.width + "x" + timg.height + "_|";
    var twh = allimgwh.split("|_" + timg.id + ":");
    twh = twh[1].split("_|");
    twh = twh[0].split("x");
    var tw = twh[0];
    var th = twh[1];
    var mw = 140, mh = 100;
    if (document.documentElement.clientWidth < 800) {
        var bl = parseInt(document.documentElement.clientWidth);
        if (bl < 320)bl = 320;
        bl = bl / 800;
        mh = 100 * bl;
        mw = parseInt(document.documentElement.clientWidth) * 0.22 - 1;
    }


    if (tw > mw || th > mh) {
        if (tw > mw) {
            timg.style.width = mw + "px";
            timg.style.height = th * (mw / tw) + "px";
            if (parseInt(timg.style.height) > mh) {
                timg.style.height = mh + "px";
                timg.style.width = tw * (mh / th) + "px";
            }
        }


        else {
            timg.style.height = mh + "px";
            timg.style.width = tw * (mh / th) + "px";
            if (parseInt(timg.style.width) > mw) {
                timg.style.width = mw + "px";
                timg.style.height = th * (mw / tw) + "px";
            }
        }
    }


    else {
        timg.style.width = tw + "px";
        timg.style.height = th + "px";
    }


    var tw = parseInt(document.documentElement.clientWidth);
    if (tw < 800) {
        if (tw < 320)tw = 320;
        tw = tw / 800;
    }


    else

















        tw = 1;
    timg.style.marginTop = (120 * tw - parseInt(timg.style.height)) / 2 + "px";
}


function loadnimg(timg) {
    if (timg == null)return;
    if (isNaN(parseInt(timg.width)))return;
    if (parseInt(timg.width) == 0)return;
    if (parseInt(document.documentElement.clientWidth) - 30 < parseInt(timg.width)) {
        timg.style.height = parseInt(timg.height) * (parseInt(document.documentElement.clientWidth) - 30) / parseInt(timg.width) + "px";
        timg.style.width = parseInt(document.documentElement.clientWidth) - 30 + "px";
    }


    timg.style.display = "";
}


function loadfimg(timg) {
    if (timg == null)return;
    if (isNaN(parseInt(timg.width)))return;
    if (parseInt(timg.width) == 0)return;
    document.getElementById("ilimg").style.display = "none";
    if (parseInt(timg.width) < parseInt(timg.height) && document.getElementById("acpimg") != null) {
        timg.style.width = "0px";
        timg.style.height = "0px";
        timg.style.display = "none";
        return;
    }


    if (parseInt(document.documentElement.clientWidth) - 30 != parseInt(timg.width)) {
        timg.style.height = parseInt(timg.height) * (parseInt(document.documentElement.clientWidth) - 30) / parseInt(timg.width) + "px";
        timg.style.width = parseInt(document.documentElement.clientWidth) - 30 + "px";
    }


    timg.style.display = "";
}


function loadpimg(timg) {
    if (timg == null)return;
    if (isNaN(parseInt(timg.width)))return;
    if (parseInt(timg.width) >= parseInt(timg.height)) {
        timg.style.display = "none";
        return;
    }


    else {
        document.getElementById("ilimg").style.display = "none";
        document.getElementById("acfimg").style.display = "none";
    }


    if ((parseInt(document.documentElement.clientWidth) - 40) / 2 != parseInt(timg.width)) {
        timg.style.height = parseInt(timg.height) * ((parseInt(document.documentElement.clientWidth) - 40) / 2) / parseInt(timg.width) + "px";
        timg.style.width = (parseInt(document.documentElement.clientWidth) - 40) / 2 + "px";
    }


    timg.style.display = "";
}


var imglist, cou, nowid, imgurl, imgtit, imgfin, imgsl, imgul, imgtl, ism, cx, lcx;
function LBWZpbig() {
    imgsl = imglist.split(",");
    imgul = imgurl.split(",");
    imgtl = imgtit.split("_,|,_");
}


function imgloadpbig(tid) {
    if (imgfin.indexOf("," + tid + ",") < 0)

















        document.getElementById("ig" + tid).src = imgsl[tid];
    document.getElementById("ltit").innerHTML = imgtl[tid];
    document.getElementById("btnInfo").href = imgul[tid];
    document.getElementById("btnDown").href = imgsl[tid];
    if (imgul[tid] == "0")

















        document.getElementById("linfo").style.display = "none"; else

















        document.getElementById("linfo").style.display = "";
}


function imgfiningpbig(timg, tid) {
    imgfin += "," + tid + ",";
    var w = timg.width;
    var h = timg.height;
    if (arigwh.indexOf("," + tid + ",") < 0)arigwh += tid + ":" + w + "x" + h + ",";
    var iw = document.documentElement.clientWidth - 20;
    var th = getbigph();
    if (w > iw) {
        h = h / (w / iw);
        if (h > th) {
            iw = iw * (th / h);
            h = th;
        }


        timg.style.width = iw + "px";
        timg.style.height = h + "px";
    }


    else {
        if (w != iw)

















            h = h * (iw / w)


        if (h > th) {
            iw = iw * (th / h);
            h = th;
        }


        timg.style.width = iw + "px";
        timg.style.height = h + "px";
    }


    document.getElementById("li" + tid).style.height = h + "px";
    document.getElementById("li" + tid).style.lineHeight = h + "px";
    document.getElementById("igl" + tid).style.display = "none";
    document.getElementById("mainul").style.height = parseInt(document.getElementById("li" + nowid).style.height) + "px";
    timg.style.display = "";
}


function LoadLeft() {
    var tid = nowid;
    document.getElementById("ig" + tid).style.left = "0px";
    if (parseInt(tid) != 0) {
        document.getElementById("li" + (parseInt(tid) - 1)).style.left = "-" + document.documentElement.clientWidth + "px";
        if (imgfin.indexOf("," + (parseInt(tid) - 1) + ",") < 0)document.getElementById("ig" + (parseInt(tid) - 1)).src = imgsl[(parseInt(tid) - 1)];
    }


    if ((parseInt(tid) - 2) > -1) {
        document.getElementById("li" + (parseInt(tid) - 2)).style.left = "-" + (document.documentElement.clientWidth + document.documentElement.clientWidth) + "px";
        if (imgfin.indexOf("," + (parseInt(tid) - 2) + ",") < 0)document.getElementById("ig" + (parseInt(tid) - 2)).src = imgsl[(parseInt(tid) - 2)];
    }


    if ((parseInt(tid) + 1) != imgsl.length) {
        document.getElementById("li" + (parseInt(tid) + 1)).style.left = document.documentElement.clientWidth + "px";
        if (imgfin.indexOf("," + (parseInt(tid) + 1) + ",") < 0)document.getElementById("ig" + (parseInt(tid) + 1)).src = imgsl[(parseInt(tid) + 1)];
    }


    if ((parseInt(tid) + 2) < imgsl.length) {
        document.getElementById("li" + (parseInt(tid) + 2)).style.left = document.documentElement.clientWidth + document.documentElement.clientWidth + "px";
        if (imgfin.indexOf("," + (parseInt(tid) + 2) + ",") < 0)document.getElementById("ig" + (parseInt(tid) + 2)).src = imgsl[(parseInt(tid) + 2)];
    }
}


function LoadImgWH(tlogo, il, iw, ih) {
    var w = tlogo.width;
    var h = tlogo.height;
    tlogo.style.display = "";
    if (il != "")

















        document.getElementById(il).style.display = "none";
    if (iw == "" && ih == "")return;
    if (ih != "" && iw == "") {
        if (h <= ih)return;
        w = w / (h / ih);
        tlogo.style.width = w + "px";
        tlogo.style.height = ih + "px";
    }


    if (iw != "" && ih == "") {
        if (w <= iw)return;
        h = h / (w / iw);
        tlogo.style.width = iw + "px";
        tlogo.style.height = h + "px";
    }
}


function shareopen() {
    document.getElementById("divshare").style.left = (document.documentElement.clientWidth - parseInt(document.getElementById("divshare").style.width)) / 2 + "px";
    if (parseInt(document.documentElement.offsetHeight) > parseInt(document.documentElement.clientHeight))

















        document.getElementById('divsharefull').style.height = document.documentElement.offsetHeight + 'px'; else

















        document.getElementById('divsharefull').style.height = document.documentElement.clientHeight + 'px';
    $("#divshare").fadeIn(1000);
    $("#divsharefull").fadeIn(300);
    setTimeout(shareload, 800);
}


function shareclose() {
    document.getElementById("divshare").style.display = "none";
    document.getElementById('divsharefull').style.display = "none";
}


function shareload() {
    if (document.getElementById('divsharefull').style.display == "none")return;
    if (parseInt(document.documentElement.offsetHeight) > parseInt(document.documentElement.clientHeight))

















        document.getElementById('divsharefull').style.height = document.documentElement.offsetHeight + 'px'; else

















        document.getElementById('divsharefull').style.height = document.documentElement.clientHeight + 'px';
    setTimeout(shareload, 800);
}


function Check(type) {
    if (document.getElementById("TBName").value == "" || document.getElementById("TBName").value == "姓名" || document.getElementById("TBName").value == "Name") {
        if (type == "1")

















            document.getElementById("dtmes").innerText = "**Name input errors**"; else

















            document.getElementById("dtmes").innerText = "**请输入名字**";
        document.getElementById("dtmes").style.display = "";
        document.getElementById("TBName").focus();
        return false;
    }


    else {
        if (document.getElementById("TBName").value.length > 50) {
            if (type == "1")

















                document.getElementById("dtmes").innerText = "**Name input errors**"; else

















                document.getElementById("dtmes").innerText = "**名字长度不能超出50**";
            document.getElementById("dtmes").style.display = "";
            document.getElementById("TBName").focus();
            return false;
        }
    }


    if (document.getElementById("TBEmail").value == "" || document.getElementById("TBEmail").value == "E-mail" || document.getElementById("TBEmail").value == "微信") {
        if (type == "1")

















            document.getElementById("dtmes").innerText = "**E-mail input errors**"; else

















            document.getElementById("dtmes").innerText = "**请输入微信**";
        document.getElementById("dtmes").style.display = "";
        document.getElementById("TBEmail").focus();
        return false;
    }


    else {
        if (type == "1") {
            if (!document.getElementById("TBEmail").value.match(/^([\.a-zA-Z0-9_-])+@([\.a-zA-Z0-9_-])+([\.a-zA-Z0-9_-])$/)) {
                document.getElementById("dtmes").innerText = "**E-mail input errors**";
                document.getElementById("dtmes").style.display = "";
                document.getElementById("TBEmail").focus();
                return false;
            }
        }


        else {
            if (document.getElementById("TBEmail").value.length > 50) {
                document.getElementById("dtmes").innerText = "**微信输入有误**";
                document.getElementById("dtmes").style.display = "";
                document.getElementById("TBEmail").focus();
                return false;
            }
        }
    }


    if (document.getElementById("TBQQ").value == "" || document.getElementById("TBQQ").value == "手机" || document.getElementById("TBQQ").value == "Phone") {
        if (type == "1")

















            document.getElementById("dtmes").innerText = "**Phone input errors**"; else

















            document.getElementById("dtmes").innerText = "**请输入手机**";
        document.getElementById("dtmes").style.display = "";
        document.getElementById("TBQQ").focus();
        return false;
    }


    else {
        if (type == "1") {
            if (!document.getElementById("TBQQ").value.match(/^[0-9\\-]+$/) || document.getElementById("TBQQ").value.length < 3 || document.getElementById("TBQQ").value.length > 28) {
                document.getElementById("dtmes").innerText = "**Phone input errors**";
                document.getElementById("dtmes").style.display = "";
                document.getElementById("TBQQ").focus();
                return false;
            }
        }


        else {
            if (!document.getElementById("TBQQ").value.match(/^[0-9]+$/) || document.getElementById("TBQQ").value.length < 3 || document.getElementById("TBQQ").value.length > 28) {
                document.getElementById("dtmes").innerText = "**手机号码输入有误**";
                document.getElementById("dtmes").style.display = "";
                document.getElementById("TBQQ").focus();
                return false;
            }
        }
    }


    if (document.getElementById("TBMes").value == "" || document.getElementById("TBMes").value == "内容" || document.getElementById("TBMes").value == "Message") {
        if (type == "1")

















            document.getElementById("dtmes").innerText = "**Message input errors**"; else

















            document.getElementById("dtmes").innerText = "**请输入内容**";
        document.getElementById("dtmes").style.display = "";
        document.getElementById("TBMes").focus();
        return false;
    }
    else {
        if (document.getElementById("TBMes").value.length > 255) {
            if (type == "1")
                document.getElementById("dtmes").innerText = "**Message input errors**"; else
                document.getElementById("dtmes").innerText = "**内容长度不能超出255**";
            document.getElementById("dtmes").style.display = "";
            document.getElementById("TBMes").focus();
            return false;
        }
    }


    if (type == "1")
        document.getElementById("dtmes").innerText = "**Sending**"; else
        document.getElementById("dtmes").innerText = "**数据提交中，请稍等**";
    document.getElementById("dtmes").style.display = "";
    document.getElementById("ButPost").disabled = true;
    return true;
}
function loadimgabgy(timg) {
    document.getElementById("ilimg").style.display = "none";
    var w = timg.width;
    var h = timg.height;
    if (h + 100 < w || document.getElementById("mesimg") == null) {
        var iw = document.documentElement.clientWidth - 60;
        if (w > iw) {
            h = h / (w / iw);
            timg.style.width = iw + "px";
            timg.style.height = h + "px";
        }
        timg.style.display = "";
    }
    else {
        document.getElementById("mesimg").style.display = "";
        var iw = (document.documentElement.clientWidth - 60) / 2;
        if (w > iw) {
            h = h / (w / iw);
            document.getElementById("mesimg").style.width = iw + "px";
            document.getElementById("mesimg").style.height = h + "px";
        }
    }
}
var liwplist = "", iwplist = 250, twplist = "", thplist = "";
function Loadimgplist(timg) {
    var w = timg.width;
    var h = timg.height;
    if (liwplist == "") {
        if (document.documentElement.clientWidth < 620) {
            iwplist = 125;
        }
        if (w < iwplist) {
            if (iwplist == 125)
                iwplist = w; else
                iwplist = w + 10;
        }
        var jj = "";
        while (document.documentElement.clientWidth % (iwplist + 32) > 18) {
            iwplist = iwplist - 1;
        }
        if (w > iwplist) {
            h = h / (w / iwplist);
            twplist = iwplist;
            thplist = h;
        }
        else {
            twplist = w;
            thplist = h;
        }
        liwplist = iwplist + 2 + "px";
    }
    timg.style.width = twplist + "px";
    timg.style.height = thplist + "px";
    document.getElementById("li" + timg.id).style.width = liwplist;
    document.getElementById("l" + timg.id).style.display = "none";
    timg.style.display = "";
    document.getElementById("li" + timg.id).style.display = "";
    if (iwplist > 150)document.getElementById("sp" + timg.id).style.display = "";
}