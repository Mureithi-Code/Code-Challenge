# Code-Challenge
This is my 1st Code Challenge.

## Challenge 1:
# Student Grade Generator (Toy Problem)

This is a simple JavaScript program that prompts the user to input a student's marks and returns the corresponding grade based on the provided score. Below, you'll find a detailed explanation of how the code works, step by step.

## Table of Contents
- How It Works
- Functionality Breakdown
- Input Validation
- Grade Calculation

## How It Works

1. **Prompt for Input**: The program starts by prompting the user to enter the student's marks using the `prompt` function.
2. **Parse Input**: The input from the user is parsed into an integer using `parseInt`.
3. **Validation Check**: The program checks if the input is valid (i.e., a number between 0 and 100).
4. **Grade Assignment**: If the input is valid, the program calls the `getGrade` function to determine the corresponding grade based on the marks.
5. **Output Result**: Finally, the program logs the calculated grade to the console.

## Functionality Breakdown

### Step 1: Prompting the User
```javascript
const input = prompt('Enter student marks:');
```
- This line displays a dialog box asking the user to enter the student's marks.

### Step 2: Parsing the Input
```javascript
const marks = parseInt(input, 10);
```
- The input is converted from a string to an integer using `parseInt`. The second argument (`10`) specifies the base of the numeral system (decimal).

### Step 3: Input Validation
```javascript
if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Invalid input. Please enter a number between 0 and 100.");
} else {
    const grade = getGrade(marks);
    console.log(`The grade is: ${grade}`);
}
```
- Here, the program checks:
  - If `marks` is `NaN` (not a number).
  - If `marks` is less than 0 or greater than 100.
- If any of these conditions are true, an error message is logged. If the input is valid, it proceeds to get the grade.

### Step 4: Grade Calculation
```javascript
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
```
- The `getGrade` function determines the grade based on the marks provided:
  - **A**: 80 to 100
  - **B**: 60 to 79
  - **C**: 49 to 59
  - **D**: 40 to 48
  - **E**: 0 to 39
- The function returns the corresponding grade or `null` for invalid inputs.

## Conclusion
This code serves as a basic example of how to handle user input, validate data, and provide output based on conditional logic in JavaScript. 

## Challenge 2: 
# Speed Detector (Toy Problem)

This JavaScript program calculates demerit points based on a car's speed input. It prompts the user to enter the speed in kilometers per hour (km/h) and evaluates whether the speed exceeds the limit, providing feedback accordingly. Below is a step-by-step explanation of how the code works.

## Table of Contents

- How It Works
- Functionality Breakdown
- Input Validation
- Demerit Points Calculation
- License Suspension

## How It Works

**Prompt for Speed Input:** The program begins by prompting the user to input the speed of the car.
**Parse Input:** The user’s input is converted into an integer.
**Validate Input:** The program checks if the input is a valid number and greater than or equal to zero.
**Demerit Points Calculation:** If the input is valid, it calls the `calculateDemeritPoints` function to determine the number of demerit points.
**Output Results:** The program logs whether the speed is okay, the number of demerit points, and if the license should be suspended.

## Functionality Breakdown
### Step 1: Prompting the User
```javascript
const input = prompt("Enter the speed of the car (in km/h):");
```
- This line displays a dialog box asking the user to enter the speed of the car in km/h.
### Step 2: Parsing the Input
```javascript
const speed = parseInt(input, 10); 
```
- The input string is converted to an integer using `parseInt`, with the base set to 10 (decimal).
### Step 3: Input Validation
```javascript
if (isNaN(speed) || speed < 0) {
    console.log("Invalid input. Please enter a valid speed.");
} else {
    calculateDemeritPoints(speed);
}
```
- The program checks:
 - If speed is NaN (not a number).
 - If speed is less than 0.
 - If either condition is true, it logs an error message. If the input is valid, it calls the `calculateDemeritPoints` function.
### Step 4: Demerit Points Calculation
```javascript
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
```
- The `calculateDemeritPoints` function determines the demerit points based on the speed provided:
- The speed limit is set at 70 km/h.
 - If the speed is below the limit, it logs "Ok".
 - If the speed exceeds the limit, it calculates the excess speed and the corresponding demerit points by dividing the excess speed by 5 and flooring the result.
