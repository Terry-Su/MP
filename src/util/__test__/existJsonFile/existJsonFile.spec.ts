describe("A suite is just a function", function () {
	var a;
	console.log( 123 )
	it("and so is a spec", function () {
		a = true;

		expect(a).toBe(true);
	});
});
