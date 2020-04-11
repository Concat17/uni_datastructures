import MyQueue from "../queue/MyQueue";

export function createInvariantSeries(quantity: number) {
  const q2 = new MyQueue<number>(quantity + 1).push(2);
  const q3 = new MyQueue<number>(quantity + 1).push(3);
  const q5 = new MyQueue<number>(quantity + 1).push(5);

  for (let i = 0; i < quantity; i++) {
    const min = Math.min(q2.top(), q3.top(), q5.top());

    q2.push(2 * min);
    q3.push(3 * min);
    q5.push(5 * min);

    if (q2.top() === min) q2.pop();
    if (q3.top() === min) q3.pop();
    if (q5.top() === min) q5.pop();

    console.log(`${i}. ${min}`);
  }
}