- The number of demerit points is then logged to the console.
### Step 5: License Suspension
```javascript
if (demeritPoints > 12) {
    console.log("License suspended");
}
```
 - If the calculated demerit points exceed 12, the program logs "License suspended".

## Conclusion
This code provides a straightforward way to assess driving speed against legal limits, calculate demerit points, and determine potential license consequences. 


## Challenge 3:
# Net Salary Calculator (Toy Problem)

This JavaScript program calculates the net salary of an employee based on their basic salary and benefits. It prompts the user for input, performs calculations for deductions, and outputs the results, including gross salary, deductions, and net salary. Below is a detailed explanation of how the code works, step by step.

## Table of Contents
- How It Works
- Functionality Breakdown
- Input Validation
- Salary Calculation
  - Gross Salary Calculation
  - Deductions Calculation
    - NHIF Deduction
    - NSSF Deduction
    - PAYE Calculation
- Output Results

## How It Works

1. **Prompt for Input**: The program starts by asking the user to enter their basic salary and benefits.
2. **Parse Input**: The input values are converted to floating-point numbers.
3. **Validate Input**: The program checks if the inputs are valid numbers and non-negative.
4. **Salary Calculations**: If the input is valid, the program calculates the net salary, including gross salary and deductions.
5. **Output Results**: The program logs the calculations to the console.

## Functionality Breakdown

### Step 1: Prompting the User
```javascript
let basicSalaryInput = prompt('Enter basic salary:');
let benefitsInput = prompt('Enter benefits:');
```
- The program prompts the user for their basic salary and any additional benefits.

### Step 2: Parsing the Input
```javascript
const basicSalary = parseFloat(basicSalaryInput);
const benefits = parseFloat(benefitsInput);
```
- The inputs are parsed into floating-point numbers for calculation.

### Step 3: Input Validation
```javascript
if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0){
    console.log('Invalid input.');
}else {
    calculateNetSalary(basicSalary, benefits);
}
```
- The program checks:
  - If either input is `NaN` (not a number).
  - If either input is less than 0.
- If any condition is true, it logs "Invalid input." If the input is valid, it calls the `calculateNetSalary` function.

### Step 4: Salary Calculation
```javascript
function calculateNetSalary(basicSalary, benefits){
    const grossSalary = basicSalary + benefits;
    // Additional calculations follow
}
```
- The function calculates the gross salary by summing the basic salary and benefits.

#### Gross Salary Calculation
- **Gross Salary**: 
  - Calculated as `basicSalary + benefits`.

### Step 5: Deductions Calculation
#### NHIF Deduction
```javascript
const nhifDeduction = calculateNHIF(grossSalary);
```
- The National Hospital Insurance Fund (NHIF) deduction is determined based on the gross salary.

#### NSSF Deduction
```javascript
const nssfDeduction = grossSalary * 0.06;
```
- The National Social Security Fund (NSSF) deduction is calculated as 6% of the gross salary.

#### PAYE Calculation
```javascript
const paye = calculatePAYE(taxableIncome);
```
- The Pay As You Earn (PAYE) tax is calculated based on the taxable income.

### Step 6: PAYE Calculation Logic
```javascript
function calculatePAYE(taxableIncome) {
    let tax = 0;
    // Tax brackets and calculations follow
}
```
- The function implements tax brackets based on the taxable income to determine the total tax owed.

### Step 7: Output Results
```javascript
console.log(`Gross Salary : Ksh ${grossSalary.toFixed(2)}`);
console.log(`NHIF Deduction: Ksh ${nhifDeduction.toFixed(2)}`);
console.log(`NSSF Deduction: Ksh ${nssfDeduction.toFixed(2)}`);
console.log(`PAYE (Tax): Ksh ${paye.toFixed(2)}`);
console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);
```
- The program logs the gross salary, deductions, and net salary to the console with two decimal points.

## Conclusion
This program effectively calculates an employee's net salary by considering basic salary, benefits, and applicable deductions. 