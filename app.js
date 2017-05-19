'use strict';

var form = document.getElementById('sample_form');
var table = document.getElementById('student_table');

var data = [];



function Store(storeName, minCust, maxCust, avgCookieSale){
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourly = [];
}

function formData(event) {
  event.preventDefault();

  var first = event.target.first.value;
  var last = event.target.last.value;
  var enrolled = event.target.enrolled.checked;
  var future_classes = event.target.future_classes.value;

  data.push(new Student(first, last, enrolled, future_classes));
  createTable();
  form.reset();
}
//  var hourArray = [6:00 AM, 7:00 AM, 8:00 AM, 9:00 AM, 10:00 AM, 11:00 AM, 12:00 AM, 1:00 PM, 2:00 PM, 3:00 PM, 4:00 PM, 5:00 PM, 6:00 PM, 7:00 PM, 8:00 PM]
//
// function = storeHeader(hourArray) {
//
//   var new_row = document.createElement('tr');
//   new_row.innerHTML = data.join('');
//   storeHeader.appendChild(hourArray);


//  data.push('<td>' + total + '</td>');

//}

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
    console.log('thishour:',total);
  }
  this.render(total);
};

Store.prototype.render = function(total) {
  var table = document.getElementById('shell');
  var data = ['<td>' + this.storeName + '</td>' ];

  for (var i = 0; i < this.hourly.length; i++) {
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
