var todo = [];
var input =  prompt("What would you like to do?");
while (input !== "Q") {
    if (input === "L") {
        console.log(todo);
    } else if (input === "N") {
        var newtodo = prompt("Enter new todo");
        todo.push(newtodo);
    }
    input = prompt("What would you like to do?");
}
console.log("Ok, You Quit the App");
