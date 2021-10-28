// ==UserScript==
// @name         Floatly
// @namespace    Floatly
// @version      0.2
// @description  Floatly is an awesome floating button that brings quick actions to any website.
// @author       d3ward
// @match        *://*/*
// @updateURL https://github.com/d3ward/floatly/raw/master/floatly.user.js
// @grant    GM_setClipboard
// @grant window.close
// ==/UserScript==
function addStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
function toClip(){
    GM_setClipboard (window.location.href);
}
(function() {
    'use strict';

    var link = document.createElement('link');
    link.rel="stylesheet";
    link.href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css";
    addStyle('#fly{position:fixed; bottom:0; left:0; padding:5px; width:50px; margin:0; height:50px; z-index:9999;}i{vertical-align: middle;}.fly_btn{position: absolute; z-index: 10; width: 50px; height:50px; font-size: 1.7rem; text-align:center; line-height:50px; background-color: #E84F3E; color:#fff; border-radius:50%; box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15); user-select: none;}.fly_btn i:nth-child(1),#fly.open .fly_btn i:nth-child(2){display:inline;}.fly_btn i:nth-child(2),#fly.open .fly_btn i:nth-child(1){display:none;}::-webkit-scrollbar{display: none;}.a_ib{position:absolute; white-space: nowrap; overflow-x: auto; padding-left:50px; width: 0px; height: 50px; background-color:#101010; border-radius:50px; box-shadow: 0px 5px 20px #101010; transition: all .2s ease-in-out;}.a_i{display:inline-table; width: 46px; height:46px; line-height:46px; margin-left:4px; margin-top:2px; font-size: 1.7rem; text-align:center; background-color: #E84F3E; color:#fff; border-radius:50%; box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);}#fly.open .a_ib{width:calc(100vw - 62px);}.a_ib .a_item{opacity:0;}#fly.open .a_ib .a_item{opacity:1; transition-delay:.45s;}#fs_action.fullscreen i:nth-child(2),#fs_action i:nth-child(1){display:inline;}#fs_action.fullscreen i:nth-child(1),#fs_action i:nth-child(2){display:none;}');
    document.body.appendChild(link);
    var script = document.createElement('script');
    script.appendChild(document.createTextNode('function openB(){let flt=document.getElementById("fly"); if(flt.classList.contains("open")) flt.classList.remove("open"); else flt.classList.add("open");}function openFS(){let fs=document.getElementById("fs_action"); if (fs.classList.contains("fullscreen")){closeFullscreen(); fs.classList.remove("fullscreen");}else{openFullscreen(); fs.classList.add("fullscreen");}}function openFullscreen(){var elem=document.documentElement; if (elem.requestFullscreen){elem.requestFullscreen();}else if (elem.mozRequestFullScreen){elem.mozRequestFullScreen();}else if (elem.webkitRequestFullscreen){elem.webkitRequestFullscreen();}else if (elem.msRequestFullscreen){elem.msRequestFullscreen();}}function closeFullscreen(){if (document.exitFullscreen){document.exitFullscreen();}else if (document.mozCancelFullScreen){document.mozCancelFullScreen();}else if (document.webkitExitFullscreen){document.webkitExitFullscreen();}else if (document.msExitFullscreen){document.msExitFullscreen();}}'));
    document.body.appendChild(script);
    var div = document.createElement("div");
    div.innerHTML = '<div id="fly"> <div class="fly_btn" onclick="openB();"> <i class="fas fa-bars"></i> <i class="fas fa-times"></i> </div><div class="a_ib"> <div class="a_i" onclick="window.close();"> <i class="far fa-window-close"></i> </div><div class="a_i" onclick="window.open(window.location.href);"> <i class="far fa-clone"></i> </div><div class="a_i" onclick="window.scrollTo(0,0);"> <i class="fas fa-arrow-up"></i> </div><div class="a_i" onclick="window.scrollTo(0,document.body.scrollHeight);"> <i class="fas fa-arrow-down"></i> </div><div class="a_i" id="fs_action" onclick="openFS();"> <i class="fas fa-expand-arrows-alt"></i> <i class="fas fa-compress-arrows-alt"></i> </div><div class="a_i" id="cpyToClip"> <i class="far fa-clipboard"></i> </div><div class="a_i" onclick="Navigator.share(window.location.href)"> <i class="fas fa-share-alt-square"></i> </div></div></div>';
    //Add floatly
    document.body.appendChild(div);
    document.getElementById('cpyToClip').addEventListener('click', toClip, false);
})();