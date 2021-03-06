describe('Pizza', function() {
    it("creates a new Pizza with the given type and size", function() {
        var testPizza = new Pizza("basic", "M");
        expect(testPizza.type).to.equal("basic");
        expect(testPizza.size).to.equal("M");
    });

    it("creates a new Pizza with the given type, size, and toppings", function() {
        var testPizza = new Pizza("specialty","L");
        testPizza.toppings.push("bacon");
        testPizza.toppings.push("olives");
        expect(testPizza.toppings).to.eql(["bacon", "olives"]);
    });

    it("calculates the cost of a pizza based on the type of pizza", function() {
        var testPizza1 = new Pizza("Cheese", "S");
        var testPizza2 = new Pizza("Butcher Block","S");
        expect(testPizza1.cost()).to.equal(7);
        expect(testPizza2.cost()).to.equal(10);
    });

    it("calculates the cost of a pizza based on the size of pizza", function() {
        var testPizza1 = new Pizza("Cheese", "M");
        var testPizza2 = new Pizza("Butcher Block","L");
        expect(testPizza1.cost()).to.equal(10.50);
        expect(testPizza2.cost()).to.equal(20);
    });

    it("calculates the cost of a pizza based on the toppings added to the pizza", function() {
        var testPizza1 = new Pizza("Cheese", "M");
        testPizza1.toppings.push("bacon");
        var testPizza2 = new Pizza("Butcher Block","L");
        testPizza2.toppings.push("olives", "feta");
        expect(testPizza1.cost()).to.equal(11.50);
        expect(testPizza2.cost()).to.equal(22);
    });

    it("increases the cost of the pizza if it is delivery", function() {
        var testPizza1 = new Pizza("Cheese", "M");
        testPizza1.delivery = true;
        expect(testPizza1.cost()).to.equal(13.50);
    });
});
