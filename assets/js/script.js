// **Global Variables**
var saveButton = document.querySelectorAll(".saveBtn");

// **Current Date - Today's Date: **
var todaysDate = moment().format("MMMM Do, YYYY");
console.log(todaysDate);
document.getElementById("currentDay").innerHTML = ("Today's Date: " + todaysDate);

// *
var getCurrentHour = moment().hour();
console.log(getCurrentHour);

for (i = 8; i < 18; i++) {
    var data = localStorage.getItem(i);
    var textArea = document.getElementById(i);
    textArea.value = data;
    if (getCurrentHour > i) {
        textArea.classList.add("past");
    } else if (getCurrentHour < i) {
        textArea.classList.add("future");
    } else {
        textArea.classList.add("present");
    }
};

var saveEvent = function (event) {
    var id = this.getAttribute("data-id");
    var textArea = document.getElementById(id);
    localStorage.setItem(id, textArea.value);
};

console.log(saveButton)

for (i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener("click", saveEvent)
};