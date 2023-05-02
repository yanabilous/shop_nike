import * as yup from 'yup';

// const phoneRegExp = /^[0-9]{7,15}$/;
const phoneRegExp = /^[(][0-9]{3}[)][' '][0-9]{4}[' '][0-9]{3}$/;

export const validationSchema = yup.object({
	firstName: yup
		.string()
		.max(15, 'Must be 15 characters or less')
		.required('Required'),
	lastName: yup
		.string()
		.max(20, 'Must be 20 characters or less')
		.required('Required'),
	age: yup
		.number()
		.positive()
		.integer()
		.required("Required"),
	address: yup
		.string()
		.min(5, 'Must be minimum 5 characters')
		.max(60, 'Must be 60 characters or less')
		.required('Required'),
	phone: yup
		.string()
		.matches(phoneRegExp, 'Invalid phone number')
		.required("Required"),
})
