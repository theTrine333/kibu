form = document.getElementById("login-form");
loginBtn = document.getElementById("login-btn");

let loginUsername = document.getElementById("login-username");
let loginPassword = document.getElementById("login-password");

loginBtn.addEventListener("click", e => {
    e.preventDefault();
    if (loginUsername.value == ""){
        
        document.getElementById("login-alert").className ="alert alert-danger alert-dismissible";
        document.getElementById("login-alert").innerHTML = "Fill in your Username";
    }else if(loginPassword.value == ""){
        document.getElementById("login-alert").className ="alert alert-danger alert-dismissible";
        document.getElementById("login-alert").innerHTML = "Fill in your Password";
    }else{
        // Perfom authentification from database
        document.getElementById("login-span").className = "spinner-border spinner-border-sm";
        document.getElementById("login-alert").className ="alert alert-success alert-dismissible";
        document.getElementById("login-alert").innerHTML = "Authenticating...";
    }
    
    
});
