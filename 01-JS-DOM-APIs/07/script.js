$( document ).ready(function() {
  $('.hidden').children().css('visibility','visible');  
  $('.alias').focus();  
  $('button').click(function(){            
    $.get('http://api.icndb.com/jokes/random', function(data){  
      console.log(data);                        
    });
  })
});