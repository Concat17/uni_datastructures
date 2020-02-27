import MyListNode from "./MyListNode";

export default class MyList<T> {
  first?: MyListNode<T>;
  // count:number = 0

  constructor(...args: Array<T>) {
    // TODO: check constructor and refactor
    let tail: MyListNode<T> = null;
    for (let i = 0; i < args.length; i++) {
      const node: MyListNode<T> = { value: args[i] };
      if (i === 0) {
        this.first = node;
        tail = node;
        continue;
      }
      this.insertAfter(tail, args[i]);
      tail = tail.next;
    }
  }

  insertAfter(element, value) {
    const nextNode: MyListNode<T> = { value: value };

    nextNode.prev = element;
    element.next = nextNode;
  }

  get Count(): number {
    if (this.first === undefined) return 0;

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
    if (!this.first) {
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

    if (!this.first) {
      this.first = newFirst;
      return this;
    }

    this.first.prev = newFirst;
    newFirst.next = this.first;
    this.first = newFirst;

    return this;
  }

  insert(value: T, index: number): MyList<T> {
    if (index === 0) {
      return this.shift(value);
    }

    if (this.Count - 1 < index) {
      throw new Error("index out of range");
    }

    let count = 0;
    let node = this.first;
    while (count !== index) {
      node = this.first.next;
      count += 1;
    }

    const insertedNode: MyListNode<T> = { value: value };
    node.prev.next = insertedNode;
    insertedNode.prev = node.prev.next;

    node.prev = insertedNode;
    insertedNode.next = node;
    return this;
  }

  clone(): MyList<T> {
    if (!this.first) {
      return new MyList<T>();
    }
    const clone = new MyList<T>(this.first.value);
    let node = this.first.next;
    while (node) {
      clone.push(node.value);
      node = node.next;
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
