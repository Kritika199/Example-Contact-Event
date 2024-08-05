// Function to show the first form
function showFirstForm() {
    document.getElementById('firstForm').style.display = 'block';
    document.getElementById('secondForm').style.display = 'none';
    document.getElementById('thirdForm').style.display = 'none';
}

// Function to show the second form
function showSecondForm() {
    document.getElementById('firstForm').style.display = 'none';
    document.getElementById('secondForm').style.display = 'block';
    document.getElementById('thirdForm').style.display = 'none';
}

// Function to show the third form
function showThirdForm() {
    document.getElementById('firstForm').style.display = 'none';
    document.getElementById('secondForm').style.display = 'none';
    document.getElementById('thirdForm').style.display = 'block';
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', function() {
    // Cancel buttons (hide all forms)
    document.querySelectorAll('.cancel').forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('firstForm').style.display = 'none';
            document.getElementById('secondForm').style.display = 'none';
            document.getElementById('thirdForm').style.display = 'none';
        });
    });

    // Back button (show previous form)
    document.querySelectorAll('.back').forEach(button => {
        button.addEventListener('click', function() {
            if (document.getElementById('secondForm').style.display === 'block') {
                showFirstForm();
            } else if (document.getElementById('thirdForm').style.display === 'block') {
                showSecondForm();
            }
        });
    });

    // Initialize the view with the first form
    showFirstForm();
});
