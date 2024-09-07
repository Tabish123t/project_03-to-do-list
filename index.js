import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let todos = [];
function addTodo() {
    rl.question('Enter the task: ', (task) => {
        const newTodo = { task, completed: false };
        todos.push(newTodo);
        console.log('Task added successfully!');
        showMenu();
    });
}
function listTodos() {
    if (todos.length === 0) {
        console.log('No todos found.');
    }
    else {
        console.log('Todos:');
        todos.forEach((todo, index) => {
            console.log(`${index + 1}. [${todo.completed ? 'x' : ' '}] ${todo.task}`);
        });
    }
    showMenu();
}
function markComplete() {
    rl.question('Enter the index of the task to mark as complete: ', (index) => {
        const todo = todos[parseInt(index) - 1];
        if (todo) {
            todo.completed = true;
            console.log('Task marked as complete!');
        }
        else {
            console.log('Task not found.');
        }
        showMenu();
    });
}
function showMenu() {
    console.log('\nChoose an action:');
    console.log('1. Add Todo');
    console.log('2. List Todos');
    console.log('3. Mark Complete');
    console.log('4. Exit');
    rl.question('Enter your choice: ', (choice) => {
        switch (choice) {
            case '1':
                addTodo();
                break;
            case '2':
                listTodos();
                break;
            case '3':
                markComplete();
                break;
            case '4':
                console.log('Exiting Todo app. Goodbye!');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please try again.');
                showMenu();
        }
    });
}
showMenu();
