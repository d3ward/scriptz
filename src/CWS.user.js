// ==UserScript==
// @name        New script - google.com
// @namespace   Violentmonkey Scripts
// @match       https://chrome.google.com/webstore
// @grant       none
// @version     1.0
// @author      d3ward
// @description 17/1/2020, 22:11:38
// ==/UserScript==

console.log("TEST");
var x = document.getElementsByClassName("O-j-gb");
            var node = document.createElement('style');
            node.innerHTML ='.a-t-o-k {width:auto;}.a-K-o {padding-top:8px!important;}.h-a-x {text-align: center;}.a-t-o-ea {padding-left:10px}.a-t-o-A {width: calc(100vw - 40px)!important;border-radius: 8px;}.menubtn{float:left;padding:4px}.HWJfBb{height:90vh!important;overflow-y:scroll!important;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)!important}.h-e-f-Ra-c{position:fixed!important;top:68px!important;left:0px!important;z-index:10000!important}div .a-P-d-k{margin:5px!important;border-radius:5px;padding:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.e-f-o{padding-top:50px!important}.e-f-n-Va{margin:0 auto!important}.e-f-b.g-b{margin:0 4px!important;padding:6px 7px!important}.e-f-w-Va,.e-f-yb-w{width:calc(100vw - 80px)!important}.back-to-top{width:100px;height:130px;padding:10px;text-align:center;background:whiteSmoke;font-weight:700;color:#444;text-decoration:none;position:fixed;top:75px;right:40px;display:none;background:url(arrow_up.png) no-repeat 0 20px}.back-to-top:hover{text-decoration:none}.yrk3fc{margin:10px 16px!important}span .h-n-j-Z-ea-aa{margin-top:10px!important}img.hA-Ce-ze-Yf,.C-b-i .i-da-A{width:100vw!important}.e-f-Ib-n,.e-f-Ib-p{display:none}.O-j-Ic-c{display:none}.F-x{width:100%!important}img.a-P-d-A{height:100px!important;width:160px!important}.menubutton{display:inline-block;cursor:pointer}.bar1,.bar2,.bar3{width:25px;height:4px;background-color:#5f6368;margin:3px 0;margin-right:6px;transition:0.4s}.change .bar1{-webkit-transform:rotate(-45deg) translate(-5px,5px);transform:rotate(-45deg) translate(-5px,5px)}.change .bar2{opacity:0}.change .bar3{-webkit-transform:rotate(45deg) translate(-5px,-5px);transform:rotate(45deg) translate(-5px,-5px)}.a-La{display:none}.Je-qe-zd-Ge{width:100vw!important}.F-k,.a-P-d{width:auto!important}.PNF6le{text-transform:none!important}div .a-d.webstore-test-wall-tile.a-d-zc.a-P-d-k{width:160px!important}';
            document.body.appendChild(node);
            
            var menuStyle = document.createElement('style');
            menuStyle.innerHTML = '.F-n-J{display:none!important;position:fixed!important;right: 0px!important;height: 100vh!important;width: 100vw!important;max-width: 450px;z-index: 1149!important;}';
            document.body.appendChild(menuStyle);

            var showMenu=0;
            var menuBtn = document.createElement("div");
            menuBtn.className = "menubtn";
            menuBtn.innerHTML= '<div class="bar1"></div><div class="bar2"></div><div class="bar3"></div>';
            menuBtn.onclick = function () {
                menuBtn.classList.toggle("change");
                menuStyle.innerHTML = '.F-n-J{display:'+((showMenu)?'none':'inline-block')+'!important;position:fixed!important;left:0px!important;width: 100vw!important;max-width: 450px;background:none!important;z-index: 1149!important;}';
                showMenu=!showMenu;
            }
             x[0].insertBefore(menuBtn, x[0].firstChild);