const feedbackFormEl = document.querySelector(`form`);
let formData = {
    email: ``,
    message: ``,
};

const fillFormFields = () => {
    try {
        if (localStorage.getItem('feedback-form-state') === null) {
            return;
        }
        const formDataFromLs = JSON.parse(localStorage.getItem(`feedback-form-state`));
               
        formData = formDataFromLs;
     
        for (const key in formDataFromLs) {
            feedbackFormEl.elements[key].value = formDataFromLs[key];
        }

    } catch (err) {
        console.log(err);
    }
};

fillFormFields();

const onFormFieldInput = event => {
    const { target: formFieldEl } = event;
    const fieldValue = formFieldEl.value.trim();
    const fieldName = formFieldEl.name;

    formData[fieldName] = fieldValue;
   
    localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));
};
            
const onFeedbackFormSubmit = event => {
    event.preventDefault();
        if (Object.values(formData).includes(``)) {
            alert`Fill please all fields`;
        } else {
            console.log(formData); 
            event.currentTarget.reset();
            localStorage.removeItem(`feedback-form-state`);
            Object.keys(formData).forEach(key => {formData[key] = ``;
            });
    };
};

feedbackFormEl.addEventListener(`input`, onFormFieldInput);
feedbackFormEl.addEventListener(`submit`, onFeedbackFormSubmit);