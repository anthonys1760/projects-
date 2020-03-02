const button = document.querySelector('button');
const body = document.querySelector('body');
let isPurple = false;

/* button.addEventListener('click', function() {
    if (isPurple) {
        document.querySelector('body').style.backgroundColor = "white";
    } else {
        document.querySelector('body').style.backgroundColor = "purple";
    }
    isPurple = !isPurple;
});
*/

button.addEventListener('click', function() {
    document.body.classList.toggle('purple');

});
