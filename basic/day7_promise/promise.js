// function getBread(callback) {
//   setTimeout(() => {
//     const bread = "🍞";
//     callback(bread);
//   }, 1000);
// }

// function getButter(callback) {
//   setTimeout(() => {
//     const butter = "🧈";
//     callback(butter);
//   }, 1000);
// }

// function getJam(callback) {
//   setTimeout(() => {
//     const jam = "🍓";
//     callback(jam);
//   }, 1000);
// }

// function getMilk(callback) {
//   setTimeout(() => {
//     const milk = "🥛";
//     callback(milk);
//   }, 1000);
// }

// getBread((bread) => {
//   console.log(bread, "is ready");
//   getButter((butter) => {
//     console.log(butter, "is ready");
//     getJam((jam) => {
//       console.log(jam, "is ready");
//       getMilk((milk) => {
//         console.log(milk, "is ready");
//       });
//     });
//   });
// });

function getBread() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bread = "🍞";
      resolve(bread);
    }, 1000);
  });
}

function getButter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const butter = "🧈";
      resolve(butter);
    }, 1000);
  });
}

function getJam() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const jam = "🍓";
      resolve(jam);
    }, 1000);
  });
}

function getMilk() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const milk = "🥛";
      resolve(milk);
    }, 1000);
  });
}


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Harry Potter",
    });
    // reject("error");
  }, 1000);
});

// promise syntax 1: .then() and .catch()
// promise1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   })
//   .finally(() => {
//     // this finally will run when the promise is settled
//     console.log("finally the promise is done");
//   });

// promise syntax 2: async / await
async function resolvePromise() {
  // await has to be before a promise
  // await can only be used in an async function
  try {
    const data = await promise1;
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  } finally {
    console.log("finally the promise is done");
  }
}
// resolvePromise();

getBread()
  .then((bread) => {
    console.log(bread, "is ready");
    // what we return in the .then()
    // will become the next .then() argument
    return getButter();
  })
  .then((butter) => {
    console.log(butter, "is ready");
    return getJam();
  })
  .then((jam) => {
    console.log(jam, "is ready");
    return getMilk();
  })
  .then((milk) => {
    console.log(milk, "is ready");
  });


async function getBreakfast() {
  const bread = await getBread();
  console.log(bread, "is ready");
  const butter = await getButter();
  console.log(butter, "is ready");
  const jam = await getJam();
  console.log(jam, "is ready");
  const milk = await getMilk();
  console.log(milk, "is ready");
}
