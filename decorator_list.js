function Sale(price) {
    if (!(this instanceof Sale))
        return new Sale(price);

    this.price          = price;
    this.decoratorsList = [];
}

Sale.decorators       = {};
Sale.decorators.tax   = {
    getPrice: function (price) {
        return price + price * 5 / 100;
    }
};
Sale.decorators.money = {
    getPrice: function (price) {
        return '$' + price.toFixed(2);
    }
};

Sale.prototype.decorate = function (decorator) {
    this.decoratorsList.push(decorator);
};
Sale.prototype.getPrice = function () {
    var i, name;
    var price           = this.price;
    var totalDecorators = this.decoratorsList.length;

    for (i = 0; i < totalDecorators; i++) {
        name  = this.decoratorsList[i];
        price = Sale.decorators[name].getPrice(price);
    }

    return price;
};

var sale = new Sale(100);
sale.decorate('tax');
sale.decorate('money');
console.log(sale, sale.getPrice());
