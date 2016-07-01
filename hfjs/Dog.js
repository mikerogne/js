function Dog(name, breed, weight) {
    this.name   = name;
    this.breed  = breed;
    this.weight = weight;

    this.bark = function () {
        if (this.weight > 25) {
            console.log(`${this.name} says Woof!`);
        } else {
            console.log(`${this.name} says Yip!`);
        }
    }
}

var fido   = new Dog('Fido', 'Mixed', 38);
var fluffy = new Dog('Fluffy', 'Poodle', 30);
var spot   = new Dog('Spot', 'Chihuahua', 10);
var dogs   = [fido, fluffy, spot];

for(var i = 0; i < dogs.length; i++) {
    dogs[i].bark();
}
