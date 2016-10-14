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

module.exports =  Director;