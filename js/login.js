let container = document.getElementById('container');

toggle = () => {
	container.classList.toggle('sign-in');
	container.classList.toggle('sign-up');
	
	const signInForm = document.querySelector('.form.sign-in');
	const signUpForm = document.querySelector('.form.sign-up');

	if (container.classList.contains('sign-in')) {
		signInForm.classList.add('opacity-100', 'translate-x-0');
		signInForm.classList.remove('opacity-0', 'translate-x-full');
		signUpForm.classList.add('opacity-0', 'translate-x-full', 'hidden');
		signUpForm.classList.remove('opacity-100', 'translate-x-0');
	} else {
		signUpForm.classList.add('opacity-100', 'translate-x-0');
		signUpForm.classList.remove('opacity-0', 'translate-x-full', 'hidden');
		signInForm.classList.add('opacity-0', 'translate-x-full');
		signInForm.classList.remove('opacity-100', 'translate-x-0');
	}
};

setTimeout(() => {
	container.classList.add('sign-in');
}, 200);