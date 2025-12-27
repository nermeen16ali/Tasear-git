function openFilter() {
    document.getElementById("filterPanel").classList.add("active");
}

function closeFilter() {
    document.getElementById("filterPanel").classList.remove("active");
}
// function applyFilter() {
//     const sectors = [...document.querySelectorAll('input[type="checkbox"]:checked')]
//         .map(el => el.value);

//     const suppliers = document.querySelector('input[name="suppliers"]:checked')?.value;

//     console.log("القطاعات:", sectors);
//     console.log("عدد الموردين:", suppliers);

//     // SweetAlert2 Toast
//     Swal.fire({
//         toast: true,
//         position: 'top',
//         icon: 'success',
//         title: 'تم تطبيق التصفية بنجاح',
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: false,
//         customClass: {
//             popup: 'swal-top-center'
//         }
//     });
// }

function applyFilter() {
    const filter = document.getElementById('filterPanel');

    // inputs المتعلمة داخل الفلتر فقط
    const checkedInputs = filter.querySelectorAll('input:checked');

    // ❌ لا يوجد أي اختيار داخل الفلتر
    if (checkedInputs.length === 0) {
        Swal.fire({
            toast: true,
            position: 'top',
            icon: 'warning',
            title: 'من فضلك اختر تصفية واحدة على الأقل',
            showConfirmButton: false,
            timer: 3000,
            customClass: {
                popup: 'swal-top-center'
            }
        });
        return;
    }

    // ✅ القطاعات (checkboxes داخل الفلتر فقط)
    const sectors = [...filter.querySelectorAll('input[type="checkbox"]:checked')]
        .map(el => el.value);

    // ✅ عدد الموردين (radio داخل الفلتر فقط)
    const suppliers = filter.querySelector('input[name="suppliers"]:checked')?.value;

    console.log("القطاعات:", sectors);
    console.log("عدد الموردين:", suppliers);

    Swal.fire({
        toast: true,
        position: 'top',
        icon: 'success',
        title: 'تم تطبيق التصفية بنجاح',
        showConfirmButton: false,
        timer: 3000,
        customClass: {
            popup: 'swal-top-center'
        }
    });
}



function resetFilter() {
    const filter = document.getElementById('filterPanel');

    filter.querySelectorAll('input').forEach(input => {
        input.checked = false;
    });
}


