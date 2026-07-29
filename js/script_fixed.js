alert("Welcome to NRIIT Learning Management System")
let heading = document.getElementById("welcome");
heading.innerHTML = "Welcome Future Software Engineers"
console.log("Heading element: ", heading)
let msg = document.getElementById("message")
msg.innerHTML = "JavaScript is fun" 
console.log("Message element: ", msg)
function showmessage() {
    alert("Welcome to NRIIT Learning Management System")}
function changeHeading() {
    document.getElementById("welcome").innerHTML = "welcome Python Fullstack Developers"}
let heading = document.querySelector("#welcome");
console.log("Heading element:", heading)
let button = document.getElementById("btnGreeting");
button.addEventListener("click", function() 
{
    alert("Welcome to Javascript Programming Event Handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    console.log("Registering user:", { name, email });
    // TODO: submit the form data to the server here
});
