export default class MyQueue<T> {
  elem: T[] = [];
  maxLength: number;
  first: T = null;
  length = 0;

  constructor(maxLength: number) {
    this.maxLength = maxLength;
    return this;
  }

  push(element: T) {
    if (this.length + 1 > this.maxLength) {
      throw new Error("Stack overflow");
    }
    if (this.first === null) {
      this.first = element;
    }

    this.elem[this.length] = element;
    this.length += 1;

    return this;
  }

  pop(): T {
    if (this.length === 0) {
      throw new Error("Stack is empty");
    }

    const element = this.elem[0];
    this.elem = this.elem.slice(1, this.length);
    this.first = this.elem[0];
    this.length -= 1;

    return element;
  }

  top() {
    if (this.length === 0) {
      throw new Error("Stack is empty");
    }

    const element = this.elem[0];
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

  clone(): MyQueue<T> {
    const clone = new MyQueue<T>(this.maxLength);
    for (let i = 0; i < this.length; i++) {
      clone.push(this.elem[i]);
    }
    return clone;
  }

  toString(): string {
    return this.elem.join(" ").trim();
  }
}
