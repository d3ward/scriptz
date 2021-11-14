// ==UserScript==
// @name       MetaThemeInjector
// @namespace  MTI
// @author Eduard Ursu ( @d3ward )
// @version    1.0.1
// @description Auto change meta theme-color
// @match      *://*/*
// @run-at     document-end

const removeDup=(arr)=>{
    let unique_array = Array.from(new Set(arr));
    return unique_array;
}
Array.prototype.remove=function(){
    var w, a= arguments, L= a.length, ax;
    while(L && this.length){w= a[--L];while((ax= this.indexOf(w))!= -1){this.splice(ax, 1);}}
    return this;
}
const getCFromW = () => {
    var colors = [],
        gvc = document.elementsFromPoint(30, 1);
    gvc.forEach(el => {
        colors.push(getComputedStyle(el).backgroundColor);
        colors.push(el.style.backgroundColor);
    });
    if (colors.length > 0) {
        colors.push(document.body.style.backgroundColor);
        colors.push(getComputedStyle(document.body).backgroundColor);
    }
    colors = colors.filter(function (e) {
        return e
    }); //Remove empty ,null,undefined values
    colors = removeDup(colors); //Remove duplicates
    colors.remove('rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0)','rgb(0, 0, 0)','rgb(255, 255, 255)');
    return colors[0];
}
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
window.setInterval(function () {
    injectC(getCFromW());
}, 500);