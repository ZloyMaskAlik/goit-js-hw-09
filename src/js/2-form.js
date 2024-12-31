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
        const formDataFromLs = JSON.parse(localStorage.getItem(`feedback-form`));
               
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
    const fieldValue = formFieldEl.value;
    const fieldName = formFieldEl.name;

    formData[fieldName] = fieldValue;
      
    localStorage.setItem(`feedback-form`, JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();
    event.currentTarget.reset();
    
    localStorage.removeItem(`feedback-form`);
 };

feedbackFormEl.addEventListener(`change`, onFormFieldChange);
feedbackFormEl.addEventListener(`submit`, onFeedbackFormSubmit);