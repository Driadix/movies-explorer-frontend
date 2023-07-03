import { useState } from 'react'
import { SEARCH_REGEXP, TEXT_REGEXP, EMAIL_REGEXP, PASSWORD_REGEXP } from '../utils/constants';

const validate = (name, value, errors, setErrors) => {
    switch (name) {
        case 'search':
            if (!SEARCH_REGEXP.test(value)) setErrors({ ...errors, search: 'Нужно ввести ключевое слово' })
            else setErrors({ ...errors, search: '' })
            break;
        case 'text':
            if (!TEXT_REGEXP.test(value)) setErrors({ ...errors, text: 'Введите валидный текст (буквы, пробелы, дефисы)' })
            else setErrors({ ...errors, text: '' })
            break;
        case 'email':
            if (!EMAIL_REGEXP.test(value)) setErrors({ ...errors, email: 'Введите валидный email' })
            else setErrors({ ...errors, email: '' })
            break;
        case 'password':
            if (!PASSWORD_REGEXP.test(value)) setErrors({ ...errors, password: 'Введите валидный пароль' })
            else setErrors({ ...errors, password: '' })
            break;
        default:
            break;
    }
}

const useForm = (initValue = {}) => {
    const [values, setValues] = useState(initValue);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        event.persist();

        let name = event.target.name;
        let value = event.target.value;

        validate(name, value, errors, setErrors);

        setValues({
            ...values,
            [name]: value,
        })

    }


    return {
        values,
        errors,
        handleChange,
    }
}

export default useForm