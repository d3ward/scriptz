// ==UserScript==
// @name        awesomeScroller
// @namespace   Scriptz (https://github.com/d3ward/scriptz)
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      d3ward
// @description Script to scroll with a fake awesome scrollbar
// ==/UserScript==


var sH = document.documentElement.scrollHeight - window.innerHeight;
var scrolling;
var slider =document.createElement("input");
slider.type="range";
slider.min="0";
slider.max="100";
slider.id="awesomeScroller";
slider.addEventListener('focus', () => {
   scrolling=true;
});

slider.addEventListener('blur', () => {
  scrolling=false;  
});
slider.addEventListener("input",(event)=>{
  event.stopPropagation();
  var sv= (sH/100) * slider.value;
  window.scrollTo({top: sv});
})

 var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = "#awesomeScroller{position:fixed;right:43px;box-shadow: none;border: 0;background: transparent;transform-origin:100% 100%;top: calc(100vh - 60px);z-index:9999999;width:calc(100vh - 50px);transform:rotate(90deg);height:35px;}"+

"#awesomeScroller{-webkit-appearance:none}#awesomeScroller::-webkit-slider-runnable-track{width:300px;height:5px;background:#ddd;border:none;border-radius:3px}#awesomeScroller::-webkit-slider-thumb{-webkit-appearance:none;border:1px solid grey;height:16px;width:46px;margin-top:-5px;border-radius:8px;background:black;}#awesomeScroller:focus{outline:none}#awesomeScroller:focus::-webkit-slider-runnable-track{background:#ccc}"
;
    
document.head.appendChild(style);
document.body.appendChild(slider);
window.addEventListener("scroll", (e)=>{
  if(!scrolling){
    var _scrolled = window.pageYOffset || (document.body.parentNode || document.body).scrollTop;
    document.getElementById("awesomeScroller").value = (_scrolled / sH)*100;
  }else{
    event.preventDefault();
  }
  
}, {passive: true});