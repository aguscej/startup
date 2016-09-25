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

var Social = {
  share: function(friendName) {
    console.log("Sharing "+this.attributes.title +" with "+friendName);
  },
  like: function() {}
};    

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}

extend(Movie.prototype, Social);

var ironman2 = new Movie();
ironman2.set('title', 'Iron Man 2');
ironman2.share('V. Rivas');