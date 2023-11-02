const submit = document.querySelector('#submit');

// Attach an event listener to the button
submit.addEventListener('click', onSubmit);

async function onSubmit(event) {


    // Gather form data
    const formData = {
        fullName: document.querySelector('input[name="fullName"]').value,
        address: document.querySelector('input[name="address"]').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        dob: document.querySelector('input[name="dob"]').value,
        contact: document.querySelector('input[name="contact"]').value,
        email: document.querySelector('input[name="email"]').value,
        nationality: document.querySelector('input[name="nationality"]').value,
        destination: document.querySelector('input[name="destination"]').value,
        arrivalDate: document.querySelector('input[name="arrivalDate"]').value,
        departure: document.querySelector('input[name="departure"]').value,
        payment: document.querySelector('input[name="payment"]').value,
        vaccinationStatus: document.querySelector('select[name="vaccinationStatus"]').value
    };

    console.log(formData); // Check the form data in the console

    // Make a POST request to the backend
    try {
        const response = fetch('http://localhost:8080/tourist/register', {
            method: 'POST', // Change this to the appropriate HTTP method
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok || response.status == 201) {
            // Handle a successful response here (e.g., display a success message)
            console.log('Success:', response.status);
            alert('Registration successful!');
            window.location.href = 'home.html';
            
        }
        // You can also reset the form if needed: document.getElementById('myForm').reset();
    } catch (error) {
        // Handle errors (e.g., display an error message)
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
    }
}
