/*
function Movie() { 
  this.attributes = {};  
  this.observers = new MovieObservers();
}
Movie.prototype = {
  constructor: Movie,
  play: function()  {    
    console.log('playing '+this.attributes.title+' ...');
    this.notify('playing');
  },
  stop: function() {
    console.log(this.attributes.title+' stopped ...');
    this.notify('stopped');
  },
  set: function(attr,value) {        
    this.attributes[attr] = value;    
  },
  get: function(attr) {
    return this.attributes[attr];
  },
  addObserver: function (obs) {
    this.observers.add(obs);
  },
  removeObserver: function(obs) {
    this.observers.removeAt(this.observers.indexOf(obs,0));
  },
  notify: function(context) {
    var observerCount = this.observers.count();
    for(var i=0; i<observerCount; i++) {
      this.observers.get(i).update(context);
    }
  }
};


function MovieObservers() {
  this.observers = [];
}
MovieObservers.prototype = {
  constructor:MovieObservers,
  add: function(obs) {
    return this.observers.push(obs);
  },
  count: function() {
    return this.observers.length;
  },
  get: function(index) {
    if( index > -1 && index < this.observers.length ){
      return this.observers[ index ];
    }
  },
  indexOf: function (obs , startIndex) {
    var i = startIndex;
    while( i < this.observers.length ){
      if( this.observers[i] === obs ){
        return i;
      }
      i++;
    }
    return -1;
  },  
  removeAt: function( index ){
  this.observers.splice( index, 1 );
  }
}

function MovieObserver(){
  this.update = function(context) {
    if (context == 'playing') {
      console.log('Observer: playing movie');
    }
    else if (context == 'stopped') {
      console.log('Observer: movie stopped');
    }
  }
}   

var ironman2 = new Movie();
ironman2.set('title','Iron Man 2');
var observer = new MovieObserver();
ironman2.play();
ironman2.stop();
ironman2.addObserver(observer);
ironman2.play();
ironman2.stop();
ironman2.play();*/


function MovieObservers() {
  this.observers = [];
}
MovieObservers.prototype = {
  constructor:MovieObservers,
  add: function(obs) {
    return this.observers.push(obs);
  },
  count: function() {
    return this.observers.length;
  },
  get: function(index) {
    if( index > -1 && index < this.observers.length ){
      return this.observers[ index ];
    }
  },
  indexOf: function (obs , startIndex) {
    var i = startIndex;
    while( i < this.observers.length ){
      if( this.observers[i] === obs ){
        return i;
      }
      i++;
    }
    return -1;
  },  
  removeAt: function( index ){
  this.observers.splice( index, 1 );
  }
}

var Movie = (function () { 
  var attributes = {};
  var observers = new MovieObservers();
  return {             
    play: function() {      
      console.log('playing '+attributes.title+' ...');
      this.notify('playing');      
    },      
    stop: function() {  
      console.log(attributes.title+' stopped ...');
      this.notify('stopped');        
    },
    set: function(attr,value) {      
      attributes[attr] = value;            
    },
    get: function(attr) {        
      return attributes[attr];
    },
    addObserver: function (obs) {
      observers.add(obs);
    },
    removeObserver: function(obs) {
      observers.removeAt(observers.indexOf(obs,0));
    },
    notify: function(context) {
      var observerCount = observers.count();
      for(var i=0; i<observerCount; i++) {
        observers.get(i).update(context);
      }
    }                        
  };
})();

function MovieObserver(){
  this.update = function(context) {
    if (context == 'playing') {
      console.log('Observer: playing movie');
    }
    else if (context == 'stopped') {
      console.log('Observer: movie stopped');
    }
  }
};   

Movie.set('title','Iron Man 2');
Movie.get('title');
Movie.play();
Movie.stop();
var observer = new MovieObserver();
Movie.addObserver(observer);
Movie.play();
Movie.stop();
Movie.play();
