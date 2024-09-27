// Prompt user to input basic salary and benefits
let basicSalaryInput = prompt('Enter basic salary:');
let benefitsInput = prompt('Enter benefits:');

//Convert input to float
const basicSalary = parseFloat(basicSalaryInput);
const benefits = parseFloat(benefitsInput);

//Check if the input is valid
if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0){
    console.log('Invalid input.');
}else {
    calculateNetSalary(basicSalary, benefits);
}

//Function to calculate net salary
function calculateNetSalary(basicSalary, benefits){
    const grossSalary = basicSalary + benefits;

    //Calculate NHIF deduction
    const nhifDeduction = calculateNHIF(grossSalary);

    //Calculate NSSF deduction (6% of gross salary)
    const nssfDeduction = grossSalary * 0.06;
    
    //Calculate taxable income
    const taxableIncome = grossSalary - (nssfDeduction + nhifDeduction);

    //Calculate PAYE (Tax)
    const paye = calculatePAYE(taxableIncome);

    //Calculate net salary
    const netSalary = grossSalary - (nhifDeduction + nssfDeduction + paye);

    //Log the results
    console.log(`Gross Salary : Ksh ${grossSalary.toFixed(2)}`);
    console.log(`NHIF Deduction: Ksh ${nhifDeduction.toFixed(2)}`);
    console.log(`NSSF Deduction: Ksh ${nssfDeduction.toFixed(2)}`);
    console.log(`PAYE (Tax): Ksh ${paye.toFixed(2)}`);
    console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);
}

//Function to calculate NHIF deduction based on gross salary
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700; //For gross salary above 99999
}
//Function to calculate PAYE based on monthly income thresholds

function calculatePAYE(taxableIncome) {
    let tax = 0;

    if (taxableIncome <= 24000) {
        return tax; // No tax for incomes up to Ksh 24,000
    } else if (taxableIncome <= 32333) {
        tax = (taxableIncome - 24000) * 0.1; // 10% for income over 24,000
    } else if (taxableIncome <= 50000) {
        tax = (taxableIncome - 32333) * 0.25 + (8333 * 0.1); // 25% for income over 32,333
    } else if (taxableIncome <= 66667) {
        tax = (taxableIncome - 50000) * 0.3 + (17667 * 0.25) + (8333 * 0.1); // 30% for income over 50,000
    } else {
        tax = (taxableIncome - 66667) * 0.35 + (16667 * 0.3) + (17667 * 0.25) + (8333 * 0.1); // 35% for income above 66,667
    }

    return tax;
}

// function calculatePAYE(taxableIncome) {
//     let tax = 0;
//     if (taxableIncome <= 24000) {
//         return tax; //No tax
//     }else if (taxableIncome <= 32333) {
//         tax = taxableIncome * 0.1; //10% tax
//     }else if (taxableIncome <=50000) {
//         tax = taxableIncome * 0.25; //25%
//     }else if (taxableIncome <= 800000) {
//         tax = taxableIncome * 0.325; //32.5%
//     }else {
//         tax = taxableIncome * 0.35; // 35%
//     }
//     return tax;
// }