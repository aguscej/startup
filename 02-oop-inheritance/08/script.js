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

function inheritPrototype(childObject, parentObject) {      
  var copyOfParent = Object.create(parentObject.prototype);
  copyOfParent.constructor = childObject;
  childObject.prototype = copyOfParent;
}  

function DownloadableMovie () {
  Movie.call(this);    
};
inheritPrototype(DownloadableMovie,Movie);
DownloadableMovie.prototype.download = function() {};  