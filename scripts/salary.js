$(document).ready(clickHandler);

function clickHandler(){
    $(`#submitButton`).on(`click`, addEmployee);
}

let employeeData = {
    firstName: $(`firstNameInput`).val(),
    lastName: $(`lastNameInput`).val(),
    employeeId: $(`employeeIdInput`).val(),
    title: $(`titleInput`).val(),
    salary: $(`salaryInput`).val()
}

function addEmployee(){
    $(`.employeeTable`).append(`
    <tr>
        <td>${employeeData.firstName}</td>
        <td>${employeeData.lastName}</td>
        <td>${employeeData.employeeId}</td>
        <td>${employeeData.title}</td>
        <td>${employeeData.salary}</td>
        <td>Delete</td>
    </tr>`);
    console.log(`hi`);
}