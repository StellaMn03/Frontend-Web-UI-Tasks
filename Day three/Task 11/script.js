document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault(); 

    // inputs
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');

    // error elements
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');

    // check name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        return false;
    }

    // check email 
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format';
        return false;
    }

    this.submit();
});
