class ListNode<T> {
  data: T;
  next: ListNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  public head: ListNode<T> | null;
  constructor(head: ListNode<T>) {
    this.head = head;
  }
  public printLength(): number {
    let temp = this.head;
    let size = 0;
    while (temp !== null) {
      size++;
      temp = temp.next;
    }
    return size;
  }
  public pushNode(data: T) {
    if (this.head === null) {
      this.head = new ListNode<T>(data);
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new ListNode<T>(data);
    }
  }
  public insertNode(data: T): void {
    let node = new ListNode(data);
    let temp = this.head;
    this.head = node;
    this.head.next = temp;
  }
}

const nodeOne = new ListNode(4);
const nodeTwo = new ListNode(6);
nodeOne.next = nodeTwo;
const linkedList = new LinkedList(nodeOne);
linkedList.pushNode(8);
linkedList.insertNode(100);
console.log(linkedList.printLength());
console.log(linkedList);
