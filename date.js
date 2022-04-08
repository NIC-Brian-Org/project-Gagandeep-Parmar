"use strict"
function calcDateAndTime() {
  let currentdate = new Date();
  let formatX = "Last Clicked: " + currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();
  document.getElementById("dateFunction").innerHTML = formatX;
}
