// import { MyList, MyListToString } from "../src/list";
import MyList from "../src/list/MyList";
import { expect } from "chai";
import "mocha";

function testEqual(expected: any, actual: any): void {
  expect(actual).to.equal(expected);
}

describe("MyList tests", () => {
  const l1 = new MyList(1, 2, 3);
  const l2 = new MyList("Hello", "strange", "world", "!");
  const l3 = new MyList({}, {});
  const l4 = new MyList();

  it("toString test", () => {
    // const result = "1 2 3";
    // expect(result).to.equal(l1.ToString());
    testEqual("1 2 3", l1.ToString());
    testEqual("Hello strange world !", l2.ToString());
  });

  it("count test", () => {
    testEqual(3, l1.Count);
    testEqual(4, l2.Count);
    testEqual(2, l3.Count);
    testEqual(0, l4.Count);
  });
});
