document.addEventListener('DOMContentLoaded', function () {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const steps = document.querySelectorAll('.step-content');
    const stepperItems = document.querySelectorAll('.stepper-item');

    let currentStep = 1;
    const totalSteps = 3;

    nextBtn.addEventListener('click', function () {
        if (currentStep < totalSteps) {
            currentStep++;
            updateStepper();
        }
    });

    prevBtn.addEventListener('click', function () {
        if (currentStep > 1) {
            currentStep--;
            updateStepper();
        }
    });

    function updateStepper() {

        /* ===== Step Content ===== */
        steps.forEach(step => {
            const isActive = step.id === `step${currentStep}`;
            step.classList.toggle('d-none', !isActive);
            step.classList.toggle('active', isActive);
        });

        /* ===== Stepper Indicators ===== */
        stepperItems.forEach(item => {
            const stepNum = parseInt(item.dataset.step);
            const counter = item.querySelector('.step-counter');

            if (stepNum < currentStep) {
                item.classList.add('completed');
                item.classList.remove('active');
                counter.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                        <path d="M4.25213 12.5C4.25213 12.5 4.24512 12.5 4.24212 12.5C3.97612 12.496 3.73215 12.353 3.60115 12.122C1.92315 9.186 0.765125 9.02148 0.752125 9.01948C0.752125 9.01948 0.494289 9.08008 0.228589 8.80078C-0.0371106 8.52148 0.00202665 8.20312 0.00202665 8.20312C0.00202665 8.20312 0.0176517 7.91406 0.228589 7.70703C0.439527 7.50001 0.752125 7.50001 0.752125 7.50001C1.04212 7.50001 2.45311 7.64999 4.26111 10.339C5.89811 7.845 10.3251 1.593 14.4911 0.0470029C14.8791 -0.0969971 15.3112 0.100995 15.4552 0.488995C15.5992 0.876995 15.4012 1.30901 15.0132 1.45301C10.3752 3.17401 4.94814 12.049 4.89314 12.139C4.75714 12.363 4.51413 12.5 4.25213 12.5Z" fill="#004B31"></path>
                    </svg>
                `;
            }
            else if (stepNum === currentStep) {
                item.classList.add('active');
                item.classList.remove('completed');
                counter.textContent = stepNum;
            }
            else {
                item.classList.remove('active', 'completed');
                counter.textContent = stepNum;
            }
        });

        /* ===== Buttons (DISPLAY only) ===== */
        if (currentStep === 1) {
            prevBtn.classList.add('d-none');
            nextBtn.classList.remove('d-none');
        }
        else if (currentStep === totalSteps) {
            prevBtn.classList.add('d-none');
            nextBtn.classList.add('d-none');
        }
        else {
            prevBtn.classList.remove('d-none');
            nextBtn.classList.remove('d-none');
        }
    }

    // init
    updateStepper();
});
