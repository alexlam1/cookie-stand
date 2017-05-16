'use strict';
var firstAndPike = {
  name: '1st And Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
};

var seaTacAirport = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
};

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
};

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
};

var Alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
};

function randomNumGen(minCust, maxCust, avg) {
  var people = Math.floor(Math.random() * (maxCust - minCust)) + minCust;
  return people * avg;
}

function hour(eachStore) {
  var hourly = [];

  var total = 0;

  for (var i = 0; i < 15; i++) {
    var cookiehour = Math.floor(randomNumGen(eachStore.minCust, eachStore.maxCust, eachStore.avgCookieSale));
    hourly.push(cookiehour);

    total = total + cookiehour;
    console.log('thishour:',total);

  }
  console.log('total:',total);


  var list = document.createElement('ul');
  var list_arr = [];

  for (var b=0; b < hourly.length; b++) {
    list_arr.push('<li>' + hourly[b] + '</li>');
  }
  list_arr.unshift('<li>' + eachStore.name + '</li>');
  list_arr.push('<li> total: ' + total + '</li>');
  var full_list = list_arr.join('');

  list.innerHTML = full_list;
  document.body.appendChild(list);
}

hour(firstAndPike);
hour(seaTacAirport);
hour(seattleCenter);
hour(capitolHill);
hour(Alki);
