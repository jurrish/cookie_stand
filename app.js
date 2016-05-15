var timeArray = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var cookieStores = [];

function Store(name, minCustomers, maxCustomers, averageCookiePerSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookiePerSale = averageCookiePerSale;
  this.cookiesPerHour = [];
  this.totalSales = 0;
  cookieStores.push(this);
}

Store.prototype.personPerHour = function(min, max) {
  return Math.random() * (max - min) + min;
};

Store.prototype.cookieSalePerHour = function() {
  for(var i = 0; i < timeArray.length; i++) {
    var cookies = Math.floor(this.averageCookiePerSale * this.personPerHour(this.minCustomers, this.maxCustomers));
    this.cookiesPerHour.push(cookies);
    this.totalSales += cookies;
  }
};

var tableEl = document.getElementById('stores');

Store.render = function() {
  var hoursRow = document.createElement('tr');
  var emptyCell = document.createElement('th');
  hoursRow.appendChild(emptyCell);
  for (var i = 0; i < timeArray.length; i++) {
    var tableHeader = document.createElement('th');
    tableHeader.textContent = timeArray[i];
    hoursRow.appendChild(tableHeader);
  }
  var totalHeader = document.createElement('th');
  totalHeader.textContent = 'Total';
  hoursRow.appendChild(totalHeader);
  tableEl.appendChild(hoursRow);

  for(obj in cookieStores) {
    cookieStores[obj].cookieSalePerHour();
    var tableRow = document.createElement('tr');
    var nameRow = document.createElement('td');
    nameRow.textContent = cookieStores[obj].name;
    tableRow.appendChild(nameRow);

    for (hour in timeArray) {
      var tableData = document.createElement('td');
      tableData.textContent = cookieStores[obj].cookiesPerHour[hour];
      tableRow.appendChild(tableData);
    }
    var totalsData = document.createElement('td');
    totalsData.textContent = cookieStores[obj].totalSales;
    tableRow.appendChild(totalsData);
    tableEl.appendChild(tableRow);
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
  var newStoreName = event.target.newstorelocation.value;
  var newMinCust = parseInt(event.target.min.value);
  var newMaxCust = parseInt(event.target.max.value);
  var newAvgCustSale = parseFloat(event.target.avg.value);
  var newShop = new Store(newStoreName, newMinCust, newMaxCust, newAvgCustSale);
  newShop.cookieSalePerHour();
  console.log(newShop);
  Store.renderNew(newShop);
});
