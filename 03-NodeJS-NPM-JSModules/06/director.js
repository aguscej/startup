function Director() {   
  this.name="";
  this.quotes="";
}
Director.prototype = {
  constructor: Director,   
  speak: function() {
    return quotes;
  }
};

var Movie = require('./movie');
module.exports =  Director;