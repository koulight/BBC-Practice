// // YOUTUBE BG PICKER

// const { addListener } = require("nodemon")

// document.querySelector("li").addEventListener('click', purpleParty)

// function purpleParty(){
// document.querySelector("body").style.backgroundColor = "purple"
// document.querySelector("body").style.color = "white"
// }




// // WHAT DAY IS TODAY
// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase()

// if (day === "tuesday" || day === "thursday"){
//   alert("It is class day.")
// } else if (day === "saturday" || day === "sunday"){
//   alert("It's the weekend!")
// } else {
//   alert("It's a boooring day.")
// }
// }

// // POWER FUNCTION
// // function pow(x,n){
// //   let result = x;
// //   for (let i = 1; i < n; i++){
// //     result *= x;
// //   }
// //   return result;
// // }

// // alert(pow(2,3))


// // ANGRY PARENT SIMULATOR

// document.querySelector('#yell').addEventListener('click', run)

// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value

//   document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName
// }

// // document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`

// `${fName}${lName}`



// function loop(n){
//   let hash = "#";
//   for (let i = 1; i <= n; i++ ){
//    console.log(hash)
//    hash += "#"}
//   }

//   loop(7)


//   function fizzBuzz(){
//   for (let i = 1; i <= 20; i++){
//     if (i%3===0 && i%5===0){
//       console.log("FizzBuzz")
//     } else if (i%3===0){
//       console.log("fizz")
//     } else if (i%5===0){
//       console.log("buzz")
//     } else{
//     console.log(i)
//   }
// }
// }
// fizzBuzz()

// document.querySelector("#placeToYell").innerText =

// document.querySelector("#check").addEventListener("click" , check)




// let size = 8
// let board = ""
// for (let y = 0; y < size; y++){
//   for (let x=0; x < size; x++){
//     if ((x+y)%2==0){
//       board += " "
//     } else{
//       board += "#"
//     }
//   }board += "\n"
// }


// console.log(board)


// let size = 8
// let board = ""

// for (let y=0; y<size; y++){
//   for (let x=0; x<size; x++){
//     if ((x+y)%2==0){
//       board +=" "
//     } else{
//       board += "#"
//     }
//   } board += "\n"
// }

// console.log(board)


// function countChar(word, n){
//   count = 0
//   for (let i = 0; i < word.length; i++){
//     if ((word[i]) == n){
//       count++
//     }
//   } console.log(count)
// }

// countChar("kakkerklak", "k")


// let size = 8
// let board = ""

// for (let y=0; y<size; y++){
//   for (let x=0; x<size; x++){
//     if ((x+y)%2 == 0){
//       board += " "
//     } else{
//       board += "#"
//     }
//   } board += "\n"
// }

// console.log(board)


// let animals = ["dog", "cat", "fox", "panda", "bear"]
// function getAnimal(){
//   let chosen = Math.floor((Math.random() * animals.length))
//   console.log(animals[chosen])
// }

// getAnimal()


// const calculateArea = function(width, height){
//   const area = width * height
//   return area
// }

// const calculateArea = (width, height) => {
//   const area = width * height
//   return area
// }

// const sumNumbers = number => {
//   const sum = number + number
//   return sum
// }

// const sumNumbers = number => number + number



// const r = Number(prompt("Enter the circle radius:"));

// // TODO: create the circle object here

// const circle = {
//   circumference(){
//     return 2*r*3.14
//   },

//   area(){
//     return 3.14*Math.pow(r,2)
//   }
// }


// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

// const n = Number(prompt("Enter credit value:"))

// const account = {
//   name : "Alex",
//   balance : 0,

//   credit(){
//     return account.balance + n
//   },

//   describe(){
//      return `owner: ${account.name}, balance ${account.balance}`
//   }
// }
// console.log(account.credit())
// console.log(account.describe(3))

// let size = 8
// let board=("")

// for (let x=0; x<size; x++){
//     for (let y=0; y<size; y++){
//         if ((x+y)%2 === 0){
//         board += "#"
//         } else {
//             board += " "
//         }
//     } board += "\n"
// }

// console.log(board)

// let size = 8
// let board = ""

// for (let x=0; x<size; x++){
//     for (let y=0; y<size; y++){
//         if ((x+y)%2==0){
//             board += " "
//         } else{
//             board += "#"
//         }
//     } board += "\n"
// }

// console.log(board)

// function pow (x,n){
// let result = x
// for (let i=1; i<n; i++){
//     result *= x
// } console.log(result)
// }
// pow(2,3)


// // POWER FUNCTION
// // function pow(x,n){
// //   let result = x;
// //   for (let i = 1; i < n; i++){
// //     result *= x;
// //   }
// //   return result;
// // }



// document.querySelector("#check").addEventListener("click", checkDate)


// function checkDate(){

//     const day = document.querySelector("#day").value.toLowerCase()

//     if (day==="tuesday" || day==="thursday"){
//         console.log ("It's class day!")
//     }
//     else if (day==="saturday" || day === "sunday"){
//         console.log("It's weekend!")
//     }
//     else{
//         console.log("it's a boring day")
//     }
// }

// const animals = ["fox", "dog", "cat"]
// animals.forEach(cutie => {
//     console.log(cutie)
// })

// function pow(x,n){
//     let result = x
//     for (let i = 1; i<n; i++){
//         result *= x
//     } console.log(result)
// }

// pow(2,3)


// let fruits = ["apple", "banana", "grapes", "pear"]


// for (const noms of fruits){console.log(noms)}

// let nums = [1, 2, 3]
// nums.forEach((item, i) => {
//     nums[i] = item + 3 })

//     console.log(nums)

//     let x=0
// for (let i=0; i<nums.length; i++){
       
//         x += nums[i]
//     } 
    
//     console.log(x/nums.length)

// let pets = ["cat", "dog", "bunny", "pig", "fox"]
// for (let i = 0; i < pets.length; i++){
//     console.log(pets[i])
// }

// pets.forEach((item) => {
//     console.log(item)
// })


// const calculateArea = (height, width) => {
//     const area = width * height
//     return area
// }


// let fruits = ["apples", "bananas", "grapes", "oranges"]
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// for (let noms of fruits){console.log(noms)}




// document.querySelector("#check").addEventListener("click", check)




// function pow(x,n){
//     let result = x
//     for (let i=1; i<n; i++){
//         result *= x
//         console.log(result)
//     }
// }

// pow(2,3)

// const sumNumbers = number => number + number

// function purpleParty(){
//     document.querySelector("body").style.background="purple"
// }


// for (const cuties of animals){console.log(cuties)}

// for (const nomnoms of fruits){console.log(nomnoms)}


// let movies = ["movie1", "movie2", "movie3"]

// movies.forEach((item,i) => {
//     document.querySelector("h2").innerText += item
// })

// for (let i = 0; i < movies.length; i++){
//     document.querySelector("h2").innerText += movies[i]
// }


// let nums = [1,2,3,4,5]
// let newArray = []

