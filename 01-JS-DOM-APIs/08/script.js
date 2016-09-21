$( document ).ready(function() {
  $('.hidden').css('visibility','visible');  
  $('.alias').focus();  
  $('button').click(function(){            
    $.get('http://api.icndb.com/jokes/random', function(data){         
      $('section').last().append('<span>'+ data.value.joke+'</span><br/>');                  
    });
  })
});