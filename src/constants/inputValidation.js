const messages = {
	name: 'El formato introducido no es correcto',
	requireName: 'El nombre es obligatorio',
	email: 'introduce un email correcto',
	requireEmail: 'El email es obligatorio'
};

const patterns = {
	name: /^[A-Za-z]*$/,
	email:
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
};

export const FORM_VALIDATIONS = {
	name: {
		required: messages.requireName,
		pattern: {
			value: patterns.name,
			message: messages.name
		}
	},
	email: {
		require: messages.requireEmail,
		pattern: patterns.email,
		message: messages.email
	}
};
