// const toDo = prompt('Enter a to-do to add to your to-do list')
// let truer=true;
// while (toDo.toLowerCase == 'quit') { break }
// const listOfToDo = []
// while (toDo.toLowerCase == 'new') {
//     let i = 0
//     while (i == true) {

//     }
// }

// let maxNum = parseInt(prompt('Enter maximum number:'));
// while (!maxNum) {
//     maxNum = parseInt(prompt('Enter maximum number:'));
// }
// num = Math.floor(Math.random * maxNum) + 1
// let guessedNum = prompt('Enter first guess:')
// while (parseInt(guessedNum) !== num) {
//     if (guessedNum > num) {
//         console.log('Number too large')
//         guessedNum = prompt('Number too large enter another guess:');
//     }
//     else if (guessedNum < num) {
//         console.log('Number too small')
//         guessedNum = prompt('Number too small enter another guess:');
//     }
// }
// if (!parseInt(guessedNum)) {
//     console.log('You Quit! Loser!')
// }
// else {
//     console.log('You Win!')
// }

// let inputSer = prompt('What do you want to do?')
// while (inputSer.toLowerCase !== 'q') {
//     let inputSer = prompt('What do you want to do?')
//     let listerObjecter = {}
//     while (true) {
//         if (inputSer.toLowerCase == 'new') {
//             let toDo = prompt('Enter the work')
//             let i = 0;
//             while (toDo.toLowerCase !== 'q') {                     wrong kuttay da putra
//                 i++;
//                 listerObjecter[i] = toDo
//             }
//         }
//         else if (toDo.toLowerCase === 'q') {
//             break
//         }
//     }
// }

// let inputer = prompt('dont fuck it up')
// listed = ['fuck it up', 'fuck it up again']
// while (inputer != 'quit' || inputer == 'new') {
//     inputer = prompt('whaddaya want to do')
//     if (inputer == 'list') {
//         console.log('*****************')
//         for (i = 0; i <= listed.length; i++) {
//             console.log(`${i}: ${listed[i]}`)
//         }
//         console.log('*****************')
//     }
//     else if (inputer == 'delete') {
//         inputer = parseInt(prompt('Insert index you want dead from the list'))
//         if (listed.splice(inputer, 1) !== NaN) {
//             listed.splice(inputer, 1)
//         }
//         else {
//             console.log('Enter a Valid Index')
//         }
//     }
//     else if (inputer == 'new') {
//         inputer = prompt('Enter what you want added to list')
//         listed.push(inputer)
//     }
// }

// DEFINE YOUR FUNCTION:
// function rant(message) {
//     let message=messsage.toUpperCase()
//     console.log(mg)
//     console.log(mg)
//     console.log(mg)
// }

// function isSnakeEyes(a, b) {
//     if (a === 1 && b === 1) {
//         console.log('Snake Eyes!')
//     }
//     else { console.log('Not Snake Eyes!') }
// }

// DEFINE YOUR FUNCTION BELOW:
// function lastElement(lst) {
//     if (lst !== undefined) {
//         return lst[lst.length - 1]
//     }
//     else {
//         console.log('null')
//     }
// }

// DEFINE YOUR FUNCTION BELOW:
// function cApitalize(strName) {
//     let neW = strName[0].toUpperCase()
//     neW = neW + strName.slice(1, strName.length)
//     return neW
// }

// function sumArray(lst) {
//     let no = 0
//     for (i = 0; i < lst.length; i++) {
//         no += lst[i]
//     }
//     return no
// }

// function returnDay(numBa) {
//     if (numBa > 0 && numBa <= 7) {
//         if (numBa == 1) {
//             return 'Monday'
//         }
//         else if (numBa == 2) {
//             return 'Tuesday'
//         }
//         else if (numBa == 3) {
//             return 'Wednesday'
//         }
//         else if (numBa == 4) {
//             return 'Thursday'
//         }
//         else if (numBa == 5) {
//             return 'Friday'
//         }
//         else if (numBa == 6) {
//             return 'Saturday'
//         }
//         else if (numBa == 7) {
//             return 'Sunday'
//         }
//     }
//     else {
//         return null
//     }
// }

// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         this.eggCount += 1
//         return 'EGG'
//     }
// }
// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount

// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// Write your code here
const firstNames = fullNames.map(function (name) {
    return name.first
})