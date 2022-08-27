$(document).ready(clickHandler);

function clickHandler(){
    $(`#submitButton`).on(`click`, addEmployee); //when button is clicked, add the employee
}

let employees = [];

function addEmployee(){
    let employeeData = {  //change values of employeeData object to input values
        firstName: $(`#firstNameInput`).val(),
        lastName: $(`#lastNameInput`).val(),
        employeeId: $(`#employeeIdInput`).val(),
        title: $(`#titleInput`).val(),
        salary: Number($(`#salaryInput`).val())
    }
    employees.push(employeeData); //add employeeData object to array of employees
    console.log(employees); ////////////////////////////////////TESTING

    $(`.employeeTable`).append(`  
    <tr>
        <td>${employeeData.firstName}</td>
        <td>${employeeData.lastName}</td>
        <td>${employeeData.employeeId}</td>
        <td>${employeeData.title}</td>
        <td>${employeeData.salary}</td>
        <td>Delete</td>
    </tr>`);    //add new employee data to table

    $(`.inputs`).val('');  //empty imputs
    calculateCosts();
}

function calculateCosts(){
    $(`#monthlyCosts`).empty();
    let totalCost = 0;
    for (employee of employees){
        totalCost += employee.salary;
    }
    $(`#monthlyCosts`).append(`${totalCost}`);
    console.log(totalCost);
}