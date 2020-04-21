const form = document.getElementById('task_form')
const input = document.getElementById('task_input')
const list = document.querySelector('main ul')

/** Add remove method to arrays **/
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

/** Import lists from localstorage **/
var tasks_json = localStorage.getItem('tasks')

function deleteTask(e) {
    let html_element = e.target
    let newtasks = tasks
    let task = html_element.innerHTML

    tasks.remove(task)
    localStorage.setItem('tasks', JSON.stringify(newtasks))
    html_element.parentNode.removeChild(html_element);
    console.log("REMOVE : " + task);
}

if (tasks_json) {
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(task => {
        let html_element = document.createElement('li')
        html_element.innerHTML = task
        list.appendChild(html_element)
        html_element.addEventListener('click', deleteTask)
    })
}
else {
    localStorage.setItem("tasks", JSON.stringify(new Array()));
}

/** Add task **/
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Update list
    let task = input.value
    let newtasks = tasks
    newtasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(newtasks))
    // Add li
    let html_element = document.createElement('li')
    html_element.innerHTML = task
    list.appendChild(html_element)
    html_element.addEventListener('click', deleteTask)
    // Clear input field
    input.value = ''
})
