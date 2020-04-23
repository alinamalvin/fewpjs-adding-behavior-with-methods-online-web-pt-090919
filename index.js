class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
   sayCat() {
        return `${this.name} says meow!`; 
    }
}
 
class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  sayDog() {
        return `${this.name} says woof!`; 
    }
}
 
class Bird {
 constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
  sayBird() {
        if (this.sex="male") {
        return `It's me! ${this.name}, the parrot!`; }
        else {
        `${this.name} says squawk!`; }
   }
}