const character = "#";
const count = 8;
const rows = [];

//used to create a loop to count the number of characters in the pyramid
//repeat helps you show/log the same string the number of times in the brackets e.g 3 times or in our case i times
for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i));
}
