// ==UserScript==
// @name        textResizer
// @namespace   Scriptz (https://github.com/d3ward/scriptz)
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      Eduard Ursu ( d3ward )
// @description Script to resize text with a multiplier
// ==/UserScript==

//Default is 1.1  == 10% increase
var multi = 1.1

function increaseTextSize() {
    const elements = document.querySelectorAll('body, body *');
    elements.forEach(element => {
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.fontSize) {
            const currentSize = parseFloat(computedStyle.fontSize);
            element.style.fontSize = (currentSize * multi) + 'px';
        }
    });
}
increaseTextSize();