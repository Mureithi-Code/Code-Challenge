// Prompt user for speed input
const input = prompt("Enter the speed of the car (in km/h):");
const speed = parseInt(input, 10);

// Validate input
if (isNaN(speed) || speed < 0) {
    console.log("Invalid input. Please enter a valid speed.");
} else {
    calculateDemeritPoints(speed);
}

// Function to calculate demerit points based on speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);
        
        console.log(`Points: ${demeritPoints}`);
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}