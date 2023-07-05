import { useState } from 'react'
import { SEARCH_REGEXP, TEXT_REGEXP, EMAIL_REGEXP, PASSWORD_REGEXP } from '../utils/constants';

const validate = (name, value, errors, setErrors, setIsValid) => {
    switch (name) {
        case 'search':
            if (!SEARCH_REGEXP.test(value)) {
                setErrors({ ...errors, search: 'Введите валидный поисковый запрос (буквы, цифры, пробелы)' })
                setIsValid(false)
            }
            else setErrors({ ...errors, search: '' })
            break;
        case 'text':
            if (!TEXT_REGEXP.test(value)) {
                setErrors({ ...errors, text: 'Введите валидный текст (буквы, пробелы, дефисы)' })
                setIsValid(false)
            }
            else setErrors({ ...errors, text: '' })
            break;
        case 'email':
            if (!EMAIL_REGEXP.test(value)) {
                setErrors({ ...errors, email: 'Введите валидный email (должен начинаться с буквы и содержать буквы, цифры, дефисы или нижние подчеркивания)' })
                setIsValid(false)
            }
            else setErrors({ ...errors, email: '' })
            break;
        case 'password':
            if (!PASSWORD_REGEXP.test(value)) {
                setErrors({ ...errors, password: 'Введите валидный пароль' })
                setIsValid(false)
            }
            else setErrors({ ...errors, password: '' })
            break;
        default:
            break;
    }
}

const useForm = (initValue = {}, isValidValue=false) => {
    const [values, setValues] = useState(initValue);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(isValidValue);

    const handleChange = (event) => {
        event.persist();

        let target = event.target;
        let name = event.target.name;
        let valueWithSpaces = event.target.value;
        let value = valueWithSpaces.trimStart();

        setErrors({...errors, [name]: target.validationMessage });
        if (target.validationMessage === 'Заполните это поле.' && name === 'search') setErrors({...errors, [name]: 'Введите ключевое слово' });
        setIsValid(target.closest("form").checkValidity());
        if (!target.validationMessage) validate(name, value, errors, setErrors, setIsValid);

        setValues({
            ...values,
            [name]: value,
        })
    }


    return {
        values,
        errors,
        handleChange,
        isValid
    }
}

export default useForm