// function getEven(){
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] % 2 === 0){
//             newArray.push(nums[i])
//         }
//     }
// }
// getEven()

// console.log(newArray)

// function getEvenWithEach(){
//     nums.forEach((item, i) =>{
//         if (item%2 === 0){
//             newArray.push(item)
//         }
//     })
// }

// getEvenWithEach()
// console.log(newArray)

// let animals = ["dog", "cat", "rabbit", "mouse"]
// for (const cuties of animals){console.log(cuties)}

// let nums = [1,2,3,4,5]
// // let product = 1
// for (let i = 0; i < nums.length; i++){
//     product *= nums[i]
// }
// console.log(product)

// nums.forEach((item,i) => {
//     product *= item
// })

// console.log(product)

// newArray = []
// function onlyEven(){
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i]%2 === 0){
//             newArray.push(nums[i])
//         }
//     }
// }

// onlyEven()
// console.log(newArray)

// function forEven(){
//     nums.forEach((item, i) => {
//         if (item%2===0){
//             newArray.push(item)
//         }
//     })
// }

// forEven()
// console.log(newArray)

// let animals = ["dog", "cat", "bunny", "panda"]
// animals.forEach((item, i) => {
//   console.log(item)
// }
  
// );



// let hash = "#"
// for (let i = 1; i <= 7; i++){
//   console.log(hash)
//   hash = hash + "#"
// }
// let arr = [1,2,3,4,5]
// let newArray = []
// function takeNumbers(){
  
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2===0){
//       newArray.push(arr[i])
//     }
//   } console.log(newArray)
// }
// takeNumbers()

// let listOfNums = [1,2,3,4,5]
// product = 1
// function getProduct(arr){
//   for (let i = 0; i < arr.length; i++){
//     product *= arr[i]
//   } console.log(product)
// }

// getProduct(listOfNums)

// const product = listOfNums.reduce((currentProduct, item) => {
//   return item * currentProduct
// }, 1)

// console.log(product)

// function pow(x,n){
// let result = x
// for (let i = 1; i < n; i++){
//   result *= x
//   console.log(result)
// }
// }

// pow(2,3)

// let sorted = arr.sort((a,b) => a-b)

// const product = listOfNums.reduce((currentProduct, item) => {
//   return currentProduct * item
// }, 1)

// let sorted = arr.sort((a,b) => a-b)

// const calculateArea = (width, height) => {
//   const area = width * height
//   return area
// }

// let candy = ["mars", "oreos", "candy"]
// for (const sweets of candy){console.log(sweets)}

// function evenOnly(arr){
//   let newArray = []
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2===0){
//       newArray.push(arr[i])
//     }
//   } console.log(newArray)
// }
// let arr = [1,2,3,4,5]
// evenOnly(arr)


// let kwee = arr.sort((a,b) => a-b)

// let woot = arr.reduce((difference, item) => {
//   return difference - item},0)

//   console.log(woot)


// function multNums(arr){
//   let product = arr.reduce((current, item) => current * item, 1)
//   console.log(product)
// }

// multNums([2,4,5])


// let nums = [1,2,3,4]
// nums.forEach((value, index) => console.log(value))


// const sumNumbers = number => number + number

// function convertsReverse(str){
//   let reversed = str.split("").reverse().join("")
//   console.log(reversed)
// }

// convertsReverse("howdy")

// function disemvowel(str){
//   let newString = ""
//   let vowels = {
//     "a" : true,
//     "e" : true,
//     "i" : true,
//     "o" : true,
//     "u" : true,
//   }
//   for (let i=0; i<str.length; i++){
//     let letter = str[i].toLowerCase()
//     if (!vowels[letter]){
//       newString+= str[i]
//     }
//   }console.log(newString)
// }

// disemvowel("hello")


// let nums = [1,2,3,4,5]
// console.log(nums)
// let mini = Math.min(...nums)
// let max = Math.max(...nums)
// return(`${max} ${mini}`)

// function pow(x,n){
//     let result = x
//     for (let i = 1; i < n; i++){
//         result *= x
//     } console.log(result)
// }
// pow(2,3)

// function reversifyStr(str){
//     let newStr = str.split("").reverse().join("")
//     console.log((newStr))
// }

// reversifyStr("Hello")


// let sorted = arr.sort((a,b) => a-b)

// function randomize(){
//     let random = Math.floor(Math.random() * nums.length)
//     console.log(nums[random])
// }

// randomize()


// let size = 8
// let board = ""
// function addHash(){
//     for (let x=0; x<size; x++){
//         for (let y=0; y<size; y++){
//             if ((x+y)%2===0){
//                 board += " "
//             } else{
//                 board += "#"
//             }
//         }board += "\n"
//     } console.log(board)
// }

// addHash()

// nameOfArray.pop()

// function newArray(arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i]%2 ===0){
//             newArr.push(arr[i])
//         }
//     } console.log (newArr)
// }

// newArray(nums)


// for (const number of nums){
//     console.log(number)
// }

// let reduced = nums.reduce((acc, c) => acc * c,1)
// console.log(reduced)


// sorted = nums.sort((a,b) => b-a)
// console.log(sorted)

// function digitize(n) {
//     let x = n.toString()
//     let strX = (x.split("").reverse())
//     let numX = strX.map(str => Number(str))
//     return numX
//   }

//   console.log(digitize(89))

// let nums = [1,2,3,4,5]

// function reduction(arr){

// let sum = arr.reduce((acc, c) => acc + c, 0)
// console.log(sum)}

// reduction(nums)


// const CalculateArea = (width, height) => {
//   const area = width * height
//   return area
// }

// let sorted = nums.sort((a,b) => a-b)

// nums.forEach(item => {
//   console.log(item)
// })

// for (let i = 1; i < 20; i++){
//   if (i%3 === 0 && i%5 ===0){
//     console.log("FizzBuzz")}
//     else if (i%3 === 0){
//       console.log("Fizz")
//     }
//     else if (i%5 === 0){
//       console.log("Buzz")
//     }
//     else{
//       console.log(i)
//     }
//   }


// function findSmallestInt(arr){
//   let mini = Infinity
//  for (let i = 0; i < arr.length; i++){
//   if ((arr[i]) < mini){
//     mini = (arr[i])
//   } 
//  } console.log(mini)
// }

// findSmallestInt([2,4,6,1,-5])


// let sorted = arr.sort((a,b)=> (a-b))

// let reversed = array.split("").reverse().join("")


// console.log(nums.reduce((acc, c) => acc + c,0))

// let sorted = arr.sort((a,b)=> (a-b))


// function pow(x,n){
//     let result = x
//     for (let i = 1; i < n; i++){
//         result *= x
//     } console.log(result)
// }

// pow(2,4)

// let numbers = [2, 5, 9, 10]

// numbers.forEach(value=>{
//     console.log(value)
// })


// document.getElementById("purple").addEventListener("click", purpleParty)

// `${fName}, ${lName}`
// let newArray = []
// numbers.forEach(value=>{
    
//     if (value%2===0){
//         newArray.push(value)
//     }}
// )

// console.log(newArray)


// for (qty of numbers){console.log(qty)}

// let size = 8
// let grid=""

// function makeChess(){
// for (let x = 0; x<size; x++){
//     for (let y = 0; y<size; y++){
//         if ((x+y)%2===0){
//             grid+=" "
//         }
//         else{
//             grid+="#"
//         }
//     } grid +="\n"
// }console.log(grid)
// }

// makeChess()


// let size = 8
// let board = ""
// function addHash(){
//     for (let x=0; x<size; x++){
//         for (let y=0; y<size; y++){
//             if ((x+y)%2===0){
//                 board += " "
//             } else{
//                 board += "#"
//             }
//         }board += "\n"
//     } console.log(board)
// }

// addHash()

// for (item of numbers){console.log(item)}

// function purpleParty(){
//     document.querySelector("body").style.backgroundColor=purple;
// }

// function multiNums(arr){
//     let five = arr.reduce((acc, c) => acc * c, 1)
//     console.log(five)
// }

// multiNums(numbers)

// for (items of numbers){console.log(items)}

// console.log(numbers.sort((a,b) => b-a))

// document.querySelector(".check").addEventListener("click", check)

// const calculateArea = (width, height) => {
//     const area = width * height
//     return area
// }

// const calculateArea = (width, height) => {
//     const area = width * height
//     return area
// }

// let fruits = ["apples", "oranges", "bananas"]

// fruits.forEach (item => console.log(item))

// console.log("dog")

// function chess(){
// let grid = ""
// let size = 8
//     for (let x=0; x<size; x++){
//         for (let y=0; y<size; y++){
//             if ((x+y)%2===0){
//                 grid += "#"
//             }
//             else{
//                 grid += " "
//             }
//         }  grid += "\n"
//     } console.log(grid)
// } 

// chess()


// let animals = ["dogs", "cats", "mice"]
// animals.forEach(pet => console.log(pet))

// for (const pet of animals){console.log (pet)}

// let van = [2,5,6]
// let vanR = van.reduce((acc, c) =>{
//     return acc + c
// }, 0)

// console.log(vanR)

// for (const numbers of animals){console.log(numbers)}

// let numberList = [2, -45, 6, 20]
// let newList = []

// function min(list){
//     return(Math.min(...list))
// }

// function max(list){
//     return(Math.max(...list))
// }

// function findAverage(array){
//     if (array.length===0){
//       return 0
//     } else{
//       let sum = array.reduce((acc,c) => 
//       acc + c, 0)
//       let average = sum/array.length
//       return average
//       }
//   }

// console.log(findAverage(newList))

// function simpleMultiplication(number){
//     if (number%2===0){
//         number *= 8
//     } else{
//         number *= 9
//     }
//     return number

    // async function hello() {
    //     return await Promise.resolve("Hello");
    //   };
      
    //   hello().then(alert);
      

    // function century(year) {
    //   let cent = year/100
    //   if (Number.isInteger(cent)){
    //     return(cent)
    //   }
    //   else{
    //     return(Math.ceil(cent))
    //   }
    // }

    // let jumblyList = [1, 2, "a", "b", 3]

    // let result = jumblyList.filter(value => Number.isInteger(value))
    // return result

    // function isTriangle(n1,n2,n3){
    //   const isTriangle = (n1,n2,n3) => {
    //   if ((n1+n2 >n3) && (n1+n3 > n2) && (n2+n3 > n1)){
    //     return true
    //   }
    //   else{
    //     return false
    //   }
    // }

  

    // console.log(isTriangle(7,2,2))

    // const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    //   if (mpg * fuelLeft >= distanceToPump){
    //     return true;
    //   }
    //   else{
    //     return false;
    //   }
    // }

    // console.log(zeroFuel(50,25,2))


// let alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","s","t","u","w","x","y","z"]

//     function  isPangram(string){
//       let lower = string.toLowerCase()
//       console.log(lower)
//       let broken = lower.split("")
//       console.log(broken)
//       let pan = alpha.every(x => lower.includes(x))
//       console.log(pan)
//     }
//     isPangram("the quick brown fox jumps over the lazy dog")



// let beta = "better".split("")
    // function isBeta(string){
    //   let test = string.toLowerCase()
    //   let betatest=beta.every(x => test.includes(x))
    //   console.log (betatest)
    // }

  //   isBeta("bette life")

  // let alpha = "abcdefghijklmnopqrstuvwxyz".split

  // function isPangram(string){
  //   let lower = string.toLowerCase()
  //   let pan = alpha.every(x => lower.includes(x))
  //   return pan
  // }

// let myInput = ["apples", "bananas"]

//   function input(array){
//     if (myInput.includes("oranges")){
//       myInput.push("hello")
//     } else{
//       myInput.push("goodbye")
//     }
//     console.log(myInput)
//   }

// let testString = "ATTGC"

// function convertArray(string){
//   let stringToArray = string.split("")
//   return(stringToArray)
// }

// convertArray(testString)

// function DNAstrand(dna){
//   let output = []
//   for (let i = 0; i < dna.length; i++){
//     if (dna[i] === "A"){
//       output.push("T")
//     }
//     else if (dna[i] === "T"){
//       output.push("A")
//     }
//     else if (dna[i] === "C"){
//       output.push("G")
//     }
//     else if (dna[i] === "G"){
//       output.push("C")
//     }
//     else{
//       console.log(output)
//     }
//   } let finalOut = output.join("")
//   return(finalOut)
// } 

// DNAstrand(convertArray(testString))


// function findSum(num){
//   let x = 0;
//   for (let i = 0; i <=num; i++){
//     x += i
//   } console.log(x)
//   return x
// }
// findSum(10)

// let eleSum = elements.reduce((acc,c) => acc + c, 0)

// console.log(eleSum)

// console.log(findSum(10) - eleSum)

// let elements = [1,2,3,4,5,7,8,9,10]
// let lightning = [0,1,2,1,0]
// let rainbow = [1,2,3,4,3,2,1]
// let weather = [2,3,2]
// let cloud = []


// // function findEvenIndex(arr){
// //   let left = 0
// //   let right = 0
// //   if (arr.length === 0){
// //     console.log(-1)
// //   }

// //   for (let i = 0; i < arr.length; i++){
// //     right = arr.slice(i+1).reduce((acc,c) => acc+c,0)
// //     left = arr.slice(0,i).reduce((acc,c) => acc+c,0)
// //     if (right === left){
// //       console.log(`when i is ${i}, the element is ${arr[i]} left is ${left} and right is ${right}`)
// //       console.log(`${i} is the answer`)
// //       return i
// //     }
// //     else{
// //     console.log(`when i is ${i}, the element is ${arr[i]} left is ${left} and right is ${right}`)
// //       console.log("not this index")
// //     }
// // }}

// // findEvenIndex(elements)



// function findIndex(arr){
//   let left = 0
//   let right = 0
//   if (arr.length === 0){
//     return (-1)
//   }

//   for (let i = 0; i < arr.length; i++){
//     right = arr.slice(i+1).reduce((acc,c) => acc+c,0)
//     left = arr.slice(0,i).reduce((acc,c) => acc+c,0)
//     if (right === left){
//       return i
//     }
// } return -1
// }

// console.log(findIndex(rainbow))

// document.querySelector("h1").classList.


// function camelize(str){
// let splitStr = str.split("-")
// let mapSplit = splitStr.map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
// let finalWord = mapSplit.join("")
// console.log(finalWord)
// return(finalWord)
// }

// camelize("background-color")

// function filterRange(arr, a,b){
//   let filtered = arr.filter(x => (a <= x && x <= b))
//   console.log(filtered)
//   return (filtered)
// }

// let arr = [5, 3, 8, 1]
// filterRange(arr, 1, 4)

// function filterRangeInPlace(arr, a, b){
//   for (let i = 0; i < arr.length; i++){
//     if ((arr[i] < a) || (arr[i] > b)) {
//       arr.splice (i,1)
//     } 
//   } console.log(arr)
// }

// filterRangeInPlace(arr,1,4)


// arr.sort( (a,b) => b-a)
// console.log(arr)

// function copySorted(arr){
//   console.log(  ( arr.slice() ) .sort() )
// }

// copySorted(arr)


// let firstName = prompt("What is your first name?")
// let lastName = prompt("What is your last name?")
// console.log(`Your name is ${firstName} ${lastName}.`)

// let day = prompt("Pick a day of the week")
// let lowerDay = day.toLowerCase()
// if (lowerDay === "monday") {
//   console.log(`After ${lowerDay} is Tuesday`)
// }
// else if (lowerDay === "tuesday") {
//   console.log(`After ${lowerDay} is Wednesday`)
// }
// else if (lowerDay === "wednesday") {
//   console.log(`After ${lowerDay} is Thursday`)
// }
// else if (lowerDay === "thursday") {
//   console.log(`After ${lowerDay} is Friday`)
// }
// else if (lowerDay === "friday") {
//   console.log(`After ${lowerDay} is Saturday`)
// }
// else if (lowerDay === "saturday") {
//   console.log(`After ${lowerDay} is Sunday`)
// }
// else if (lowerDay === "sunday") {
//   console.log(`After ${lowerDay} is Monday`)
// }
// else{
//   console.log("You didn't put in a day of the week.")
// }

// let hours = Number(prompt("What is the hour?"))
// let minutes = Number(prompt("What are the minutes?"))
// let seconds = Number(prompt("What are the seconds?"))

// if ((hours > 23) || (hours <= 0)){
//   console.log("Hours don't make sense")
// }

// if ((minutes > 60) || (minutes <= 0)){
//   console.log("Minutes don't make sense")
// }

// if ((seconds > 60) || (seconds <= 0)){
//   console.log("Seconds don't make sense")
// }

// if ((minutes == 59) && (seconds == 59)){
//   if (hours == 23){
//     hours = 0
//   } else{
//     hours += 1
//   }
//   minutes = 0
//   seconds = 0
//   console.log(`${hours}h${minutes}m${seconds}s`)

// } else if (seconds == 59){
//   if (minutes == 59){
//     minutes = 0
//   } else{
//     minutes += 1
//   }
//   seconds = 0
//   console.log(`${hours}h${minutes}m${seconds}s`)
// }

// else{
//     console.log(`${hours}h${minutes}m${seconds+1}s`)
//     }

// let count = prompt("Give a number: ")

// for (let i = 1; i <= count; i++){
//   console.log(i)
// }

// let i = 1
// while (i <= count){
//   console.log(i)
//   i++
// }



// for (let i = 1; i <= count; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   }
//   else {
//     console.log(`${i} is odd`)
//   }
// }

// let askNum = Number(prompt("Guess a number: "))
// while (askNum > 9){
//   askNum = prompt("Go lower: ")
// }
// while (askNum < 2){
//   askNum = prompt("Go higher")
// }
// console.log(`${askNum} x 1 = ${Number(askNum) * 1}`)
// console.log(`${askNum} x 2 = ${Number(askNum) * 2}`)
// console.log(`${askNum} x 3 = ${Number(askNum) * 3}`)
// console.log(`${askNum} x 4 = ${Number(askNum) * 4}`)
// console.log(`${askNum} x 5 = ${Number(askNum) * 5}`)
// console.log(`${askNum} x 6 = ${Number(askNum) * 6}`)
// console.log(`${askNum} x 7 = ${Number(askNum) * 7}`)
// console.log(`${askNum} x 8 = ${Number(askNum) * 8}`)
// console.log(`${askNum} x 9 = ${Number(askNum) * 9}`)
// console.log(`${askNum} x 10 = ${Number(askNum) * 10}`)

// let answer = prompt("Give me a word: ")
// while ((answer.toLowerCase() != "yes") && (answer.toLowerCase() != "no")){
//   answer = prompt("Give me another word: ")
// }
// console.log("success!")


// let firstName = prompt("Enter first name: ")
// let lastName = prompt("Enter last name: ")
// function sayHello(firstName, lastName) {
//   const message = `Hello, ${firstName} ${lastName}!`;
//   return message;
// }
// console.log(sayHello(firstName, lastName))

// // Square the given number x
// function square1(x) {
//   return (x*x)
// }

// // Square the given number x
// const square2 = x => {return x*x}

// console.log(square1(0)); // Must show 0
// console.log(square1(2)); // Must show 4
// console.log(square1(5)); // Must show 25

// console.log(square2(0)); // Must show 0
// console.log(square2(2)); // Must show 4
// console.log(square2(5)); // Must show 25

// for (let i = 1; i <= 10; i++){
//   console.log(square1(i))
// }

// function showMin(a,b){
//   if (a < b){
//     console.log(a)
//   }
//   else if (a > b){
//     console.log(b)
//   }
//   else{
//     console.log("same number")
//   }
// }


// function calculate(a, op, b){
//   if (op === "+"){
//     return(a + b)
//   }
//   else if (op === "-"){
//     return(a - b)
//   }
//   else if (op === "*"){
//     return(a * b)
//   }
//   else if (op === "/"){
//     return(a / b)
//   }
// }

// console.log(calculate(4, "+", 6));  // Must show 10
// console.log(calculate(4, "-", 6));  // Must show -2
// console.log(calculate(2, "*", 0));  // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity

// function isAnagram(test, original){
//   let origSplit = original.toLowerCase().split("").sort().join("")
//   let testSplit = test.toLowerCase().split("").sort().join("")
//     if (origSplit === testSplit){
//       return true
//     }
//     else{
//       return false
//     }
//   }
// }

// isAnagram("DeathCubeK", "Buckethead")

// document.querySelector("#animeButton").addEventListener("click", magic)


// function magic(){
//   let linkstuff = document.querySelector("input").value
//   console.log("Magic happens")
//   console.log(linkstuff)
//   let animeID = linkstuff.split("/")[4]
//   console.log(animeID)
// }

// function sumDigits(num){
//   let numberArr = num.toString().split("")
//   for (let i = 0; i < numberArr.length; i++){
//       numberArr[i] = (parseInt(numberArr[i]))
//       console.log(numberArr)
//     }
//   let sum = numberArr.reduce((acc, c) => acc + c, 0)
//   console.log(sum)
//   return (sum)
// }



// function sumDigits(num){
//   let toInt = Math.abs(Number(num))
//   console.log(toInt)
//   let numberArr = toInt.toString().split("")
//     // for (let i = 0; i < numberArr.length; i++){
//     //     numberArr[i] = (parseInt(numberArr[i]))
//     //     console.log(numberArr)
//       // }
//     let sum = numberArr.reduce((acc, c) => +acc + +c, 0)
//     console.log(sum)
//     return (sum)
// }

// sumDigits(-23)

// function even_or_odd(number) {
//   let answer = (number%2 === 0) ? "Even" : "Odd"
//   return answer
// }

// console.log(even_or_odd(4))

// let passArr = [1, 2, 10, 50, 5]

// function solution(nums){
//   return passArr.sort(function(a,b){return a-b})
// }

// console.log(solution(passArr))


// function Calculator() {
//   this.methods = {
//     "-" : (a,b) => a - b,
//     "+" : (a,b) => a + b,
//   }
// }


// console.log( calc.calculate("3 + 7") ); // 10

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log( result ); // 8


// let mouse = {
// color : "black",
// brand : "microsoft",
// shape : "round",
// size : "small",

// leftClick(){
//   console.log("Left clicked")
// },

// rightClick(){
//   console.log("Right clicked.")
// },

// scrollWheel(){
//   console.log("scrolly")
// }
// }

// console.log(mouse)



// function Streetfighter(name, hairColor, outfit, shoes){
//   this.name = "Loli"
//   this.hairColor = "pink"
//   this.outfit = "dress"
//   this.shoes = "sneakers"
//   this.skill = function(){
//     console.log("Haiyaa!")
//   }
//   this.battleCry = function(){
//     console.log("I'm gonna win!")
//   }
// }


// let n = 123456
// let x = Array.from(String(n), Number)

// console.log(x)

// function removeChar(str){
// let str = ("chai").split("")
// console.log(str)
// str.splice(0,1)
// console.log(str)
// str.splice(str.length-1, 1)
// console.log(str)

// function removeChar(str){
//   let result = str.split("")
//   result.splice(0,1)
//   console.log(result)
//   result.splice(result.length-1, 1)
//   console.log(result)
//   return (result)
// }

// removeChar("bobby")

// function changeName(name){
// let array = name.split(" ")
// let first = array[0].split("")[0].toUpperCase()
// let last = array[1].split("")[0].toUpperCase()

// console.log(array)
// console.log(first)
// console.log(last)

// }

// changeName("robert pierce")
// //desired output: R.P

// function defineSuit(card){
//   if (card.includes(♣)){
//     return "clubs"
//   }
// }

// let sentence = "Is this a question?"
// if (sentence.includes("?")){
//   console.log("true")
// } else{
//   console.log("false")
// }

// let multWords = "I will be a jr. dev by the end of the year"
// multWords = multWords.replace("jr. dev", "software engineer")
// console.log(multWords)

// function rps(){
//   let result = Math.random()
//   if (result < 0.3333){
//     return ("rock")
//   } else if (result < 0.6666){
//     return ("paper")
//   } else {
//     return ("scissors")
//   }
// }
// rps()

// function play(move){
//   let computer = rps()
//   if ( ( move === "rock" && computer === "paper") ||
//   ( move === "scissors" && computer === "rock") ||
//   ( move === "paper" && computer === "scissors") )
//   {console.log (`Computer threw a ${computer}. You lose.`)

//   } else if ( move === "rock" && computer === "scissors"){
//     console.log (`Computer threw a ${computer}. You win!`)
//   } else if (( move === "scissors") && (rps() === "rock")){
//     console.log (`Computer threw a ${computer}. You lose.`)
//   } else if (( move === "scissors") && (rps() === "paper")){
//     console.log (`Computer threw a ${computer}. You win!`)
//   } else if (( move === "paper") && (rps() === "scissors")){
//     console.log (`Computer threw a ${computer}. You lose.`)
//   } else if (( move === "paper") && (rps() === "rock")){
//     console.log (`Computer threw a ${computer}. You win!`)
//   } else{
//     console.log("You tied.")
//   }
// } 

// play("scissors")

// let arNum = [2,4,6]
// let sumNum = arNum.reduce((acc, c) => acc + c, 0)
// console.log(sumNum)
// let squareNum = arNum.map(x => x**2)
// console.log(squareNum)

// function takesString(str){
//   return(str.split("").reverse().join(""))
// }

// function isPall(str){
//   if (str === takesString(str)){
//     console.log("true")
//   } else{
//     console.log("false")
//   }
// }

// isPall("leonoel")

// function MakeTony(charName, hairColor, shoeColor, numOfHands){
// this.name = charName
// this.hair = hairColor
// this.shoe = shoeColor
// this.numOfHands = 2
// this.shout = function(){
//   console.log("Hiya!")
// }
// this.skill = function(){
//   console.log("My skill!")
// }
// }

// let icyTony = new makeTony("Icy", "Blonde", "Red", "2")

// console.log(icyTony)

// /**
//  * Definition for isBadVersion()
//  * 
//  * @param {integer} version number
//  * @return {boolean} whether the version is bad
//  * isBadVersion = function(version) {
//  *     ...
//  * };
//  */

// /**
//  * @param {function} isBadVersion()
//  * @return {function}
//  */
//  var solution = function(isBadVersion) {
//   /**
//    * @param {integer} n Total versions
//    * @return {integer} The first bad version
//    */
//   return function(n) {
//       let left = 1
//       let right = n
//       while (left < right){
//         let mid = Math.floor (  (left + right) / 2  )
//         if (isBadVersion(mid)){
//           right = mid
//         } else{
//           left = mid + 1
//         }
//         }
//       }
//   };
// ;


// var search = function(nums, target) {
    
//   let left = 0,
//       right = nums.length-1,
//       mid
  
//   while (left < right){
//       mid = Math.floor( (left + right) / 2)
//       if (nums[mid] == target)
//           return mid
//       if (nums[mid] > target)
//           right = mid
//       else
//           left = mid
      
//   } return -1
// };

// console.log(search(nums, target))

// var search = function(nums, target) {
//   var lo = 0,
//       hi = nums.length - 1,
//       mid;

//   while (lo <= hi) {
//       mid = Math.floor((lo + hi) / 2);
//       if (nums[mid] == target)
//           return mid;
//       if (nums[mid] < target)
//           lo = mid + 1;
//       else
//           hi = mid - 1;
//   }

//   return -1;
// };

// let nums = [-1, 0, 3, 5, 9, 12]
// let target = 14

//  var searchInsert = function(nums, target) {
//   let left = 0,
//       right = nums.length,
//       mid;
//   while (left < right){
//       mid = left + Math.floor((right - left) / 2)
//       if (nums[mid] === target){
//         console.log(`${mid} is mid. ${left} is left and ${right} is right.`)
//           return mid
//       }else if (nums[mid] > target){
//         console.log(`${mid} is mid. ${left} is left and ${right} is right.`)
//           right = mid
//       } else{
//         console.log(`${mid} is mid. ${left} is left and ${right} is right.`)
//           left = mid+1
//       }
//   } return left
// };

// console.log(searchInsert(nums,target))



// 2, 3, 4, 5
// lo + ((hi - lo) / 2)

// 2 + 5 = 7 / 2 = 3
// 2 = 3

// let list = [1, 2, 3, 4, 5]
// // list.unshift(list.pop())
// // console.log(list)

// function rotate (arr, k){
//   for (let i = 0; i < k; i++){
//     arr.unshift(arr.pop())
//   }
// }

// rotate(list, 5)
// console.log(list)

// function accum(s){
//   s.split("")
//   let sLen = s.split("").length

// }

// const rotate = (nums, k) =>{
//   k%= nums.length

//   const reverse = (start,end) => {
//     while (start < end){
//       let temp = nums[start]
//       nums[start] = nums[end]
//       nums[end] = temp
//       start++
//       end--
//     }
//   }

//   reverse(0, nums.length-1)
//   reverse(0, k-1)
//   reverse(k, nums.length-1)
// }

// let logs = "stringhere"
// let blue = [1,2,3,4,5]

// function revMe(arr){
//     let start = 0
//     let end = arr.length-1
//     while (start < end){
//         let temp = arr[start]
//         arr[start] = arr[end]
//         arr[end] = temp
//         start++
//         end--
//     }
//     return arr
// }
// console.log(revMe(blue))

 
// let reverseWords = function(s) {
//   const reverse = (start,end) => {
//       while (start < end){
//       let temp = s[start]
//       s[start] = s[end]
//       s[end] = temp
//       start++
//       end--
//       }
//   }
  
  
  //convert input to array = ["Let's", "take", "LeetCode", "contest"]
//   let newS = s.split(" ")
//   console.log(newS)
  
//   //convert each element to another array [  ["L", "e", "t", "'", "s"] ]
  
//   for (let i = 0; i < newS.length; i++){
//       newS[i] = (revMe(newS[i].split(""))).join("")
//   }
  
//   console.log(newS.join(" "))
  
// };

// reverseWords("hello world")



// function spinWords(string){
//     //string = "Hey fellow warriors" // 
//   // = ["hey", "fellow", "warriors"] <-- I want this
//     // => ["hey", "wollef", "sroirraw"] <-- answer
//     let newS = string.split(" ")
//     for (let i = 0; i < newS.length; i++){
//       if (newS[i].length >= 5){
//         newS[i] = newS[i].split("").reverse().join("")
//       }
//     }
//     return newS.join(" ")
//   }

// //   console.log(spinWords("red riding hood"))



// fetch (`https://digimon-api.vercel.app/api/digimon/name/koromon`)
//     .then(res => res.json())
//     .then (data => {
//         console.log(data[0])
//         // document.querySelector("catImg").src=`https://cataas.com/${url}`


//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })




// names with spaces in it
// carousel of images

// picture of the day from NASA

// let colors = ["red", "yellow", "green"]
// let clothes = ["shirt", "pants", "socks"]

// function combineStr(arr1, arr2){
//     for (let i = 0; i < arr1.length; i++){
//         for (let j = 0; j < arr2.length; j++){
//             console.log(arr1[i], arr2[j])
//         }
//     }
// }

// combineStr(colors, clothes)


// let list = [-3, 2, 1, -5]

// let total = list.reduce (function(a,b){
//     return a+b
// }, 0)


// let sum = list.reduce(function(a,b){
//     return a+b
// },0)

// let final = list.reduce(function(a,b){
//     return a+b
// },0)

// let fin = list.reduce((a,b) => a+(b > 0 ? b : 0), 0)


// let filtered = list.map(function(x){
//     return x + 3
// })

// function squareDigits(num){
//     let val = num.toString().split("")    // convert to string so that I can turn into array with split
//     let newVal = val.map(function(x){      
//         return Number(x*x)                // made a new array, changing string to number and squaring it
//     })
//     return Number(newVal.join(""))      // used join to string it again, then change it back to number at the end
// }

// console.log(squareDigits(23))

// function fib(n) {
//     if (n > 2){
//         return (fib(n-1) + fib(n-2))
//     } else{
//         return 1
//     }
// }


// console.log(fib(5))
// total = 0
// let blah = [4,3,2]
// blah.sort((a,b) => a-b)
// function barista(arr){
//     for (let i = 0; i < arr.length; i++){
//         if ( i > 0){
//             arr.reduce()
//         else {
//             total+= arr[i]
//             console.log(total)
//         }
//     } return total
// }
// console.log(barista(blah))




    // function barista(coffees){
    //     coffees.sort((a,b) => a-b)
    //     let wait = (coffees.length - 1) * 2
    //     for (let i = 0; i < coffees.length; i++){
    //         if (i > 0) {
    //             return coffees[]
    //         }
    //         else {
    //             return coffees[i]
    //         }
    //     }

    //     return time
    //   }



//     function solution(number){
//         let sum = 0
//         if (number < 0){
//             return 0}
//         else{
//             for (let i = 0; i < number; i++){
//             if ((i%3===0) && (i%5)){
//                 sum += i
//             } else if (i%3===0){
//                 sum += i
//             } else if (i%5===0){
//                 sum += i
//             }
//         }
//         return sum
//     }
// }

//     console.log(solution(6))



// function accum(s) {
//     let arr = []
//     for (let i = 0; i < s.length; i++){

//     }

//     function format(s,num){
//         let letter = s.toUpperCase()

//         while (letter.length !== num){
//             letter += s.toLowerCase()
//         }
//     } return letter

// }

// console.log(accum("abcd"))

// let newList = ["dog", "cat", "rabbit", "fox"]

// const filtList = newList.filter((x, i) => x[0] ==="d", i)

// console.log(filtList)

// class EspressoMachineName{
//     constructor(color, size, model, price){
//         this.color = color
//         this.size = size
//         this.model = model
//         this.price = price
//     }
//         turnOn(){
//             console.log("turn on")
//         }
//         turnOff(){
//             console.log("turn off")
//         }
//         brew(){
//             console.log("begin brewing")
//         }
//     }


// class EspressoMachine{
//     constructor(color, make, model, price){
//         this.color = color
//         this.make = make
//         this.model = model
//         this.price = price
//     }
// }

// let blah = new EspressoMachineIcy("red", "small", "Gaggia", 40)

// class Animal{
//     constructor(size, color, gender){
//         this.size = size
//         this.color = color
//         this.gender = gender
//     }
// }



// import React from "react"
// import ReactDOM from "react-dom"

// const green = "#39D1B4"
// const yellow = "#FFD712"

// class Toggle extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {color: green}
//         this.changeColor = this.changeColor.bind(this)
//     }

//     changeColor(){
//         const color = this.state.color == green ? yellow : green;
//         this.setState({color: color})
//     }

//     render(){
//         return(
//             <div style = {{ background: this.state.color}}>
//                 <h1>
//                     Change color
//                 </h1>
//                 <button onClick = {this.changeColor}>
//                     Change color
//                 </button>
//             </div>
//         )
//     }
// }



// ReactDOM.render(
//     <Toggle />,
//     document.getElementById("app")
// )


// import React from "react"
// import ReactDOM from "react-dom"

// const green = "#39D1B4"
// const yellow = "#FFD712"

// class Toggle extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {color: green}
//         this.changeColor = this.changeColor.bind(this)
//     }

//     changeColor(){
//         const color = this.state.color = green ? yellow : green
//         this.setState( {color: color})
//     }

//     render(){
//         return(
//             <div style = {{ background: this.style.color}}>
//                 <h1>
//                     Change color!
//                 </h1>
//                 <button onclick = {this.changeColor}>
//                     Click to change
//                 </button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Toggle />,
//     document.getElementById("app")
// )

// const Toggle = () => {

// }

// TASK LIST

// import React from "react"

// export default function TasksList({ allTasks, handleDelete}) {
//     return(
//         <ul>
//             {allTasks.map( ({title, description, id}) => (
//                 <li key = {id}>
//                     <div>
//                         <h2>
//                             {title}
//                         </h2>
//                         <button onClick = {() => handleDelete(id)}>
//                             X
//                         </button>
//                     </div>
//                     {!description ? null : <p>{description}</p>}
//                 </li>
//             ))}
//         </ul>
//     )
// }

// import React from "react"

// export default function TasksList({allTasks, handleDelete}){
//     return(
//         <ul>
//             {allTasks.map( ({title, description, id}) => (
//                 <li key={id}>
//                     <div>
//                         <h2>
//                             {title}
//                         </h2>
//                         <button onClick = {() => handleDelete(id)}>
//                             X
//                         </button>
//                     </div>
//                     {!description ? null : <p>{description}</p>}
//                 </li>
//             ))}
//         </ul>
//     )
// }


// import React, { Component } from "react"

// export default class AppClass extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             newTask: {},
//             allTasks: []
//         }
//     }

//     handleChange( {target} ){
//         const { name, value } = target
//         this.setState( (prevState) => ({
//             ...prevState,
//             newTask: {
//                 ...prevState.newTask,
//                 [name]: value,
//                 id: Date.now()
//             }
//         }))
//     }
// }

// import React, {useState} from "react"


// function Counter ({ initialCount }) {
//     const [count, setCount] = useState(initialCount)
//     return(
//         <div>
//             Count: {count}
//             <button onClick={()=> setCount(initialCount)}>
//                 Reset
//             </button>
//             <button onClick={() => setCount( (prevCount) => prevCount +1)}>
//                 +
//             </button>
//             <button onClick={() => setCount( (prevCount) => prevCount -1)}>
//                 -
//             </button>
//         </div>
//     )
// }


// function Counter ({initialCount}){
//     const [count, setCount] = useState(initialCount)
//     return(
//         <div>
//             count: {count}
//             <button onClick={() => setCount(initialCount)}>
//                 Reset
//             </button>
//             <button onClick={() => setCount( (prevCount) => prevCount +1)}>
//                 +
//             </button>
//             <button onClick={() => setCount( (prevCount) => prevCount -1)}>
//                 -
//             </button>
//         </div>
//     )
// }

// import React, { useState } from "react"

// const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"]

// export default function personalPizza() {
//     const [selected, setSelected] = useState([])
// }

// const toggleTopping = ({target}) => {
//     const clickedTopping = target.value
//     setSelected( (prev) => {
//         if (prev.includes(clickedTopping)){
//             return prev.filter(t => t !== clickedTopping)
//         } else{
//             return [clickedTopping, ...prev]
//         }
//     })
// }

// const toggleTopping = ({target}) =>{
//     const clickedTopping = target.value
//     setSelected((prev) => {
//         if (prev.includes(clickedTopping)){
//             return prev.filter(t => t !== clickedTopping)
//         } else{
//             return [clickedTopping, ...prev]
//         }
//     })
// }

// import React, {useState} from "react"

// function Counter(){
//     const [count, setCount] = useState(0)

//     return(
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick = {() => setCount(count+1)}>
//                 Click
//             </button>
//         </div>
//     )
// }

// export default function PersonalPizza() {
//     const [selected, setSelected] = useState([]);
   
//     const toggleTopping = ({target}) => {
//       const clickedTopping = target.value;
//       setSelected((prev) => {
//         if (prev.includes(clickedTopping)) {
//           return prev.filter(t => t !== clickedTopping);
//         } else {
//           return [clickedTopping, ...prev];
//         }
//       });
//     };

// function findOdd(arr){
//   count = 0
//   arr.sort((a,b) =>a-b )
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] === arr[i+1]){
//       count++
//     } else{
//       count++
//       if (count%2!=0){
//         return arr[i]
//       }
//     }
//   }
// }


// let arrayList = [2,2,2,2,2,2,3,2,2,2,2]

// console.log(findOdd(arrayList))


// function recSum(num){
//   if (String(num).length > 1){
//     let result = Array.from(String(num), Number)
//     let newRe = result.reduce( (acc, c) => acc + c, 0)
//     recSum(newRe)
//   }
//   else{
//     return num
//   }
// }

// function recuSum(num){
//     result = Array.from(String(num), Number)
//     let newRe = result.reduce( (acc,c) => acc+c, 0)
//     if (newRe < 10){
//     return newRe
//     }
//     else{
//       return recuSum(newRe)
//     }
//   }




// console.log(recuSum(6192))

// function arf(num){
//   return Array.from(String(num))
// }

// console.log(arf("car"))

// let arrA = [1,3,4]
// let arrB = [1,3]

// function question(arr){
//   if (arr === []){
//     console.log("hi")
//   }
//   else {
//     console.log ("bye")
//   }
// }

// // question(arrA)

// function arrayDiff(arr1, arr2){
//   let set = new Set()
//   let setB = new Set()
//   let finArr = []
//   if ((arr1.length===0) || (arr2.length===0)){
//     return finArr
//   } else{

//   for (let i = 0; i < arr1.length; i++){
//     set.add(arr1[i])
//   }
//   for (let j = 0; j < arr2.length; j++){
//     setB.add(arr2[j])
//     if (!set.has(arr2[j])){
//       finArr.push(arr2[j])
//     }
//   }
//   for (let i = 0; i < arr1.length; i++){
//     if (!setB.has(arr1[i])){
//       finArr.push(arr1[i])
//     }
//   }
  
//  return finArr
// }}

// // console.log(arrayDiff(arrA, arrB))

// function diffArray(arr1, arr2){
//   let finArr=[]
//   for (let i = 0; i < arr1.length; i++){
//     if (arr2.indexOf(arr1[i]) < 0){
//       finArr.push(arr1[i])
//     }
//   } return finArr
// }

// console.log(diffArray(arrA, arrB))

// let arr = "1 2 3 4 5"

// function highAndLow(numbers){
//   let result = []
//   let str = numbers.split(" ")
//   let nums = str.map((x) => Number(x))
//   nums.sort( (a,b) => a-b)
//   result.push(nums[nums.length-1])
//   result.push(nums[0])
//   return result.join(" ")
// }

// console.log(highAndLow(arr))

// function likes(names) {
//   if (names.length === 0){
//     return "no one likes this"
//   } else if (names.length === 1){
//     return `${names[0]} likes this`
//   } else if (names.length === 2){
//     return `${names[0]} and ${names[1]} like this`
//   } else if (names.length === 3){
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   } else if (names.length > 3){
//     return `${names[0]}, ${names[1]}, and ${names.length-2} others like this`
// }
// }

// const findTarget = (head, target) => {
//   let current = head
//   while (current !== null){
//     if (current.val === target){
//       return true
//     } else{
//       current = head.next
//     }
//   } return false
// }

// const findTarg = (head, target) => {
//   if (head === null) return false
//   if (head.val === target) return true
//   return findTarg(head.next, target)
// }

// const searchIndex = (head, index) =>{
//   let current = head
//   let count = 0
//   while (count !== null){
//     if(count === index) return current.val
//     current = current.next
//     count++
//   } return null
// }

// import React, { useState } from "react";
// import NewTask from "../Presentational/NewTask";
// import TasksList from "../Presentational/TasksList";

// export default function AppFunction() {
//   const [newTask, setNewTask] = useState({});
//   const handleChange = ({ target }) => {
//     const { name, value } = target;
//     setNewTask((prev) => ({ 
//       ...prev, 
//       id: Date.now(), 
//       [name]: value 
//     }));
//   };

//   const [allTasks, setAllTasks] = useState([]);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!newTask.title) return;
//     setAllTasks((prev) => [newTask, ...prev]);
//     setNewTask({});
//   };
//   const handleDelete = (taskIdToRemove) => {
//     setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
//   };

//   return (
//     <main>
//       <h1>Tasks</h1>
//       <NewTask
//         newTask={newTask}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//       />
//       <TasksList allTasks={allTasks} handleDelete={handleDelete} />
//     </main>
//   );
// }



// export default function AppF(){
//   const [newTask, setNewTask] = useState({})
//   const handleChange = ({target}) => {
//     const [name, value] = target
//     setNewTask((prev) => ({...prev, id: Date.now(), [name]: value}))
//   }

//   const [allTasks, setAllTask] = useState([])
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     if (!newTask.title) return
//     setAllTask((prev) => {
//       [newTask, ...prev]
//     })
//     setNewTask({})
//   }

//   const handleDelete = (taskIdToRemove) => {
//     setAllTasks( (prev) => prev.filter( (task) => task.id !== taskIdToRemove))
//   }
// }

// let alpha = "abcdefghijklmnopqrstuvwxyz"

// const alphabetPosition = (text) => {
//     newArr=[]
//     let newStr = ""
//     let alpha = "abcdefghijklmnopqrstuvwxyz"
//     let str = text.toLowerCase().split(" ").join("")
//     for (let i = 0; i<str.length; i++){
//         // newStr = str.charAt(i).toLowerCase()
//         if (alpha.indexOf(str[i]) > -1){
//         newArr.push(alpha.indexOf(str[i])+1)
//         }
//     } return newArr.join(" ")
// }

// console.log(alphabetPosition("Book!"))

// const alphaPos = (text) => {
//   let str = []
//   let alpha = "abcdefghijklmnopqrstuvwyz"
//   // Change sentence to one with no spaces and lower case
//   let phrase = text.toLowerCase().split(" ").join("")
//   for (let i = 0; i < phrase.length; i++){
//     if (alpha.indexOf(phrase[i]) > -1 ) {
//       str.push(alpha.indexOf(phrase[i])+1)
//     }
//   } return str
// }

// console.log(alphaPos("book"))

// let getMiddle = (word) => {
//   let answer = []
//   let length = word.length
//   if (length%2 ===0){
//     answer.push(word.charAt(length/2-1))
//     answer.push(word.charAt(length/2))
//     return answer.join("")
//   }
//   else{
//     answer.push(word.charAt((length-1)/2))
//     return answer.join("")
//   }
// }

// console.log(getMiddle("testing"))


// Head.next = Prev
// Prev = Head
// head = head.next

// const date = new Date(document.getElementById("dateField").value)

// console.log(date.getTimezoneOffset)

// let d= new Date()
// localTime = d.getTime()
// // console.log(localTime)
// // localOffset = d.getTimezoneOffset() * 60000
// // console.log(localOffset)


// const dog = 2
// const cat = 4

// const rabbit = (num1, num2) => {
//   return dog * cat
// }

// // console.log(rabbit())

// console.log(d.getTime())
// console.log(d)

// function joinElements (array, joinString) {
//   function recurse(index, resultSoFar){
//     resultSoFar += array[index]

//     if (index === array.length-1){
//       return resultSoFar
//     } else{
//       return recurse(index + 1, resultSoFar + joinString)
//     }
//   }
//   return recurse(0,"") + "e"
// }

// console.log(joinElements(["s", "cr", "t cod"], "e"))


// function joinMyEle (array, joinString){
//   let resultSoFar = ""
//   for (let i = 0; i < array.length; i++){
//     resultSoFar+= array[i] + joinString
//   }

//   return resultSoFar
// }

// console.log(joinMyEle(["s", "cr", "t cod"], "e"))


//build a recursive factorial function

// function recurse(n){
//   if (n===0){
//     return 1
//   }
//   else if (n > 0){
//     return n * recurse(n-1)
//   }
// }

// console.log(recurse(4))

// 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4!

// function binS(arr, target){
//   let l = 0
//   let r = arr.length-1

//   if (arr.length === 1){
//     if (arr[0] === target){
//       return 0
//     } else{
//       return -1
//     }
//   }

//   while (l < r){
//     let mid = l + ((r-l)/2)
//     let midVal = arr[mid]

//     if (midVal === target){
//       return mid
//     }

//     else if(midVal > target){
//       r = mid
//     }

//     else{
//       l = mid
//     }
//   }

//   return -1
// }

//write a recursive function that does a linear search through array for a target #



// function linearSearch(list, item){
//   let index = -1

//   list.forEach( (listItem, i) => {
//     if (listItem === item){
//       index = i
//     }
//   })
//   return index

// }

// console.log(linearSearch([2,6,7,90,103], 6))


// function numMap(arr){
//   return arr.map( (element, index) => {
//     return `${index+1}: ${element}`
//   })
// }

// console.log(numMap(["a", "b", "c"]))


// const characters = [
//   {
//       name: 'Luke Skywalker',
//       height: 172,
//       mass: 77,
//       eye_color: 'blue',
//       gender: 'male',
//   },
//   {
//       name: 'Darth Vader',
//       height: 202,
//       mass: 136,
//       eye_color: 'yellow',
//       gender: 'male',
//   },
//   {
//       name: 'Leia Organa',
//       height: 150,
//       mass: 49,
//       eye_color: 'brown',
//       gender: 'female',
//   },
//   {
//       name: 'Anakin Skywalker',
//       height: 188,
//       mass: 84,
//       eye_color: 'blue',
//       gender: 'male',
//   },
// ];

// const nameGreaterThanFour = characters.filter( (blah) => {
//   return blah.name.includes("u")
// })

// console.log(nameGreaterThanFour)

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
//  var isValid = function(s) {
//   let brackets = {
//       "(" : ")",
//       "[" : "]",
//       "{" : "}"
//   }
//   let stack = []
//   for (let char of s){
//      if (brackets[char]){
//          stack.push(brackets[char])
//          console.log(`after pushing: ${stack}`)
//      } else{
//          if (stack.pop() !== char){
//              console.log(`after popping: ${stack}`)
//              return false
//          }
//      }
//   }
//   return (!stack.length)
  
// }
  
  //stack = (

    function largestComponent(graph){
        let maxCount = 0
        let visited = new Set()
        
        for (node in graph){
            if (explore(graph, node, visited) === true){
                maxCount = Math.max(count, maxCount)
            }
        } return maxCount
    }
    
    
    function explore(graph, current, visited){
        if (visited.has(current)){
            return false
        }
        visited.add(current)
        
        for (let neighbor of graph[current]){
            if (explore(graph,neighbor,visited) === true){
                count++
            }
        } return count
        
    }