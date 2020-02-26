// 1: Set the text of the <h1> element
const text = document.querySelector('h1');
text.innerHTML = 'Soundoff Signal';

// 2: Set the color of the <h1> to a different color
const color = document.querySelector('h1').style.color = "red";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const description = document.getElementsByClassName('desc')[0];
description.innerHTML = "<h4>Place a Quote today</h4>";

// 4: Set the class of the <ul> to 'list'
const list = document.querySelector('ul');
list.className = 'list';

// 5: Create a new list item and add it to the <ul>
let ul = document.getElementsByTagName('ul')[0];
let li = document.createElement('li')
ul.appendChild(li).innerText ='Programmer';



// 6: Change all <input> elements from text fields to checkboxes


// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
