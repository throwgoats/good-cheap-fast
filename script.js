// Fast, Cheap, Good - Pick Two
// Rule: You can only have two of the three options selected at once

document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });
});

function handleCheckboxChange(event) {
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // If three boxes are checked, uncheck the oldest one (not the one just clicked)
    if (checkedBoxes.length > 2) {
        checkedBoxes[0].checked = false;
    }
}
