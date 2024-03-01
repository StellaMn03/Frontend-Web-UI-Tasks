document.getElementById("createBtn").addEventListener("click", function(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  var emailInput = document.getElementById('email');
  var phoneInput = document.getElementById('phone');
  var nicknameInput = document.getElementById('nickname');
  var password = document.getElementById("password").value;
  var repeatPassword = document.getElementById("repeat_password").value;

  var emailError = document.getElementById('emailError');
  var repeatPasswordError = document.getElementById('repeat_passwordError');

  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if any input field is empty
  if (!emailInput.value.trim() || !phoneInput.value.trim() || !nicknameInput.value.trim() || !password || !repeatPassword) {
      alert("All fields are required!\nВсе поля обязательны для заполнения!");
      return;
  }

  // Check email format
  if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = 'Invalid email format';
      return;
  }

  //Clear previous error message
  emailError.textContent = '';

  if (password !== repeatPassword) {
     repeatPasswordError.textContent = "Passwords don't match";
  } else {
      repeatPasswordError.textContent = "";
      alert("Registration successful!");
  }
});
