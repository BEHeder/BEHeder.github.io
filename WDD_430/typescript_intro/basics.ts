// Primitives: number, string, boolean
// More complex types: arrays, objects
// function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[]; //union type in play here

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};// type alias

let person: Person; // object type definition...?

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// };

let people: Person[];

// Type inference
// by immediately initializing the variable, type inference comes into play
let course: string | number = 'React - The Complete Guide';

// course = 12341; This doesn't work because of type inference
// use type inference whenever possible
course = 12341;

// Functions & types

function add(a: number, b: number) {
    return a + b;
}

function print_output(value: any) { //JavaScript has a built-in print function already
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3,];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split(''); // no error at first, just later
// unless you make the function a generic with <T>

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string, 
        public lastName: string, 
        public age: number, 
        private courses: string[]
    ) {
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.courses = courses;

    }

    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('React');
// student.listCourses(); => Angular, React

// student.courses => Angular, React

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32, 
    greet() {
        console.log('Hello!');
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!!!!');
    }
}