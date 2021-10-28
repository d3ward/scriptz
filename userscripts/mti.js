// ==UserScript==
// @name       MetaThemeInjector
// @namespace  MTI
// @author Eduard Ursu ( @d3ward )
// @version    1.0.1
// @description Add meta tag theme-color
// @match      *://*/*
// @run-at     document-end

const injectC = (color) => {
    if (document.querySelectorAll('meta[name="theme-color"]').length > 0) {
        var metaThemeColor = document.querySelector("meta[name=theme-color]");
        metaThemeColor.setAttribute("content", color);
    } else {
        var link = document.createElement('meta');
        link.setAttribute('name', 'theme-color');
        link.setAttribute('content', color);
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}
var color = "white"; //default color on all website
// Set color for facebook.com
if (/facebook\.com/.test(location.hostname)) {
    color = "blue";
} else if (/youtube\.com/.test(location.hostname)) {
    // Set Color for youtube
    color = "youtube";
}
//If you want more add colors add an if with the same syntax above

injectC(color);