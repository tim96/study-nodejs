"use strict";

var webdriver = require('selenium-webdriver');
// var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
// var browser = new webdriver.Builder().usingServer().withCapabilities(webdriver.Capabilities.ie()).build();
var browser = new webdriver.Builder().usingServer().withCapabilities({ browserName: 'firefox' }).build();

var url = 'http://en.wikipedia.org/wiki/Wiki';

browser.get(url);
browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){
    console.log('Found', links.length, 'Wiki links.');
    browser.quit();
});