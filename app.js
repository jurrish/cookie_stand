// var elPikePlace = document.getElementById('store_data');

var timeArray = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

function Store(name, minCustomers, maxCustomers, averageCookiePerSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookiePerSale = averageCookiePerSale;
  this.cookiesPerHour = [];
  this.totalSales = 0;
}

Store.prototype.personPerHour = function(min, max) {//creating a method to calculate a random amount of guests that will buy cookies
  return Math.random() * (max - min + 1) + min;
};

Store.prototype.cookieSalePerHour = function() {//create a method to calculate a random amount of cookies sold per hour based on personPerHour random calculation
  for(var i = 0; i < timeArray.length; i++) {
    var cookies = Math.floor(this.averageCookiePerSale * this.personPerHour(this.minCustomers, this.maxCustomers));
    this.cookiesPerHour.push(cookies);
    console.log(this.cookiesPerHour);
    this.totalSales += cookies;
  };
};

Store.prototype.render = function() {
  this.cookieSalePerHour();

  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode(this.name));
  var sectionEl = document.getElementById('store_data').appendChild(ulEl);//we are assigning an element to a variable, also appending the ul to the section of store data, but just the section is being assigned a value.

  for (var j = 0; j < timeArray.length; j++) {
    var liEl = document.createElement('li');
    console.log('timeArray: ' + timeArray[j] + ' cookiesPerHour[j] : ' + this.cookiesPerHour[j]);
    liEl.textContent = timeArray[j] + ': ' + this.cookiesPerHour[j];
    ulEl.appendChild(liEl);
  }

  var liEl_two = document.createElement('li');
  liEl_two.textContent = 'Total: ' + this.totalSales;
  ulEl.appendChild(liEl_two);
};

var pikeStore = new Store('Pike Place', 17, 88, 5.2);//why an array at index 4?
var seaTacStore = new Store('SeaTac', 6, 24, 1.2);
var southCenter = new Store('Southcenter', 11, 38, 1.9);
var belleSquare = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

pikeStore.render();
seaTacStore.render();
southCenter.render();
belleSquare.render();
alki.render();
