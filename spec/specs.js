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
        var testPizza1 = new Pizza("basic", "S");
        var testPizza2 = new Pizza("specialty","S");
        expect(testPizza1.cost()).to.equal(7);
        expect(testPizza2.cost()).to.equal(10);
    });

    it("calculates the cost of a pizza based on the size of pizza", function() {
        var testPizza1 = new Pizza("basic", "M");
        var testPizza2 = new Pizza("specialty","L");
        expect(testPizza1.cost()).to.equal(14);
        expect(testPizza2.cost()).to.equal(22);
    });
});
