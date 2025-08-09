var nameInput = document.getElementById("name");
var nameLogo = document.getElementById("name-logo");

var emailInput = document.getElementById("email");
var emailLogo = document.getElementById("email-logo");

var subjectInput = document.getElementById("subject");
var subjectLogo = document.getElementById("subject-logo");

var messageInput = document.getElementById("message");
var messageLogo = document.getElementById("message-logo");

function disappearNameLogo() {
    if (nameInput.value.trim() === "") {
        nameLogo.style.display = "block";
    } else {
        nameLogo.style.display = "none";
    }
}
function disappearEmailLogo() {
    if (emailInput.value.trim() === "") {
        emailLogo.style.display = "block";
    } else {
        emailLogo.style.display = "none";
    }
}
function disappearSubjectLogo() {
    if (subjectInput.value.trim() === "") {
        subjectLogo.style.display = "block";
    } else {
        subjectLogo.style.display = "none";
    }
}
function disappearMessageLogo() {
    if (messageInput.value.trim() === "") {
        messageLogo.style.display = "block";
    } else {
        messageLogo.style.display = "none";
    }
}

nameInput.addEventListener("input", function () {
    disappearNameLogo();
});

emailInput.addEventListener("input", function () {
    disappearEmailLogo();
});

subjectInput.addEventListener("input", function () {
    disappearSubjectLogo();
});

messageInput.addEventListener("input", function () {
    disappearMessageLogo();
});

function ValidateEmail() {
    const emailval = document.getElementById("email").value.trim();
    const atindex = emailval.indexOf('@');
    const dotindex = emailval.indexOf('.');

    if ((nameInput.value.trim() === "")) {
        alert("Please enter your Name!");
        return false;
    }

    if ((emailInput.value.trim() === "")) {
        alert("Please enter your Email!");
        return false;
    }

    if ((subjectInput.value.trim() === "")) {
        alert("Please enter Subject!");
        return false;
    }

    if ((messageInput.value.trim() === "")) {
        alert("Please enter Message!");
        return false;
    }
    if ((atindex <= 0) || (dotindex <= atindex + 1) || (dotindex >= emailval.length - 1) || (dotindex <= 0)) {
        alert("Invalid email");
        return false;
    }
}