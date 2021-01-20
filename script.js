'use scrict'


var hoursOfOperation = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ']

//creating a constructor function for store objects 

function Store (location, minCust, maxCust, avgCookie, cookiesPerHour, totalCookies){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesPerHour = cookiesPerHour;
  this.totalCookies = totalCookies;
}

Store.prototype.generateCookiesPerHour = function(){

  var numberOfCustPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;

  var eachHourCookie = Math.ceil( numberOfCustPerHour * this.avgCookie);

  for (var i = 0; i < hoursOfOperation.length; i++){
    this.cookiesPerHour.push(eachHourCookie) ;
    this.totalCookies += eachHourCookie;
  }
};

var seattle = new Store('Seattle', 23, 65, 6.3, [], 0);
var tokyo = new Store('Tokyo', 3, 24, 1.2, [], 0);
var dubai = new Store('Dubai', 11, 38, 3.7, [], 0);
var paris = new Store ('Paris', 20, 38, 2.3, [], 0)
var lima = new Store('Lima', 2, 16, 4.6, [], 0)
seattle.generateCookiesPerHour();
tokyo.generateCookiesPerHour();
dubai.generateCookiesPerHour();
paris.generateCookiesPerHour();
lima.generateCookiesPerHour();

function createHeaderRow(arr){
  var sectionElement = document.getElementById('table-data')

  var tableElement = document.createElement('table')

  sectionElement.appendChild(tableElement)

  var trElement = document.createElement('tr')

  tableElement.appendChild(trElement)

  for (var i = 0; i < arr.length; i++){
    var thElement = document.createElement('th');
    thElement.textContent = arr[i];
    trElement.appendChild(thElement)
  }
}

createHeaderRow(hoursOfOperation)




// var seattleStore = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   numberOfCustPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   //generate random number of customers for each hour
//   generateCustomersPerHour: function(){
//     //creating a for loop to generate the same number of values as in array hours of operation
//     for (var i = 0; i < hoursOfOperation.length; i++){
//       //creating a variable to assign random nambers
//       var eachHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//       // push random numbers to array created above
//       this.numberOfCustPerHour.push(eachHourCust)
//     }
//   },
//   //generate random number of cookies per each hour (if we call function to generate random number of customers)
//   generateCookiesPerHour: function(){
//     this.generateCustomersPerHour();
//     //creating a for loop to generate number of cookies per each hour
//     for (var i = 0; i < hoursOfOperation.length; i++){
//       //creating a variable to store temporary result 
//       //Math.floor works too 
//       var eachHourCookie = Math.ceil(this.numberOfCustPerHour[i] * this.avgCookie);
//       //push all numbers to empty array
//       this.cookiesPerHour.push(eachHourCookie);
//       //adding each random number to totalCookies
//       this.totalCookies += eachHourCookie;
//     }
//   },
//   createListSeattle: function() {
//     //accessing element in HTML file
//     var sectionElement = document.getElementById('seattle')
//     //creating h2 element for store location
//     var h2Element = document.createElement('h2')
//     //h2 element is child of section
//     sectionElement.appendChild(h2Element)
//     //giving a h2 element contenst
//     h2Element.textContent = seattleStore.location;
//     //creating unorderd list element
//     var listElement = document.createElement('ul')
//     h2Element.appendChild(listElement);
//     //calling function to generate cookies
//     this.generateCookiesPerHour();
//     //creating for loop to iterate over 2 arrays to create a list 
//     for (var i = 0; i < hoursOfOperation.length; i++){
//       //creating li elements
//       var seattleList =document.createElement('li');
//       //assigning time and cookies to each li element
//       seattleList.textContent = hoursOfOperation[i] + this.cookiesPerHour[i] + ' cookies';
//       // li child of ul
//       listElement.appendChild(seattleList)
//     }
//     //creating last li element with total value
//     var totalElement = document.createElement('li');
//     //assigning to total Cookies
//     totalElement.textContent = 'Total: ' + this.totalCookies + ' cookies.'
//     //also a child of ul
//     listElement.appendChild(totalElement)
  
//   }
// }

// seattleStore.createListSeattle()


// var tokyoStore = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   numberOfCustPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   generateCustomersPerHour: function(){
//     for (var i = 0; i < hoursOfOperation.length; i++) {
//       var eachHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//       this.numberOfCustPerHour.push(eachHourCust);
//     }
//   },
//   generateCookiesPerHour: function(){
//     this.generateCustomersPerHour();
//     for (var i = 0; i < hoursOfOperation.length; i++){
//       var eachHourCookie = Math.ceil(this.numberOfCustPerHour[i] * this.avgCookie);
//       this.cookiesPerHour.push(eachHourCookie);
//       this.totalCookies += eachHourCookie;
//     }
//   },
//   createTokyoList: function(){
//     var sectionElement = document.getElementById('tokyo');
//     var h2Element = document.createElement('h2');
//     sectionElement.appendChild(h2Element);
//     h2Element.textContent = tokyoStore.location;
//     var listElement = document.createElement('ul');
//     h2Element.appendChild(listElement);

//     this.generateCookiesPerHour();
//     for (var i = 0; i < hoursOfOperation.length; i++){
//       var tokyoList = document.createElement('li')
//       tokyoList.textContent = hoursOfOperation[i] + this.cookiesPerHour[i] + ' cookies'
//       listElement.appendChild(tokyoList)
//     }
//     var totalElement = document.createElement('li');
//     totalElement.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     listElement.appendChild(totalElement)
//   }

