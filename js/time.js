// Get current year
const currentYear = new Date().getFullYear();

// Set countdown date to January 1st of the next year
const countdownDate = new Date(currentYear + 1, 0, 1).getTime();

const counter = setInterval(() => {
  // Get current time
  const dateNow = new Date().getTime();

  // Calculate time difference
  const dateDiff = countdownDate - dateNow;

  // Calculate time units
  const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  const hours_n = Math.floor(((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const hours = hours_n - 1;
  const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  // Update HTML elements
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  // Clear interval if countdown is over
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

/*
 ** Increase Numbers On Scrolling
 ** Video URL: https://youtu.be/PLsUdgLnzgQ
 */
// Select all the progress bars on the page
let progressSpans = document.querySelectorAll(".the-progress span");

// Select the section containing the progress bars
let section = document.querySelector(".our-skills");

// Select all the number elements on the page
let nums = document.querySelectorAll(".stats .number");

// Select the section containing the numbers
let statsSection = document.querySelector(".stats");

// Set a flag to keep track of whether the count animation has started
let started = false;

// Listen for the scroll event on the page
window.onscroll = function () {
  
  // Animate progress bars when scrolled to skills section
  if (window.scrollY >= section.offsetTop - 250) {
    // For each progress bar, set its width to the value specified in the "data-width" attribute
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  // Animate numbers when scrolled to stats section
  if (window.scrollY >= statsSection.offsetTop) {
    // If the count animation has not started, start it for each number element
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

// Animate a number counting up to a goal
function startCount(el) {
  // Get the target goal from the "data-goal" attribute
  let goal = el.dataset.goal;
  // Use setInterval to update the number every 50 milliseconds
  let count = setInterval(() => {
    // Increment the number by 1
    el.textContent++;
    // If the number has reached the target goal, stop the animation
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 50 / goal);
}
