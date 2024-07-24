/* 
🌟 APP: Tip Calculator

These are the 3 functions 
=========================================
calculateBill()
increasePeople()
decreasePeople()*/

let billinput = document.getElementById('billTotalInput')
let tipinput = document.getElementById('tipInput')
let people = document.getElementById('numberOfPeople')
let perperson = document.getElementById('perPersonTotal')
// Get number of people from number of people div
let nofpeople = Number(people.innerText)

// ** Calculate the total bill per person **
const calculateBill = () =>{
  // get bill from user input & convert it into a number
  let bill = Number(billinput.value)
console.log(bill)
 // get the tip from user & convert it into a percentage (divide by 100)
  let tipPercentage=Number(tipinput.value)/100
console.log(tipPercentage)
// get the total tip amount
 let totalTip=Number(bill*tipPercentage)
  console.log({totalTip})
  // calculate the total (tip amount + bill)
  let total=Number(totalTip+bill)
  console.log({total})

  // calculate the per person total (total divided by number of people)
let perPersonTotal=Number(total/nofpeople)
  console.log({perPersonTotal})

  // update the perPersonTotal on DOM & show it to user
perperson.innerText=`$${perPersonTotal.toFixed(2)}`//to fix 2 decimal places
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  nofpeople+=1

  // update the DOM with the new number of people
 people.innerText=nofpeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (nofpeople<=1){
    throw 'You cannot enter less than 1 person'
    return 
  }
  // decrement the amount of people
  nofpeople-=1
// update the DOM with the new number of people
  people.innerText=nofpeople

  // calculate the bill based on the new number of people
  calculateBill()
}
