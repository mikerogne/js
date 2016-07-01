function Dog(name, breed, weight) {
    this.name   = name;
    this.breed  = breed;
    this.weight = weight;
}
Dog.prototype.species = "Canine";
Dog.prototype.sitting = false;
Dog.prototype.bark    = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};
Dog.prototype.run     = function () {
    console.log("Run!");
};
Dog.prototype.wag     = function () {
    console.log("Wag!");
};
Dog.prototype.sit     = function () {
    if (this.sitting) {
        console.log(this.name + " is already sitting");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting");
    }
};

function ShowDog(name, breed, weight, handler) {
    this.name    = name;
    this.breed   = breed;
    this.weight  = weight;
    this.handler = handler;
}
ShowDog.prototype        = new Dog(); // Inherit from Dog constructor
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack  = function () {
    console.log("Stack");
};
ShowDog.prototype.bait   = function () {
    console.log("Bait");
};
ShowDog.prototype.gait   = function (kind) {
    console.log(kind + "ing");
};
ShowDog.prototype.groom  = function () {
    console.log("Groom");
};

var scotty = new ShowDog('Scotty', 'Scottish Terrier', 15, 'Cookie');

scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);
