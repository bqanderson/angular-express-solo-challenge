var router = require('express').Router();

//Athlete Arrays
var badminton = [];
var fencing = [];
var equestrian = [];
var rowing = [];
var sailing = [];

function random(arryLenght) {
  return Math.floor(Math.random() * arrayLength);
}

router.get('/badminton', function(request, response) {
  response.send(badminton[random(badminton.length - 1)]);
})

router.get('/fencing', function(request, response) {
  response.send(fencing[random(fencing.length - 1)]);
})

router.get('/equestrian', function(request, response) {
  response.send(equestrian[random(equestrian.length - 1)]);
})

router.get('/rowing', function(request, response) {
  response.send(rowing[random(rowing.length - 1)]);
})

router.get('/sailing', function(request, response) {
  response.send(sailing[random(sailing.length - 1)]);
})

module.exports = router;
