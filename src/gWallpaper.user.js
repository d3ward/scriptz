// ==UserScript==
// @name        gWallpaper
// @namespace   Scriptz (https://github.com/d3ward/scriptz)
// @include     http://*.google.*/*
// @include     https://*.google.*/*
// @exclude http://www.google.*/reader*
// @exclude https://www.google.*/reader*
// @exclude http://www.google.*/calendar*
// @exclude https://www.google.*/calendar*
// @exclude http://www.google.*/ig*
// @exclude https://www.google.*/ig*
// @grant       none
// @version     1.1
// @author      Eduard Ursu ( d3ward )
// @description Change Google Search Engine background image every timeE with random wallpaper + UI improvements
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
// Checks time elapsed 
function hasTimePassed(){
  
  
    var date = new Date();
    var date2 = new Date(localStorage.imageDate)
    var timeDiff= date - date2;
    timeDiff = Math.round(timeDiff/1000);
  
    if( timeDiff > timeE ){localStorage.imageDate = date; return true; }
      
    return false;
}
//Update image url once per day 
function runOncePerDay(){
    if( !hasTimePassed() ) return false;
    localStorage.imageUrl = getWallpaper();
}

runOncePerDay();
var url=localStorage.imageUrl;

var b = document.body;
b.style.background = '#ccc url("'+url+'") no-repeat center center fixed';
b.style.backgroundSize = "cover";

function addCSS() {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.g{width: auto!important;background: var(--darkreader-neutral-background ,#fff)!important;border-radius: 8px!important;padding: 10px!important;}.gb_Hg.gb_Ta{margin-right:10px!important;}#taw,#botstuff,#foot,.gb_Hg.gb_Ta,g-card,.Xeztj{background-color: var(--darkreader-neutral-background ,#fff)!important;border-radius:8px;padding:10px;}#foot,#rhs .g-blk.VjDLd,#rhs .VjDLd.liYKde,#taw{margin:20px 0;}#center_col .kp-blk{width:auto!important;}';
    document.head.appendChild(style);
}
addCSS();

