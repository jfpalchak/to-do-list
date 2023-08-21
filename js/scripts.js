function Task(task) {
    this.task = task;
    this.isDone = false;
}

Task.prototype.isComplete = function() {
    this.isDone = true;
    return this.isDone;
}