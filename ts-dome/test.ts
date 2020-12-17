// 类型别名(固定类型 指定 EventName 的几种类型)
type EventName = 'click' | 'scroll' | 'mousemove'

const userName: EventName = "mousemove"


function eventHandle(name: EventName): EventName {
  return name;
}

// 声明一个对象
interface IItem {
  name: string;
  age: number;
  [property: string]: any
}

let user: IItem = {
  name: '张三',
  age: 23,
  school: '江苏海洋大学',
  college: '计算机工程学院'
}


// 声明一个数组

// 1. 接口表示数组
interface IArray  {
  [index: number]: number | string | IItem;
}

// 2. 泛型表示数组

let arr2: Array<number> = [2,5,6]

let arr: IArray = [2,4,5, '江苏海洋大学']


// 定义输入参数的类型  =>  返回的类类型
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};


interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

let getUser: (name: string, age: number) => string = function(name: string, age: number): string {
  return name + age;
}
