import MyList from "./src/list/MyList";

const l1 = new MyList(1, 2, 3);
const l2 = new MyList("Hello", "strange", "world", "!");
const l3 = new MyList({}, {}, {});
const l4 = new MyList();

console.log(l1);
console.log(l4.Count);
