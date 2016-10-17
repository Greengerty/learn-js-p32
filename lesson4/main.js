var Dog = function() {
    var name, breed;

    return(console.log(this));
};

var Cat = function() {
    var name, breed;

    return(console.log(this));
}

var speak = function(what){
   console.log(what);
}

Dog.prototype.speak = speak("Woof");
Cat.prototype.speak = speak("Meow");

var dog1 = new Dog;
dog1.name = "Dog 1";
dog1.breed = "Breed 1";


var cat1 = new Cat;
cat1.name = "Cat 1";
cat1.breed = "Breed 1";




