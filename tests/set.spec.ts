import MySet from "../src/set/MySet";
import { expect } from "chai";
import { parenthesesChecker } from "../src/task/parenthesesChecker";
import "mocha";

function test(expected: any, actual: any): void {
  expect(actual).to.equal(expected);
}

describe("MySet tests", () => {
  const set1 = new MySet<number>(1, 2, 3, 4);
  const set2 = new MySet<string>("Hello", "world");

  it("toString test", () => {
    test("1,2,3,4", set1.toString());
    test("Hello world", set2.toString(" "));
  });

  it("add test", () => {
    test("1,2,3,4,5", set1.clone().add(5).toString());
    test("1,2,3,4", set1.clone().add(2).toString());
    test("Hello world lol", set2.clone().add("lol").toString(" "));
  });

  it("difference test", () => {
    test(
      "3,4",
      set1.clone().difference(new MySet(1, 2, 3), new MySet(1, 2, 4)).toString()
    );
    test(null, set1.clone().difference(new MySet(1, 2, 3), new MySet(1, 2, 3)));
  });

  it("intersection test", () => {
    test(
      "1,2",
      set1
        .clone()
        .intersection(new MySet(1, 2, 3), new MySet(1, 2, 4))
        .toString()
    );
    test(
      null,
      set1.clone().intersection(new MySet(5, 7, 21), new MySet(1, 2, 3))
    );
  });

  it("isBelong test", () => {
    test(true, set1.isBelong(2));
    test(false, set1.isBelong(6));
    test(true, set2.isBelong("world"));
  });

  it("isEmpty test", () => {
    test(true, new MySet().isEmpty());
    test(false, new MySet(2, 3, 4).isEmpty());
  });

  it("remove test", () => {
    test("1,2,4", set1.clone().remove(3).toString());
    test("world", set2.clone().remove("Hello").toString());
    expect(() => set1.clone().remove(7)).to.throw("ItemNotFoundException");
    expect(() => new MySet().remove(7)).to.throw("RemoveFromEmptySetException");
  });

  it("subset test", () => {
    test(true, set1.clone().subset(new MySet(1, 3), set1));
    test(false, set1.clone().subset(new MySet(1, 5), set1));
    test(true, set2.clone().subset(new MySet("world"), set2));
  });

  it("union test", () => {
    test("1,3,2,4", set1.clone().union(new MySet(1, 3), set1).toString());
    test("1,7,2,3,4", set1.clone().union(new MySet(1, 7), set1).toString());
    test(
      "lol,Hello,world",
      set2.clone().union(new MySet("lol"), set2).toString()
    );
    test(null, set1.clone().union(new MySet(), new MySet()));
  });
});
