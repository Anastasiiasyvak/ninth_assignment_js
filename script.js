document.getElementById("passwordForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var message = document.getElementById("message");
  var userName = document.getElementById("userName");
  var userEmail = document.getElementById("userEmail");
  var userAge = document.getElementById("userAge");
  var userNumber = document.getElementById("userNumber");


  if (userName.value.trim() === "") {
      document.getElementById("userNameError").textContent = "Enter your name please";
      userName.classList.add("error");
      event.preventDefault();
  } else {
      document.getElementById("userNameError").textContent = "";
      userName.classList.remove("error");
      userName.classList.add("success");
  }

  if (!userEmail.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      document.getElementById("userEmailError").textContent = "Enter the corret email";
      userEmail.classList.add("error");
      event.preventDefault();
  } else {
      document.getElementById("userEmailError").textContent = "";
      userEmail.classList.remove("error");
      userEmail.classList.add("success");
  }

  if (isNaN(userAge.value) || userAge.value <= 0) {
      document.getElementById("userAgeError").textContent = "Enter the correct age";
      userAge.classList.add("error");
      event.preventDefault();
  } else {
      document.getElementById("userAgeError").textContent = "";
      userAge.classList.remove("error");
      userAge.classList.add("success");
  }

  if (!userNumber.value.match(/^\d+$/)) {
      document.getElementById("userNumberError").textContent = "Enter only numbers.";
      userNumber.classList.add("error");
      event.preventDefault();
  } else {
      document.getElementById("userNumberError").textContent = "";
      userNumber.classList.remove("error");
      userNumber.classList.add("success");
  }

  
  if (password.length < 8) {
      message.textContent = "The password must be at least 8 characters long.";
      event.preventDefault();
  } else if (password !== confirmPassword) {
      message.textContent = "Passwords do not match.";
      event.preventDefault();
  } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*()_+]/.test(password)) {
      message.textContent = "The password must contain uppercase and lowercase letters, numbers, and special characters.";
      event.preventDefault();
  } else {
      message.textContent = "";
  }

});

function fun1() {
  var rng = document.getElementById('rangeValue');
  var p = document.getElementById('happy');
  p.innerHTML = rng.value;
}



$(function () {
  $("#datepicker").datepicker();
});


function fun2() {
  var rad = document.getElementsByName('r1');
  for (var i = 0; i < rad.length; i++) {
      if (rad[i].checked) {
          alert(rad[i].value );
      }
  }
}