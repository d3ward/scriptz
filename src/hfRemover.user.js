// ==UserScript==
// @name        hfRemover
// @namespace   Scriptz (https://github.com/d3ward/scriptz)
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      Eduard Ursu ( d3ward )
// @description Script to inject css that remove header and footer on websites for print mode
// ==/UserScript==

function addCSS() {
    var style = document.createElement('style');
    style.type = 'text/css';
    
    var navbars = "#nav";
    var footers = "footer";
  
    style.innerHTML = '@media print { '+navbars + ','+footers+' {display:none;}}';
    document.head.appendChild(style);
}
addCSS();