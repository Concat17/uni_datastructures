export default class MyListNode<T> {
  next?: MyListNode<T>;
  prev?: MyListNode<T>;
  value: T;

  constructor(value?: T) {
    if (value) {
      this.value = value;
    }
  }

  isValueEqual(value: T): boolean {
    return JSON.stringify(this.value) === JSON.stringify(value);
  }
}
