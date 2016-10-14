function Movie() { 
  this.attributes = {};  
}
Movie.prototype = {
  constructor: Movie,
  play: function()  {    
    console.log("playing "+this.attributes.title + "...");
  },
  stop: function() {    
    console.log(this.attributes.title + " stopped ...");
  },
  set: function(attr,value) {        
    this.attributes[attr] = value;    
  },
  get: function(attr) {
    return this.attributes[attr];
  }        
};


var Director = require('./director');
module.exports =  Movie;