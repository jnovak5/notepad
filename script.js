var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function listLength() {
	return ul.querySelectorAll("li").length;
}

function addDeleteButtons() {
	for (var i=0; i < listLength(); i++) {
		ul.querySelectorAll("li")[i].appendChild(createDeleteButton());
	}
}

function createDeleteButton() {
		var deleteButton = document.createElement("button");
		deleteButton.appendChild(document.createTextNode("Delete?"));
		deleteButton.classList.toggle("deleteButton")
		return deleteButton;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li).appendChild(createDeleteButton());
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeydown(event) {
	if (inputLength() > 0 && event.key === "Enter") {
		createListElement();
	}
}

function completeListItem(event) {
	var li = event.target;
	if (li.tagName === "LI") {
		li.classList.toggle("done");
	}
}

function removeListItem(event) {
	var li = event.target;
	if (li.tagName === "BUTTON") {
		li = li.parentNode;
		ul.removeChild(li);
	}
}


addDeleteButtons();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown);

ul.addEventListener("click", completeListItem);
ul.addEventListener("click", removeListItem);