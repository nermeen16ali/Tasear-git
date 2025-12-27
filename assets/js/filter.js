function openFilter() {
    document.getElementById("filterPanel").classList.add("active");
}

function closeFilter() {
    document.getElementById("filterPanel").classList.remove("active");
}
function applyFilter() {
    const sectors = [...document.querySelectorAll('input[type="checkbox"]:checked')]
        .map(el => el.value);

    const suppliers = document.querySelector('input[name="suppliers"]:checked')?.value;

    console.log("القطاعات:", sectors);
    console.log("عدد الموردين:", suppliers);

    // SweetAlert2 Toast
    Swal.fire({
        toast: true,
        position: 'top',
        icon: 'success',
        title: 'تم تطبيق الفلتر بنجاح',
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

