window.onload = function() {

  console.log("login.js - onload()");

  // Add a ripple effect to all MDC buttons
  document.querySelectorAll('.mdc-button').forEach(function(e) {
    mdc.ripple.MDCRipple.attachTo(e);
  });

  // Initialize all MDC text fields
  document.querySelectorAll('.mdc-text-field').forEach(function(e) {
    new mdc.textField.MDCTextField(e);
  });

  // Initialize all MDC text field icons
  document.querySelectorAll('.mdc-text-field__icon').forEach(function(e) {
    new mdc.textField.MDCTextFieldIcon(e);
  });

};
