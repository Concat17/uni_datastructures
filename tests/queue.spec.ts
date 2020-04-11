import MyQueue from "../src/queue/MyQueue";
import { expect } from "chai";
import { parenthesesChecker } from "../src/task/parenthesesChecker";
import "mocha";

function test(expected: any, actual: any): void {
  expect(actual).to.equal(expected);
}

describe("MyStack tests", () => {
  const st1 = new MyQueue<number>(5).push(1).push(2).push(3).push(4);

  const st2 = new MyQueue<string>(2).push("Hello").push("world");
  const st3 = new MyQueue<number>(10);

  it("toString test", () => {
    test("1 2 3 4", st1.toString());
    test("Hello world", st2.toString());
  });

  it("push test", () => {
    test("1 2 3 4 5", st1.clone().push(5).toString());
    expect(() => st2.clone().push("!")).to.throw("Stack overflow");
  });

  it("pop test", () => {
    test(1, st1.clone().pop());
    const st = st1.clone();
    st.pop();
    test("2 3 4", st.toString());
    expect(() => st3.clone().pop()).to.throw("Stack is empty");
  });

  it("top test", () => {
    test(1, st1.clone().top());
    const st = st1.clone();
    st.top();
    test("1 2 3 4", st1.toString());
    expect(() => st3.clone().top()).to.throw("Stack is empty");
  });

  it("isEmpty test", () => {
    test(false, st1.isEmpty());
    test(true, st3.isEmpty());
  });

  it("clear test", () => {
    test(true, st1.clone().clear().isEmpty());
    test(true, st3.clone().clear().isEmpty());
  });
});
