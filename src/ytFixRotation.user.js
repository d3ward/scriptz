// ==UserScript==
// @name        YT Fix Rotation
// @namespace   Scriptz (https://github.com/d3ward/scriptz)
// @match       *://*.youtube.com/*
// @grant       none
// @version     1.0
// @author      Eduard Ursu ( d3ward )
// @description Script to auto rotate video when full screen
// ==/UserScript==

(function() {
    'use strict';
    function addStyles(styleString) {
        const style = document.createElement('style');
        style.textContent = styleString;
        document.head.append(style);
    }
    function changeOrientation() {
        if (screen.orientation) {
            screen.orientation.lock('landscape');
        }
    }
    window.addEventListener('load', () => {
        addStyles(`
            .html5-video-container video {
				width: 100vw;
				height: auto;
				object-fit: cover;
			}
        `);
        document.addEventListener("fullscreenchange", function() {
            if (document.fullscreenElement) {
                changeOrientation();
            }
        });
        document.addEventListener("fullscreenerror", function() {
            screen.orientation.unlock();
        });
    });
})();
