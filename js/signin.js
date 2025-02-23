function togglePassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
document.querySelector(".signin-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.querySelector("input[placeholder='Email Address']").value;
    let password = document.querySelector("input[placeholder='Password']").value;
    let storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Login Successful!");
        window.location.href = "index.html"; // Chuyển sang trang chủ
    } else {
        alert("Invalid email or password. Please try again.");
    }
});