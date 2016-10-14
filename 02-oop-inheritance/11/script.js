function Movie() { 
  this.attributes = {};  
};
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

function Actor() {
  this.attributes = {};
};
Actor.prototype = {
  constructor: Actor,
  set: function(attr,value) {        
    this.attributes[attr] = value;    
  },
  get: function(attr) {
    return this.attributes[attr];
  }        
};

var benStiller = new Actor();
benStiller.set('nationality','american');
var jimCarrey = new Actor();
jimCarrey.set('nationality','american')
var ricardoDarin = new Actor();
ricardoDarin.set('nationality','argentinian');