$(document).ready(clickHandler);

function clickHandler(){
    $(`#submitButton`).on(`click`, addEmployee); //when button is clicked, add the employee
    $(".employeeTable").on("click", ".deleteButton", deleteEmployee); //when button is clicked, delete employee
}

let employeeArray = [];

function addEmployee(){
    let employeeData = {  //change values of employeeData object to input values
        firstName: $(`#firstNameInput`).val(),
        lastName: $(`#lastNameInput`).val(),
        employeeId: $(`#employeeIdInput`).val(),
        title: $(`#titleInput`).val(),
        salary: Number($(`#salaryInput`).val()),
    }
    employeeArray.push(employeeData); //add employeeData object to array of employees

    let salaryString = employeeData.salary.toLocaleString("en-US"); //adds commas
 
    $(`.employeeTable`).append(`
    <tr id= "${employeeData.employeeId}">
        <td>${employeeData.firstName}</td>
        <td>${employeeData.lastName}</td>
        <td>${employeeData.employeeId}</td>
        <td>${employeeData.title}</td>
        <td>${salaryString}</td>
        <td><button class="deleteButton">X</button></td>
    </tr>`);  //add new employee data to table

    $(`.inputs`).val('');  //empty imputs
    calculateCosts();
}

function calculateCosts(){
    $(`#monthlyCosts`).empty(); //empty out monthly costs
    let totalCost = 0;
    for (employee of employeeArray){
        totalCost += employee.salary; //loop through to add all employees' salaries
    }  //end loop
    $(`#monthlyCosts`).append(`${totalCost.toLocaleString("en-US")}`); //add new monthly total to DOM, added commas
    if (totalCost > 20000){
        $(`#monthlyBudget`).css("color", "#dd1c1a"); //if salary cost exceeds budget, turn red
        $(`#dollarSign`).css("color", "#dd1c1a"); //dollar sign turns red
        $(`.bar`).css("width", "2%");
    }
 
    if (totalCost >= 0 && totalCost < 5000){
        $(`.bar`).css("width", "100%");
            }
    if (totalCost >= 5000 && totalCost < 10000){
        $(`.bar`).css("width", "75%");
            }
    if (totalCost >= 10000 && totalCost < 15000){
        $(`.bar`).css("width", "50%");
            }
    if (totalCost >= 15000 && totalCost < 17000){
        $(`.bar`).css("width", "25%");
            }
    if (totalCost >= 17000 && totalCost < 18000){
        $(`.bar`).css("width", "17.5%");
            }
    if (totalCost >= 18000 && totalCost < 19000){
        $(`.bar`).css("width", "10%");
             }
    if (totalCost >= 19000 && totalCost < 20000){
        $(`.bar`).css("width", "5%");
             }
}

function deleteEmployee(){
    $(this).closest("tr").remove();
    console.log($(this));
 }
