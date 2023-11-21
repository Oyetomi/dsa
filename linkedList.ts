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
  public listNode() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
  public removeNode(data: T) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.next !== null && data === temp.next.data) {
        temp.next = temp.next.next;
      }
      temp = temp.next;
    }
  }
}

const nodeOne = new ListNode(4);
const nodeTwo = new ListNode(6);
nodeOne.next = nodeTwo;
const linkedList = new LinkedList(nodeOne);
linkedList.pushNode(8);
linkedList.insertNode(100);
linkedList.removeNode(8);
linkedList.removeNode(6);
console.log(linkedList.printLength());
linkedList.listNode();
