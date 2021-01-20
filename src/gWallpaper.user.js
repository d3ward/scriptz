// ==UserScript==
// @name        gWallpaper
// @namespace   Scriptz (https://github.com/d3ward/scriptz)
// @include     https://www.google.*
// @exclude http://www.google.*/search*
// @exclude https://www.google.*/search*
// @exclude http://www.google.*/maps*
// @exclude http://www.google.*/reader*
// @exclude https://www.google.*/reader*
// @exclude http://www.google.*/calendar*
// @exclude https://www.google.*/calendar*
// @exclude http://www.google.*/ig*
// @exclude https://www.google.*/ig*
// @grant       none
// @version     1.4
// @author      Eduard Ursu ( d3ward )
// @description Change Google Search Engine background image every time elapsed with random wallpaper 
// ==/UserScript==

//Edit the above list with images url
var wallpaperList = [
    "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/129105/pexels-photo-129105.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/273886/pexels-photo-273886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/640809/pexels-photo-640809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"];
//Get a random image from the list
function getWallpaper() {
    var num = Math.floor( Math.random() * wallpaperList.length );
    return wallpaperList[ num ];
}

/* Set time Elapsed in seconds
 * 1 minute  = 60
 * 1 h = 3600
 * 1 day = 86400
 * 1 week = 604800
*/
var timeE = 604800;
var currDate = new Date();
var date = new Date(localStorage.imageDate);
var url =localStorage.imageUrl;

if(url == undefined) {
  url = getWallpaper();
  date= currDate;
  localStorage.imageUrl = url;
  localStorage.imageDate = currDate;
}

var timeDiff= Math.abs(currDate - date);
    timeDiff = Math.round(timeDiff/1000);
 
//Update image url if timeElapsed
if( timeDiff > timeE ){
    localStorage.imageDate = currDate;
    localStorage.imageUrl = getWallpaper();
}
var b = document.body;
b.style.background = '#ccc url("'+url+'") no-repeat center center fixed';
b.style.backgroundSize = "cover";
