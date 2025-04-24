fetch('https://jsonplaceholder.typicode.com/posts')
    // JSON.parse: JSON => Javascript Types
    .then((response) => response.json())
    .then((posts) => {
        console.log(posts);
    })

var urlUsersAPI = 'https://jsonplaceholder.typicode.com/users';
var urlTodosAPI = 'https://jsonplaceholder.typicode.com/todos';

var getUsersByID = (userList, userID) => {
    return new Promise((resolve) => {
        if (!Array.isArray(userID)) {
            resolve([]);
            return;
        }
        var result = userList.filter(user => userID.includes(user.id));
        resolve(result);
    });
};

var usersFetch = fetch(urlUsersAPI)
    .then(response => response.json())
    .catch(error => {
        console.error('Error fetching users:', error);
        return [];
    });

var todosFetch = fetch(urlTodosAPI)
    .then(response => response.json())
    .catch(error => {
        console.error('Error fetching todos:', error);
        return [];
    });

var todoBlock = document.querySelector('.todo-block');
if (!todoBlock) {
    console.error('Element with class "todo-block" not found.');
} else {
    var html = '<h1>API Todo List</h1>';
    Promise.all([usersFetch, todosFetch])
        .then(([users, todos]) => {
            var userTodos = todos.map(todo => todo.userId);
            return getUsersByID(users, userTodos)
                .then(usersFiltered => {
                    return {
                        users: usersFiltered,
                        todos: todos
                    };
                });
        })
        .then(data => {
            console.log(data);
            data.todos.forEach(todo => {
                var user = data.users.find(user => user.id === todo.userId);
                var completed = todo.completed ? 'Hoàn thành' : 'Chưa hoàn thành';
                html += `<li><h4>${user?.name || 'Unknown'}:</h4> (${completed}) ${todo.title}</li>`;
            });
            todoBlock.innerHTML = html;
        })
        .catch(error => {
            console.error('An error occurred:', error);
            todoBlock.innerHTML = '<p>Could not fetch data. Please try again later.</p>';
        });
}
