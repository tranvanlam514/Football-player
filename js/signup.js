function togglePassword() {
    let password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
document.querySelector(".signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullName = document.querySelector("input[placeholder='Full Name']").value;
    let email = document.querySelector("input[placeholder='Email Address']").value;
    let password = document.querySelector("input[placeholder='Password']").value;

    if (fullName && email && password) {
        let user = { fullName, email, password };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Sign Up Successful! Please Sign In.");
        window.location.href = "./signin.html"; 
    } else {
        alert("Please fill in all fields.");
    }
});