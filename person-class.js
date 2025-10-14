class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello I'm ${this.name} and I'm ${this.age} years old.`);
  }

  static isAdult(age) {
    return age >= 18;
  }
}

class Student extends person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  greet() {
    super.greet();
    console.log(
      `Hello I'm ${this.name}, I'm ${this.age} years old and my grade is ${this.grade}.`,
    );
  }
}

const person1 = new person("Haleemah", 23);
person1.greet(); // Hello I'm Haleemah, I'm 23 years old.
console.log(`Is ${person1.name} an adult?`);
console.log(person.isAdult(person1.age));

const student1 = new Student("Alma", 20, "A");
student1.greet(); // Hello I'm Alma, I'm 20 years old and my grade is A.
console.log(`Is ${student1.name} an adult?`);
console.log(person.isAdult(student1.age));
