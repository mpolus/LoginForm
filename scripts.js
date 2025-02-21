function validateForm() {
    let username = document.getElementById("username").value;
    if (username === "" || password ==="") {
        document.getElementById("error").innerText = "Username is required";
        document.getElementById("error1").innerText = "Password is required";

        return false;
    }
    return true;
}

