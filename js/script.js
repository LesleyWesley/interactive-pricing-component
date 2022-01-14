//======= Variables ===========

//Selects number of page views span

const pageviews = document.querySelector(".view-count");

//Selects price per month span

const price = document.querySelector(".price");
let priceValue;

//Selects the range Input

const range = document.querySelector(".real-range");
let rangeValue = range.value;

//Selects checkbox for yearly billing

const checkbox = document.querySelector(".checkbox");

//Selects visuals for toggle button, specifically the outer div

const switchButton = document.querySelector(".switch-holder");

let yearlyBilling = false;

//========================================================================

//Main Function

range.addEventListener("input", function () {
  removeFill();
  addFill();
})


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


//Adds correct ammount of fill to range input

const addFill = function () {
  if (range.value == 2) {
    range.classList.add("percent-25");
  } else if (range.value == 3) {
    range.classList.add("percent-50");
  } else if (range.value == 4) {
    range.classList.add("percent-75");
  } else if (range.value == 5) {
    range.classList.add("percent-100");
  }
}

//======================================================================
