document.addEventListener('DOMContentLoaded', function () {
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const steps = document.querySelectorAll('.step-content');
    const stepperItems = document.querySelectorAll('.stepper-item');
    let currentStep = 1;

    nextBtn.addEventListener('click', function () {
        if (currentStep < 3) {
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
        // Update Step Content
        steps.forEach(step => {
            if (step.id === `step${currentStep}`) {
                step.classList.remove('d-none');
                step.classList.add('active');
            } else {
                step.classList.add('d-none');
                step.classList.remove('active');
            }
        });

        // Update Stepper Indicators
        stepperItems.forEach(item => {
            const stepNum = parseInt(item.dataset.step);
            if (stepNum < currentStep) {
                item.classList.add('completed');
                item.classList.remove('active');
                item.querySelector('.step-counter').innerHTML = '<i class="fa-solid fa-check"></i>';
            } else if (stepNum === currentStep) {
                item.classList.add('active');
                item.classList.remove('completed');
                item.querySelector('.step-counter').textContent = stepNum;
            } else {
                item.classList.remove('active', 'completed');
                item.querySelector('.step-counter').textContent = stepNum;
            }
        });

        // Update Buttons
        if (currentStep === 1) {
            prevBtn.style.visibility = 'hidden';
            nextBtn.textContent = 'التالي';
        } else if (currentStep === 2) {
            prevBtn.style.visibility = 'visible';
            nextBtn.textContent = 'التالي';
        } else if (currentStep === 3) {
            prevBtn.style.visibility = 'visible';
            nextBtn.textContent = 'إرسال الطلب';
        }
    }
});
