/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

let dR1 = 97;
let dR2 = 112;
let dR3 = 101;

let kR1 = 109;
let kR2 = 95;
let kR3 = 106;

let dAvg = (dR1 + dR2 + dR3)/3;
console.log(dAvg);

let kAvg = (kR1 + kR2 + kR3)/3;
console.log(kAvg);

if(kAvg > dAvg) {
  console.log('Koalas Win!');
} else if (dAvg > kAvg){
  console.log('Dolphins Win!');
} else {
  console.log(`It's a tie!`);
}

if(kAvg == dAvg) {
  console.log(`It's a tie!!`);
} else if (kAvg > dAvg) {
  console.log(`Koalas Win!!`);
} else {
  console.log(`Dolphins Win!!`);
}


if(kAvg == dAvg && kAvg > 100 && dAvg > 100) {
  console.log(`It's a tie!!!`);
} else if (kAvg > dAvg && kAvg > 100) {
  console.log(`Koalas Win!!!`);
} else if (dAvg > kAvg && dAvg > 100){
  console.log(`Dolphins Win!!!`);
} else {
  console.log(`No one scored enough points :( !!!`);
}
