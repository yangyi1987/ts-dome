interface IUser {
  name: string;
  age: number;
  school: string;
  [property: string]: any;
}
class User implements IUser {
   name: string;
   age: number;
   school: string;
   college: string;
   constructor(name, age, school, college) {
    this.college = college;
    this.school = school;
    this.name = name;
    this.age =age;  
   }

   setName(name) {
    this.name  = name 
   }
}

const student1 = new User('水电费', 34, '江苏海洋大学', '计算机工程学院');
student1.setName('张三')
console.log(student1)
