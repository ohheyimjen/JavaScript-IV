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

class Student extends Instructor {

    constructor(grasshopper) {
        super(grasshopper);
        this.previousBackground = grasshopper.previousBackground;
        this.className = grasshopper.className;
        this.favSubjects  
    }
}