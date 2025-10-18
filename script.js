class Funcionario {
    constructor(id, name, age, role, salary) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.role = role;
        this.salary = salary;
    }

    update(name, age, role, salary) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.salary = salary;
    }

    toString() {
        return `ID: ${this.id}, Nome: ${this.name}, Idade: ${this.age}, Cargo: ${this.role}, Salário: R$ ${this.salary.toFixed(2)}`;
    }
}

let employees = [];
let currentId = 0;

const form = document.getElementById('employee-form');
const employeeIdInput = document.getElementById('employee-id');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const roleInput = document.getElementById('role');
const salaryInput = document.getElementById('salary');
const employeeTableBody = document.querySelector('#employee-table tbody');

// --- INÍCIO DAS MUDANÇAS DO EXERCÍCIO 3 ---

// A função dentro do 'find' foi convertida para uma Arrow Function.
// ANTES: employees.find(function(emp) { return emp.id === id; });
// DEPOIS:
const findEmployeeById = (id) => employees.find(emp => emp.id === id);

// Função para carregar os dados do funcionário no formulário para edição
const loadEmployeeForEdit = (id) => {
    const employee = findEmployeeById(id);
    if (employee) {
        employeeIdInput.value = employee.id;
        nameInput.value = employee.name;
        ageInput.value = employee.age;
        roleInput.value = employee.role;
        salaryInput.value = employee.salary;
        form.querySelector('button').textContent = 'Atualizar';
    }
};

// Função para excluir um funcionário
const deleteEmployee = (id) => {
    if (confirm('Tem certeza que deseja excluir este funcionário?')) {
        // A função dentro do 'filter' já era uma Arrow Function, o que atende ao requisito.
        employees = employees.filter(emp => emp.id !== id);
        renderTable();
    }
};

// Função para renderizar a tabela
const renderTable = () => {
    employeeTableBody.innerHTML = '';

    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.age}</td>
            <td>${employee.role}</td>
            <td>R$ ${employee.salary.toFixed(2)}</td>
            <td>
                <button class="edit-btn" data-id="${employee.id}">Editar</button>
                <button class="delete-btn" data-id="${employee.id}">Excluir</button>
            </td>
        `;
        employeeTableBody.appendChild(row);
    });

    // Os eventos de clique agora usam Arrow Functions.
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = parseInt(event.currentTarget.getAttribute('data-id'));
            loadEmployeeForEdit(id);
        });
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = parseInt(event.currentTarget.getAttribute('data-id'));
            deleteEmployee(id);
        });
    });
};

// Evento de submit do formulário, agora usando uma Arrow Function.
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const id = parseInt(employeeIdInput.value);
    const name = nameInput.value;
    const age = parseInt(ageInput.value);
    const role = roleInput.value;
    const salary = parseFloat(salaryInput.value);

    if (id) {
        const employee = findEmployeeById(id);
        if (employee) {
            employee.update(name, age, role, salary);
        }
    } else {
        const newEmployee = new Funcionario(++currentId, name, age, role, salary);
        employees.push(newEmployee);
    }

    form.reset();
    employeeIdInput.value = '';
    form.querySelector('button').textContent = 'Cadastrar';
    renderTable();
});

// --- FIM DAS MUDANÇAS DO EXERCÍCIO 3 ---

// Renderização inicial
renderTable();

// --- INÍCIO DA LÓGICA DO EXERCÍCIO 4 ---

const reportOutput = document.getElementById('report-output');
const btnSalaryFilter = document.getElementById('btn-salary-filter');
const btnAvgSalary = document.getElementById('btn-avg-salary');
const btnUniqueRoles = document.getElementById('btn-unique-roles');
const btnUppercaseNames = document.getElementById('btn-uppercase-names');

// 1. Listar funcionários com salário maior que R$ 5000
btnSalaryFilter.addEventListener('click', () => {
    const highSalaryEmployees = employees
        .filter(emp => emp.salary > 5000) // 
        .map(emp => `<p>${emp.name} (R$ ${emp.salary.toFixed(2)})</p>`)
        .join('');

    reportOutput.innerHTML = `<h3>Funcionários com Salário > R$ 5000:</h3>${highSalaryEmployees}`;
});

// 2. Mostrar a média salarial dos funcionários
btnAvgSalary.addEventListener('click', () => {
    if (employees.length === 0) {
        reportOutput.innerHTML = `<p>Não há funcionários para calcular a média.</p>`;
        return;
    }
    const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0); // 
    const averageSalary = totalSalary / employees.length;
    
    reportOutput.innerHTML = `<h3>Média Salarial:</h3> <p>R$ ${averageSalary.toFixed(2)}</p>`;
});

// 3. Listar apenas os cargos únicos (sem repetição)
btnUniqueRoles.addEventListener('click', () => {
    const allRoles = employees.map(emp => emp.role);
    const uniqueRoles = [...new Set(allRoles)]; // 

    const rolesList = uniqueRoles.map(role => `<p>${role}</p>`).join('');
    reportOutput.innerHTML = `<h3>Cargos Únicos na Empresa:</h3>${rolesList}`;
});

// 4. Criar uma lista de nomes em maiúsculo
btnUppercaseNames.addEventListener('click', () => {
    const uppercaseNames = employees
        .map(emp => emp.name.toUpperCase()) // 
        .map(name => `<p>${name}</p>`)
        .join('');

    reportOutput.innerHTML = `<h3>Nomes em Maiúsculo:</h3>${uppercaseNames}`;
});

// --- FIM DA LÓGICA DO EXERCÍCIO 4 ---