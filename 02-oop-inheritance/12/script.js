function Movie() { 
  this.attributes = {};  
  this.actors = []
};
Movie.prototype = {
  constructor: Movie,
  setActors: function(actors) {
    for(i=0;i<actors.length;i++){      
      this.actors.push(actors[i]);
    }
  },
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
benStiller.set('name','Ben Stiller');
var jimCarrey = new Actor();
jimCarrey.set('nationality','american')
jimCarrey.set('name','Jim Carrey');
var ricardoDarin = new Actor();
ricardoDarin.set('name','Ricardo Darin');

var actors= [benStiller,jimCarrey,ricardoDarin];
var ironman2 = new Movie();
ironman2.set('title','Iron Man 2 ');
ironman2.setActors(actors);