describe('Pizza', function() {
    it("creates a new Pizza with the given type and size", function() {
        var testPizza = new Pizza("Cheese", "M");
        expect(testPizza.type).to.equal("Cheese");
        expect(testPizza.size).to.equal("M");
    });
});
