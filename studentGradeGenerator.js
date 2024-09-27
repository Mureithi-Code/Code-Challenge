// Prompt user to input sudent's marks

const input = prompt('Enter student marks:');
const marks = parseInt(input, 10);

// Check if the input is correct
if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid input. Please enter a number between 0 and 100.");
} else {
    const grade = getGrade(marks);
    console.log(`The grade is: ${grade}`);
}

// Function to determine grade based on marks
function getGrade(marks) {
    if (marks >= 80 && marks <= 100) {
        return 'A';
    } else if (marks >= 60 && marks < 80) {
        return 'B';
    } else if (marks >= 49 && marks < 60) {
        return 'C';
    } else if (marks >= 40 && marks < 49) {
        return 'D';
    } else if (marks >= 0 && marks < 40) {
        return 'E';
    } else {
        return null; // For invalid input
    }
}