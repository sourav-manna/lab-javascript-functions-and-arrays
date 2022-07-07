// Progression #1: Greatest of the two numbers
function  greatestOfTwoNumbers(num1,num2){
  return Math.max(num1,num2)
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(arr){
    if (arr.length == 0){
      return null
    }else{
      maxx = ""
      for(var i = 0; i<arr.length; i++){
        if (arr[i].length>maxx.length){
          maxx = arr[i]
        }
      }
      return maxx
    }
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(arr){
  sum = 0
  for(var i = 0; i<arr.length; i++){
    sum += arr[i]
  }
  return sum
}

// Progression #4: Calculate the average
function add(arr){
  let sum = 0
  for(var i = 0; i<arr.length; i++){
    if( typeof arr[i] === "object"){
      throw new Error("Unsupported data type sir or ma'am");
    }
    else if (typeof arr[i] == "number") {
      sum += arr[i];
    } else if (arr[i] === true || arr[i] === false) {
      sum = arr[i] === true ? sum + 1 : sum + 0;
    } else {
      sum += arr[i].length;
    }
  }
  return sum
}
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arr){
  if (arr.length == 0){
    return null;
  }else{
    let sum = 0
    for(var i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum/arr.length
  }
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arr){
  if (arr.length == 0){
    return null;
  }else{
    let sum = 0
    for(var i=0;i<arr.length;i++){
        sum += arr[i].length
    }
    return sum/arr.length
  }
}

function avg(arr){
  if (arr.length == 0){
    return null;
  }else{
    let sum = 0
    let c = 0
    for(var i=0;i<arr.length;i++){
      if (typeof arr[i] == "number") {
        sum += arr[i];
      } else if (arr[i] === true || arr[i] === false) {
        sum = arr[i] === true ? sum + 1 : sum + 0;
      } else {
        sum += arr[i].length;
      }
    }
    return parseFloat((sum / arr.length).toFixed(2));
  }
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(arr){
  if (arr.length == 0){
    return null;
  }
  else{
    let outputArray = Array.from(new Set(arr))
    return outputArray
  }
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(arr,r){
  if (arr.length == 0){
    return null;
  }else{
    for(var i=0;i<arr.length;i++){
      if (r == arr[i]){
        return true;
      }
    }
  }
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(arr, word){
  let count = 0
  if (arr.length == 0){
    return 0;
  }else{
    for(var i=0;i<arr.length;i++){
      if (word == arr[i]){
        count += 1
      }
    }
    return count;
  }
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(arr){
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
      if (arr[i][j] != 1){
        break;
      }
    }
  }return 1;
}
    

