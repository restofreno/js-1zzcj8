// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

var seconds = 0;
//var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds += 1;
    appDiv.innerText = "You have been here for " + seconds + " seconds.";
}

var cancel = setInterval(incrementSeconds, 1000);

setTimeout(x=>{
  clearInterval(cancel)
},5000)