'use scrict'


var hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']
var allStores = []

var sectionElement = document.getElementById('table-data')
var tableElement = document.createElement('table')
sectionElement.appendChild(tableElement)


//creating a constructor function for store objects 

function Store (location, minCust, maxCust, avgCookie, numberOfCustPerHour, cookiesPerHour, totalCookies){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.numberOfCustPerHour = numberOfCustPerHour;
  this.cookiesPerHour = cookiesPerHour;
  this.totalCookies = totalCookies;
}

Store.prototype.generateCustomersPerHour = function(){
  
  for (var i = 0; i < hoursOfOperation.length; i++){

    var eachHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    this.numberOfCustPerHour.push(eachHourCust)
  }
};

Store.prototype.generateCookiesPerHour = function(){
  for (var i = 0; i < hoursOfOperation.length; i++){

    var eachHourCookie = Math.ceil(this.numberOfCustPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(eachHourCookie);
    this.totalCookies += eachHourCookie;
  }
};

Store.prototype.displayAllCookies = function(){
  
  var rowElement = document.createElement('tr')
  tableElement.appendChild(rowElement);
  
  var thElement = document.createElement('th');
  thElement.innerHTML = this.location;
  rowElement.appendChild(thElement);

  for (var i = 0; i < this.cookiesPerHour.length; i++){
    var tdHourly = document.createElement('td')
    tdHourly.innerHTML = this.cookiesPerHour[i];
    rowElement.appendChild(tdHourly)
  };

  var totalElement = document.createElement('td')
  totalElement.textContent = this.totalCookies;
  rowElement.appendChild(totalElement)

};

var seattle = new Store('Seattle', 23, 65, 6.3, [], [], 0);
allStores.push(seattle)
var tokyo = new Store('Tokyo', 3, 24, 1.2, [], [], 0);
allStores.push(tokyo)
var dubai = new Store('Dubai', 11, 38, 3.7, [], [], 0);
allStores.push(dubai)
var paris = new Store ('Paris', 20, 38, 2.3, [], [], 0)
allStores.push(paris)
var lima = new Store('Lima', 2, 16, 4.6, [], [], 0)
allStores.push(lima)


function createHeaderRow(arr){

  var trElement = document.createElement('tr')
  tableElement.appendChild(trElement)
  //creating an empty th
  var firstThElement = document.createElement('th')
  firstThElement.textContent = '';
  trElement.appendChild(firstThElement);

  for (var i = 0; i < arr.length; i++){
    var thElement = document.createElement('th');
    thElement.textContent = arr[i];
    trElement.appendChild(thElement);
  };

  var lastElement = document.createElement('th')
  lastElement.textContent = "Daily Location Total"
  trElement.appendChild(lastElement)
};
createHeaderRow(hoursOfOperation);



seattle.generateCustomersPerHour();
seattle.generateCookiesPerHour();
seattle.displayAllCookies();

tokyo.generateCustomersPerHour();
tokyo.generateCookiesPerHour();
tokyo.displayAllCookies();

dubai.generateCustomersPerHour();
dubai.generateCookiesPerHour();
dubai.displayAllCookies();

paris.generateCustomersPerHour();
paris.generateCookiesPerHour();
paris.displayAllCookies();

lima.generateCustomersPerHour();
lima.generateCookiesPerHour();
lima.displayAllCookies();

function createFooterRow(){
  var trElement = document.createElement('tr')
  tableElement.appendChild(trElement)
  //creating an empty th
  var firstThElement = document.createElement('th')
  firstThElement.textContent = 'Total:';
  trElement.appendChild(firstThElement);

  var hourlyTotal = 0;
  var totalOfTotals = 0;

  for (var i = 0; i < hoursOfOperation.length; i++){
    var hourlyTotal = 0;
  
    for (var j = 0; j < allStores.length; j++){
      hourlyTotal += allStores[j].cookiesPerHour[i];
      totalOfTotals += allStores[j].cookiesPerHour[i];
    }
    var thElement = document.createElement('td');
      thElement.textContent = hourlyTotal;
      trElement.appendChild(thElement);
  };
  var thElement = document.createElement('th');
      thElement.textContent = totalOfTotals;
      trElement.appendChild(thElement);
 
};
createFooterRow();






