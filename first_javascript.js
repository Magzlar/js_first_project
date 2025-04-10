'use strict';
/*This function calculates the age based on the date of birth input
and displays the result in the HTML element with id 'result'. */

function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        document.getElementById('result').innerText = "Please enter your date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.getElementById('result').innerText =
        `You are ${years} years, ${months} months, and ${days} days old.`;
}
