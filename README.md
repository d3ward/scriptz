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
  
Now  if you want you can setup the script like changing some behavior or options
For example , by default all the scripts will be injected to all websites , that because on each script at row 4 there is a : ```// @match       *://*/*```
you can edit that to match your custom website like ```// @match      https://github.com``` or anything else . You can have multiple match ( you need to have one mathc per url) 

## List of userscripts


### CWS.js

Chrome Web Store website is not mobile friendly . Really Google ?

I created a script that try to make the CWS more mobile friendly , available on dedicated repo -> [CWS](https://github.com/d3ward/cws-mobile)

### setAutocomplete.js

The autocomplete attribute specifies whether a form should have autocomplete on or off.
When autocomplete is on, the browser automatically complete values based on values that the user has entered before.

This script disables the autocomplete list on form inputs

### setUserSelect.js

The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.

This script force-enable the text selection 

### tbScroller.js

Script that add 2 buttons at rigth middle to scroll by scree height to top or bottom

### awesomeScroller.js

Script to scroll with a fake awesome scrollbar


## Contributing

If you have a suggestion feel free to share it by opening an issue
You can suggest a new userscript that i should create or an improvements to already available ones

##
