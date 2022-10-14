import { ChangeEvent, useState } from 'react';
export const useForm = <S extends object>(initialState: S) => {
	const [formValues, setFormValues] = useState<S>(initialState);
	const handlerInputChange = (input: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = input.target;
		setFormValues({ ...formValues, [name]: value });
	};
	return { formValues, handlerInputChange };
};
