var Director = require('./director');
var Movie = require('./movie');
var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...' , "Something...."]);
alien.set('director', ridleyScott);
alien.get('director').speak();