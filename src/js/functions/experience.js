// Function calculates experience time, takes 2 arguments:
// - id of an HTML element that text should be injected into
// - an array with dates of start/end working in a company

export default function (id, dates) {
  // Check if dates argument was passed correctly
  if (!(dates && Array.isArray(dates) && dates.length)) {
    return;
  }

  // Check if id argument was passed correctly
  let element = document.getElementById(id);

  if (!element || element.tagName !== 'SPAN') {
    return;
  }

  let time = 0;

  // Calculating the experience is seconds
  for (let date of dates) {
    const [start, end] = date;

    // If there's no end date, assume that it's present work
    if (end) {
      time += new Date(end).getTime() - new Date(start).getTime();
    } else {
      time += new Date().getTime() - new Date(start).getTime();
    }
  }

  // Check if time is in correct format
  if (!time) {
    return;
  }

  // Change time for milliseconds to months format
  time = Math.floor(time / 1000 / 60 / 60 / 24 / 30);

  // Display information in correct way
  if (time < 12) {
    element.textContent = `${time} months of`;
  } else if (time <= 12 && time % 12 === 0) {
    element.textContent = `${time / 12} years of`;
  } else {
    const years = Math.floor(time / 12);
    const months = time - years * 12;
    element.textContent = `${years} years and ${months} months of`;
  }
}
