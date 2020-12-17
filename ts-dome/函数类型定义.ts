// 函数 类型定义
function getStudent(name: string): string
function getStudent(name: string, college: string,): string
function getStudent(name: string, college: string, age: number): string
function getStudent(name: string, a?: any, b?: any): string {
  return name;
} 

// a b 替代 college age   



// 函数表达式类型定义

const getStudent2 = function(name: string, age: number): string {
  return name + age;
}


// 接口定义函数表达式类型

interface IStudent {
  (name: string, age: number): string;
}


const getStudent3: IStudent = function(name: string, age: number): string {
  return name + age;
}

// 实例化


interface CallMeWithNewToGetString {
  new (): string;
}

declare const Foo: CallMeWithNewToGetString;
const bar = new Foo(); // bar 被推断为 string 类型

 export interface IUser {
    name: string,
    age: number,
    school: string
}

export interface ISchool {
  school: string
}

class myUser implements IUser {
  public  name: string;
  public  age: number;
  public  school: string;
  public  college: string;
  public  home: string;

  getName():string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  getAge(): number {
    return this.age;
  }
}


let  name: string | number = "" 
s
let user = {age: 23, name: '张三'}
let user1 = {name: '李四', age: 45}

function getAge(user: {age: number, [property: string]: any}): number {
  return user.age
}
getAge(user);
getAge(user1);








