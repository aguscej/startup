$( document ).ready(function() {
  $('.hidden').fadeIn('slow', function(){
    $('.alias').focus();  
  });
  $('button').click(function(){            
    $.get('https://api.spotify.com/v1/search', function(data){         
      $('section').last().append('<span>'+ data.value.joke+'</span><br/>');                  
    }).fail(function() {
      $('section').last().css('background-color','#FF0000');              
    })
  })
});