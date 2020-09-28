// ==UserScript==
// @name        scrollToTop
// @namespace   Scriptz (https://github.com/d3ward/scriptz)
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      Eduard Ursu ( d3ward )
// @description Script to scroll to top page 
// ==/UserScript==



/* ---------------- Style  --------------- */

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = ".gt-link{transition:all .25s ease-in-out;position:fixed;bottom:0;right:0;display:inline-flex;cursor:pointer;align-items:center;justify-content:center;border:2px solid #000;border-radius:.3rem;margin:.5rem;padding:.25em;width:50px;height:50px;background-color:#000}.gt-link.showgt{visibility:visible;opacity:1}.gt-link.hide{visibility:hidden;opacity:0}.gt-link svg{fill:#fff;width:24px;height:12px}";
document.head.appendChild(style);

/* ---------------- Button  --------------- */
var gt_btn = document.createElement('a');
gt_btn.id="gt-link";
gt_btn.classList="gt-link hide";
gt_btn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6"><path d="M12 6H0l6-6z" /></svg>';
document.querySelector('body').appendChild(gt_btn);

/* ---------------- Script --------------- */
var script =document.createElement("script");
script.innerHTML="var gt_btn=document.getElementById('gt-link');window.addEventListener('scroll',()=>{let y=window.scrollY;if(y>0){gt_btn.className='gt-link showgt'}else{gt_btn.className='gt-link hide'}});gt_btn.onclick=function(e){e.preventDefault();if(document.documentElement.scrollTop||document.body.scrollTop>0){window.scroll({top:0,left:0,behavior:'smooth'})}};";
document.body.appendChild(script);

