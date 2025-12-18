document.addEventListener('DOMContentLoaded', function () {
    // Forms
    const loginForm = document.getElementById('loginForm');
    const forgetPasswordForm = document.getElementById('forgetPassword');
    const reassignPhoneForm = document.getElementById('reassignPhone');
    const resetPasswordForm = document.getElementById('resetPassword');
    const codeForm = document.getElementById('codeForm');

    // Helper function to show a specific form
    function showForm(formToShow) {
        // Hide all forms
        [loginForm, forgetPasswordForm, reassignPhoneForm, resetPasswordForm, codeForm].forEach(form => {
            if (form) form.classList.add('d-none');
        });

        // Show the requested form
        if (formToShow) {
            formToShow.classList.remove('d-none');
        }
    }

    // --- Event Listeners ---

    // 1. Login Form -> Forget Password
    const toForgetPassword = document.getElementById('toForgetPassword');
    if (toForgetPassword) {
        toForgetPassword.addEventListener('click', (e) => {
            e.preventDefault();
            showForm(forgetPasswordForm);
        });
    }

    // 2. Forget Password Form -> Code Form
    const toCodeForm = document.getElementById('toCodeForm');
    if (toCodeForm) {
        toCodeForm.addEventListener('click', (e) => {
            showForm(codeForm);
        });
    }

    // 3. Reassign Phone Form -> Code Form
    const toCodeFormFromReassign = document.getElementById('toCodeFormFromReassign');
    if (toCodeFormFromReassign) {
        toCodeFormFromReassign.addEventListener('click', (e) => {
            e.preventDefault();
            showForm(codeForm);
        });
    }

    // 4. Code Verification Form
    // "تحقق من الرمز" -> Reset Password Form
    const toLoginForm = document.getElementById('toLoginForm');
    if (toLoginForm) {
        toLoginForm.addEventListener('click', (e) => {
            showForm(resetPasswordForm);
        });
    }

    // "تغيير رقم الهاتف" -> Reassign Phone Form
    const toReassignPhone = document.getElementById('toReassignPhone');
    if (toReassignPhone) {
        toReassignPhone.addEventListener('click', (e) => {
            e.preventDefault();
            showForm(reassignPhoneForm);
        });
    }

    // 5. Reset Password Form -> Login Form
    const toResetPassword = document.getElementById('toResetPassword');
    if (toResetPassword) {
        toResetPassword.addEventListener('click', (e) => {
            e.preventDefault();
            showForm(loginForm);
        });
    }

    // 6. Back to Login Links
    const backToLoginLinks = document.querySelectorAll('.back-to-login');
    backToLoginLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showForm(loginForm);
        });
    });

});
