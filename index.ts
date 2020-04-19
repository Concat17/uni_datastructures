// import MyQueue from "./src/queue/MyQueue";
// import { createInvariantSeries } from "./src/task/invariantSeries";
// const q1 = new MyQueue<number>(5).push(1).push(2).push(3).push(4);

// createInvariantSeries(15);

import MySet from "./src/set/MySet";
const set = new MySet("hello", "world", "world");
const set1 = new MySet<number>(1, 2, 3, 4);
const set2 = new MySet<string>("Hello", "world");

console.log(
  set1.clone().difference(new MySet(1, 2, 3), new MySet(1, 2, 4)).toString()
);
