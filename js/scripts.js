function Task(task) {
    this.task = task;
    this.isDone = false;
}

Task.prototype.isComplete = function() {
    return this.isDone;
}