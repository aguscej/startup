function Movie() { 
  this.attributes = {};
};
Movie.prototype = {
  constructor: Movie,
  play: function()  {          
  },
  stop: function() {},
  set: function(attr,value) {        
    this.attributes[attr] = value;    
  },
  get: function(attr) {
    return this.attributes[attr];
  }      
};

var ironman2 = new Movie();
ironman2.set('title','Iron Man 2');
console.log(ironman2.get('title'));
