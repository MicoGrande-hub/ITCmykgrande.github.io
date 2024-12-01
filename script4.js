let payroll = [];

function updateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    let totalEmployees = payroll.length;

    payroll.forEach((employee, index) => {
        const grossPay = employee.daysWorked * employee.dailyRate;
        const netPay = grossPay - employee.deduction;
        const row = `<tr>
                        <td>${index + 1}</td>
                        <td>${employee.name}</td>
                        <td>${employee.daysWorked}</td>
                        <td>${employee.dailyRate.toFixed(2)}</td>
                        <td>${grossPay.toFixed(2)}</td>
                        <td>${employee.deduction.toFixed(2)}</td>
                        <td>${netPay.toFixed(2)}</td>
                      </tr>`;
        tableBody.innerHTML += row;
    });

    document.getElementById('totalEmployees').innerText = totalEmployees;
}

document.getElementById('btnAddEmployee').addEventListener('click', () => {
    const name = document.getElementById('employeeName').value;
    const daysWorked = parseFloat(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deduction = parseFloat(document.getElementById('deduction').value);

    if (!name || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deduction)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    payroll.push({ name, daysWorked, dailyRate, deduction });
    updateTable();

    document.getElementById('employeeName').value = '';
    document.getElementById('daysWorked').value = '';
    document.getElementById('dailyRate').value = '';
    document.getElementById('deduction').value = '';
});

// Trigger the confirmation dialog before deleting an employee
document.getElementById('btnDeleteEmployee').addEventListener('click', () => {
    const line = parseInt(document.getElementById('deleteLine').value) - 1;
    
    if (isNaN(line) || line < 0 || line >= payroll.length) {
        alert('Invalid line number.');
        return;
    }

    // Show the first confirmation dialog
    showConfirmationDialog('Are you sure you want to delete this employee?', () => {
        // Show the second confirmation dialog
        dlgAreYouSure.showModal();
        currentAction = () => {
            payroll.splice(line, 1);
            updateTable();
            document.getElementById('deleteLine').value = '';
        };
    });
});

// Trigger the confirmation dialog before clearing the list
document.getElementById('btnClearList').addEventListener('click', () => {
    // Show the first confirmation dialog
    showConfirmationDialog('Are you sure you want to clear the payroll list?', () => {
        // Show the second confirmation dialog
        dlgAreYouSure.showModal();
        currentAction = () => {
            payroll = [];
            updateTable();
        };
    });
});

// Show the first confirmation dialog
const dlgConfirm = document.getElementById('dlgConfirm');
const btnConfirm = document.getElementById('btnConfirm');
const btnCancel = document.getElementById('btnCancel');
let currentAction = null;

const showConfirmationDialog = (message, action) => {
    document.getElementById('dlgmsg').innerText = message;
    currentAction = action;
    dlgConfirm.showModal();
};

// When the first dialog is closed, show the second dialog
dlgConfirm.addEventListener('close', () => {
    if (dlgConfirm.returnValue === 'confirm' && typeof currentAction === 'function') {
        // The first dialog is confirmed, proceed to the second
        dlgAreYouSure.showModal();
    }
});

// Show the second confirmation dialog after the first one
const dlgAreYouSure = document.getElementById('dlgAreYouSure');
const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');

// When the second dialog is closed, perform the action if confirmed
dlgAreYouSure.addEventListener('close', () => {
    if (dlgAreYouSure.returnValue === 'yes' && typeof currentAction === 'function') {
        currentAction();
    }
});