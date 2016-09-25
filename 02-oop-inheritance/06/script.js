function Movie() { 
  this.attributes = {};  
};
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

var ironman2 = new Movie();
ironman2.set('title','Iron Man 2');

function MovieObserver() {    
};
MovieObserver.prototype = {
  constructor:MovieObserver,
  listen: function() {
    $( document ).on("playing", function(){        
    });     
    $( document ).on("stopped", function(){        
    });  
  }
};

ironman2.play();
ironman2.stop();