let LIMIT = 200;
let MONEY = 100;
let TOTAL_BET = 0;
const toss = () => {
  return Math.floor(Math.random() * 10) % 2;
};

const toss_result = toss();

while (MONEY != 200 && MONEY != 0) {
  TOTAL_BET++;
  if (toss() == 1) {
    MONEY++;
    console.log(`Win. Money:${MONEY}`);
  } else {
    MONEY--;
    console.log(`Loss. Money:${MONEY}`);
  }
}
console.log(`Total bet = ${TOTAL_BET}`);
