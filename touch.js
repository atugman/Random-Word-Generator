$('.hey').on('click', function(event) {

var things = ['hello', 'hi', 'hey', 'sup'];
var thing = things[Math.floor(Math.random()*things.length)] + ' ' + things[Math.floor(Math.random()*things.length)];
var allTheThings = thing + '<br>';
console.log(thing);
$('.hello').append(allTheThings);
});
