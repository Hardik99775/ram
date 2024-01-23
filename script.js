// Use prompt to get user input
let count = prompt("Enter the number of times you want to print 'Jay Shree Ram':");

// Validate if the input is a valid number
if (!isNaN(count) && count !== null) {
    // Convert input to integer
    count = parseInt(count);

    // Print "Jay Shree Ram" based on user input
    for (let i = 0; i < count; i++) {
        document.write("🙏🙏🙏🙏𝔍𝔞𝔦⁣ ꢺ𝖍𝖗𝖊𝖊 Rᴀᴍ🙏🙏🙏🙏 ");
    }
} else {
    alert("Invalid input. Please enter a valid number.");
}