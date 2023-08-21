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