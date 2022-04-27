/* Created by: Joanne Santhosh
 * Created on: Apr 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-02-HTML/sw.js", {
    scope: "/ICS20-Unit5-02-HTML/",
  })
}

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

// input
function myButtonClicked() {
  const numberValue = parseInt(document.getElementById("numberValue").value);

  // process
  if (numberValue < 0) {
    document.getElementById("answer").innerHTML = "The number is negative!";
  } else {
    document.getElementById("answer").innerHTML = "The number is positive!";
  }
}