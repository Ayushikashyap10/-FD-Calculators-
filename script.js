function calculationMaturityAmount() {
    // Get input values from the form elements
    const principle = parseFloat(document.getElementById('principle').value); // Corrected 'getElementsById' to 'getElementById'
    const interestRate = parseFloat(document.getElementById('interestRate').value); // Corrected 'getElementsById' to 'getElementById'
    const tenure = parseFloat(document.getElementById('tenure').value); // Corrected 'getElementsById' to 'getElementById'

    // Perform the calculation
    const maturityAmount = principle * (interestRate * tenure) / 100; // Fixed typo in 'intersRate' to 'interestRate'

    // Display the result
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`; // Corrected 'tofixed' to 'toFixed'
}

// Attach the event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculationMaturityAmount); // Removed ',' before 'addEventListener'
