// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
  
    // Simulate a loading state
    const loginButton = document.querySelector('button[type="submit"]');
    loginButton.disabled = true;
    loginButton.textContent = 'Logging in...';
  
    // Simulate an API call (replace with actual backend call in production)
    setTimeout(() => {
      // Hardcoded credentials for demonstration
      if (username === 'Anas' && password === '1221') {
        // Clear error message and show success message
        document.getElementById('error-message').textContent = '';
        document.getElementById('success-message').textContent = 'Login successful! Redirecting...';
  
        // Save username to localStorage if "Remember Me" is checked
        if (rememberMe) {
          localStorage.setItem('username', username);
        }
  
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          window.location.href = 'dashboard.html'; // Replace with your actual dashboard URL
        }, 2000);
      } else {
        // Show error message for invalid credentials
        document.getElementById('error-message').textContent = 'Invalid username or password';
        document.getElementById('success-message').textContent = '';
      }
  
      // Reset the login button
      loginButton.disabled = false;
      loginButton.textContent = 'Login';
    }, 2000); // Simulate a 2-second delay
  });
  
  // Function to toggle password visibility
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password i');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
    }
  }
  
  // Function to handle Google login
  function loginWithGoogle() {
    alert('Redirecting to Google login...');
    // Implement Google login logic here
  }
  
  // Function to handle Facebook login
  function loginWithFacebook() {
    alert('Redirecting to Facebook login...');
    // Implement Facebook login logic here
  }
  
  // Function to handle "Forgot Password"
  function forgotPassword() {
    alert('Redirecting to password reset page...');
    // Implement forgot password logic here
  }
  
  // Function to handle "Sign Up"
  function signUp() {
    alert('Redirecting to sign-up page...');
    // Implement sign-up logic here
  }
  
  // Check if "Remember Me" was checked previously
  window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      document.getElementById('username').value = savedUsername;
      document.getElementById('rememberMe').checked = true;
    }
  };