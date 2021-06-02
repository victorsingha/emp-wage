var list = [];
for (var i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * (999 - 100 + 1) + 100);
  console.log(random);
  list.push(random);
}

console.log(Math.max(...list));
console.log(Math.min(...list));
