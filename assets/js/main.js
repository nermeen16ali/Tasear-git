document.addEventListener("scroll", function () {
    let e = document.querySelector(".back_to_top"),
        t = window.scrollY,
        o = window.innerHeight;
    t > o ? e.classList.add("show") : e.classList.remove("show")
}), document.querySelector(".back_to_top").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})