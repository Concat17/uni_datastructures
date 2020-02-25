import { MyListNode } from "./MyListNode";

export default class MyList<T> {
  first?: MyListNode<T>;
  // count:number = 0

  constructor(...args: Array<T>) {
    const first: MyListNode<T> = { value: args[0] };
    let prevElem = first;
    for (let i = 1; i < args.length; i++) {
      const value = args[i];
      const nextListElem: MyListNode<T> = { value: value };

      nextListElem.prev = prevElem;
      prevElem.next = nextListElem;

      prevElem = nextListElem;
    }
    this.first = first;
  }

  // insertAfter(element, value){
  //   const nextListElem: MyListNode<T> = { value: value };

  //   nextListElem.prev = prevElem;
  //   prevElem.next = nextListElem;
  // }

  get Count(): number {
    if (this.first.value === undefined) return 0;

    let count = 0;
    let node = this.first;
    while (node !== undefined) {
      count += 1;
      node = node.next;
    }
    return count;
  }

  push(element: T): void {
    let node = this.first;
    while (node.next !== undefined) {
      node = node.next;
    }
    // node.next =
  }

  ToString(): string {
    let first = this.first;
    let res = "";
    while (first) {
      res += `${first.value} `;
      first = first.next;
    }
    return res.trim();
  }
}
