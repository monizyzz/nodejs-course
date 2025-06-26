// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";
let favouriteQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ["cat", "dog", "pig"];
let pets2: Array<string> = ["lion", "dragon", "lizard"];

// Object
let wizard: object = {
  a: "John",
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ["basketball", 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: string = Size[2];

// Any - !!!!!! BE CAREFUL
let whatever: any = "aghhhhhh noooooo!!!";
whatever = basket;

// void - when function doesn't return
let sing = (): void => {
  console.log("lalalala");
};

// never - when function never return and doesn't have a reachable endpoint
// usually returns an error
let error = (): never => {
  throw Error("ooops");
};

// interface
interface RobotArmy {
  count: number;
  type: string;
  magic?: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("FIGHT!");
};
let fightRobotArmy2 = (robots: {count: number, type: string, magic?: string}) => {
  console.log("FIGHT!");
};

// Function 
let fightRobotArmyF = (robots: RobotArmy): void => {
  console.log("FIGHT!");
};
let fightRobotArmy2F = (robots: {count: number, type: string, magic?: string}): void => {
  console.log("FIGHT!");
};

// Classes
class Animal {
  private sing: string = "lalalala"; // usually is public
  constructor(sound: string) {
      this.sing = sound;
  }
  
  greet(): string {
      return `Hello, ${this.sing}`
  }
}

let lion = new Animal("RAAAWWWR")
// lion.greet()


// Union Type - could be one or the other
let confused: string | number = "hello"

//In TypeScript, there are several places where type inference
//is used to provide type information when there is no explicit
//type annotation. For example, in this code
let x = 3;
// automatimally detexts x is a number.