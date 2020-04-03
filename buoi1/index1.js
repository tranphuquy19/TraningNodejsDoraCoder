// bài tập buổi 1 ver1
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
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
           return i;
        }
    }
    return -1;
}

function updateStudent(id, payload) {
    let indexStudentUpdate = getIndexStudentById(id);

    if (indexStudentUpdate !== -1) {
        students[indexStudentUpdate].name = payload.name;
        students[indexStudentUpdate].age = payload.age;
        students[indexStudentUpdate].classs = payload.classs;
        students[indexStudentUpdate].address = payload.address;
    }
}

function deleteStudent(id) {
    let indexStudentDelete = getIndexStudentById(id);
    let _students = [];

    if(indexStudentDelete !== -1){
        for(let i = 0; i < students.length; i++){
            if(i === indexStudentDelete) continue;
            else {
                _students.push(students[i]);
            }
        }
    }

    students = _students;
}

addStudent();
printStudents();

updateStudent(3, {
    name: 'Tran van ba',
    age: 34,
    classs: 'Class AAA',
    address: 'Dien Bien Phu'
});
printStudents();

deleteStudent(2);
printStudents();


