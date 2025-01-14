var _a;
(_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var output = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name_1, " </p>\n        <p><strong>Email:</strong> ").concat(email, " </p>\n        <p><strong>Phone:</strong> ").concat(phone, " </p>\n        \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        ");
        var outputElement = document.getElementById('output');
        if (outputElement) {
            outputElement.innerHTML = output;
        }
        else {
            console.error('The Resume output elements are missing');
        }
    }
    else {
        console.error('More than one element is missing');
    }
});
