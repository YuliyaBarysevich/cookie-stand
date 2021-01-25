'use scrict'


var hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm']
var allStores = []

var allTable = document.getElementById('table')
var tableHeader = document.getElementById('table-head')
var tableBody = document.getElementById('table-body')
var tableFooter = document.getElementById('table-footer')


//creating a constructor function for store objects 

function Store (location, minCust, maxCust, avgCookie, cookiesPerHour, totalCookies){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesPerHour = cookiesPerHour;
  this.totalCookies = totalCookies;
}

function generateCustomersPerHour(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


Store.prototype.generateCookies = function () {
  return Math.floor(generateCustomersPerHour(this.minCust, this.maxCust) * this.avgCookie);
}

Store.prototype.generateCookiesPerHour = function(){
  for (var i = 0; i < hoursOfOperation.length; i++){

    var eachHourCookie = this.generateCookies();
    this.cookiesPerHour.push(eachHourCookie);
    this.totalCookies += eachHourCookie;
  }
};

Store.prototype.displayAllCookies = function(){
  
  var rowElement = document.createElement('tr')
  tableBody.appendChild(rowElement);
  
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

var seattle = new Store('Seattle', 23, 65, 6.3, [], 0);
allStores.push(seattle)
var tokyo = new Store('Tokyo', 3, 24, 1.2, [], 0);
allStores.push(tokyo)
var dubai = new Store('Dubai', 11, 38, 3.7, [], 0);
allStores.push(dubai)
var paris = new Store ('Paris', 20, 38, 2.3, [], 0);
allStores.push(paris)
var lima = new Store('Lima', 2, 16, 4.6, [], 0);
allStores.push(lima)

function generateAllCookies () {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].generateCookiesPerHour()
  }
}

function displayAllShops() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].displayAllCookies()
  }
}



function createHeaderRow(arr){

  var trElement = document.createElement('tr')
  tableHeader.appendChild(trElement)
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




function createFooterRow(){
    var footerRow = document.createElement('tr')
    tableFooter.appendChild(footerRow)
    //creating an empty th
    var firstThElement = document.createElement('th')
    firstThElement.textContent = 'Total:';
    footerRow.appendChild(firstThElement);
  
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
        footerRow.appendChild(thElement);
    };
     var thElement = document.createElement('th');
     thElement.textContent = totalOfTotals;
     footerRow.appendChild(thElement);
  };



// calling all functions above 
generateAllCookies()
displayAllShops()
createFooterRow();
createHeaderRow(hoursOfOperation);


var formElement = document.getElementById("new-store")

  formElement.addEventListener('submit', function (event) {
  tableFooter.innerHTML = '';

  event.preventDefault();
  console.log (event.target.shopLocation.value)

 

  var newLocation = event.target.shopLocation.value;
  var newMinCust = parseInt(event.target.minCust.value);
  var newMaxCust = parseInt(event.target.maxCust.value);
  var newAvgCookie = parseInt(event.target.avgCookie.value);


  var newStore = new Store(newLocation, newMinCust, newMaxCust, newAvgCookie, [], 0)
  allStores.push(newStore);
 
  
  newStore.generateCookiesPerHour();
  newStore.displayAllCookies();
  
  createFooterRow()

})




