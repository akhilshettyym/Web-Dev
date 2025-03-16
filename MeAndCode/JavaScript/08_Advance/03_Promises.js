const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consimed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

constPromiseThree = new Promise(function(resolvbe, reject){
    setTimeout(function(){
        resolve({username: 'Akhil', email:'akhil@gmail.com'})

    }, 1000)
})
PromiseThree.then(function(user){
    console.log(user);
    })


const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:'Akhil', password:'123'})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
PromiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log('Username is: ' + username)
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));

const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript", password:"123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const reponse = await fetch('https://jsonplaceholder.typicode.com/usres');
//         const data = await reponse.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/usres')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));