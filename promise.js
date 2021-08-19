const drive = new Promise((resolve, reject) => {
  let age = 10;
  if (age > 18) {
    resolve("eligible for drive");
  } else {
    reject("Not eligible");
  }
});
drive
  .then((msg) => msg + " welcome dude")
  .then((newObj) => console.log(newObj))
  .catch((errMsg) => console.log(errMsg)); //always returns promise object
console.log(drive); //type- promise state (3states) - promise result. 
//1.reject 
//2.fulfill
//3.pending



let numbers = [1, 2, 3, 4, 5]
  .map((add) => add + 2)
  .filter((fil) => fil > 5) //returns array type
  .map((mul) => mul * 3); //chaining method;
console.log(numbers);
