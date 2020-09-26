// ==UserScript==
// @name        setAutocomplete
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      d3ward
// @description Script to disable the autocomplete list on a form inputs
// ==/UserScript==

var status="off";
  function setAutocomplete() {
         var v=document.body.getElementsByTagName('form');
          Array.prototype.forEach.call(v,element => {
			   element.setAttribute("autocomplete",status);
		  });
      var inputElements = document.getElementsByTagName('input');
      for (i=0; inputElements[i]; i++) 
         inputElements[i].setAttribute('autocomplete',status);
  }
setAutocomplete();
  