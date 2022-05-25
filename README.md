# HardStuck-checker

## 👁️‍🗨️ Introduction - the project's aim:

Project made for learning purposes focusing on implementing asynchronous JS to communicate with external API, to download and append data to DOM which can be then analized
for final evaluation, which would tell the user if he's a "hardstuck" player or not :)

Its design was inspired by the League of Legends website theme - darkblue & gold/white with modern animation style.

## 📚 Technologies used:

- Javascript
- SCSS
- HTML5

### API's:

- Riot API (https://developer.riotgames.com/apis)

### Bundler:

- Webpack

## TEST SEARCH WITH THESE NICKS (OR YOUR OWN :) ):

- gzrg28
- º Carry Potter º
- Sir lntaIot


## 💡 General info & ideas:

1. All animations were written in CSS - no external libraries were used (for learning purposes).
2. Used SCSS rather than pure CSS for easier variables access & nesting.
3. Learned about clip-path function & used it for anchor/button shaping. To make my life easier I've used this website for creating a desired clip-path: https://bennettfeely.com/clippy/
4. Learned how to properly configure webpack accordingly to my needs, following official documentation on https://webpack.js.org/guides/

## Issues on my way to glory...

1. Used `<object>` rather than `<img>` tag to embed SVG in HTML as it allows to apply animations within the SVG itself <br /><br />
   EDIT:
   implemented svg directly into HTML code as an element of `<a>` because `<object>` can't be used as an anchor, as it returns the linked element as an object (duuh...) instead of redirecting user to new tab :)

2. Can't use async before declaration in arrow function - syntax error pops up. Had to move async keyword before the parenthesis.

3. Riot API uses key for authenticating API calls. Unfortunately, they are very picky about how to use their API, so I would need to create a proxy server for these calls, which I don't have the knowledge to do. I found a workaround however, more details below.

# CORS WORKAROUND:

For this API to work you will most likely need to use an addon that overwrites CORS Headers.

Example: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
