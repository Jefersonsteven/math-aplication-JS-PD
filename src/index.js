

const calculateDisconuntInThePrice = function (valuePrice, valueDiscount) {
    const percentageDiscountedPrice = 100 - valueDiscount;
    const priceWithDiscount = (valuePrice * percentageDiscountedPrice) / 100;

    return priceWithDiscount
};

const valueOfDiscount = function (valuePrice, valueDiscount) {
    const percentageDiscountedPrice = 100 - valueDiscount;
    const priceWithDiscount = (valuePrice * percentageDiscountedPrice) / 100;

    let valorDiscount = valuePrice - priceWithDiscount;
    return valorDiscount
};

const verificationCupon = function () {
    const cupons = [10, 25, 50];
    const cupon = document.getElementById("cupons");
    const valueCupon = parseInt(cupon.value);
    if (valueCupon === cupons[0]) {
        return cupons[0];
    } else if (valueCupon === cupons[1]) {
        return cupons[1];
    } else if (valueCupon === cupons[2]) {
        return cupons[2];
    } else {
        return 0
    }
}

const onClickButtonPriceDiscount = function () {
    const originalPrice = document.getElementById("inputPrice");
    const discount = document.getElementById("inputDiscount");
    const valuePrice = parseInt(originalPrice.value);
    const valueDiscount = parseInt(discount.value);
    const verificationCupons = verificationCupon();
    const discountCupon = valueDiscount + verificationCupons;

    const priceWithDiscount = calculateDisconuntInThePrice(valuePrice, discountCupon);
    const valorDiscount = valueOfDiscount(valuePrice, discountCupon);

    const displayPrice = document.getElementById("displayPrice");
    const price = valuePrice;
    displayPrice.innerText = `$${price}`;

    const displayDiscount = document.getElementById("displayDiscount");
    displayDiscount.innerText = `$${priceWithDiscount}`;

    const displayPercentageDiscount = document.getElementById("displayPercentageDiscount");
    displayPercentageDiscount.innerText = `-${discountCupon}%`

    const displayValueDiscount = document.getElementById("displayValueDiscount");
    displayValueDiscount.innerText = `Esto es lo que haz ahorrado: $${valorDiscount}`;
}