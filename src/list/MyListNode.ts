export default class MyListNode<T> {
  next?: MyListNode<T>;
  prev?: MyListNode<T>;
  value: T;
}
