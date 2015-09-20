function Pizza(type, size) {
    this.type = type;
    this.size = size;
    this.toppings = [];
    this.delivery = false;
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

    switch(this.size) {
        case "M":
            price *= 1.5;
            break;
        case "L":
            price *= 2;
            break;
        case "XL":
            price *= 2.5;
            break;
    }

    for(var i = 0; i < this.toppings.length; i++) {
        price += 1;
    }

    if(this.delivery == true) {
        price += 3;
    }

    return price;
}
