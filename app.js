
// Selecting classes
const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");


// get number of data
btns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    let number = btn.getAttribute("data-num");
    screen.value += number;
  });
});

// Get the value of screen
equalBtn.addEventListener("click", function() {
  if (screen.value === "") {
    screen.value = `Please Enter a Value`;
  } else {
    let value = eval(screen.value);
    screen.value = value;
  }
});


// Clear buttons
clearBtn.addEventListener("click", function() {
  screen.value = "";
});
