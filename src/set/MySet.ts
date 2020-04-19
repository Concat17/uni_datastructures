export default class MySet<T> {
  elems: T[] = [];
  count = 0;

  constructor(...params: T[]) {
    this.elems = [];
    for (const param of params) {
      if (!this.elems.includes(param)) this.elems.push(param);
    }
    return this;
  }

  add(item: T): MySet<T> {
    if (!this.elems.includes(item)) {
      this.elems.push(item);
    }
    return this;
  }

  difference(set1: MySet<T>, set2: MySet<T>): MySet<T> {
    const dif1 = set1.elems.filter((elem) => !set2.elems.includes(elem));
    const dif2 = set2.elems.filter((elem) => !set1.elems.includes(elem));
    const res = [...dif1, ...dif2];
    if (res.length === 0) {
      return null;
    }
    return new MySet(...res);
  }

  intersection(set1: MySet<T>, set2: MySet<T>): MySet<T> {
    const res = set1.elems.filter((elem) => set2.elems.includes(elem));

    if (res.length === 0) {
      return null;
    }
    return new MySet(...res);
  }

  isBelong(element: T): boolean {
    return this.elems.includes(element);
  }

  isEmpty(): boolean {
    return this.elems.length === 0;
  }

  // ??????????????????????????????
  isIndlude(subset: MySet<T>, set: MySet<T>): boolean {
    return false;
  }

  remove(element: T): MySet<T> {
    if (this.elems.length === 0) {
      throw new Error("RemoveFromEmptySetException");
    }
    if (!this.elems.includes(element)) {
      throw new Error("ItemNotFoundException");
    }

    const res = this.elems.filter((elem) => elem !== element);
    this.elems = res;
    return this;
  }

  subset(subset: MySet<T>, set: MySet<T>): boolean {
    return subset.elems.every((elem) => set.elems.includes(elem));
  }

  union(set1: MySet<T>, set2: MySet<T>): MySet<T> {
    if (set1.elems.length === 0 && set2.elems.length === 0) {
      return null;
    }
    return new MySet(...set1.elems, ...set2.elems);
  }

  clone(): MySet<T> {
    const clone = new MySet<T>(...this.elems);
    return clone;
  }

  toString(separator = ","): string {
    return this.elems.join(separator).trim();
  }
}
