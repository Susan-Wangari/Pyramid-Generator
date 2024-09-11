const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
//used to create a loop to count the number of characters in the pyramid
//repeat helps you show/log the same string the number of times in the brackets e.g 3 times or in our case i times
for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i));
}
//inverts the pyramid
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    //reverts your row back to its original state
    rows.push(padRow(i, count));
  }
}
