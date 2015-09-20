function Pizza(type, size) {
    this.type = type;
    this.size = size;
    this.toppings = [];
    this.delivery = false;
}

Pizza.prototype.cost = function() {
    var price = 0.0;
    switch(this.type) {
        case "Cheese":
            price += 7.00;
            break;
        case "Pepperoni":
            price += 7.00;
            break;
        case "Butcher Block":
            price += 10.00;
            break;
        case "BBQ Chicken":
            price += 10.00;
            break;
        case "Real Deal":
            price += 10.00;
            break;
        case "Oasis":
            price += 10.00;
            break;
        case "Basil Chicken":
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

    if(this.delivery != false) {
        price += 3;
    }

    return price;
}

// function resetFields() {
//     $("input#new-type").val("")
// }

$(document).ready(function() {
    $("form#new-pizza").submit(function(event) {
        event.preventDefault();
        var imputtedType = $("select#new-type").val();
        var imputtedSize = $("input#new-size").val();
        var newPizza = new Pizza(imputtedType, imputtedSize);
        $(".new-toppings").each(function() {
            var imputtedTopping = $(this).find("input.new-toppings").val();
            debugger;
            newPizza.toppings.push(imputtedTopping);
        });

        $("#show-pizza").fadeOut(500);
        $("#show-pizza").fadeIn(1000);
        $("#show-pizza h2").text(newPizza.type);
        $("#size").text(newPizza.size);

        $("ul#toppings").text("");

        newPizza.toppings.forEach(function(topping) {
            $("ul#toppings").append("<li>" + topping + "</li>");
        });
    });
});
