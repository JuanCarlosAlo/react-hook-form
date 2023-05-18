import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/inputValidation';

const Form = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	const user = 'pepe';

	return (
		<form onSubmit={handleSubmit((data, e) => onSubmit(data, e, user))}>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					id='name'
					{...register('name', FORM_VALIDATIONS.name)}
				/>
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='text'
					name='email'
					id='email'
					{...register('email', {
						required: FORM_VALIDATIONS['email'].require,
						pattern: {
							value: FORM_VALIDATIONS['email'].pattern,
							message: FORM_VALIDATIONS['email'].message
						}
					})}
				/>
			</div>
			<p>{errors?.name?.message}</p>
			<p>{errors?.email?.message}</p>
			<button>go</button>
		</form>
	);
};

const onSubmit = (data, e, user) => {
	console.log(data);
	console.log(e);
	console.log(user);
};

export default Form;
