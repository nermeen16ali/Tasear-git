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
                item.querySelector('.step-counter').innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                        <path d="M4.25213 12.5C4.25213 12.5 4.24512 12.5 4.24212 12.5C3.97612 12.496 3.73215 12.353 3.60115 12.122C1.92315 9.186 0.765125 9.02148 0.752125 9.01948C0.752125 9.01948 0.494289 9.08008 0.228589 8.80078C-0.0371106 8.52148 0.00202665 8.20312 0.00202665 8.20312C0.00202665 8.20312 0.0176517 7.91406 0.228589 7.70703C0.439527 7.50001 0.752125 7.50001 0.752125 7.50001C1.04212 7.50001 2.45311 7.64999 4.26111 10.339C5.89811 7.845 10.3251 1.593 14.4911 0.0470029C14.8791 -0.0969971 15.3112 0.100995 15.4552 0.488995C15.5992 0.876995 15.4012 1.30901 15.0132 1.45301C10.3752 3.17401 4.94814 12.049 4.89314 12.139C4.75714 12.363 4.51413 12.5 4.25213 12.5Z"
                            fill="#004B31"/>
                    </svg>
                `;
            } else if (stepNum === currentStep) {
                item.classList.add('active');
                item.classList.remove('completed');
                item.querySelector('.step-counter').textContent = stepNum;
            } else {
                item.classList.remove('active', 'completed');
                item.querySelector('.step-counter').textContent = stepNum;
            }
        });
        const arrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10"
                                viewBox="0 0 15 10" fill="none">
                                <path
                                    d="M0 4.79207C2.23199e-06 5.10337 0.138045 5.39217 0.268766 5.60903C0.40983 5.84304 0.599536 6.08465 0.807653 6.32021C1.22515 6.79277 1.76989 7.30026 2.29853 7.75931C2.83027 8.22107 3.36019 8.64624 3.75604 8.95522C3.9543 9.10997 4.1197 9.23617 4.23587 9.32392C4.29397 9.36782 4.3398 9.40213 4.37132 9.42562L4.40762 9.45261L4.41726 9.45974L4.4206 9.4622C4.69852 9.66692 5.09013 9.60785 5.29485 9.32993C5.49956 9.05202 5.44023 8.66079 5.16235 8.45607L5.15174 8.44822L5.11836 8.42341C5.08885 8.40141 5.04516 8.36871 4.98933 8.32653C4.87764 8.24216 4.71752 8.12 4.52516 7.96985C4.13977 7.66904 3.62803 7.2583 3.11811 6.8155C2.60509 6.37001 2.10818 5.90432 1.74443 5.49259C1.72142 5.46655 1.69916 5.44096 1.67764 5.41583L13.9583 5.41583C14.3035 5.41583 14.5833 5.136 14.5833 4.79083C14.5833 4.44565 14.3035 4.16583 13.9583 4.16583L1.67975 4.16583C1.70061 4.14149 1.72217 4.11672 1.74443 4.09153C2.10818 3.6798 2.60509 3.21412 3.11811 2.76862C3.62802 2.32583 4.13977 1.91508 4.52516 1.61428C4.71752 1.46413 4.87764 1.34197 4.98933 1.25759C5.04516 1.21541 5.08885 1.18271 5.11836 1.16071L5.15174 1.1359L5.16234 1.12806C5.44023 0.923333 5.49956 0.532101 5.29485 0.254195C5.09013 -0.0237227 4.69852 -0.0827981 4.4206 0.12192L4.41726 0.124387L4.40762 0.131515L4.37132 0.158502C4.3398 0.181998 4.29397 0.216308 4.23586 0.260199C4.11969 0.347958 3.9543 0.474155 3.75604 0.628902C3.36018 0.93788 2.83027 1.36306 2.29853 1.82481C1.76989 2.28387 1.22515 2.79135 0.807652 3.26391C0.599536 3.49948 0.40983 3.74108 0.268766 3.9751C0.138831 4.19065 0.00166038 4.4773 1.43046e-05 4.78646"
                                    fill="white" />
                            </svg>`;

        // Update Buttons
        if (currentStep === 1) {
            prevBtn.style.visibility = 'hidden';
            // nextBtn.textContent = 'التالي';
            nextBtn.innerHTML = 'التالي' + arrowSvg;
        } else if (currentStep === 2) {
            prevBtn.style.visibility = 'visible';
            // nextBtn.textContent = 'التالي';
            nextBtn.innerHTML = 'التالي' + arrowSvg;
        } else if (currentStep === 3) {
            prevBtn.style.visibility = 'visible';
            // nextBtn.textContent = 'طلب التقرير - الإنتقال إلي طرق الدفع';
            nextBtn.innerHTML = 'طلب التقرير - الإنتقال إلي طرق الدفع' + arrowSvg;
        }
    }
});
