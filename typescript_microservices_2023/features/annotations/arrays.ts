const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values

//carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// Flexible types 

const importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-11-11');
