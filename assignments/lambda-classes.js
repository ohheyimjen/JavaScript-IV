// CODE here for your Lambda Classes
class Person {
  
    constructor(baseClass) {
      
      this.name = baseClass.name;
      this.age = baseClass.age;
      this.location = baseClass.location;
      this.gender = baseClass.gender;
      
    }
    
    speak() {
      
      return `Hello! My name is ${this.name}, and I am from ${this.location}.`;
      
    }
}

class Instructor extends Person {

    constructor(teacher) {
        super(teacher);
        this.specialty = teacher.specialty;
        this.favLanguage = teacher.favLanguage;
        this.catchPhrase = teacher.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

const professor1 = new Instructor({
    name: 'Bo Jangles',
    age: 42,
    location: 'Bristol',
    gender:'M',
    specialty: 'box models',
    favLanguage: 'javascript',
    catchPhrase: 'its hip to be box'
});

const professor2 = new Instructor({
    name: 'Ruby Rutherford',
    age: 'A lady never tells',
    location: 'El Paso',
    gender:'F',
    specialty: 'nesting',
    favLanguage: 'Ruby',
    catchPhrase: 'Rubies are a girls best friend'
});

class Student extends Instructor {

    constructor(grasshopper) {
        super(grasshopper);
        this.previousBackground = grasshopper.previousBackground;
        this.className = grasshopper.className;
        this.favSubjects  = grasshopper.favSubjects;
     }
     listsSubjects(favSubjects) {
        return `${favSubjects}`;
     }
     PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`
     }
     sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}.`
     }
}

const learner1 = new Student({
    name: 'Jo Mamma',
    age: '19',
    location: 'Orlando',
    gender:'F',
    specialty: 'testing',
    favLanguage: 'TBD',
    catchPhrase: 'I love Disney World'
});

const learner2 = new Student({
    name: 'Will Smith',
    age: '65',
    location: 'Los Angeles',
    gender:'M',
    specialty: 'getting jiggy wit it',
    favLanguage: 'whatevers fresh',
    catchPhrase: 'Na na na na nana naaaaah'
});

console.log();
console.log();
console.log();
console.log();
