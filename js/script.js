//======= Variables ===========

//Selects number of page views span

const pageviews = document.querySelector(".view-count");

//Selects price per month span

const price = document.querySelector(".price");
const priceNumeral = document.querySelector(".calculated-price");

//Selects the range Input

const range = document.querySelector(".real-range");
let rangeValue = range.value;

//Selects checkbox for yearly billing

const checkbox = document.querySelector(".checkbox");

//Selects visuals for toggle button, specifically the outer div

const switchButton = document.querySelector(".switch-holder");

let yearlyBilling = false;

let calculatedPrice = 16;

//========================================================================

//Main Function

range.addEventListener("input", function () {
  updateViews();
  removeFill();
  addFill();
  calculatePrice();
})

//=========================================================================

//Updates number of pagesviews based on range input

const updateViews = function () {
  if (range.value == 1) {
    pageviews.innerText = "10K";
  } else if (range.value == 2) {
    pageviews.innerText = "50K";
  } else if (range.value == 3) {
    pageviews.innerText = "100K";
  } else if (range.value == 4) {
    pageviews.innerText = "500K";
  } else if (range.value == 5) {
    pageviews.innerText = "1M";
  }
}


//=========================================================================

//Adds event listener for checkbox

checkbox.addEventListener("click", function () {
  if (checkbox.checked == true) {
    switchButton.classList.add("active");
    yearlyBilling = true;
    calculatePrice()
    console.log(yearlyBilling);
  } else {
    switchButton.classList.remove("active");
    yearlyBilling = false;
    console.log(yearlyBilling);
    calculatePrice();
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

const calculatePrice = function () {
  if (range.value == 1) {
    calculatedPrice = 8;
  } else if (range.value == 2) {
    calculatedPrice = 12;
  } else if (range.value == 3) {
    calculatedPrice = 16;
  } else if (range.value == 4) {
    calculatedPrice = 24;
  } else if (range.value == 5) {
    calculatedPrice = 36;
  }

  if (yearlyBilling == true) {
    calculatedPrice = calculatedPrice * .75;
  }

  priceNumeral.innerText = calculatedPrice;

}
