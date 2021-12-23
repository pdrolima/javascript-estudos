// Given an array of food objects, return the total calories of all foods.

const foods = [
    { name: 'apple', calories: 100 },
    { name: 'beef', calories: 200 },
    { name: 'chicken', calories: 300 },
    { name: 'doughnut', calories: 400 },
    { name: 'egg', calories: 500 },
]

// We can sum the calories of all foods in the array using forEach
let totalCalories = 0;
foods.forEach((food) => {
    totalCalories += food.calories
})

console.log(`forEach Total Calories: ${totalCalories}`)

// Using reduce the initial value take the place of the second argument
// the first argument, can also be called "the accumulator"

/**
 *  Accumulator is the value that is passed into the function
 *  and is returned at the end of the function
 *
 *                0 is the initial value
 *                          |
 *                          |
 *  Calories: 100 --> Iterator function
 *                          |
 *                          |
 *                   Accumulator: 100
 *                          |
 *                          |
 *  Calories: 200 --> Iterator function
 *                          |
 *                          |
 *                  Accumulator: 300
 *
 */
totalCalories = foods.reduce((total, food) => {
    // On each step of the loop, the accumulator is updated
    return total + food.calories
}, 0) // 0 is the initial value (accumulator)

// Some use cases: https://javascript.plainenglish.io/5-use-cases-for-reduce-in-javascript-61ed243b8fef

console.log(`reduce Total Calories: ${totalCalories}`)
