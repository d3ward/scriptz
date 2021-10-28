// ==UserScript==
// @name        AutoFullScreen
// @namespace  Scriptz (https://github.com/d3ward/scriptz)
// @match       https://www.google.com/
// @grant       none
// @version     1.0
// @author      Eduard Ursu ( d3ward )
// @description Script to auto switch to full screen mode 
// ==/UserScript==

const bg_color="#E84F3E";
const fill_color="#ffffff";
function addStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
(function() {
    'use strict';
    
    addStyle('#fly{position:fixed; bottom:0; left:0; padding:6px; width:60px; margin:0; height:60px; z-index:9999;}#fly svg{height:30px;fill:'+fill_color+';}.fly_btn{display:flex;align-items:center;justify-content:center;width: 100%; height:100%;background-color:'+ bg_color+ ';border-radius:50%; user-select: none;}.a_i{display:inline-table; width: 46px; height:46px; background-color: #E84F3E; color:#fff; border-radius:50%; box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);}   #fs_action.fullscreen #compress,#fs_action #expand{display:inline;}#fs_action.fullscreen #expand,#fs_action #compress{display:none;}');
    
    var div = document.createElement("div");
    div.innerHTML = '<div id="fly"> <div class="fly_btn" onclick="openFS();" id="fs_action"><svg xmlns="http://www.w3.org/2000/svg" id="expand" viewBox="0 0 32 32"><path d="M 4 4 L 4 13 L 6 13 L 6 7.4375 L 14.5625 16 L 6 24.5625 L 6 19 L 4 19 L 4 28 L 13 28 L 13 26 L 7.4375 26 L 16 17.4375 L 24.5625 26 L 19 26 L 19 28 L 28 28 L 28 19 L 26 19 L 26 24.5625 L 17.4375 16 L 26 7.4375 L 26 13 L 28 13 L 28 4 L 19 4 L 19 6 L 24.5625 6 L 16 14.5625 L 7.4375 6 L 13 6 L 13 4 Z"/></svg><svg id="compress" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 4.71875 3.28125 L 3.28125 4.71875 L 10.5625 12 L 5 12 L 5 14 L 14 14 L 14 5 L 12 5 L 12 10.5625 Z M 27.28125 3.28125 L 20 10.5625 L 20 5 L 18 5 L 18 14 L 27 14 L 27 12 L 21.4375 12 L 28.71875 4.71875 Z M 5 18 L 5 20 L 10.5625 20 L 3.28125 27.28125 L 4.71875 28.71875 L 12 21.4375 L 12 27 L 14 27 L 14 18 Z M 18 18 L 18 27 L 20 27 L 20 21.4375 L 27.28125 28.71875 L 28.71875 27.28125 L 21.4375 20 L 27 20 L 27 18 Z"/></svg> </div></div>';
    //Add floatly
    document.body.appendChild(div);
  var script = document.createElement('script');
    script.appendChild(document.createTextNode('function openFS(){let e=document.getElementById("fs_action");e.classList.contains("fullscreen")?(closeFullscreen(),e.classList.remove("fullscreen")):(openFullscreen(),e.classList.add("fullscreen"))}function openFullscreen(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()} openFS();'));
    document.body.appendChild(script);
})();