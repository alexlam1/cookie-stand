'use strict';
var hourArray = ['Store Name', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', 'total'];
var table = document.getElementById('table');
function Store(storeName, minCust, maxCust, avgCookieSale){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourly = [];
  this.total = 0;
}

Store.prototype.cookiePerHour = function () {
  var people = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  return people * this.avgCookieSale;
};

Store.prototype.hourlySales = function() {
  for (var i = 0; i < 15; i++) {
    var cookiehour = Math.floor(this.cookiePerHour());
    this.hourly.push(cookiehour);
    this.total = this.total + cookiehour;
  }
};

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);

var tr = document.createElement('tr');
document.getElementById('shell').appendChild(tr);
for (var i = 0; i < hourArray.length; i++) {
  var th = document.createElement('th');
  th.innerHTML = hourArray[i];
  tr.appendChild(th);
}

Store.prototype.render = function() {
  var table = document.getElementById('shell');
  var data = ['<td>' + this.storeName + '</td>'];

  for (var j = 0; j < this.hourly.length; j++) {
    data.push('<td>' + this.hourly[j] + '</td>');
  }
  data.push('<td>' + this.total + '</td>');

  var new_row = document.createElement('tr');
  new_row.innerHTML = data.join('');
  table.appendChild(new_row);
};

var data = [];

function createTable() {
  var row;
  for (var i = 0; i < data.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = '<td>' + data[i].Store + '</td>' +
    '<td>' + data[i].Item + '</td>' +
    '<td>' + data[i].enrolled + '</td>' +
    '<td>' + data[i].future_classes + '</td>';
    table.appendChild(row);
  }
}
createTable();

firstAndPike.hourlySales();
seaTacAirport.hourlySales();
seattleCenter.hourlySales();
capitolHill.hourlySales();
Alki.hourlySales();

firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
Alki.render();
