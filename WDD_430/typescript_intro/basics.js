// Primitives: number, string, boolean
// More complex types: arrays, objects
// function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age;
age = 12;
var userName; //union type in play here
userName = 'Max';
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person; // object type definition...?
person = {
    name: 'Max',
    age: 32
};
// person = {
//     isEmployee: true
// };
var people;
// Type inference
// by immediately initializing the variable, type inference comes into play
var course = 'React - The Complete Guide';
// course = 12341; This doesn't work because of type inference
// use type inference whenever possible
course = 12341;
// Functions & types
function add(a, b) {
    return a + b;
}
function print_output(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3,];
var updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// updatedArray[0].split(''); // no error at first, just later
// unless you make the function a generic with <T>
var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];
    function Student(firstName, lastName, age, courses) {
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.courses = courses;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('React');
var max;
max = {
    firstName: 'Max',
    age: 32,
    greet: function () {
        console.log('Hello!');
    },
};
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function () {
        console.log('Hello!!!!');
    };
    return Instructor;
}());
