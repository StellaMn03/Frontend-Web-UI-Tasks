const form = document.getElementById('myForm');
const formFields = form.elements;

formFields.forEach(function(field) {
  const fieldName = field.name;
  const storedValue = localStorage.getItem(fieldName);
  if (storedValue !== null) {
    field.value = storedValue;//նախորդ ներմուծածը պահում ա
  }
});
// Function to throttle auto-save actions
function throttle(callback, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
}
// Function to save form data to localStorage
function saveToLocalStorage() {
  formFields.forEach(function(field) {
    const fieldName = field.name;
    const fieldValue = field.value;
    localStorage.setItem(fieldName, fieldValue);
  });
}
// Attach event listeners to form fields for auto-save
formFields.forEach(function(field) {
  field.addEventListener('input', throttle(saveToLocalStorage, 1000));
});