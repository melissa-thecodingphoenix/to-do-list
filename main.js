const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// adding task to list
function addTask() {
    if(inputBox.value === '') {
        alert("Please enter what you need to do!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); //saving all task added to memory
}

// click function for completing/ removing task
listContainer.addEventListener("click", function(e) {
    //checking where we clicked. If clicked on the list item, it will activate the checked class
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); //saving all task added to memory
    //if we clicked span, the parentelement will be removed
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); //saving all task added to memory
    }
}, false);

// function to keep task in memory even when we close app or refresh
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//function to display saved tasks
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); //displaying saved tasks after refresh or reopening app