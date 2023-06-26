import { useState } from 'react'
import { SEARCH_REGEXP } from '../utils/constants';

const validate = (name, value, errors, setErrors) => {
    switch (name) {
        case 'search':
            if(!SEARCH_REGEXP.test(value)) setErrors({...errors, search:'Нужно ввести ключевое слово'})
        else setErrors({...errors, search:''})
        break;
        default: 
        break;
    }
}

const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
      event.persist();

      let name = event.target.name;
      let value = event.target.value;
      
      validate(name, value, errors, setErrors);

      setValues({
          ...values,
          [name]:value,
      })

  }


  return {
      values,
      errors,
      handleChange,
  }
}

export default useForm