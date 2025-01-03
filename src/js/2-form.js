localStorage.removeItem(`loglevel`);
const feedbackFormEl = document.querySelector(`form`);
let formData = {
    email: ``,
    message: ``,
};

const fillFormFields = () => {
    try {
        if (localStorage.length === 0) {
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

const onFormFieldChange = event => {
    const { target: formFieldEl } = event;
    const fieldValue = formFieldEl.value.trim();
    const fieldName = formFieldEl.name;

    formData[fieldName] = fieldValue;
   
    localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));
};
            
const onFeedbackFormSubmit = event => {
    event.preventDefault();
        if (formData.email === '' || formData.message === '') {
            alert`Fill please all fields`;
        } else {
            console.log(formData); 
            event.currentTarget.reset();
            localStorage.removeItem(`feedback-form-state`);
            const formCheck = Object.keys(formData)        
            for (const key of formCheck) {
                if (formData[key] !== '') {
                    formData[key]='';
                }   
            }
        }
};

feedbackFormEl.addEventListener(`change`, onFormFieldChange);
feedbackFormEl.addEventListener(`submit`, onFeedbackFormSubmit);