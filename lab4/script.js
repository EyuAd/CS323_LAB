
//exercise 1
var num =7;
 let num2=12;
const num3=3;

num=4;
num2=13;
//num3=5;

console.log("num after reassignment:  "+num);
console.log('num 2 after reassignment: '+num2);

num

var num =8;// will work
//let num2 =5//will not work

//exercise 2

function scopeDemo()
{
    var funNum = 'var'
    let funNum2= 'num'
    if(true){
        let funNum2='nested var'
        console.log('inside if block var: '+funNum)
         console.log('inside if block let: '+funNum2) 
    }
        console.log('outside if block var: '+funNum)
        console.log('outside if block let: '+funNum2) 
}

scopeDemo();


//exercise 3

for (let i=0; i<5; i++){
    if(i%2==0){
        console.log(i*2);
    }
    else{
        console.log(i);
    }
}  




//even or odd

function checkeven(num){
    if(num%2==0){
        console.log(num + " is even");
    }
    else{
        console.log(num + " is odd");
    }

}

checkeven(4);


//reverse a word

function reverseWord(word){
    let reversed = '';  
    for(let i=word.length-1; i>=0; i--){
        reversed += word[i];
    }
    console.log(reversed);
}
reverseWord('hello');

//find the largest number in an array

function findLargest(arr) {         
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }   
    console.log("Largest number in the array is: " + largest);
}
findLargest([3, 5, 7, 2, 8, 1]);

//Write a function that takes a string and returns how many vowels it contains.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log("Number of vowels in the string: " + count);
}
countVowels('abebe')

//Write a function that takes a number and prints its multiplication table up to 10.
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplicationTable(10)

//Write a function that takes an array and returns a new array with all duplicate elements removed.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


//Write a function that takes a number and returns the sum of its digits
function sumOfDigits(num) {
    let sum = 0;
    let strNum = Math.abs(num).toString();
    for (let digit of strNum) {
        sum += Number(digit);
    }
    return sum;
}
console.log(sumOfDigits(1234)); 

//Write a function that takes a string and returns true if it is a palindrome, and false otherwise.
function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));

//Write a function that takes a sentence and returns the longest word.
function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord("The quick brown fox jumps over the lazy dog"));

//Write a function that takes a string and returns an object showing how many times each character appears in it

function charCount(str) {
    const count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}
console.log(charCount("hello world"));

/*
Join Two Arrays by ID

Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.

If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
*/

function joinArraysById(arr1, arr2) {
    const map = new Map();

    for (const obj of arr1) {
        map.set(obj.id, { ...obj });
    }

   
    for (const obj of arr2) {
        if (map.has(obj.id)) {
            map.set(obj.id, { ...map.get(obj.id), ...obj });
        } else {
            map.set(obj.id, { ...obj });
        }
    }

 
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
}

// Example usage:
const arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 4 }
];
const arr2 = [
    { id: 2, y: 5 },
    { id: 3, z: 6 }
];

console.log(joinArraysById(arr1, arr2));

