# Work Day Scheduler Starter Code

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

Given the code provided, the first thing I worked on was adding the current date and time to the top of the page.  This turned out to be fairly simple given the info provided in class.  I simply used the moment.js format of 'LLLL' to auto fill the current date and time.

<img src="/assets/images/Screenshot%20(27).png" />

After that, it was time to start adding to the js file to build the individual time slots for the work day.  It took a lot of googling to figure out how to add
the styling to the elements directly in the js file.  I did tweak some of the css elements to get the final look I wanted beacuse i could figure out all of the 
necessary additions to the js file to get it exactly right.

<img src="/assets/images/Screenshot%20(28).png" />

The last thing I did was figure out the localstorage and how I wanted it to work.  I tried to add an option to delete saved tasks with an additional button, but
after many trials and error it wasn't functional so I ended up removing it from the final application.  I did get the local storage configured to work with the click of the save button an each individual line.

<img src="/assets/images/Screenshot%20(29).png" />