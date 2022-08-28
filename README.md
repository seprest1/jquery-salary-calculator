# Project Name
Salary Calculator

## Description
Duration: 14 hours, over a weekend.

I was tasked with making a table, where the user could add a list of employees with the properties (first name, last name, ID, title and salary). Using Jquery, I developed functions to add the listed employee's salaries together and compare it to a set budget. Once the budget ceiling was reached, the display would turn red. In addition to the assignment, I spent some time making the tool look polished in CSS and crafting a reverse progress bar, tied directly to the incoming salary data. 

I was able to solve the problem of appending each employee onto the DOM by creating an employee object, with the keys being assigned to the inputs entered, and pushing it into an array. For updating the salary total, I looped through the array of employees and added their salary to the total. For the progress bar, I created two divs, one of which decreases in size, depending on the value of the total salaries. In order to delete the employees from the DOM, I assigned the button an ID corresponding with the employee ID, and utilized jQuery's $(this) function. 

# Screen Shot

This is the example we were given:
<img src="/images/example.png"/>

And my product:
<img src="/images/screenshot1.png"/>
<img src="/images/screenshot2.png"/>

##Unfinished Areas/Future Plans

I will attempt to update the total salary to reflect the new total, once an employee is removed.
I would also like the progress bar to reflect the new total. 
I would like to allow the user to press "Enter" and have the entries be submitted. 


