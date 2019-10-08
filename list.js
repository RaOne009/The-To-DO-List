var todo = [];
var input =  prompt("What would you like to do?");
while (input !== "quit") {
    if (input === "list") {
        todo.forEach(function(tod, index){
            console.log("++++++++++++++++++");
            console.log(index + " :" + tod);
        })
        console.log("++++++++++++++++++");
    } else if (input === "new") {
        var newtodo = prompt("Enter new todo");
        todo.push(newtodo);
        console.log("Todo is Added");
    } else if (input === "delete") {
        var ind = prompt("Enter the index of todo to delete");
        todo.splice(ind, 1);
        console.log("deleted todo");
    }
    input = prompt("What would you like to do?");
}
console.log("Ok, You Quit the App");
