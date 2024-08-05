// ==UserScript==
// @name         Disable Auto Zoom on Inputs
// @namespace    Scriptz (https://github.com/d3ward/scriptz)
// @version      1.0
// @author       Eduard Ursu ( d3ward )
// @description  Disables auto zoom on input elements while preserving manual zoom functionality
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    style.textContent = `
        input {
            touch-action:none
        }
    `;
    (document.head || document.documentElement).appendChild(style);
})();