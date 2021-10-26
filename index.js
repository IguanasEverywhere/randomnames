
var enteredNames=[];
var shuffledNames = [];

var numOfNames = prompt("How many names do you want to enter?");
createArray(numOfNames);

function createArray(arrayLength) {
    for (var i = 0; i < arrayLength; i++){
        var name = prompt("Enter a name: ");
        enteredNames.push(name);
    }
}

var numberOfNames = enteredNames.length;


for (var i = numberOfNames; i > 0; i--) {
    var randomNum = Math.floor(Math.random() * i);

    shuffledNames.push(enteredNames[randomNum]);
    enteredNames.splice(randomNum, 1);
   
}

function makeList(listItem) {
    var list = document.createElement("li");
    list.innerHTML=listItem;
    document.querySelector("ol").appendChild(list);
}

shuffledNames.forEach(function(name) {
    makeList(name);
});


