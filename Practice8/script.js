const animals = [{
    name: 'Milo',
    type: 'cat',
    eyes: 2
},
{
    name: 'Peluza',
    type: 'cat',
    eyes: 2
},
{
    name: 'Yummy',
    type: 'cat',
    eyes: 2
},
{
    name: 'Doggy',
    type: 'dog',
    eyes: 2
},
{
    name: 'Sammy',
    type: 'dog',
    eyes: 2
}
];

// map() iterate through the array and return new array
// filter(): can apply conditional statement and return array of boolean values
// reduce(): get a consolidated value as an output
// find(): similar to filter but we get the whole value instead of boolean values


const higherOrderFunctionsModule = (function () {
const init = function () {
    //Get all animals (map)
    console.log('---');
    console.log('all animals (map)');
    console.log(getAnimals);
    //Get all animals (forEach)
    console.log('---');
    console.log('all animals (forEach)');
    console.log(getAnimals2);
    //Get only dogs
    console.log('---');
    console.log('only dogs');
    console.log(dogs);
    //Get only sammy
    console.log('---');
    console.log('only one item');
    console.log(sammy);
    //Get all the names together
    console.log('---');
    console.log('fusionAnimals');
    console.log(fusionedAnimals);
    //Check if some of the animals are cats
    console.log('---');
    console.log('check if there are cats');
    console.log(thereAreCats);
    //Check if all the items are dogs
    console.log('---');
    console.log('check if ALL are dogs');
    console.log(areAllDogs);
    //Get all dogs and fusion them
    console.log('---');
    console.log('Merge the dogs and fusion them');
    console.log(getDogsAndFusionThem);
};
//!Original Array will Not change
const getAnimals = animals.map(value => `${animals.name}`);

//!ForEach - Original array will change
const getAnimals2 = animals.forEach(animals => `${animals.name}`);

//!filter - check the animal type = 'Dogs'
const dogs = animals.filter(animal => animal.type === 'Dogs');

//!find
const sammy = animals.find(animal => animal.name === 'Sammy');

//!Reduce
const fusionedAnimals = animals.reduce((total, value) => total + value.name  + ' ', '');

//!some - looks for the truthy values 
const thereAreCats = animals.some(animals => animals.type === 'cat');

//! every - if any one value is false, It'll return false
const areAllDogs = animals.every(animals => animals.type === 'dogs');


//! Chain Methods 
//! Benefits 
const getDogsAndFusionThem = animals.filter(animal => animal.type === 'dog').reduce((total, animal) => total + animal.name + ' ', '');


init();
});

const result = higherOrderFunctionsModule;
result();

const num = [7, 10, 25, 2];
//!Sort function - Equivalent to Comparator
//*Ascending Order
const sorted = num.sort((f, s) => f - s);

const num2 = [7, 10, 25, 2];
//*Descending Order
const sorted2 = num2.sort((f, s) => s - f);

console.log(sorted);

console.log(sorted2);
