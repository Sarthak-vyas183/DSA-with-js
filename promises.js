// // const promiseOne = new Promise(function(resolve, reject) {
// //      setTimeout(function() {
// //          console.log("async task is done")
// //          resolve()
// //      },2000)
// // })

// // promiseOne.then(()=>{
// //     console.log("work done")

// // })

// // new Promise(function(resolve, reject) {
// //    setTimeout(function () {
// //      console.log("task 1 done")
// //      reject()
// //    },1000)
// // }).then(function() {
// //     console.log("async tak is done")
// // }).catch(function() {
// //     console.log("getting error to complete the taks")
// // })

// // let promise = new Promise(function(resolve, reject) {
// //      setTimeout(function() {
// //         console.log("taks three done")
// //         resolve({username : "sarthak vyas" , Password : "12445"})
// //      },1000)
// // })

// // promise.then(function(){
// //     console.log(promise)
// // })

// let promiseFoure = new Promise(function (resolve, reject) {
//   let error = false;
//   if (!error) {
//     resolve({ username: "sarthak", Password: "42654" });
//   } else {
//     reject("Internal server error");
//   }
// });

// promiseFoure
//   .then(function (user) {
//     console.log(user.username);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function () {
//     console.log(promiseFoure);
//   });



let promiseFive = new Promise(function(resolve, reject) {
     let error = false;
     if(!error) {
        resolve({username : "sarthak" , Password : "lsjflsdj"})
     } else {
        reject("js went wrong")
     }
})

consumePromiseFive =  async () => {
    try {
        let response = await promiseFive;
        console.log(response)   
    } catch (error) {
       console.log(error) 
    }
}

consumePromiseFive()