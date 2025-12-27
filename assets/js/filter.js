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
    const checkedInputs = document.querySelectorAll('input:checked');

    // ❌ لا يوجد أي اختيار
    if (checkedInputs.length === 0) {
        Swal.fire({
            toast: true,
            position: 'top',
            icon: 'error',
            title: 'من فضلك اختر تصفية واحدة على الأقل',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: false,
            customClass: {
                popup: 'swal-top-center'
            }
        });
        return;
    }

    // ✅ يوجد اختيارات
    const sectors = [...document.querySelectorAll('input[type="checkbox"]:checked')]
        .map(el => el.value);

    const suppliers = document.querySelector('input[name="suppliers"]:checked')?.value;

    console.log("القطاعات:", sectors);
    console.log("عدد الموردين:", suppliers);

    Swal.fire({
        toast: true,
        position: 'top',
        icon: 'success',
        title: 'تم تطبيق التصفية بنجاح',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        customClass: {
            popup: 'swal-top-center'
        }
    });
}


function resetFilter() {
    document.querySelectorAll('input').forEach(input => {
        input.checked = false;
    });
}

