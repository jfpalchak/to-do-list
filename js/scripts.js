// BUSINESS LOGIC for List -----------------
function List() {
    const ul = document.createElement("ul");
}

// BUSINESS LOGIC for Task -----------------
function Task(task) {
    this.task = task;
    this.isDone = false;
}

Task.prototype.isComplete = function() {
    this.isDone = true;
    return this.isDone;
}