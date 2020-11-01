// ==UserScript==
// @name        rotateThis
// @namespace   Scriptz (https://github.com/d3ward/scriptz)
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      Eduard Ursu ( d3ward )
// @description Script to rotate images on click
// ==/UserScript==


// Rotate the current clicked image 
function rotateThis(e) {
    e.preventDefault();
    var img = e.target;
    if (img.style && img.style.transform) {
      var rotation = img.style.transform;
      if (!rotation.match(/rotate\(\d+deg\)/)) return;
      rotation = Number(rotation.match(/\d+/)[0]);
      rotation += (rotation == 315) ? -315 : 45;
      img.style.transform = "rotate(" + rotation + "deg)";
     } else img.style.transform = "rotate(45deg)";
  };
  
  //Add event listener to images
  function addOnClick(e) {
    var target = (e == null) ? document : e.target;
    if (target.nodeName == "IMG") target.addEventListener("click", rotateThis, false);
    var images = target.getElementsByTagName("img");
    for(var i = 0; i < images.length; i++) images[i].addEventListener("click", rotateThis, false);
    
  };
  
  addOnClick();
  document.addEventListener("DOMNodeInserted", addOnClick, false);
  
  