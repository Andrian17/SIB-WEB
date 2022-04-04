// class NetworkError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "NetworkError";
//   }
// }

// const fetchingUserFromInternet = (isOffline) =>
//   new Promise((resolve, reject) => {
//     if (isOffline) {
//       reject(new NetworkError("Gagal mendapatkan data dari internet"));
//     } else {
//       resolve({ name: "John", age: 18 });
//     }
//   }, 500);

// const gettingUserName = async () => {
//   try {
//     const user = await fetchingUserFromInternet(false);
//     return user.name;
//   } catch (error) {
//     return error.message;
//   }
// };

// console.log(gettingUserName());

function fetchUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("JSUser");
    }, 3000);
  });
}

console.log("Fetching username...");
fetchUsername()
  .then((value) => {
    console.log(`You are logged in as ${value}`);
  })
  .finally(() => {
    console.log("Welcome!");
  });
