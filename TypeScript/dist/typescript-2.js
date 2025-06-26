// boolean
let isCool = true;
// number
let age = 56;
// string
let eyeColor = "brown";
let favouriteQuote = `I'm not old, I'm only ${age}`;
// Array
let pets = ["cat", "dog", "pig"];
let pets2 = ["lion", "dragon", "lizard"];
// Object
let wizard = {
    a: "John",
};
// null and undefined
let meh = undefined;
let noo = null;
// Tuple
let basket;
basket = ["basketball", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let sizeName = Size[2];
// Any - !!!!!! BE CAREFUL
let whatever = "aghhhhhh noooooo!!!";
whatever = basket;
// void - when function doesn't return
let sing = () => {
    console.log("lalalala");
};
// never - when function never return and doesn't have a reachable endpoint
// usually returns an error
let error = () => {
    throw Error("ooops");
};
let fightRobotArmy = (robots) => {
    console.log("FIGHT!");
};
let fightRobotArmy2 = (robots) => {
    console.log("FIGHT!");
};
// Function 
let fightRobotArmyF = (robots) => {
    console.log("FIGHT!");
};
let fightRobotArmy2F = (robots) => {
    console.log("FIGHT!");
};
// Classes
class Animal {
    constructor(sound) {
        this.sing = "lalalala"; // usually is public
        this.sing = sound;
    }
    greet() {
        return `Hello, ${this.sing}`;
    }
}
let lion = new Animal("RAAAWWWR");
// lion.greet()
// Union Type - could be one or the other
let confused = "hello";
//In TypeScript, there are several places where type inference
//is used to provide type information when there is no explicit
//type annotation. For example, in this code
let x = 3;
// automatimally detexts x is a number.
