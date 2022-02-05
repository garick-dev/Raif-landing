document.addEventListener("DOMContentLoaded", (ev) => {

    class RangeSlider {
        constructor(rangeElement, valueElement, options) {
            this.rangeElement = rangeElement;
            this.valueElement = valueElement;
            this.options = options;

            this.rangeElement.addEventListener("input", this.updateSlider.bind(this));
        }

        init() {
            this.rangeElement.setAttribute("min", this.options.min);
            this.rangeElement.setAttribute("max", this.options.max);
            this.rangeElement.value = this.options.cur;

            this.updateSlider();
        }

        asMoney(value) {
            return parseFloat(value)
                .toLocaleString('ru', {
                    maximumFractionDigits: 2
                });

        }

        generateBackground(rangeElement) {
            if (this.rangeElement.value === this.options.min) {
                return;
            }
            let percentage = (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100;
            return `background: linear-gradient(90deg, rgba(254,230,0,1)` + percentage + `%, rgba(225,225,227,1)` + percentage + `%)`;
        }

        updateSlider(value) {
            this.valueElement.innerHTML = this.asMoney(this.rangeElement.value) + "&nbsp";
            let percent = document.querySelector(".calculate__title_percent");
            let payment = document.querySelector(".calculate__title_payment");
            let percentResult = 0;
            let paymentResult = 0;
            let sum = parseInt(rangeElement1.value);
            let month = parseInt(rangeElement2.value);
            if (this.rangeElement.value >= 48 && this.rangeElement.value <= 60) {
                percentResult = (sum * 0.009) / (month * 30);
                paymentResult = Math.round(percentResult * 11500);
                percent.innerHTML = (Math.floor(percentResult * 100) / 100).toString();
                payment.innerHTML = paymentResult.toString() + "&nbsp";
            }
            if (this.rangeElement.value >= 12 && this.rangeElement.value <= 24) {
                percentResult = (sum * 0.0010) / (month * 30);
                paymentResult = Math.round(percentResult * 11500);
                percent.innerHTML = (Math.floor(percentResult * 100) / 100).toString();
                payment.innerHTML = paymentResult.toString() + "&nbsp";
            }
            if (this.rangeElement.value >= 90000 && this.rangeElement.value <= 990000) {
                percentResult = (sum * 0.011) / (month * 30);
                paymentResult = Math.round(percentResult * 11500);
                percent.innerHTML = (Math.floor(percentResult * 100) / 100).toString();
                payment.innerHTML = paymentResult.toString() + "&nbsp";
            }
            if (this.rangeElement.value >= 1000000 && this.rangeElement.value <= 1990000) {
                percentResult = (sum * 0.009) / (month * 30);
                paymentResult = Math.round(percentResult * 11500);
                percent.innerHTML = (Math.floor(percentResult * 100) / 100).toString();
                payment.innerHTML = paymentResult.toString() + "&nbsp";
            }

            this.rangeElement.style = this.generateBackground(this.rangeElement.value);

        }
    }
    let rangeElement1 = document.querySelector(".calculate__slider-range_sum");
    let valueElement1 = document.querySelector(".calculate__value_sum");
    let rangeElement2 = document.querySelector(".calculate__slider-range_month");
    let valueElement2 = document.querySelector(".calculate__value_month");
    let options1 = {
        min: rangeElement1.min,
        max: rangeElement1.max,
        cur: rangeElement1.value,
    }
    let options2 = {
        min: rangeElement2.min,
        max: rangeElement2.max,
        cur: rangeElement2.value,
    }

    if (rangeElement1) {
        let rangeSlider = new RangeSlider(rangeElement1, valueElement1, options1);
        rangeSlider.init();
    }
    if (rangeElement2) {
        let rangeSlider = new RangeSlider(rangeElement2, valueElement2, options2);
        rangeSlider.init();
    }

    const hideButton = () => {
        const btn = document.querySelector(".button_promo");
        const orderSection = document.querySelector(".order");

        const options = {
            root: null,
            threshold: 0,
            rootMargin: "0px"
        }

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    btn.classList.remove("hidden");
                }
                else {
                   btn.classList.add("hidden");
                }
            })
        }, options)

        observer.observe(orderSection);

    }
    hideButton();



});






