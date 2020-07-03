import { useState } from 'react';

function useForm(cb, iD) {
  const [formData, setFormData] = useState(iD || {});
  
  function updateForm(key, value) {
    let newFormData = {...formData};
    newFormData[key] = value;

    setFormData(newFormData);
  }

  function submitForm(e) {
    e.preventDefault();
    cb(formData);
  }
  return [updateForm, submitForm, formData];
}

export default useForm;