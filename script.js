function checkPrime() {
  var number = document.getElementById("numberInput").value;
  var result = document.getElementById("result");

  if (number === "") {
    result.textContent = "Please enter a number.";
    return;
  }

  number = parseInt(number);

  if (number < 2) {
    result.textContent = number + " is not a prime number.";
    return;
  }

  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      result.textContent = number + " is not a prime number.";
      return;
    }
  }

  result.textContent = number + " is a prime number!";
}
