/*!
 Author: Tumelo Madume
Design by Tumelo Madume
 */

async function handleFormSubmit(event) {
    event.preventDefault()
    // console.log(event);

    // console.log(document);
    const nameInput = document.getElementById("name")
    const surnameInput = document.getElementById("surname")
    const emailInput = document.getElementById("email")
    const subjectInput = document.getElementById("subject")
    const messageInput = document.getElementById("message")

    // console.log(emailInput);
    const isNameValid = nameInput.value.trim() !== '' && nameInput.validity.valid
    console.log(isNameValid);
    const isSurnameValid = surnameInput.value.trim() !== '' && surnameInput.validity.valid
    console.log(isSurnameValid);
    const isEmailValid = emailInput.value.trim() !== '' && emailInput.validity.valid
    console.log(isEmailValid);
    const isSubjectValid = subjectInput.value.trim() !== '' && subjectInput.validity.valid
    console.log(isSubjectValid);
    let isMessageValid = messageInput.value.trim() !== '';
    console.log({ isMessageValid });
    
    const isFormValid = isNameValid && isSurnameValid && isEmailValid && isSubjectValid && isMessageValid


    if(isFormValid) {
        // grab our data from the form
        const formData = new FormData(event.target)
        console.log(formData);
        const response = await fetch('https://formspree.io/f/mqkrwbep', 
            {
                method: 'POST', // GET, POST, PATCH, PUT, DELETE
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
        const data = await response.json()
        console.log(data);
        if(data.ok) {
            alert('Email successfully sent')
        }
    } else {
        // alert the user that the form is invalid
        console.log('form invalid');
        if(isNameValid !== true) {
            // display the message span
            const nameLabel = document.getElementById('name-label')
            console.log(nameLabel);
            const nameSpan = document.createElement('span')
            nameSpan.innerText = 'Name is invalid'
            nameLabel.appendChild(nameSpan)
        }
        if(isSurnameValid !== true) {
            // display the message span
            const surnameLabel = document.getElementById('surname-label')
            console.log(surnameLabel);
            const surnameSpan = document.createElement('span')
            surnameSpan.innerText = 'Surname is invalid'
            surnameLabel.appendChild(surnameSpan)
        }
        if(isEmailValid !== true) {
            // display the email span
            const emailLabel = document.getElementById('email-label')
            console.log(emailLabel);
            const emailSpan = document.createElement('span')
            emailSpan.innerText = 'Email is invalid'

            console.log(emailSpan);
            emailLabel.appendChild(emailSpan)
        }
        if(isSubjectValid !== true) {
            // display the message span
            const subjectLabel = document.getElementById('subject-label')
            console.log(subjectLabel);
            const subjectSpan = document.createElement('span')
            subjectSpan.innerText = 'Subject is invalid'
            subjectLabel.appendChild(subjectSpan)
        }
        if(isMessageValid !== true) {
            // display the message span
            const messageLabel = document.getElementById('message-label')
            console.log(messageLabel);
            const messageSpan = document.createElement('span')
            messageSpan.innerText = 'Message is invalid'
            messageLabel.appendChild(messageSpan)
        }
    }
    
    
}


function handleOnchange(event) {
    // console.log(event);
}
window.addEventListener(('load'), () => {
    console.log(document);

    // setTimeout(()=> {
    //     console.log('hi again');
        
    // }, 10000) // milliseconds
    // setInterval(() => {
    //     console.log('repeated hi');
    // }, 5000)
    console.log('second hi');
    document.getElementById('email').addEventListener('keyup', handleOnchange)
})