//               JavaScript Array Exam


// 1) Car Booking Data
// [id, brand, model, type, pricePerDay, available]


let carBooking =[
[1, 'Toyota', 'Corolla', 'Sedan',50,10],
[2, 'Honda', 'Civic', 'Sedan',55,8],
[3, 'Ford', 'Mustang', 'Sports Car' ,80,5],
[4,'Jeep', 'Wrangler', 'SUV' ,70,7],
[5, 'Nissan', 'Altima', 'Sedan', 45,12]
]


// 1) Print all car brand

carBooking.forEach(car=>{console.log(car[1]);
})




console.log('--------------------------------------------');


// 2) Print total number of cars available

const totalAvailable = carBooking.reduce((sum, car) => sum + car[5], 0);
console.log("Total number of cars available:", totalAvailable);

console.log('--------------------------------------------');

// 3) Print sedan car details

const sedanCars = carBooking.filter(car => car[3] == 'Sedan');
sedanCars.forEach(car => console.log("Sedan details:", car));


console.log('--------------------------------------------');

// 4) Print car with price per day greater than 60

expensiveCars = carBooking.filter(car=> car[4] > 60)
expensiveCars.forEach(car=>console.log('expensivecar',car))

console.log('--------------------------------------------');

// 5) Print details of jeep wrangler

jeepwrangler = carBooking.find(car=>car[1]=='Jeep'&&car[2]=='Wrangler')
console.log(jeepwrangler);

console.log('--------------------------------------------');

// 6) Arrange cars based on the descending order of price per day

dec = carBooking.sort((a1,a2)=>a2[4]-a1[4])
console.log(dec);

console.log('--------------------------------------------');

// 7) Sort car based on ascending order of available cars.

ase =  carBooking.sort((a1,a2)=>a1[5]-a2[5])
console.log(ase);

console.log('--------------------------------------------');


// 8) Find the car with highest availability

high = carBooking.reduce((a1,a2)=>a1[5]>a2[5]?a1:a2)
console.log(high);

console.log('--------------------------------------------');


// 9) Find the revenue if all the cars are rented for a day

revenue = carBooking.reduce((a,b)=>a+b[4]* b[5],0)
console.log(revenue);


console.log('--------------------------------------------');

// 10) Count the number of sedan car available

const totalSedanAvailable = sedanCars.reduce((sum, car) => sum + car[5], 0);
console.log("Total number of sedan cars available:", totalSedanAvailable);


console.log('--------------------------------------------');

// 11) Find the car with lowest availability

low =  carBooking.reduce((low,car)=>low[5]<car[5]?low:car)
console.log(low);

console.log('--------------------------------------------');

// 12) Print all car models

carBooking.forEach(car =>{console.log(car[2]);})

console.log('--------------------------------------------');


// 13) Print total number of cars available

console.log("Total number of cars available:", totalAvailable);
console.log('--------------------------------------------');

// 14) Find the details of the car with type - mustang

const mustang = carBooking.find(car => car[2] === 'Mustang');
console.log(mustang);


console.log('--------------------------------------------');

// 15) Check if there is any car with price per day exactly 55

const isPrice55Available = carBooking.some(car => car[4] === 55);
console.log(isPrice55Available?'yes':'no');

console.log('--------------------------------------------');



const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
// 1) find the sum of all numbers in the nested array.

sum = data.flat().reduce((a,b)=>a+b)
console.log('Sum =' , sum);


console.log('--------------------------------------------');

// 2) find the largest and the smallest number

largest = data.flat().reduce((a,b)=>a>b?a:b)
console.log('largest = ', largest)

console.log('--------------------------------------------');

smallest = data.flat().reduce((a,b)=>a<b?a:b)
console.log('smallest = ', smallest)

console.log('--------------------------------------------');

// 3) find the average of all numbers in the given array.

const average = sum / data.flat().length;
console.log('Average =', average);


console.log('--------------------------------------------');

// 3) string
// 1)Write a JavaScript function that checks whether a string ends with a specified suffix.

string = 'Hello'
string.endsWith('o')?console.log('Yes'):console.log('No');

console.log('--------------------------------------------');

// 2)Write a JavaScript program to find the most frequent character in a given string.



console.log('--------------------------------------------');

// 3) Write a JavaScript function to split a string and convert it into an array of words.

 string = 'Hello World';
 array = string.split(' ');
console.log(array);

console.log('--------------------------------------------');