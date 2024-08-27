// inheritance

const water = {
    quality : "medium",
    isDiverse : true,
}

const gutter = {
    quality : "bad",
    isDiverse : false,
}

const fishGood = {
    character : "honest",
    reservation : "OBC"
}

const fishBad = {
    character : "cunning",
    reservation : "ST",
    // __proto__: AadharCard // outdated 
}

const AadharCard = {
    country : "India",
    citizen : "Indian"
}

// fishGood.__proto__ = AadharCard // outdated

// modern syntax
// 
Object.setPrototypeOf(fishGood,water) 
Object.setPrototypeOf(water,AadharCard)

// Object.setPrototypeOf(fishGood,AadharCard) // many to one inheritance is not working.

console.log(fishGood.quality) // undefined 
console.log(fishGood.citizen)

