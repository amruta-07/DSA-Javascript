function largestNumber(arr) {
    // Convert each number to a string
    const strNumbers = arr.map(String);

    // Custom sort function
    strNumbers.sort((a, b) => (b + a) - (a + b));

    // Join the sorted strings to form the largest number
    return strNumbers.join('');
}

// Input array
const numbers = [54, 548, 546, 60];

// Get the largest number
const result = largestNumber(numbers);

console.log(result); // Output: 6054854654
