$( document ).ready(function() {            
  $.get('https://api.spotify.com/v1/search', { q:'Rolling Stones', type:'album'}, function(data){  
    console.log(data);
    var albums = data.albums.items;
    for(i=0;i<albums.length;i++){
      var album = albums[i].href;              
      var date;    
      $.get(album, function(data2) {
        $('aside').append('<article>'+'</article');
        var $article=$('article').last();
        $article.append('<span><b>'+data2.name+'</b></span><br>');
        $article.append('<span><i>'+data2.type+'</i></span><br>');
        var img = data2.images[1].url;
        $article.append($('<a>', {                     
          html: $('<img>', {src :img })
        }));                      
        date = data2.release_date;      
        $article.append('<br><span>'+date+'</span><br>');          
        $article.append('<br>');
        var link = data2.external_urls.spotify;
        $article.append($('<a>', {
          href: link,
          html: $('<img>', {src:"spotify-icon.png"})
        }));   
        $article.append('<br>');              
      });
    }      
  });
});
