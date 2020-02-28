const refs = {
  body: document.querySelector('body'),
  start: document.querySelector("[data-action = start]"),
  stop: document.querySelector("[data-action = stop]")
};


const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548"
  ];
  
  let timerid = null;


  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  refs.start.addEventListener("click", () => {
    timerid = setInterval(() => {
      const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
      refs.body.style.background = randomColor;
  }, 1000);
  });
  
  refs.stop.addEventListener("click", () => {
    clearInterval(timerid);
    
  });

