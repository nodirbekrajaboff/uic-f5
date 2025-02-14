// let variable1 = setTimeout(() => {
//   console.log("Hello UIC");
// }, 1000);

// console.log("TIMEOUT ID: ", variable1);

// clearTimeout(variable1);

let i = 0;

let variable2 = setInterval(function () {
    i++;
    console.log("HI: ", i);
  if (i === 10) clearInterval(variable2);
}, 1500);
