class Student{
    constructor(sID,sNAME){
        this.id = sID;
        this.name = sNAME;
        this.schoolName = "HSPHS";
    }
}

const student1 = new Student(12, "Max");
const student2 = new Student(6, "Jack");
const student3 = new Student(1, "jhon")
console.log(student1.name, student2.name, student3)