function validateForm() {
    var loader = document.getElementById("loader");
    loader.style.display = "block";
  
    setTimeout(function() {
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirmPassword").value;
      var emailVerification = document.getElementById("emailVerification").value;
  
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        loader.style.display = "none"; 
        return false;
      }
  
      if (email !== emailVerification) {
        alert("Emails do not match");
        loader.style.display = "none"; 
        return false;
      }
  
      alert("Form submitted successfully!");
      loader.style.display = "none"; 
      return true;
    }, 2000); 
  }
  