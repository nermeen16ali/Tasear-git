const createOdometer = (el, value) => {
    const odometer = new Odometer({
        el: el,
        value: 0,
    });

    let hasRun = false;

    const options = {
        threshold: [0, 0.9],
    };

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (!hasRun) {
                    odometer.update(value);
                    hasRun = true;
                }
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
};

const proposalsOdometer = document.querySelector(".proposals-odometer");
createOdometer(proposalsOdometer, 5);

const brandOdometer = document.querySelector(".brand-odometer");
createOdometer(brandOdometer, 150);

const productOdometer = document.querySelector(".product-odometer");
createOdometer(productOdometer, 12);