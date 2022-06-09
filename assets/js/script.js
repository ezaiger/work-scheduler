// current day is displayed at the top of the calendar
const todaysDate = moment("currentDay")
    

// in the container, make three columns and 10 rows

// first column will contain time (standard business hours 8 AM - 5 PM)

// second column will contain a timeblocks where you can enter an event

// third column will be the save button

// each row will correspond with a time
/* **Code from Office Hours held on 06/04/22 - storing for reference**
const nineAm = new Date('June 4, 2022 09:00:00');
const today = new Date();


const nineAmEl = document.createElement('div');
nineAmEl.style.width = '50px';
nineAmEl.style.height = '50px';

if(nineAm < Date.now()) {
    nineAmEl.style.backgroundColor = 'red';
} else {
    nineAmEl.style.backgroundColor = 'green';
}


document.body.append(nineAmEl); */

// past time blocks = red, present timeblocks = grey, future timeblock = green

// the text for the event is saved in local storage

// when page refreshes, events are still available