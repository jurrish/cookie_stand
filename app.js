// var elPikePlace = document.getElementById('store_data');

var timeArray = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var pikePlace = {//naming my object
  name: 'Pike Place',
  minCustomers: 17,//this location has a min customer base of 17 at any given hour
  maxCustomers: 88,//this location has a max customer base of 88 at any given hour
  averageCookiePerSale: 5.2,//5.2 cookies will be bought at any given hour
  cookiesPerHour: [],//given a range between 17 and 88 customers, cookiesPerHour[i] will be bought
  totalSales: 0, // must add to this variable to update at the end. incremement at each hour increase in your time array
  personPerHour: function(min, max) {//creating a method to calculate a random amount of guests that will buy cookies
    return Math.random() * (max - min + 1) + min;
  },
  cookieSalePerHour: function() {//create a method to calculate a random amount of cookies sold per hour based on personPerHour random calculation
    for(var i = 0; i < timeArray.length; i++) {
      var cookies = Math.floor(this.averageCookiePerSale * this.personPerHour(this.minCustomers, this.maxCustomers));
      this.cookiesPerHour.push(cookies);
      this.totalSales += cookies;

//cookieSalePerHour: function(arr,totals,avg,rand,hour) {
  //for(var j = 0, j < arr.length, j++)
  //var ran = Math.floor(rand() * avg);
  //arr.push(ran);
  //totals += ran;
// }
    }
  },
  render: function() {
    this.cookieSalePerHour();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('store_data').appendChild(ulEl);

    for (var j = 0; j < timeArray.length; j++) {
      var liEl = document.createElement('li');
      console.log('timeArray: ' + timeArray[j] + ' cookiesPerHour[j] : ' + this.cookiesPerHour[j]);
      liEl.textContent = timeArray[j] + ': ' + this.cookiesPerHour[j];
      ulEl.appendChild(liEl);
    }

    var liEl_two = document.createElement('li');
    liEl_two.textContent = 'Total: ' + this.totalSales;
    ulEl.appendChild(liEl_two);
  }
};
pikePlace.render();

var seaTac = {//naming my object
  name: 'SeaTac Airport',
  minCustomers: 6,//this location has a min customer base of 17 at any given hour
  maxCustomers: 24,//this location has a max customer base of 88 at any given hour
  averageCookiePerSale: 1.2,//5.2 cookies will be bought at any given hour
  cookiesPerHour: [],//given a range between 17 and 88 customers, cookiesPerHour[i] will be bought
  totalSales: 0, // must add to this variable to update at the end. incremement at each hour increase in your time array
  personPerHour: function(min, max) {//creating a method to calculate a random amount of guests that will buy cookies
    return Math.random() * (max - min + 1) + min;
  },
  cookieSalePerHour: function() {//create a method to calculate a random amount of cookies sold per hour based on personPerHour random calculation
    for(var i = 0; i < timeArray.length; i++) {
      var cookies = Math.floor(this.averageCookiePerSale * this.personPerHour(this.minCustomers, this.maxCustomers));
      this.cookiesPerHour.push(cookies);
      this.totalSales += cookies;

//cookieSalePerHour: function(arr,totals,avg,rand,hour) {
  //for(var j = 0, j < arr.length, j++)
  //var ran = Math.floor(rand() * avg);
  //arr.push(ran);
  //totals += ran;
// }
    }
  },
  render: function() {
    this.cookieSalePerHour();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('store_data').appendChild(ulEl);

    for (var j = 0; j < timeArray.length; j++) {
      var liEl = document.createElement('li');
      console.log('timeArray: ' + timeArray[j] + ' cookiesPerHour[j] : ' + this.cookiesPerHour[j]);
      liEl.textContent = timeArray[j] + ': ' + this.cookiesPerHour[j];
      ulEl.appendChild(liEl);
    }

    var liEl_two = document.createElement('li');
    liEl_two.textContent = 'Total: ' + this.totalSales;
    ulEl.appendChild(liEl_two);
  }
};
seaTac.render();

