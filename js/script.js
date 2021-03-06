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
 * Input
 */
function myButtonClicked() {
  const number = parseInt(document.getElementById("number").value)

  // process
  if (number < 0) {
    document.getElementById("answer").innerHTML = "The number is negative!"
  } else {
    document.getElementById("answer").innerHTML = "The number is positive!"
  }
}
