Describe: Tasks()

Test 1: "It should return an empty object when called"
Code:
    Tasks()
Expected Output: {}

Test 2: "It should return a task when called"
Code:
    Tasks()
    let task = new Task("help me");
Expected Output: Task {task: "help me"}

Test 3: "It should return an isDone property with a value of false assuming the task has not been completed."
Code:
    let task = new Task("help me");
Expected Output: Task {task: "help me", isDone: false}

Describe: Task.prototype.isComplete()

Test 1: "It should return the value of the task's completion status, which is initially false."
Code:
    let task = new Task("help me");
    task.isComplete();
Expected Output: false

Test 2: "It should set the task's completion status to true, and return the new value."
Code:
    let task = new Task("help me");
    task.isComplete();
Expected Output: true

Describe: List()
Test 1: "It creates an empty unordered list."
Code:
    let task = new Task("help me");
    List();
Expected Output: {}

