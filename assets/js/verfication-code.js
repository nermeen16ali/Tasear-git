/* =================================
   AUTO FOCUS WHEN ANY AUTH FORM IS ACTIVE
   ================================= */
const authForms = document.querySelectorAll('.auth-form');

authForms.forEach(form => {
    let wasActive = false;

    const observer = new MutationObserver(() => {
        const isActive = form.classList.contains('active');
        if (isActive && !wasActive) {
            wasActive = true;

            setTimeout(() => {
                const firstInput = form.querySelector('.verification-input');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 100);
        }
        if (!isActive) {
            wasActive = false;
        }
    });

    observer.observe(form, {
        attributes: true,
        attributeFilter: ['class']
    });
});

/* =================================
   VERIFICATION INPUTS NAVIGATION
   ================================= */
document.addEventListener('input', (e) => {
    if (!e.target.classList.contains('verification-input')) return;

    const form = e.target.closest('.auth-form');
    if (!form) return;

    const inputs = [...form.querySelectorAll('.verification-input')];
    const index = inputs.indexOf(e.target);

    if (e.target.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
    }
});

document.addEventListener('keydown', (e) => {
    if (!e.target.classList.contains('verification-input')) return;

    if (e.key !== 'Backspace') return;

    const form = e.target.closest('.auth-form');
    if (!form) return;

    const inputs = [...form.querySelectorAll('.verification-input')];
    const index = inputs.indexOf(e.target);

    if (e.target.value === '' && index > 0) {
        inputs[index - 1].focus();
    }
});
