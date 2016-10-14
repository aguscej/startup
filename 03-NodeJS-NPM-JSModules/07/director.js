function Director(name) {     
  this.name=name;  
  this.quotes=[];  
  this.index=0;
}
Director.prototype = {
  constructor: Director,   
  speak: function() {      
    console.log(this.name+" says: "+this.quotes[this.index]);        
    this.index++;    
    if(this.index==this.quotes.length) {
      this.index=0;      
    }
  },
  set: function(var1,var2) {    
    for (i=0;i<var2.length;i++) {        
      this.quotes.push(var2[i]);            
    }    
  }
};

module.exports =  Director;