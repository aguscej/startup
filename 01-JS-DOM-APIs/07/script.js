$( document ).ready(function() {
  $('.hidden').fadeIn('slow', function(){
    $('.alias').focus();  
  });  
  $('button').click(function(){            
    $.get('http://api.icndb.com/jokes/random', function(data){  
      console.log(data);                        
    });
  })
});