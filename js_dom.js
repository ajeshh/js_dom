/* 
1.) When someone clicks the #colorDiv change its background color to blue.

2.) When someone clicks the #toggleMe toggle the background color between white and red.

3.) When somone clicks the #countMe div display the number of times it has been clicked.

4.) Attach a click listener to #greetingDiv and grab the #nameField from the input tag. Use the #nameFieldto display Hello, with the entered name.
*/

var el = document.getElementById("colorDiv");
      el.onclick = function(event){
        this.style.backgroundColor = "blue";
      };


var el2 = document.getElementById("toggleMe");
var red = true;
  el2.onclick = function(event) {
    if(red) {
        el2.style.backgroundColor = "white";
    } else {
        el2.style.backgroundColor = "red";
    }
  red = !red;
};


var el3 = document.getElementById("countMe");
var clicks = 0;

el3.onclick = function(event) {
    clicks +=1;
    document.getElementById("countMe").innerHTML = "Clicks = " + clicks;
};


var el4 = document.getElementById("greetingDiv");
el.addEventListener("click", function(event)
