// ==UserScript==
// @name        tbScroller
// @namespace   Scriptz (https://github.com/d3ward/scriptz)
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      Eduard Ursu ( d3ward )
// @description Script to scrollBy  to top/bottom 
// ==/UserScript==

var position = "45%";
//Variable to set how much to scroll
var sH = (window.innerHeight) - 100;
var wrapper = document.createElement('div');
wrapper.style.cssText ='position:fixed;bottom:'+position+';right:10px;z-index:9999';
//top button
var topBtn = document.createElement('span');
topBtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 444.8 444.8" fill="#adadad"><path d="M434 278.7L248.4 92.8c-7.4-7-16.1-10.6-26-10.6 -10.1 0-18.7 3.5-25.7 10.6L10.8 278.7C3.6 285.9 0 294.5 0 304.6c0 10.3 3.6 18.8 10.8 25.7l21.4 21.4c6.9 7.2 15.4 10.9 25.7 10.9 10.3 0 18.8-3.6 25.7-10.9L222.4 213.3 361.2 351.7c6.8 7.2 15.4 10.9 25.7 10.9 10.1 0 18.7-3.6 26-10.9l21.4-21.4c7-7 10.6-15.6 10.6-25.7C444.8 294.5 441.2 285.9 434 278.7z"/></svg>';
topBtn.style.cssText ='display:block;text-align:center;background:#191919;border-radius:8px;color:#000000;cursor:pointer;width:36px;height:36px;margin-bottom:10px;';
topBtn.addEventListener('click', function(){window.scrollBy({top: -sH,behavior: 'smooth'})}, false);
wrapper.appendChild(topBtn);

//bottom button
var bottomBtn = document.createElement('span');
bottomBtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 444.8 444.8" fill="#adadad"><path d="M434.3 114.2l-21.4-21.4c-7.4-7-16.1-10.6-26-10.6 -10.1 0-18.7 3.5-25.7 10.6L222.4 231.5 83.7 92.8c-7-7-15.6-10.6-25.7-10.6 -9.9 0-18.6 3.5-26 10.6l-21.1 21.4C3.6 121.4 0 130.1 0 140.2c0 10.3 3.6 18.8 10.8 25.7l185.9 185.9c6.9 7.2 15.4 10.8 25.7 10.8 10.1 0 18.8-3.6 26-10.8l185.9-185.9c7-7 10.6-15.6 10.6-25.7C444.8 130.3 441.3 121.6 434.3 114.2z"/></svg>';
bottomBtn.style.cssText = 'display:block;text-align:center;background:#191919;border-radius:8px;color:#000000;cursor:pointer;width:36px;height:36px;';
bottomBtn.addEventListener('click', function(){ window.scrollBy({top: sH,behavior: 'smooth' });}, false);
wrapper.appendChild(bottomBtn);

document.querySelector('body').appendChild(wrapper);
  