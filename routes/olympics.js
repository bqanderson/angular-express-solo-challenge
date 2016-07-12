var router = require('express').Router();

//Athlete Arrays
var badminton = [
  {name: 'Phillip Chew', hometown: 'Orange, CA'},
  {name: 'Eva Lee', hometown: 'Diamond Bar, CA'},
  {name: 'Paula Lynn Obanana', hometown: 'West Covina, CA'},
  {name: 'Sattawat Pongnairat', hometown: 'Orange, CA'},
  {name: 'Howard Shu', hometown: 'Anaheim, CA'},
  {name: 'Jamie Subandhi', hometown: 'Westminster, CA'},
  {name: 'Iris Wang', hometown: 'Arcadia, CA'},
];
var fencing = [
  {name: 'Miles Chamley-Watson ', hometown: 'New York, NY'},
  {name: 'Eli Dershwitz', hometown: 'Sherborn, MA'},
  {name: 'Katharine Holmes', hometown: 'Washington, DC'},
  {name: 'Daryl Homer', hometown: 'Bronx, NY'},
  {name: 'Courtney Hurley', hometown: 'Houston, TX'},
  {name: 'Kelley Hurley', hometown: 'San Antonio, TX'},
  {name: 'Lee Kiefer', hometown: 'Lexington, KY'},
  {name: 'Alex Massialas', hometown: 'San Francisco, CA'},
  {name: 'Gerek Meinhardt', hometown: 'San Francisco, CA'},
  {name: 'Ibtihaj Muhammad', hometown: 'Maplewood, NJ'},
  {name: 'Nzingha Prescod', hometown: 'Brooklyn, NY'},
  {name: 'Jason Pryor', hometown: 'South Euclid, OH'},
  {name: 'Dagmara Wozniak', hometown: 'Avenel, NJ'},
  {name: 'Mariel Zagunis', hometown: 'Beaverton, OR'}
];
var equestrian = [
  {name: 'Allison Brock', hometown: 'Wellington, FL'},
  {name: 'Lucy Davis', hometown: 'Los Angeles, CA'},
  {name: 'Phillip Dutton', hometown: 'West Grove, PA'},
  {name: 'Kent Farrington', hometown: 'Wellington, FL'},
  {name: 'Laura Graves', hometown: 'Orlando, FL'},
  {name: 'Lauren Kieffer', hometown: 'Middleburg, VA'},
  {name: 'Beezie Madden', hometown: 'Cazenovia, NY'},
  {name: 'Boyd Martin', hometown: 'Cochranville, PA'},
  {name: 'Clark Montgomery', hometown: 'Mineral Wells, TX'},
  {name: 'Steffen Peters', hometown: 'San Diego, CA'},
  {name: 'Kasey Perry-Glass', hometown: 'Orangevale, CA'},
  {name: 'McLain Ward', hometown: 'Brewster, NY'}
];
var archery = [
  {name: 'Mackenzie Brown', hometown: 'Flint, TX'},
  {name: 'Brady Ellison', hometown: 'Globe, AZ'},
  {name: 'Zach Garrett', hometown: 'Wellington, MO'},
  {name: 'Jake Kaminski', hometown: 'Gainesville, FL'}
];
var sailing = [
  {name: 'Thomas Barrows III', hometown: 'St. Thomas, VI'},
  {name: 'Charlie Buckingham', hometown: 'Newport Beach, CA'},
  {name: 'Louisa Chafee', hometown: 'Saunderstown, RI'},
  {name: 'Bora Gulari', hometown: 'Detroit, MI'},
  {name: 'Annie Haeger', hometown: 'East Troy, WI'},
  {name: 'Paris Henken', hometown: 'Coronado, CA'},
  {name: 'David Hughes', hometown: 'Miami, FL'},
  {name: 'Marion Lepert', hometown: 'Belmont, CA'},
  {name: 'Stu McNay', hometown: 'Providence, RI'},
  {name: 'Joe Morris', hometown: 'Annapolis, MD'},
  {name: 'Caleb Paine', hometown: 'San Diego, CA'},
  {name: 'Pedro Pascual', hometown: 'West Palm Beach, FL'},
  {name: 'Briana Provancha', hometown: 'San Diego, CA'},
  {name: 'Paige Railey', hometown: 'Clearwater, FL'},
  {name: 'Helena Scutt', hometown: 'Kirkland, WA'}
];

function random(arrayLength) {
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

router.get('/archery', function(request, response) {
  response.send(archery[random(archery.length - 1)]);
})

router.get('/sailing', function(request, response) {
  response.send(sailing[random(sailing.length - 1)]);
})

module.exports = router;
