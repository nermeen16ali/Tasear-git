document.addEventListener("DOMContentLoaded", function () {

    function showForm(name) {
        document.querySelectorAll(".auth-form").forEach(f => {
            f.classList.remove("active");
        });

        const form = document.querySelector(`[data-form="${name}"]`);
        if (!form) return;

        form.classList.add("active");

        // INIT OTP INPUTS ONLY WHEN OTP FORM IS SHOWN
        if (name === "code") {
            initVerificationInputs(form);
        }
    }

    function initVerificationInputs(form) {
        const inputs = form.querySelectorAll(".verification-input");
        if (!inputs.length) return;

        // reset values (optional but recommended)
        inputs.forEach(i => i.value = "");

        inputs[0].focus();

        inputs.forEach((input, index) => {

            input.oninput = function (e) {
                if (e.target.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            };

            input.onkeydown = function (e) {
                if (e.key === "Backspace" && !e.target.value && index > 0) {
                    inputs[index - 1].focus();
                }
            };

        });
    }

    document.addEventListener("click", function (e) {
        const target = e.target.closest("a, button");
        if (!target) return;

        const text = target.textContent.trim();

        // LOGIN → FORGET
        if (text.includes("نسيت") || text.includes("Forget")) {
            e.preventDefault();
            showForm("forget");
        }

        // FORGET → OTP
        if ((text.includes("إرسال") || text.includes("Send")) &&
            target.closest(".forget-password")) {
            e.preventDefault();
            showForm("code");
        }

        // OTP → RESET PASSWORD
        if ((text.includes("تحقق") || text.includes("Verify")) &&
            target.closest(".code-verification")) {
            e.preventDefault();
            showForm("reset");
        }

        // OTP → CHANGE PHONE
        if (text.includes("تغيير رقم الهاتف")) {
            e.preventDefault();
            showForm("reassign");
        }

        // CHANGE PHONE → OTP
        if ((text.includes("حفظ") || text.includes("Save")) &&
            target.closest(".reassign-phone")) {
            e.preventDefault();
            showForm("code");
        }

        // BACK TO LOGIN
        if (text.includes("تسجيل الدخول") || text.includes("Login")) {
            e.preventDefault();
            showForm("login");
        }
    });

});