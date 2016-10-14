var $ = require('jquery');
var Director = require('./director');
var Movie = require('./movie');
var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...' , "Something...."]);
alien.set('director', ridleyScott);
var q=alien.get('director').speak();
$( document ).ready(function() {
  $('body').append('<span>'+q+'<br>');
  q=alien.get('director').speak();
  $('body').append('<span>'+q+'<br>');
  q=alien.get('director').speak();
  $('body').append('<span>'+q+'<br>');
  q=alien.get('director').speak();
  $('body').append('<span>'+q+'<br>');
  q=alien.get('director').speak();
  $('body').append('<span>'+q+'<br>');
});  
