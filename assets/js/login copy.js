document.addEventListener("click", function (e) {
    const target = e.target.closest("a, button");
    if (!target) return;

    const text = target.textContent.trim();

    // Helper
    function showForm(name) {
        document.querySelectorAll(".auth-form").forEach(f => {
            f.classList.remove("active");
        });
        const form = document.querySelector(`[data-form="${name}"]`);
        if (form) form.classList.add("active");
    }

    // LOGIN → FORGET PASSWORD
    if (text.includes("نسيت") || text.includes("Forget")) {
        e.preventDefault();
        showForm("forget");
    }

    // FORGET PASSWORD → OTP
    if (text.includes("إرسال") || text.includes("Send")) {
        if (target.closest(".forget-password")) {
            e.preventDefault();
            showForm("code");
        }
    }

    // OTP → RESET PASSWORD
    if (text.includes("تحقق") || text.includes("Verify")) {
        if (target.closest(".code-verification")) {
            e.preventDefault();
            showForm("reset");
        }
    }

    // CHANGE PHONE NUMBER (OTP → REASSIGN)
    if (text.includes("تغيير رقم الهاتف")) {
        e.preventDefault();
        showForm("reassign");
    }

    // REASSIGN PHONE → OTP
    if (text.includes("حفظ") || text.includes("Save")) {
        if (target.closest(".reassign-phone")) {
            e.preventDefault();
            showForm("code");
        }
    }

    // BACK TO LOGIN (any link mentioning login)
    if (text.includes("تسجيل الدخول") || text.includes("Login")) {
        e.preventDefault();
        showForm("login");
    }
});