var southcenter = {//naming my object
  name: 'Southcenter',
  minCustomers: 11,//this location has a min customer base of 17 at any given hour
  maxCustomers: 38,//this location has a max customer base of 88 at any given hour
  averageCookiePerSale: 1.9,//5.2 cookies will be bought at any given hour
  cookiesPerHour: [],//given a range between 17 and 88 customers, cookiesPerHour[i] will be bought
  totalSales: 0, // must add to this variable to update at the end. incremement at each hour increase in your time array
  personPerHour: function(min, max) {//creating a method to calculate a random amount of guests that will buy cookies
    return Math.random() * (max - min + 1) + min;
  },
  cookieSalePerHour: function() {//create a method to calculate a random amount of cookies sold per hour based on personPerHour random calculation
    for(var i = 0; i < timeArray.length; i++) {
      var cookies = Math.floor(this.averageCookiePerSale * this.personPerHour(this.minCustomers, this.maxCustomers));
      this.cookiesPerHour.push(cookies);
      this.totalSales += cookies;

//cookieSalePerHour: function(arr,totals,avg,rand,hour) {
  //for(var j = 0, j < arr.length, j++)
  //var ran = Math.floor(rand() * avg);
  //arr.push(ran);
  //totals += ran;
// }
    }
  },
  render: function() {
    this.cookieSalePerHour();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('store_data').appendChild(ulEl);

    for (var j = 0; j < timeArray.length; j++) {
      var liEl = document.createElement('li');
      console.log('timeArray: ' + timeArray[j] + ' cookiesPerHour[j] : ' + this.cookiesPerHour[j]);
      liEl.textContent = timeArray[j] + ': ' + this.cookiesPerHour[j];
      ulEl.appendChild(liEl);
    }

    var liEl_two = document.createElement('li');
    liEl_two.textContent = 'Total: ' + this.totalSales;
    ulEl.appendChild(liEl_two);
  }
};
southcenter.render();

var belleSquare = {//naming my object
  name: 'Bellevue Square',
  minCustomers: 20,//this location has a min customer base of 17 at any given hour
  maxCustomers: 48,//this location has a max customer base of 88 at any given hour
  averageCookiePerSale: 3.3,//5.2 cookies will be bought at any given hour
  cookiesPerHour: [],//given a range between 17 and 88 customers, cookiesPerHour[i] will be bought
  totalSales: 0, // must add to this variable to update at the end. incremement at each hour increase in your time array
  personPerHour: function(min, max) {//creating a method to calculate a random amount of guests that will buy cookies
    return Math.random() * (max - min + 1) + min;
  },
  cookieSalePerHour: function() {//create a method to calculate a random amount of cookies sold per hour based on personPerHour random calculation
    for(var i = 0; i < timeArray.length; i++) {
      var cookies = Math.floor(this.averageCookiePerSale * this.personPerHour(this.minCustomers, this.maxCustomers));
      this.cookiesPerHour.push(cookies);
      this.totalSales += cookies;

//cookieSalePerHour: function(arr,totals,avg,rand,hour) {
  //for(var j = 0, j < arr.length, j++)
  //var ran = Math.floor(rand() * avg);
  //arr.push(ran);
  //totals += ran;
// }
    }
  },
  render: function() {
    this.cookieSalePerHour();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('store_data').appendChild(ulEl);

    for (var j = 0; j < timeArray.length; j++) {
      var liEl = document.createElement('li');
      console.log('timeArray: ' + timeArray[j] + ' cookiesPerHour[j] : ' + this.cookiesPerHour[j]);
      liEl.textContent = timeArray[j] + ': ' + this.cookiesPerHour[j];
      ulEl.appendChild(liEl);
    }

    var liEl_two = document.createElement('li');
    liEl_two.textContent = 'Total: ' + this.totalSales;
    ulEl.appendChild(liEl_two);
  }
};
belleSquare.render();

var alki = {//naming my object
  name: 'Alki',
  minCustomers: 3,//this location has a min customer base of 17 at any given hour
  maxCustomers: 24,//this location has a max customer base of 88 at any given hour
  averageCookiePerSale: 2.6,//5.2 cookies will be bought at any given hour
  cookiesPerHour: [],//given a range between 17 and 88 customers, cookiesPerHour[i] will be bought
  totalSales: 0, // must add to this variable to update at the end. incremement at each hour increase in your time array
  personPerHour: function(min, max) {//creating a method to calculate a random amount of guests that will buy cookies
    return Math.random() * (max - min + 1) + min;
  },
  cookieSalePerHour: function() {//create a method to calculate a random amount of cookies sold per hour based on personPerHour random calculation
    for(var i = 0; i < timeArray.length; i++) {
      var cookies = Math.floor(this.averageCookiePerSale * this.personPerHour(this.minCustomers, this.maxCustomers));
      this.cookiesPerHour.push(cookies);
      this.totalSales += cookies;

//cookieSalePerHour: function(arr,totals,avg,rand,hour) {
  //for(var j = 0, j < arr.length, j++)
  //var ran = Math.floor(rand() * avg);
  //arr.push(ran);
  //totals += ran;
// }
    }
  },
  render: function() {
    this.cookieSalePerHour();

    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    var sectionEl = document.getElementById('store_data').appendChild(ulEl);

    for (var j = 0; j < timeArray.length; j++) {
      var liEl = document.createElement('li');
      console.log('timeArray: ' + timeArray[j] + ' cookiesPerHour[j] : ' + this.cookiesPerHour[j]);
      liEl.textContent = timeArray[j] + ': ' + this.cookiesPerHour[j];
      ulEl.appendChild(liEl);
    }

    var liEl_two = document.createElement('li');
    liEl_two.textContent = 'Total: ' + this.totalSales;
    ulEl.appendChild(liEl_two);
  }
};
alki.render();
