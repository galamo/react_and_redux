function getCars(fromAsync) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Inside timout");
      resolve(`Success ${fromAsync}`);
    }, 2000);
  });
}

getCars(false).then((result) => {
  console.log(result);
});

async function init() {
  console.log("541");
  const getCarsResult = await getCars(true);
  console.log(getCarsResult);
  const getCarsResult2 = await getCars(true);
  console.log(getCarsResult2);
  console.log("333");
}

console.log("666");
init();
init();
console.log("557");

//  what will be the output here?
