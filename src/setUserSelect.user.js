// ==UserScript==
// @name        EnableUserSelect
// @namespace   Violentmonkey Scripts
// @match       https://www.advanceautoparts.pt/*
// @grant       none
// @version     1.0
// @author      d3ward
// @description 11/2/2020, 12:41:59
// ==/UserScript==

(function() {
    function allowTextSelection() {
        console.log('allowTextSelection');
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '*,p,div,.noselect{user-select:text !important;-moz-user-select:text !important;-webkit-user-select:text !important;}';
        document.head.appendChild(style);
        var elArray = document.body.getElementsByTagName('*');
        for (var i = 0; i < elArray.length; i++) {
            var el = elArray[i];
            el.onselectstart = el.ondragstart = el.ondrag = el.oncontextmenu = el.onmousedown = el.onmouseup = function() {
                return true
            };
            if (el instanceof HTMLInputElement &&
                ['text', 'password', 'email', 'number', 'tel', 'url'].indexOf(el.type.toLowerCase()) > -1) {
                el.removeAttribute('disabled');
                el.onkeydown = el.onkeyup = function() {
                    return true
                };
            }
        }
    }
    allowTextSelection();
})();