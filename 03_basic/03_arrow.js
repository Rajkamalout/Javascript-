const user = {
    username: "Rajkamal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function name(){
//     let username = "Rajkamal"
//     console.log(this.username);
// }

// name()

// const name = function () {
//     let username = "Rajkamal"
//     console.log(this.username);
// }

const name =  () => {
    let username = "Rajkamal"
    console.log(this);
}


// name()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Rajkamal"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()