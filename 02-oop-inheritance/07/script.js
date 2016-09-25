/*function Movie() { 
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
*/
var Movie = (function () { 
  var attributes = {};
  return {             
    play: function() {
      $( document ).trigger("playing");
      console.log("playing "+attributes.title + "...");        
    },      
    stop: function() {
      $( document ).trigger("stopped");   
      console.log(attributes.title + " stopped ...");
    },
    set: function(attr,value) {      
      attributes[attr] = value;            
    },
    get: function(attr) {        
      return attributes[attr];
    }                        
  };
})();

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

Movie.set('title','Iron Man 2');
Movie.get('title');
Movie.play();
Movie.stop();