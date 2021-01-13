// ==UserScript==
// @name        repoDownload
// @namespace   Scriptz (https://github.com/d3ward/scriptz)
// @include      *://github.com/*/*
// @grant       none
// @version     1.0
// @author      Eduard Ursu ( d3ward )
// @description Script that add a button to download a github repository 
// ==/UserScript==


var path = window.location.pathname;
var path_ar = path.split("/");
console.log(path_ar);
if(path_ar.length == 3)
  {
    var finalLink = "https://github.com" + path + "/archive/master.zip";
    /* ---------------- Style  --------------- */
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = "#link-dl{position:fixed;text-align:center;left:10px;bottom:10px;text-decoration: none;padding: 12px;border-radius: .3rem;color: #fff;background:#000;width: 220px;display: inline-block;}#link-dl svg{fill:#fff;width:24px;height:24px;vertical-align:middle;display:inline-flex;}";
    document.head.appendChild(style);
    /* ---------------- Button  --------------- */
    var gt_btn = document.createElement('a');
    gt_btn.id="link-dl";
    gt_btn.href= finalLink;
    gt_btn.innerHTML='Download Repository <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>';
    document.querySelector('body').appendChild(gt_btn);
}
