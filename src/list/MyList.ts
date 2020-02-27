import MyListNode from "./MyListNode";

export default class MyList<T> {
  first?: MyListNode<T>;
  // count:number = 0

  constructor(...args: Array<T>) {
    // TODO: check constructor and refactor
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

  insertAfter(element, value) {
    const nextElem: MyListNode<T> = { value: value };

    nextElem.prev = element;
    element.next = nextElem;
  }

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

  push(value: T): MyList<T> {
    // if list is empty
    if (!this.first.value) {
      this.first = new MyListNode();
      this.first.value = value;
      return this;
    }

    let node = this.first;
    while (node.next !== undefined) {
      node = node.next;
    }
    this.insertAfter(node, value);
    return this;
  }

  shift(value: T): MyList<T> {
    const newFirst: MyListNode<T> = { value: value };

    if (!this.first.value) {
      this.first = newFirst;
      return this;
    }

    this.first.prev = newFirst;
    newFirst.next = this.first;
    this.first = newFirst;

    return this;
  }

  clone(): MyList<T> {
    const clone = new MyList<T>(this.first.value);
    let element = this.first.next;
    while (element) {
      clone.push(element.value);
      element = element.next;
    }
    return clone;
  }

  isEqual(other: MyList<T>): boolean {
    if (this.Count !== other.Count) return false;
    if (this.Count === 0) return true;

    let currentThis = this.first;
    let currentOther = other.first;

    while (currentThis !== undefined) {
      if (
        JSON.stringify(currentThis.value) !== JSON.stringify(currentOther.value)
      ) {
        return false;
      }

      currentThis = currentThis.next;
      currentOther = currentOther.next;
    }
    return true;
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
