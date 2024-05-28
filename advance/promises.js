const promiseOne = new Promise((resolve, reject) => {
  // Do an async tasls
  // db calls, cryptography, network
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 100);
}); // there are two part of promises, it will either resolve or reject

// once promise has create need to be consumed
// it will be consumed only after resolve()

promiseOne.then(() => {
  console.log("Promise consumed");
});

// example promise not stored in a variable

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task two");
  }, 1000);
}).then(() => {
  console.log("Async two resolved");
});

// example how data can be consumed

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Sayyed", email: "sayyed@gmail.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
}); // take parameter to access

//

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Sayyed", password: "abcd1234" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// consume data by chaining

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

//

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "abcd1234" });
    } else {
      reject("ERROR: JavaScript went wrong");
    }
  }, 1000);
});

async function consumePromisefive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromisefive();

//

async function getAllusers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error, "error");
  }
}

getAllusers();

//

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// fetch() is global function which starts the process of fetching a resource from the network, returning a promise which is fulfilled once the reponse is available.

// response = fetch("")

// data:
// onfulfilled[]
// onRejection[]

// web browser/node
// network request ✅ or ❌
