/*The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.*/


let calculateSupply = function (age, amountDay) {
    let maxAge = 100;
    let totalNeeded = (amountDay * 365) * (maxAge - age);
    let message = 'You will need ' + totalNeeded + ' to last you until the ripe old age of ' + maxAge;
    console.log(message);
};

calculateSupply(28, 36);
calculateSupply(100, 2.5);
calculateSupply(15, 23.35);