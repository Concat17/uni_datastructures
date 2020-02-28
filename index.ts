import MyList from "./src/list/MyList";

const l1 = new MyList(1, 2, 3, 4);
const l11 = new MyList(1, 2, 3);
const l2 = new MyList("Hello", "strange", "world", "!");
const l22 = new MyList("Hello", "strange", "world", "!");
const l3 = new MyList({}, {});
const ll3 = new MyList({}, {}, {});
const l4 = new MyList<number>();

console.log(l3.removeByIndex(1).ToString());
console.log(l2.ToString());

// const lc1 = new MyList<number>().push(1);
// const lc2 = new MyList(1);

// console.log(l4.shift(1).ToString());
// console.log(lc2.ToString());
