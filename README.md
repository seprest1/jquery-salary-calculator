# Project Name
Salary Calculator

## Description
Duration: 14 hours, over a weekend.

I was tasked with making a table, where the user could add a list of employees with the properties (first name, last name, ID, title and salary). Using Jquery, I developed functions to add the listed employee's salaries together and compare it to a set budget. Once the budget ceiling was reached, the display would turn red. In addition to the assignment, I spent some time making the tool look polished in CSS and crafting a reverse progress bar, tied directly to the incoming salary data. 

I was able to solve the problem of appending each employee onto the DOM by creating an employee object, with the keys being assigned to the inputs entered, and pushing it into an array. For updating the salary total, I looped through the array of employees and added their salary to the total. For the progress bar, I created two divs, one of which decreases in size, depending on the value of the total salaries. In order to delete the employees from the DOM, I assigned the button an ID corresponding with the employee ID, and utilized jQuery's $(this) function. 

# Screen Shot

This is the example we were given:
![Example](https://user-images.githubusercontent.com/105940054/187097916-1b51e700-8a9e-4acd-b31e-dc17b3395f8f.png)

And my product:
<img width="1440" alt="Screen Shot 2022-08-28 at 1 42 58 PM" src="https://user-images.githubusercontent.com/105940054/187097887-56202c42-4a8e-4aa6-b5bf-c0a803691770.png">

<img width="1440" alt="Screen Shot 2022-08-28 at 1 58 26 PM" src="https://user-images.githubusercontent.com/105940054/187097791-96b7ca10-fc1b-46a3-80d5-6bda37d62281.png">

##Unfinished Areas/Future Plans

I will attempt to update the total salary to reflect the new total, once an employee is removed.
I would also like the progress bar to reflect the new total. 
I would like to allow the user to press "Enter" and have the entries be submitted. 


