// 1: Set the text of the <h1> element
const text = document.querySelector('h1');
text.innerHTML = 'My Activities List';



// 2: Set the color of the <h1> to a different color
const color = document.querySelector('h1').style.color = "red";

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const description = document.getElementsByClassName('desc')[0];
description.innerHTML = "<h4>A list of <em>fun</em> things I like to do</h4>";

// 4: Set the class of the <ul> to 'list'
const list = document.querySelector('ul');
list.className = 'list';

// 5: Create a new list item and add it to the <ul>
let ul = document.getElementsByTagName('ul')[0];
let li = document.createElement('li');
ul.appendChild(li).innerHTML = '<li><input> Workout</li>'



// 6: Change all <input> elements from text fields to checkboxes
const allInputElements = document.querySelectorAll('input');
for (let i = 0; i < allInputElements.length; i++) {
    allInputElements[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const button = document.createElement('button');
button.innerHTML = "Delete";
const buttonPlace = document.getElementsByClassName('extra')[0];
buttonPlace.appendChild(button);


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const removeDiv = document.querySelector('extra');
button.addEventListener('click', () => {
    buttonPlace.remove();
});

//App Complete.