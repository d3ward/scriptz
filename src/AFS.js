// ==UserScript==
// @name        AutoFullScreen
// @namespace   Scriptz (https://github.com/d3ward/scriptz)
// @match       *://*/*
// @grant       none
// @version     1.2
// @author      Eduard Ursu ( d3ward )
// @description Script to auto switch to full screen mode
// ==/UserScript==

// Backgorund color of the button
const bg_color = "#E84F3E";
// Fill color of icon state
const fill_color = "#ffffff";
// right , center , left ; default:left
const position = "left";
// This set the script to set fullscreen on page load ( some websites might block that )
const toggle_on_load = false;
// This allows to set visibility of the shortcut
const add_shortcut = true;

function addStyle(css) {
  var head, style;
  head = document.getElementsByTagName("head")[0];
  if (!head) {
    return;
  }
  style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = css;
  head.appendChild(style);
}
(function () {
  "use strict";
  if (add_shortcut) {
    let ps;
    if (position == "left") ps = "left:0;";
    else if (position == "right") ps = "right:0;";
    else ps = "left: calc(50% - 25px)";
    addStyle(
      "#fly{position:fixed; bottom:0; " +
        ps +
        "; padding:6px; width:50px; margin:0; height:50px; z-index:9999;}#fly svg{height:24px;width:24px;}.fly_btn{display:flex;align-items:center;justify-content:center;width: 100%; height:100%;background-color:" +
        bg_color +
        ";border-radius:50%; user-select: none;}.a_i{display:inline-table; width: 46px; height:46px; background-color: #E84F3E; color:#fff; border-radius:50%; box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);}   #fs_action.fullscreen #compress,#fs_action #expand{display:inline;}#fs_action.fullscreen #expand,#fs_action #compress{display:none;}"
    );
    var div = document.createElement("div");
    div.innerHTML =
      '<div id="fly"> <div class="fly_btn" onclick="openFS();" id="fs_action"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  stroke="' +
      fill_color +
      '"  stroke-width="2" stroke-linecap="round"  stroke-linejoin="round" id="expand"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" /><path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" /></svg><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="' +
      fill_color +
      '"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" id="compress"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 19v-2a2 2 0 0 1 2 -2h2" /><path d="M15 5v2a2 2 0 0 0 2 2h2" /><path d="M5 15h2a2 2 0 0 1 2 2v2" /><path d="M5 9h2a2 2 0 0 0 2 -2v-2" /></svg></div></div>';
    //Add floatly button
    document.body.appendChild(div);
    var script = document.createElement("script");
    script.appendChild(
      document.createTextNode(
        'function openFS(){let e=document.getElementById("fs_action");e.classList.contains("fullscreen")?(closeFullscreen(),e.classList.remove("fullscreen")):(openFullscreen(),e.classList.add("fullscreen"))}function openFullscreen(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}'
      )
    );
    document.body.appendChild(script);
  }

  // Toggle full-screen mode when the page loads
  // Function to toggle full-screen mode
  function toggleFullScreen() {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      } else if (document.documentElement.msRequestFullscreen) {
        // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    }
  }
  // Toggle full-screen mode when the page loads
  if (toggle_on_load) window.addEventListener("load", toggleFullScreen);
})();
