


//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance





//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myArray = [1,2,3,4,5,6,7,8,9,10];
myArray.slice(4);



//3. Delete the last number in the array that you created above.

myArray.splice(9);



//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:

// Printing the modified string
document.write(newString);

function strawberryToBanana(textbox) {

textbox = textbox.replace(/Strawberry/g, 'Banana');
textbox = textbox.replace(/strawberry/g, 'banana');
textbox = textbox.replace(/Strawberries/g, 'Bananas');
textbox = textbox.replace(/strawberries/g, 'bananas');
return textbox;
}

var replacedTextBox = strawberryToBanana("Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white
blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave.
Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around.
There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.");

/*

Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white
blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave.
Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around.
There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

*/



//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all
//   elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var footballClubNames ["Basildon", "Reading", "Sunderland", "Everton"];

//   "Toyota" "Volkswagen" "Ford" "BMW"

console.log(  );



//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var threePeopleObjectArray = [
{name : "Max"},
{name : "Carl" },
{name : "Luke" }
];



//7. Create a simple function that logs the date.

function currentDate() {
  var todayDate = new Date;
  console.log(todayDate);
}

currentDate();
