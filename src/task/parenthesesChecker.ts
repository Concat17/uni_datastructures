import MyStack from "../stack/MyStack";

export function parenthesesChecker(sequence: string): boolean {
  const parantheses = {
    "(": ")",
    "{": "}",
    "[": "]"
  };

  const arrParanth = sequence.split("");
  const stack = new MyStack<string>(100);
  for (let paranth of arrParanth) {
    if (paranth in parantheses) {
      stack.push(paranth);
    } else {
      if (!stack.isEmpty() && parantheses[stack.top()] === paranth) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.isEmpty();
}
