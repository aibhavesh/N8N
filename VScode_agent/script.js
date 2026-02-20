document.addEventListener('DOMContentLoaded', () => {
	const yearEl = document.getElementById('year');
	if (yearEl) {
		yearEl.textContent = new Date().getFullYear();
	}

	const toggle = document.querySelector('.nav-toggle');
	const nav = document.querySelector('.nav');
	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('open');
		});
	}

	const form = document.getElementById('admissionForm');
	const status = document.getElementById('formStatus');
	if (form && status) {
		form.addEventListener('submit', function (event) {
			event.preventDefault();

			const name = document.getElementById('name').value.trim();
			const email = document.getElementById('email').value.trim();
			const program = document.getElementById('program').value;

			if (!name || !email || !program) {
				status.textContent = 'Please fill all required fields.';
				status.style.color = '#b42318';
				return;
			}

			const button = this.querySelector('button[type="submit"]');
			button.disabled = true;
			button.textContent = 'Submitting...';

			setTimeout(() => {
				status.textContent = 'Enquiry submitted successfully. Our admission team will contact you soon.';
				status.style.color = '#0a5cb0';
				this.reset();
				button.disabled = false;
				button.textContent = 'Submit Enquiry';
			}, 900);
		});
	}
});