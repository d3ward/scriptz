// ==UserScript==
// @name        noADO
// @namespace   Scriptz (https://github.com/d3ward/scriptz)
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      Eduard Ursu ( d3ward )
// @description Script to disable animation delay opacity
// ==/UserScript==

function addCSS() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '*{-webkit-transition: opacity 0s linear!important;-moz-transition: opacity 0s linear !important;transition: opacity 0s linear !important;opacity:1!important;}';
    document.head.appendChild(style);
}
addCSS();