$(document).ready(clickHandler);

function clickHandler(){
    $(`#submitButton`).on(`click`, addEmployee); //when button is clicked, add the employee
    $(".employeeTable").on("click", ".deleteButton", $(`#tableSalary`), deleteEmployee); //when button is clicked, delete employee
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
    
    $(`.employeeTable`).append(`
    <tr id= "${employeeData.employeeId}">
        <td>${employeeData.firstName}</td>
        <td>${employeeData.lastName}</td>
        <td>${employeeData.employeeId}</td>
        <td>${employeeData.title}</td>
        <td class="employeeSalary" >${employeeData.salary}</td>
        <td><button class="deleteButton">X</button></td>
    </tr>`);  //add new employee data to table

    $(`.employeeSalary`).data(`salary ${employeeData.employeeId}`, $(`#salaryInput`).val());
    console.log(`Employee Salary:`, $(`.employeeSalary`).data());

    $(`.inputs`).val('');  //empty imputs
    calculateCosts();
}

console.log(`Employee Salary:`, $(`.employeeSalary`).data());

function calculateCosts(){
    $(`#monthlyCosts`).empty(); //empty out monthly costs
    let totalCost = 0;
    for (employee of employeeArray){
        totalCost += employee.salary; //loop through to add all employees' salaries
    }  //end loop
    if (totalCost > 20000){
        $(`#monthlyBudget`).css("background-color", "red"); //if salary cost exceeds budget, turn red
    }
    $(`#monthlyCosts`).append(`${totalCost}`); //add new monthly total to DOM
}

function deleteEmployee(){
    $(this).closest("tr").remove();
 }

 