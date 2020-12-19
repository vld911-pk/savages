import { passwordMaxLendth, passwordMinLendth } from '../constants/validation';

export const isFormDirtyCheck = (form) => {
    let formState = {};
    const setFormState = (obj) => {
        formState = obj;
    }
    for (const [key, field] of Object.entries(form)) {
        if (field === '' || field === null) {
            setFormState({ ...formState, [key]: true })
        } else {
            setFormState({ ...formState, [key]: false })
        }
    }

    return formState;
}