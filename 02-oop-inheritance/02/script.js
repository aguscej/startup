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
var ironman2 = new Movie();
ironman2.set('title','Iron Man 2');
console.log(ironman2.get('title'));
ironman2.set('director','Jon Favreau');
console.log(ironman2.get('director'));

var lionKing = new Movie();
lionKing.set('title','The Lion King');
console.log(lionKing.get('title'));
lionKing.set('gender','animation');
console.log(lionKing.get('gender'));

var theMask = new Movie();
theMask.set('title','theMask');
console.log(theMask.get('title'));
theMask.set('mainActor','Jim Carrey');
console.log(theMask.get('mainActor'));