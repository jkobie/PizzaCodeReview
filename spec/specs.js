describe('Pizza', function() {
    it("creates a new Pizza with the given type and size", function() {
        var testPizza = new Pizza("Cheese", "M");
        expect(testPizza.type).to.equal("Cheese");
        expect(testPizza.size).to.equal("M");
    });
});

describe('Pizza', function() {
    it("creates a new Pizza with the given type, size, and toppings", function() {
        var testPizza = new Pizza("Pepperoni","L");
        testPizza.toppings.push(["bacon", "olives"]);
        expect(testPizza.toppings).to.eql(["bacon", "olives"]);
    });
});
