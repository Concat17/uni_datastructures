// import { MyList, MyListToString } from "../src/list";
import MyList from "../src/list/MyList";
import { expect } from "chai";
import "mocha";

function test(expected: any, actual: any): void {
  expect(actual).to.equal(expected);
}

function testEqual(expected: MyList<any>, actual: MyList<any>): void {
  expect(actual.isEqual(expected)).to.equal(true);
}

describe("MyList tests", () => {
  const l1 = new MyList(1, 2, 3);
  const l2 = new MyList("Hello", "world", "!");
  const l3 = new MyList({}, {});
  const l4 = new MyList<number>();
  const l5 = new MyList(1, 4, 1, 5, 6, 1);

  it("toString test", () => {
    test("1 2 3", l1.ToString());
    test("Hello world !", l2.ToString());
  });

  it("isEqual test", () => {
    const l1c = new MyList(1, 2, 3);
    const l2c = new MyList("Hello", "world", "!");
    const l3c = new MyList({}, {});
    const l4c = new MyList<number>();

    test(l1.isEqual(l1c), true);
    test(l1.isEqual(new MyList(1, 2)), false);
    test(l2.isEqual(l2c), true);
    test(l3.isEqual(l3c), true);
    test(l4.isEqual(l4c), true);
  });

  it("count test", () => {
    test(3, l1.Count);
    test(3, l2.Count);
    test(2, l3.Count);
    test(0, l4.Count);
  });

  it("push test", () => {
    testEqual(new MyList(1, 2, 3, 4), l1.clone().push(4));
    testEqual(new MyList({}, {}, {}), l3.clone().push({}));
    testEqual(new MyList<number>().push(1), new MyList(1));
  });

  it("shift test", () => {
    testEqual(new MyList(0, 1, 2, 3), l1.clone().shift(0));
    testEqual(
      new MyList("lol", "Hello", "world", "!"),
      l2.clone().shift("lol")
    );
    testEqual(new MyList({ a: 3 }, {}, {}), l3.clone().shift({ a: 3 }));
    testEqual(new MyList<number>(3), l4.clone().shift(3));
  });

  it("insert test", () => {
    testEqual(new MyList(1, 2, 0, 3), l1.clone().insert(0, 2));
    testEqual(
      new MyList("Hello", "this", "world", "!"),
      l2.clone().insert("this", 1)
    );
    testEqual(new MyList({ a: 3 }, {}, {}), l3.clone().insert({ a: 3 }, 0));

    // TODO: make test with error out of range
  });

  it("search test", () => {
    test(l1.search(3), 2);
    test(l1.search(4), null);
    test(l2.search("!"), 2);
    test(l3.search({}), 0);
    test(l4.search(2), null);
  });

  it("remove by index test", () => {
    testEqual(new MyList(1, 3), l1.clone().removeByIndex(1));
    // TODO: make test with error out of range
    testEqual(new MyList("world", "!"), l2.clone().removeByIndex(0));
    testEqual(new MyList({}), l3.clone().removeByIndex(1));
  });

  it("remove by value test", () => {
    testEqual(new MyList(), l3.clone().removeByIndex(1));
    testEqual(new MyList(4, 5, 6), l5.clone().removeByIndex(1));
  });
});
