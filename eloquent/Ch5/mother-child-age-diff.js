var ancestry = JSON.parse(require('./ancestry'));

/*
 Using the example data set from this chapter, compute the average age difference between mothers and
 children (the age of the mother when the child is born). You can use the average function defined
 earlier in this chapter.

 Note that not all the mothers mentioned in the data are themselves present in the array. The byName
 object, which makes it easy to find a person’s object from their name, might be useful here.
 */

function average(array) {
    return array.reduce(function (prev, current) { return prev + current; }) / array.length;
}

var byName = {};
ancestry.forEach(function (person) {
    byName[person.name] = person;
});

var differences = ancestry.filter(function(person) {
    return byName[person.mother] != null;
}).map(function(person) {
    return person.born - byName[person.mother].born;
});

console.log(average(differences));
