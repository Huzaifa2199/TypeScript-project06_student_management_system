#!/usr/bin/env node
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name
    }
}

class Student extends Person {
    rollNumber: string;
    courses: Course[] = []
    constructor(name: string, age: number, rollNumber: string) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course: Course) {
        this.courses.push(course)
    }
}


class Instuctor extends Person {
    private salary: number;
    courses: Course[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary;
    }
    assignCourse(course: Course) {
        this.courses.push(course)
    }
}

class Course {
    id: string;
    name: string;
    students: Student[] = [];
    instructor!: Instuctor;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    addStudent(student: Student) {
        this.students.push(student)
        student.registerForCourses(this)
    }
    setInstructor(instructor: Instuctor) {
        this.instructor = instructor;
        instructor.assignCourse(this)
    }
}

class Department {
    name: string;
    courses: Course[] = [];
    constructor(name: string) {
        this.name = name
    }
    addCourse(course: Course) {
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
department.addCourse(course1)
department.addCourse(course2)
