var timeArray = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var cookieStores = [];//ASSIGNING empty array to the variable "stores"

function Store(name, minCustomers, maxCustomers, averageCookiePerSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookiePerSale = averageCookiePerSale;
  this.cookiesPerHour = [];
  this.totalSales = 0;
  cookieStores.push(this);//when we're instantiating a new object, we're pushing that instance into the store array.
}

Store.prototype.personPerHour = function(min, max) {
  return Math.random() * (max - min) + min;
};

Store.prototype.cookieSalePerHour = function() {//all instances will inherit the method cookieSalePerHour
  for(var i = 0; i < timeArray.length; i++) {
    var cookies = Math.floor(this.averageCookiePerSale * this.personPerHour(this.minCustomers, this.maxCustomers));
    this.cookiesPerHour.push(cookies);
    this.totalSales += cookies;
  }
};

Store.prototype.render = function() {
  this.cookieSalePerHour();

  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode(this.name));
  document.getElementById('store_data').appendChild(ulEl);

  for(var j = 0; j < timeArray.length; j++) {
    var liEl = document.createElement('li');
    liEl.textContent = 'Hourly Sale@ ' + ' ' + timeArray[j] + ' : ' + this.cookiesPerHour[j];
    ulEl.appendChild(liEl);
  }
  var totalEl = document.createElement('li');
  totalEl.textContent = 'Total Daily Sales: ' + this.totalSales;
  ulEl.appendChild(totalEl);
};
var tableEl = document.getElementById('stores');

Store.render = function() {
  // var tableEl = document.getElementById('stores');
  var hoursRow = document.createElement('tr');//creating a tr element and saving it as a variable named hoursRow so that we can use .appendChild later.
  var emptyCell = document.createElement('th');//creating an empty data box as a header for the row
  hoursRow.appendChild(emptyCell);//adding the th emptyCell to the hours row that was defined earlier
  for (var i = 0; i < timeArray.length; i++) {//during this time, we are adding times in the timeArray as our hour row
    var tableHeader = document.createElement('th');
    tableHeader.textContent = timeArray[i];//at each iteration add the indexed value of timeArray(whichever hour it happens to be in within the array)
    hoursRow.appendChild(tableHeader);//append that shit to the hoursRow
  }
  var totalHeader = document.createElement('th');//creating a total header to append to the end of the hours row
  totalHeader.textContent = 'Total';
  hoursRow.appendChild(totalHeader);
  tableEl.appendChild(hoursRow);

  for(obj in cookieStores) { //for each object in cookiestores, object will represent the index (0, 1 ,2 ,3 ,4,5) in hours open
    cookieStores[obj].cookieSalePerHour();//gets object you're iterating over
    var tableRow = document.createElement('tr');//create new row
    var nameRow = document.createElement('td');
    nameRow.textContent = cookieStores[obj].name;//adds a name to the td in the nameRow
    tableRow.appendChild(nameRow);

    for (hour in timeArray) {
      var tableData = document.createElement('td');
      tableData.textContent = cookieStores[obj].cookiesPerHour[hour];//getting hourlySales at 10,11,12,1,2, while the cookieStore stays on the pikeplace object.
      tableRow.appendChild(tableData);
    }
    var totalsData = document.createElement('td');
    totalsData.textContent = cookieStores[obj].totalSales;
    tableRow.appendChild(totalsData);
    tableEl.appendChild(tableRow);//appending to original tr
  }
};

var pikeStore = new Store('Pike Place', 17, 88, 5.2);
var seaTacStore = new Store('SeaTac', 6, 24, 1.2);
var southCenter = new Store('Southcenter', 11, 38, 1.9);
var belleSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

Store.render();

Store.renderNew = function(obj) {
  console.log(obj);
  var formRow = document.createElement('tr');
  var formNameTd = document.createElement('td');
  formNameTd.textContent = obj.name;
  formRow.appendChild(formNameTd);
  for(hour in timeArray) {
    var salesTd = document.createElement('td');
    salesTd.textContent = obj.cookiesPerHour[hour];
    console.log(obj.cookieSalePerHour[hour]);
    formRow.appendChild(salesTd);
  }
  var newTotalTd = document.createElement('td');
  newTotalTd.textContent = obj.totalSales;
  formRow.appendChild(newTotalTd);
  tableEl.appendChild(formRow);
};

var formEl = document.getElementById('form');

formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  var newStoreName = event.target.newstorelocation.value;//newstorelocation is in html
  var newMinCust = parseInt(event.target.min.value);//id = min
  var newMaxCust = parseInt(event.target.max.value);//id = max
  var newAvgCustSale = parseFloat(event.target.avg.value);
  var newShop = new Store(newStoreName, newMinCust, newMaxCust, newAvgCustSale);
  newShop.cookieSalePerHour();
  console.log(newShop);
  Store.renderNew(newShop);
});

// function Store(name, minCustomers, maxCustomers, averageCookiePerSale) {
//   this.name = name;
//   this.minCustomers = minCustomers;
//   this.maxCustomers = maxCustomers;
//   this.averageCookiePerSale = averageCookiePerSale;
//   this.cookiesPerHour = [];
//   this.totalSales = 0;
//   storesAvailable.push(this);
// }
//
// Store.prototype.personPerHour = function(min, max) {//creating a method to calculate a random amount of guests that will buy cookies
//   return Math.random() * (max - min + 1) + min;
// };
//
// Store.prototype.cookieSalePerHour = function() {//create a method to calculate a random amount of cookies sold per hour based on personPerHour random calculation
//   for(var i = 0; i < timeArray.length; i++) {//iterate over the timeArray
//     var cookies = Math.floor(this.averageCookiePerSale * this.personPerHour(this.minCustomers, this.maxCustomers));//this determines the amount of cookies sold per hour based on average cookie sold per hour per store multiplied by the average guest count per hour and deducts the decimal place with math.floor
//     this.cookiesPerHour.push(cookies);//cookies is being pushed into the cookies per hour array
//     console.log(this.cookiesPerHour);
//     this.totalSales += cookies;//this.totalSales = this.totalSales + cookies
//   };
// };
//
// Store.prototype.render = function() {
//   this.cookieSalePerHour();
//
//   var ulEl = document.createElement('ul');
//   ulEl.appendChild(document.createTextNode(this.name));
//   var sectionEl = document.getElementById('store_data').appendChild(ulEl);//we are assigning an element to a variable, also appending the ul to the section of store data, but just the section is being assigned a value.
//
//   for (var j = 0; j < timeArray.length; j++) {
//     var liEl = document.createElement('li');
//     console.log('timeArray: ' + timeArray[j] + ' cookiesPerHour[j] : ' + this.cookiesPerHour[j]);
//     liEl.textContent = timeArray[j] + ': ' + this.cookiesPerHour[j];
//     ulEl.appendChild(liEl);
//   }
//
//   var liEl_two = document.createElement('li');
//   liEl_two.textContent = 'Total: ' + this.totalSales;
//   ulEl.appendChild(liEl_two);
// };
//
// var pikeStore = new Store('Pike Place', 17, 88, 5.2);//why an array at index 4?
// var seaTacStore = new Store('SeaTac', 6, 24, 1.2);
// var southCenter = new Store('Southcenter', 11, 38, 1.9);
// var belleSquare = new Store('Bellevue Square', 20, 48, 3.3);
// var alki = new Store('Alki', 3, 24, 2.6);
//
// pikeStore.render();
// seaTacStore.render();
// southCenter.render();
// belleSquare.render();
// alki.render();
