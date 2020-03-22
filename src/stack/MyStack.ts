export default class MyStack<T> {
  elem: T[] = [];
  maxLength: number;
  length = 0;

  constructor(maxLength: number) {
    this.maxLength = maxLength;

    return this;
  }

  push(element: T) {
    if (this.length + 1 > this.maxLength) {
      throw new Error("Stack overflow");
    }

    this.elem[this.length] = element;
    this.length += 1;

    return this;
  }

  pop(): T {
    if (this.length === 0) {
      throw new Error("Stack is empty");
    }

    const element = this.elem[this.length - 1];
    this.elem[this.length - 1] = null;
    this.length -= 1;

    return element;
  }

  top() {
    if (this.length === 0) {
      throw new Error("Stack is empty");
    }

    const element = this.elem[this.length - 1];
    return element;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.elem = [];
    this.length = 0;

    return this;
  }

  clone(): MyStack<T> {
    const clone = new MyStack<T>(this.maxLength);
    for (let i = 0; i < this.length; i++) {
      clone.push(this.elem[i]);
    }
    return clone;
  }

  toString(): string {
    return this.elem.join(" ").trim();
  }
}
