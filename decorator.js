function Sale(price) {
    if (!(this instanceof Sale))
        return new Sale(price);

    this.price = price;
}

Sale.prototype.getPrice = function () {
    return this.price;
};

Sale.decorators = {};

Sale.decorators.tax = {
    getPrice: function () {
        var price = this.uber.getPrice();
        price += price * 5 / 100;

        return price;
    }
};

Sale.decorators.money = {
    getPrice: function () {
        return '$' + this.uber.getPrice().toFixed(2);
    }
};

Sale.prototype.decorate = function (decorator) {
    var F         = function () {};
    var overrides = this.constructor.decorators[decorator];
    var i;
    var newObj;

    F.prototype = this;
    newObj      = new F();
    newObj.uber = F.prototype;

    for (i in overrides) {
        if (overrides.hasOwnProperty(i)) {
            newObj[i] = overrides[i];
        }
    }

    return newObj;
};

var sale = new Sale(100);
console.log('sale', sale);
sale = sale.decorate('tax');
console.log(sale, sale.getPrice());
sale = sale.decorate('money');
console.log(sale, sale.getPrice());
