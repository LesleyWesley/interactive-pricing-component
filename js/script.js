//======= Variables ===========

//Selects number of page views span

const pageviews = document.querySelector(".view-count");

//Selects price per month span

const price = document.querySelector(".price");

//Selects the range Input

const range = document.querySelector(".real-range");

//Selects checkbox for yearly billing

const checkbox = document.querySelector(".checkbox");

//Selects visuals for toggle button, specifically the outer div

const switchButton = document.querySelector(".switch-holder");

let yearlyBilling = false;

//=========================================================================

//Adds event listener for checkbox

checkbox.addEventListener("click", function () {
  if (checkbox.checked == true) {
    switchButton.classList.add("active");
    yearlyBilling = true;
    console.log(yearlyBilling);
  } else {
    switchButton.classList.remove("active");
    yearlyBilling = false;
    console.log(yearlyBilling);
  }
})

//======================================================================

//Removes fill from range input

  const removeFill = function() {
    range.classList.remove("percent-25");
    range.classList.remove("percent-50");
    range.classList.remove("percent-75");
    range.classList.remove("percent-100");
  }

//=======================================================================

//Adds event listener for range Input
