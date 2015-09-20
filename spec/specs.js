describe('Pizza', function() {
    it("creates a new Pizza with the given type and size", function() {
        var testPizza = new Pizza("Cheese", "M");
        expect(testPizza.type) = "Cheese";
        expect(testPizza.size) = "M";
    });
});
