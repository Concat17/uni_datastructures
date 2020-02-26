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
  const l4 = new MyList();

  it("toString test", () => {
    test("1 2 3", l1.ToString());
    test("Hello world !", l2.ToString());
  });

  it("isEqual test", () => {
    const l1c = new MyList(1, 2, 3);
    const l2c = new MyList("Hello", "world", "!");
    const l3c = new MyList({}, {});
    const l4c = new MyList();

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
    //testEqual(new MyList(1, 2, 3, 4), l1.push(4));
    testEqual(new MyList({}, {}, {}), l3.push({}));
  });

  it("shift test", () => {
    testEqual(new MyList(0, 1, 2, 3), l1.shift(0));
    //testEqual(new MyList("lol", "Hello", "world", "!"), l2.shift("lol"));
  });
});