// }

// tokyoStore.createTokyoList();

// var dubaiStore = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38, 
//   avgCookie: 3.7,
//   numberOfCustPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   generateCustomersPerHour: function() {
//     for (var i = 0; i < hoursOfOperation.length; i++) {
//       var eachHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//       this.numberOfCustPerHour.push(eachHourCust)
//     }
//   },
//   generateCookiesPerHour: function(){
//     this.generateCustomersPerHour()
//     for (var i = 0; i < hoursOfOperation.length; i++) {
//       var eachHourCookie = Math.ceil(this.numberOfCustPerHour[i] * this.avgCookie)
//       this.cookiesPerHour.push(eachHourCookie);
//       this.totalCookies += eachHourCookie;
//     }
//   },
//   createDubaiList: function(){
//     var sectionElement = document.getElementById('dubai');
//     var h2Element = document.createElement('h2');
//     sectionElement.appendChild(h2Element);
//     h2Element.textContent = dubaiStore.location;
//     var listElement = document.createElement('ul')
//     h2Element.appendChild(listElement)
//     this.generateCookiesPerHour();
//     for (var i = 0; i < hoursOfOperation.length; i++) {
//       var dubaiList = document.createElement('li')
//       dubaiList.textContent = hoursOfOperation[i] + this.cookiesPerHour[i] + ' cookies';
//       listElement.appendChild(dubaiList);
//     }
//     var totalElement = document.createElement('li')
//     totalElement.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     listElement.appendChild(totalElement)
//   }
// }

//  dubaiStore.createDubaiList();

// var parisStore = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   numberOfCustPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   //generate random number of customers for each hour
//   generateCustomersPerHour: function(){
//     //creating a for loop, to generate the same number of elements as in our array whith hours of Operation
//     for (var i = 0; i < hoursOfOperation.length; i++){
//       //creting a variable to store results while looping
//       var eachHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//       //push results in empty array 
//       this.numberOfCustPerHour.push(eachHourCust);
//     }
//   },
//   //generate random number of cookies, depends on number of customers and avgCookie value
//   generateCookiesPerHour: function(){
//     //calling function which generates random number of customers
//     this.generateCustomersPerHour();
//     //creating a loop, to generate number of cookies for each hour 
//     for (var i = 0; i < hoursOfOperation.length; i++){
//       //creating a variable to store result 
//       var eachHourCookie = Math.ceil(this.numberOfCustPerHour[i] * this.avgCookie)
//       //push all results to empty array
//       this.cookiesPerHour.push(eachHourCookie);
//       // adding all cookies to total variable
//       this.totalCookies += eachHourCookie;

//     }
//   },
//   createParisList: function(){
//     //accessing section element in HTML file by ID
//     var sectionElement = document.getElementById('paris')
//     //creating h2 element to store location of store
//     var h2Element = document.createElement('h2');
//     // making new h2 element a child of section element
//     sectionElement.appendChild(h2Element);
//     // giving the h2 element a contenst 
//     h2Element.textContent = parisStore.location;
//     // creating an unorderd list as a child of h2 element
//     var listElement = document.createElement('ul')
//     h2Element.appendChild(listElement)
//     //calling a function which generates cookies per each hour
//     this.generateCookiesPerHour();
//     // creating a for loop to assign hours of operation and cookies per hour
//     for (var i = 0; i < hoursOfOperation.length; i++){
//       //creating list elements 
//       var parisList = document.createElement('li');
//       // giving a list content 
//       parisList.textContent = hoursOfOperation[i] + this.cookiesPerHour[i] + ' cookies';
//       //making new list items children of ul element
//       listElement.appendChild(parisList);

//     }
//     //creating last list item for total 
//     var totalElement = document.createElement('li');
//     //assigning
//     totalElement.textContent = 'Total: ' + this.totalCookies + ' cookies.'
//     listElement.appendChild(totalElement);

//   }
// }

// parisStore.createParisList()


// var limaStore = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   numberOfCustPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   generateCustomersPerHour: function(){
//     for (var i = 0; i < hoursOfOperation.length; i++){
//       var eachHourCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//       this.numberOfCustPerHour.push(eachHourCust);
//     }
//   },
//   generateCookiesPerHour: function(){
//     this.generateCustomersPerHour()

//     for (var i = 0; i < hoursOfOperation.length; i++){
//       var eachHourCookie = Math.ceil(this.numberOfCustPerHour[i] * this.avgCookie)
//       this.cookiesPerHour.push(eachHourCookie);
//       this.totalCookies += eachHourCookie;
//     }
//   },
//   createLimaList: function(){
//     var sectionElement = document.getElementById('lima')
//     var h2Element = document.createElement('h2')
//     sectionElement.appendChild(h2Element);
//     h2Element.textContent = limaStore.location;
//     var listElement = document.createElement('ul')
//     h2Element.appendChild(listElement);
//     this.generateCookiesPerHour();
//     for (var i = 0; i < hoursOfOperation.length; i++){
//       var limaList = document.createElement('li');
//       limaList.textContent = hoursOfOperation[i] + this.cookiesPerHour[i] + ' cookies.'
//       listElement.appendChild(limaList);
//     }
//     var totalElement = document.createElement('li')
//     totalElement.textContent = 'Total: ' + this.totalCookies + ' cookies.'
//     listElement.appendChild(totalElement)
//   }
// }

// limaStore.createLimaList()
