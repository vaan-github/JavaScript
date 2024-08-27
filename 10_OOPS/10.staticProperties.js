// static = private ;

class Student{
    constructor(username){
        this.username = username
    }

    logMe(){
        return `${this.username}`
    }
   static secretKey = "systum" // property is now private
   static userIdRandom(){  // This function is now private function ,which is not accessible to instances.
        return `random id 123`
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

// console.log(studentData.userIdRandom()) // error , since the function is private
// console.log(teacherData.userIdRandom()) // error , since the function is private
console.log(studentData.secretKey) // undefined , since the property is private
