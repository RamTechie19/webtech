function validateForm() {
  // Display loader
  var loader = document.getElementById("loader");
  loader.style.display = "block";

  // Get form input values
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var emailVerification = document.getElementById("emailVerification").value;

  // Validate password and email
  if (password !== confirmPassword) {
      alert("Passwords do not match");
      loader.style.display = "none"; // Hide loader
      return false; // Prevent form submission
  }

  if (email !== emailVerification) {
      alert("Emails do not match");
      loader.style.display = "none"; // Hide loader
      return false; // Prevent form submission
  }

  // If validation successful, redirect
  alert("Form submitted successfully!");
  setTimeout(function() {
      window.location.href = '/loginpage';
  }, 1000); // Redirect after 1 second
  return false; // Prevent form submission
}
