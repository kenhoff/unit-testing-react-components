// test/setupJSDOM.js
// liberally borrowed from http://jaketrent.com/post/testing-react-with-jsdom/

console.log("Setting up jsdom...");
var jsdom = require('jsdom');
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.window.localStorage = {
    getItem: function() {},
    setItem: function() {}
};

// take all properties of the window object and also attach it to the global object
// (like being able to call `document` on its own, without using `window.document`)
propagateToGlobal(global.window);

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal(window) {
    for (var key in window) {
        if (!window.hasOwnProperty(key)) continue;
        if (key in global) continue;

        global[key] = window[key];
    }
}

console.log("Done setting up jsdom");
