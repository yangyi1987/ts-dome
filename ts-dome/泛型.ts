class Queue<T> {
  private data: Array<T> = []
  push = (item: T) => this.data.push(item)
  pop = ():T => this.data.pop()
}
  
function reverse<T>(items: Array<T>): Array<T> {
  const data: Array<T> = [];
  items.forEach((item:T )=> {
    data.push(item);
  })
  return data;
}

console.log(reverse([2,3,4,5,6,7]));
