describe('Pizza', function() {
    it("creates a new Pizza with the given type and size", function() {
        var testPizza = new Pizza("Cheese", "M");
        expect(testPizza.type).to.equal("Cheese");
        expect(testPizza.size).to.equal("M");
    });

    it("creates a new Pizza with the given type, size, and toppings", function() {
        var testPizza = new Pizza("Pepperoni","L");
        testPizza.toppings.push("bacon");
        testPizza.toppings.push("olives");
        expect(testPizza.toppings).to.eql(["bacon", "olives"]);
    });

    it("calculates the cost of a pizza based on the type of pizza", function() {
        var testPizza1 = new Pizza("Cheese", "M");
        var testPizza2 = new Pizza("Pepperoni","L");
        expect(testPizza1.cost).to.equal(5);
        expect(testPizza2.cost).to.equal(5.75);
    });
});
