'use strict';

function Store(storeName, minCust, maxCust, avgCookieSale){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourly = [];
}

Store.prototype.cookiePerHour = function () {
  var people = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  return people * this.avgCookieSale;
};

Store.prototype.hourlySales = function() {
  var total = 0;
  for (var i = 0; i < 15; i++) {
    var cookiehour = Math.floor(this.cookiePerHour());
    this.hourly.push(cookiehour);
    total = total + cookiehour;
  }

  var table = document.getElementById('shell');
  var data = ['<td>' + this.storeName + '</td>' ];
  for (i = 0; i < this.hourly.length; i++) {
    data.push('<td>' + this.hourly[i] + '</td>');
  }

  data.push('<td>' + total + '</td>');

  var new_row = document.createElement('tr');
  new_row.innerHTML = data.join('');
  table.appendChild(new_row);

};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);

firstAndPike.hourlySales();
seaTacAirport.hourlySales();
seattleCenter.hourlySales();
capitolHill.hourlySales();
Alki.hourlySales();
