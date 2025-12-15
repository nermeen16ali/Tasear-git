// Verification Code Inputs
const verificationInputs = document.querySelectorAll('.verification-input');
if (verificationInputs.length > 0) {
    verificationInputs[0].focus();

    verificationInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1) {
                if (index < verificationInputs.length - 1) {
                    verificationInputs[index + 1].focus();
                }
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && e.target.value.length === 0) {
                if (index > 0) {
                    verificationInputs[index - 1].focus();
                }
            }
        });
    });
}