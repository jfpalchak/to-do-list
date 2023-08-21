Describe: Tasks()

Test 1: "It should return an empty object when called"
Code:
    Tasks()
Expected Output: {}

Test 1: "It should return a task when called"
Code:
    Tasks()
    let task = new Task("help me");
Expected Output: Task {task: "help me"}