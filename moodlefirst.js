function moodlefirst(numbers) {
    // Sort the array in ascending order
    numbers.sort(function(a, b) {
        return a - b;
    });

    // Second lowest number
    var secondLowest = numbers[1];

    // Second greatest number
    var secondGreatest = numbers[numbers.length - 2];

    return [secondLowest, secondGreatest];
}

// Sample array
var numbers = [1, 2, 3, 4, 5];

// Finding second lowest and second greatest numbers
var result = moodlefirst(numbers);

// Outputting the result
console.log("Second lowest:", result[0]);
console.log("Second greatest:", result[1]);
