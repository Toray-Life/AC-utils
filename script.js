var menuButtons     = document.getElementsByClassName("menuButton");
var dropDownButtons = [];

for (var i = 0; i < menuButtons.length; i++) {
    console.log(menuButtons[4]);
    var parentClassName = menuButtons[i].parentNode.className;
    if (parentClassName == "dropdown") {
        dropDownButtons.push(menuButtons[i]);
    }
}

for (var i = 0; i < dropDownButtons.length; i++) {
    dropDownButtons[i].addEventListener("click", function () { dropdownClick(this); })
}

function dropdownClick(button) {
    var dropdownContent = button.nextElementSibling;

    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    }
    else {
        dropdownContent.style.display = "block";
    }
}