# scriptz

**Scriptz** is a collection of scripts created thanks to the suggestions of the Kiwi Browser community.

The goal of each script is to offer to the user a feature 
 or a customization that expands daily accessibility on websites 

## How to use & Set up
Each script can be loaded into userscripts extension managers like [Violentmonkey](https://violentmonkey.github.io/)
or loaded directly into supported browsers like [Kiwi Browser](https://kiwibrowser.com)

Once you installed the Violentmonkey extension do the following steps :
  - Open the Violentmonkey
  - Go to options page
  - Click create new Script ( you will get a dropdown )
  - Choose upload from url
  - Add the script link you can find in the List below
  - Confirm installation
Or just click on the link of the script and a installation pages will be opened by extension manager
  
Now  if you want you can setup the script like changing some behavior or options
For example , by default all the scripts will be injected to all websites , that because on each script at row 4 there is a : ```// @match       *://*/*```
you can edit that to match your custom website like ```// @match      https://github.com``` or anything else . You can have multiple match ( you need to have one match per url) 

## List of userscripts


### CWS.js

Chrome Web Store website is not mobile friendly . Really Google ?

I created a script that try to make the CWS more mobile friendly , available on dedicated repo -> [CWS](https://github.com/d3ward/cws-mobile)

### setAutocomplete.js [Link](https://github.com/d3ward/scriptz/raw/master/src/setAutocomplete.user.js)

The autocomplete attribute specifies whether a form should have autocomplete on or off.
When autocomplete is on, the browser automatically complete values based on values that the user has entered before.

This script disables the autocomplete list on form inputs

### setUserSelect.js [Link](https://github.com/d3ward/scriptz/raw/master/src/setUserSelect.user.js)

The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

This script force-enable the text selection 

### tbScroller.js [Link](https://github.com/d3ward/scriptz/raw/master/src/tbScroller.user.js)

Script that add 2 buttons at rigth middle to scroll by scree height to top or bottom

### awesomeScroller.js [Link](https://github.com/d3ward/scriptz/raw/master/src/awesomeScroller.user.js)

Script to scroll with a fake awesome scrollbar

### floatly.js [Link](https://github.com/d3ward/floatly/raw/master/floatly.user.js)

Floatly is an awesome floating button that brings quick actions from any website. Made to be mobile friendly first, but it also works on desktop.

Checkout the dedicated repo wich include an extension version with GUI -> [Floatly](https://github.com/d3ward/floatly)

### mti.js

Meta Theme Injector is an extension that let you customize the theme-color meta tag on websites.

Classic script version -> [Link](https://github.com/d3ward/mti/raw/master/userscripts/mti.js)
Auto-detect color version ->[Link](https://github.com/d3ward/mti/raw/master/userscripts/a_mti.js)

Checkout the dedicated repo wich include an extension version with GUI -> [MTI](https://github.com/d3ward/mti)

## Contributing

If you have a suggestion feel free to share it by opening an issue
You can suggest a new userscript that i should create or an improvements to already available ones
