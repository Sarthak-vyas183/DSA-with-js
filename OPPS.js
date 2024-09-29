// class person {
//   name = "sarthak";
//   #age = 22; //private variable
  
//   getAge(age) {
//    return this.#age;
//   }

//   setAge(newAge) {
//     this.#age = newAge
//   }
  
// }

// const person1 = new person();


// class Animals {
//     speak() {
//         console.log("Tommy is speaking")
//     }
// }

// class Dog extends Animals {
//     bark() {
//         console.log("dog is darking")
//     }
// }

// const Dog1 = new Dog();
// //Dog1.speak() 

//PolyMorphism//

class Animal {
    speak() {
        console.log("animal can not speak just make noise")
    }
}

class Dog extends Animal {
    speak() {
        console.log("dog is barking")
    }
} 

class Cat extends Animal {
    speak() {
        console.log("cat - Meow-Meow")
    }
} 

let Speaker = new Dog();
Speaker.speak()

