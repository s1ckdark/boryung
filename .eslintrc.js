module.exports = {
  "env": {
    "browser": true,
    "jquery": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-console":0,
    "indent": 
    [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "no-unused-vars": 0,
    "linebreak-style": 
    [
      "error",
      "windows"
    ], // solve to Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style on windows
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  },
  "globals": {
    "WebFont": true,
    "fnSendSns": true,
    "Kakao": true,
    "isMobile": true,
    "TweenMax": true,
    "TimelineMax": true,
    "drawSVG":true,
    "ScrollMagic": true,
    "controller": true,
    "Linear": true,
    "jatracker": true,
    "Power0": true,
    "Power1": true,
    "Power3":true,
    "Power4":true,
    "Bounce": true,
    "Elastic": true,
    "Strong":true,
    "Expo":true,
    "SteppedEase":true,
    "SplitText": true,
    "upTween":true,
    "textTween":true,
    "handle":true,
    "Back":true,
    "lazyload": true,
  }
};