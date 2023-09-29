const headingContainer = document.getElementById("heading");
const adviceContainer = document.getElementById("advice");
const btn = document.getElementById("btn");

const url = ("https://api.adviceslip.com/advice");

let getAdvice = () => {
  fetch(url)
  .then((data) => data.json())
  .then((item) => { 
    headingContainer.textContent = `${item.slip.id}`;
    adviceContainer.textContent = `${item.slip.advice}`;
    // console.log(`${data.advice} ~${data.heading}`);
    // heading.innerText = item.heading;
    // advice.innerText = item.advice;
  })
};

btn.addEventListener("click",getAdvice);
getAdvice();







