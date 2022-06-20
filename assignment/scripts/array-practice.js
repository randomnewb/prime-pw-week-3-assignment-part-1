console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods

let foodArray = ['pizza','fried chicken','ramen'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above

console.log('Some favorite foods are: ', foodArray);

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array

console.log('The number of foods in the array is:', foodArray.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 

console.log('The second animal is a(n)', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 

console.log('The last animal is a(n)', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item

console.log('The last animal is a(n)', animalArray[animalArray.length - 1]);

// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array

foodArray.push('pasta');
console.log('Added a food to the end of the array,', foodArray);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array

let removedFood = foodArray.pop();
console.log('The removed last food was', removedFood);
console.log('The foods are now', foodArray);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array

foodArray.unshift('hoagie');
//It appears that using ${variable} displays the variable as string, you must use the "grave" symbol though (`) though
console.log(`added a food at the beginning to: ${foodArray}`);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array

removedFood = foodArray.shift();
console.log('The removed first food is', removedFood);
console.log('The foods are now', foodArray);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

foodArray[1] = 'hoagie';
console.log('The second item in the array has been replaced and the array is now', foodArray);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

//First, sort the food array in alphabetical order
foodArray.sort();
console.log(foodArray);

//Then, reverse the items in the array
foodArray.reverse();
console.log('The foods in reverse alphabetical order are',foodArray);


// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

console.log('The foods are',foodArray.join(' and '));

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

//array.concat creates a new array that is a combination of two others

foodAnimalsArray = foodArray.concat(animalArray);
console.log(foodAnimalsArray);