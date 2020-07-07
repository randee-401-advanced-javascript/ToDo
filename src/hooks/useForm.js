import { useState } from 'react';

function useForm(callback, initData) {
    const [formData, setFormData] = useState(initData || {});

    function updateForm(key, value) {
        let newFormData = { ...formData };
        newFormData[key] = value;
        // console.log('NEW FORM ON useForm.js');
        // console.log(newFormData)
        setFormData(newFormData);
    }

    function submitForm(e) {
        e.preventDefault();
        // console.log('FORM DATA ON useForm.js')
        // console.log(formData)
        callback(formData);
    }

    return [updateForm, submitForm, formData];
}

export default useForm;