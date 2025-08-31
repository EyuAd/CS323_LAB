//Functions
//Exercise 1
// Write a regular function calculateDiscount that takes price and discountPercent (e.g., 20 for 20%) and returns the discounted price. Create an arrow function formatPrice that takes a price and returns it as a string like "$X.XX". Use an anonymous function to log the result of calculateDiscount(100, 25) through formatPrice.
function calculateDiscount(price,discountpercent){
return price - price*discountpercent/100
}
console.log(calculateDiscount(100,20))
//Array
//Exercise 2
//Create an array of 5 favorite books. Use splice to replace the second book with a new one and push to add another. Use forEach to log each book with its index

var books = ['lord of the rings' , 'Naruto','onePiece','lost','annabel']
books.splice(1,1,'bleach')
console.log(books[1]);
books.push('the hobbit');
books.forEach((books,index)=>{
    console.log(books);
});

//Exercise 2
// Write a function that takes an array of numbers, uses slice to get the last three elements, and calculates their product using a loop. Log the product. Test with [2, 4, 6, 8, 10].

function productOfLastThree(arr) {
    const lastThree = arr.slice(-3);
    let product = 1;
    for (let i = 0; i < lastThree.length; i++) {
        product *= lastThree[i];
    }
    console.log(product);
}
productOfLastThree([2, 4, 6, 8, 10]);

//Objects
//Exercise 1
//Create an object for a movie with title, year, genres (array), and a method info returning "Title (Year): Genres". Update the year and add a director property. Call info.

let movie = {
    title: "Inception",
    year: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    info: function() {
        return this.title +' '+ this.year + ' :' + ' '+this.genres.join(", ");
    }
};

movie.year = 2012;
movie.director = "Christopher Nolan";
console.log(movie.info());

////Exercise 2
//Create a playlist object with a songs array and a method addSong that pushes a song and logs the updated array. Call addSong twice and use Object.keys to log all properties.

let playlist = {
    songs: [],
    addSong: function(song) {
        this.songs.push(song);
        console.log(this.songs);
    }
};

playlist.addSong("Song 1");
playlist.addSong("Song 2");
console.log(Object.keys(playlist));

//Constructors and Classes
 //Exercise 1
//Define a class Vehicle with type and speed properties and a method move returning "Type moves at Speed mph". Create a constructor Bicycle with the same properties/method. Create one instance of each and call move.

class Vehicle {
    constructor(type, speed) {
        this.type = type;
        this.speed = speed;
    }
    move() {
        return this.type + 'moves at '+this.speed+ 'mph';
    }
}

function Bicycle(type, speed) {
    this.type = type;
    this.speed = speed;
    this.move = function() {
        return this.type+ 'moves at '+this.speed+'mph';
    };
}

const car = new Vehicle("Car", 60);
const bike = new Bicycle("Bicycle", 15);

console.log(car.move(), bike.move());

 //Exercise 2
//Create a class Pet with name and type, and a method describe returning "Name is a Type". Extend it to Dog with breed and override describe to include breed. Create a Dog instance and call describe.

class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    describe() {
        return this.name + 'is a '+this.type;
    }
}

class Dog extends Pet {
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }
    describe() {
        return this.name + ' is a ' +this.type + ' , breed: '+this.breed;
    }
}

const myDog = new Dog("Rover", "Golden Retriever");
console.log(myDog.describe());
