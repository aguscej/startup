function Director() {   
}
Director.prototype = {
  constructor: Director,   
};

var Movie = require('./movie');
module.exports =  Director;