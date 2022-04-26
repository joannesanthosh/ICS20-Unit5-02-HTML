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

// this allows for console input in Node.js
const prompt = require('prompt-sync')()

// input
const randomNumber = prompt("Enter a positive or negative number: ")

// if ... then ... else example
if (randomNumber > 0) {
  console.log("Number is positive!")
} else {
  console.log("Number is negative.")
}

console.log("\nDone.")