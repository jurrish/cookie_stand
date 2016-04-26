var elPikePlace = document.getElementById('shop-one');

var timeArray = ['tenAm', 'elevenAm', 'twelvePm', 'onePm', 'twoPm', 'threePm', 'fourPm', 'fivePm'];

var pikePlace = {//naming my object
  minCustomers: 17,//this location has a min customer base of 17 at any given hour
  maxCustomers: 88,//this location has a max customer base of 88 at any given hour
  averageCookiePerSale: 5.2,//5.2 cookies will be bought at any given hour
  cookiesPerHour: [],//given a range between 17 and 88 customers, cookiesPerHour[i] will be bought
  totalSales: 0, // must add to this variable to update at the end. incremement at each hour increase in your time array
  personPerHour: function(min, max) {//creating a method to calculate a random amount of guests that will buy cookies
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  cookieSalePerHour: function() {//create a method to calculate a random amount of cookies sold per hour based on personPerHour random calculation
    for(var i = 0; i < timeArray.length; i++) {
      var cookies = Math.floor(this.averageCookiePerSale * this.personPerHour(this.minCustomers, this.maxCustomers));
      this.cookiesPerHour.push(cookies);
      this.totalSales += cookies;
      // var liEl = document.createElement('li');
      // liEl.textContent = timeArray[i];
      // totalSales++; outside the for loop?
      // pCreateEle = document.createElement('li');
      // pAppendChild = document.appendChild(pCreateEle);
    }
  },
  render: function() {
    
  }
};

// var rand = Math.floor(this.averageCookiePerSale * this.personPerHour(this.minCustomers, this.maxCustomers));
// this.cookiesPerHour.push(rand);
// this.totalSales += rand;
// for(time in timeArray) {
//   var liEl = document.createElement('li');
//   liEl.textContent = timeArray[time];
//   var nestedUlEl = document.createElement('ul');
//
//   for(week in weeks) {
//     var nestedLiEl = document.createElement('li');
//     nestedLiEl.textContent = weeks[week];
//     nestedUlEl.appendChild(nestedLiEl);
//   }
//
//   liEl.appendChild(nestedUlEl);
//   ulEl.appendChild(liEl);
// }
//
// sectionEl.appendChild(ulEl);
