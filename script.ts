document.getElementById('form')?.addEventListener('submit', function(event){
    event.preventDefault();


    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;


    if(nameElement && emailElement && phoneElement && educationElement && experienceElement){

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;


        const output = `
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name} </p>
        <p><strong>Email:</strong> ${email} </p>
        <p><strong>Phone:</strong> ${phone} </p>
        
        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>
        `;

        const outputElement = document.getElementById('output')
        if(outputElement){
            outputElement.innerHTML = output
        }
        else{
            console.error('The Resume output elements are missing')
        }
        

    }
    else{
        console.error('More than one element is missing')
    }



})