(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Director() {   
}
Director.prototype = {
  constructor: Director,   
};

var Movie = require('./movie');
module.exports =  Director;
},{"./movie":2}],2:[function(require,module,exports){
function Movie() { 
  this.attributes = {};  
}
Movie.prototype = {
  constructor: Movie,
  play: function()  {
    $( document ).trigger("playing");
    console.log("playing "+this.attributes.title + "...");
  },
  stop: function() {
    $( document ).trigger("stopped");   
    console.log(this.attributes.title + " stopped ...");
  },
  set: function(attr,value) {        
    this.attributes[attr] = value;    
  },
  get: function(attr) {
    return this.attributes[attr];
  }        
};

module.exports =  Movie;
},{}],3:[function(require,module,exports){
var Director = require('./director');
var clintEastwood = new Director();
var Movie = require('./movie');
var ironman2 = new Movie();
},{"./director":1,"./movie":2}]},{},[3]);
