#!/usr/bin/env node
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instuctor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student("Huzaifa", 24, "110385");
const student2 = new Student("Ahmed", 22, "11054");
const instructor1 = new Instuctor("Zia Khan", 50, 200000);
const instructor2 = new Instuctor("Ehtesham Khan", 36, 185000);
const course1 = new Course("12345", "Web 3.0");
const course2 = new Course("12345", "BlockChain");
course1.addStudent(student1);
course2.addStudent(student2);
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);
console.log(course1);
const department = new Department("Information Technology");
department.addCourse(course1);
department.addCourse(course2);
export {};
