// Code your solution in this file!
const drivers= ['Antonio','Nuru','Amari','Mo'];

function returnFirstTwoDrivers(array){
    let newArray;
    return newArray = [...array.slice(0,2)];
};

function returnLastTwoDrivers(array){
    let newArraylast;
    return newArraylast = [...array.slice(2,4)]
};

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

  function createFareMultiplier(multiplier){
    let fare = 5
    return function (){
        return fare*multiplier
    }
  }

createFareMultiplier(6,7);

function fareDoubler(fare){
    return fare*2
}

function fareTripler(fare){
    return fare*3
}

function selectDifferentDrivers(arrayOfDrivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}