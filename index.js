// document.getElementById("count").innerHTML=5
let counte = 0;
let welcomeEl = document.getElementById("welcome-el");
let userName = "shahiyan";
let greeting = "Welcome Back";
welcomeEl.innerHTML = greeting + " " + userName + "!";
welcomeEl.innerHTML += "👋";

function increment() {
  counte = counte + 1;
  document.getElementById("count").innerHTML = counte;
}
function decrement() {
  counte = counte - 1;
  document.getElementById("count").innerHTML = counte;
}
function save() {
  let saveEntries = counte + "- ";
  document.getElementById("save-el").innerHTML =
    document.getElementById("save-el").innerHTML + saveEntries;
  counte = 0;
  document.getElementById("count").innerHTML = counte;
}
function reset() {
  counte = 0;
  document.getElementById("count").innerHTML = counte;
  document.getElementById("save-el").innerHTML = "Previous Entries: ";
}
