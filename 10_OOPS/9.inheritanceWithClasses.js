class Student{
    constructor(username){
        this.username = username
    }

    logMe(){
        return `${this.username}`
    }
}

class Teacher extends Student{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        return `${this.username} added a course`
    }
}

const teacherData = new Teacher("Pankaj","pankaj@gmail.com",123)

const studentData = new Student("Mohit","mohit@gmail.com",321)

const newStudentData = new Student("Rohit","rohit@gmail.com",123321)

console.log(teacherData.addCourse())
console.log(teacherData.logMe())
// console.log(studentData.addCourse()) // unable to access the child class

console.log(studentData === newStudentData)         // Output : false   both were different instance of the same class
console.log(teacherData instanceof Student)         // Output: true    Object instanceof class 
console.log(studentData instanceof Teacher)         // Output: false 