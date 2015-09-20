function Pizza(type, size) {
    this.type = type;
    this.size = size;
    this.toppings = [];
}

Pizza.prototype.cost = function() {
    var price = 0.0;
    switch(this.type) {
        case "basic":
            price += 7.00;
            break;
        case "specialty":
            price += 10.00;
            break;
    }

    return price;
}
