import MyListNode from "./MyListNode";

export default class MyList<T> {
  first?: MyListNode<T>;
  // count:number = 0

  constructor(...args: Array<T>) {
    // TODO: check constructor and refactor
    const first: MyListNode<T> = { value: args[0] };
    this.first = first;
    for (let i = 1; i < args.length; i++) {
      this.push(args[i]);
    }
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

  push(value: T): this {
    let node = this.first;
    while (node.next !== undefined) {
      node = node.next;
    }
    this.insertAfter(node, value);
    return this;
  }

  shift(value: T): this {
    const newFirst: MyListNode<T> = { value: value };

    this.first.prev = newFirst;
    newFirst.next = this.first;
    this.first = newFirst;

    return this;
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
