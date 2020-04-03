// bài tập buổi 1 ver2
"use strict";

let students = [];

class Student {
    constructor(id, name, age, classs, address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.classs = classs;
        this.address = address;
    }
}

function printStudents() {
    console.log(students);
}

function addStudent() {
    for (let i = 0; i < 5; i++) {
        let newStudent = new Student(i, `Tran Van ${i}`, i * 5, `Lop ${i * 2 + 1}`, `Street ${i}A`);
        students.push(newStudent);
    }
}

function getIndexStudentById(id){
    let _index = -1;
    students.map((student, index) => {
       if(student.id === id){
           _index = index;
       }
    });
    return _index;
}

function updateStudent(id, payload) {
    let indexStudentUpdate = getIndexStudentById(id);
    
    // console.log(Object.keys(payload));
    // key - value
    //.map() .filter() .reduce()
    let noLaCaiJ =  Object.keys(payload);
    console.log(noLaCaiJ);

    noLaCaiJ.map(key => {
        students[indexStudentUpdate][key] = payload[key];
    });
}

addStudent();
// printStudents();

updateStudent(3, {
    name: 'Tran van ba',
    classs: 'Class AAA',
    address: 'Truong chinh'
});
// printStudents();

