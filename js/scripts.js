function Pizza(type, size) {
    this.type = type;
    this.size = size;
    this.toppings = [];
    this.delivery = "";
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

    if(this.delivery != "") {
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
        var imputtedSize = "S";
        $(".new-size").each(function() {
            if($(this).prop('checked')) {
                imputtedSize = $(this).val();
            }
        });
        var newPizza = new Pizza(imputtedType, imputtedSize);
        $(".new-toppings").each(function() {
            if($(this).prop('checked')){
                var imputtedTopping = $(this).val();
                newPizza.toppings.push(imputtedTopping);
            }
        });
        var imputtedDelivery = $(".new-delivery").val();
        newPizza.delivery = imputtedDelivery;

        $("#show-pizza").fadeOut();
        $("#show-pizza").fadeIn();
        $("#show-pizza h2").text(newPizza.type);
        $(".size").text("Size: " + newPizza.size);

        $("ul#toppings").text("");
        newPizza.toppings.forEach(function(topping) {
            $("ul#toppings").append("<li>" + "+ " + topping + "</li>");
        });

        if(newPizza.delivery != "") {
            $(".delivery").text("Delivered to: " + newPizza.delivery);
        }

        $(".price").text("Your total is: " + "$" + newPizza.cost().toFixed(2));
    });
});
