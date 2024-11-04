const dateInput = document.getElementById('date-input');
const expansionSelect = document.getElementById('expansion-select');
const generateButton = document.getElementById('generate-button');
const resultParagraph = document.getElementById('result');
const copyButton = document.getElementById('copy-button');

// Set local Buenos Aires date and time as default in the input
const buenosAiresOffset = -3 * 60; // GMT-3 in minutes
const now = new Date(new Date().getTime() + buenosAiresOffset * 60 * 1000);
const formattedDate = now.toISOString().slice(0, 16); // Format "YYYY-MM-DDTHH:MM" for datetime-local input
dateInput.value = formattedDate;

generateButton.addEventListener('click', () => {
    const dateValue = new Date(dateInput.value);
    
    // Get the Unix timestamp in seconds
    const timestamp = Math.floor(dateValue.getTime() / 1000);
    const expansion = expansionSelect.value;

    // Generate the final output string
    const resultString = `!lala sch ${timestamp} ${expansion}`;

    // Display the result
    resultParagraph.textContent = `Copy this timestamp: ${resultString}`;
    
    // Show the copy button
    copyButton.style.display = 'inline-block';

    // Action to copy to clipboard
    copyButton.onclick = () => {
        navigator.clipboard.writeText(resultString).then(() => {
            alert('Copied to clipboard!');
        });
    };
});
