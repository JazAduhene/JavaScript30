const dogs = [{ name: 'Snickers', age: 2, owner: 'Jaz'}, { name: 'Hugo', age: 8, owner: 'Rachel'}];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', 'funny');

// Styled
console.log('%c I am slightly taller than the rest', 'font-size: 30px; background: blue');

// warning!
console.warn('Warning, do not enter!');

// Error :|
console.error('You have encountered a problem!');

// Info
console.info('Hello, my name is Jaz Aduhene!');

// Testing
console.assert(1 === 2, 'You did not select the right element!'); // prints message if the numbers are not equal.

const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!'); // To test 

// clearing
console.clear(); // Clears the console

// Viewing DOM Elements
console.log(p); 
console.dir(p); // Opens up in a dropdown to take a look at the ClassList

console.clear();

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`This is ${dog.name} and he is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old in human years`);
  console.groupEnd(`${dog.name}`); // Prints the data in console in a group. Each dog name has its assigned infromation
  console.log(`${dog.name} belongs to ${dog.owner}`);
});

// counting
console.count('Jaz'); // Tells me how many times I have counted a speicif string.
console.count('pet');
console.count('Aduhene');
console.count('pet');

// timing
console.time('fetching data'); // To see how long something takes. 
fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
.then(data => data.json())
.then(data => {
  console.timeEnd('fetching data');
  console.log(data);
});

// table
console.table(dogs);